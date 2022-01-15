document.querySelectorAll('div').forEach(element=>{
    if(element.hasAttribute('data-three-images')){
        const index = element.getAttribute('data-three-images')
        const title = threeImages[index].hasOwnProperty('title') ? threeImages[index].title : "";
        const items = threeImages[index].hasOwnProperty('items') ? threeImages[index].items : [];

        let string = `
            <div class="font-30">${title}</div><br />
            <div class="row">
        `;

        if(items.length > 0){
            items.forEach(({img, name, url, btn})=>{
                string+=`
                    <div class="col-4 padding-all-5">
                        <img src="${img}" alt="" class="max-img" />
                        <div>${name}</div><br>
                        <a href="${url}" class="btn-link"><span>${btn}</span></a>
                    </div>
                `;
            })
        }

        string+=`
            </div>
        `;


        element.innerHTML = string;
    }
})
