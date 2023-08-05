
let foodsArr = [];


const fetchData = async () => {
    const response = await fetch("/foods.JSON");
    const data = await response.json();
    pushJsonData(data.foods);
};

const pushJsonData = (data) => {
    data.forEach(element => {
        foodsArr.push(element);
    });
};



(async () => {
    await fetchData();
    findSeason()
    // Call other functions that depend on foodsArr here

})();


const findSeason= () => {
    let date = new Date();
    let season = "";
    let month = date.getMonth();
    // console.log(month)
    switch (month) {
        case (1 || 2):
            season = "Shisir"
            break;
        case (3 || 4):
            season = "Basanta"
            break;
        case (5 || 6):
            season = "Grisma"
            break;
        case (7 || 8):
            season = "Barsa"
            break;
        case (9 || 10):
            season = "Sharad"
            break;
        case (10 || 11):
            season = "Hementa"
            break;
        default:
            break;
    }


        foodsArr.forEach(element => {
            if (element.rSeasons == season) {
                render.iRender(element);
            }
        });
}




const render = (() => {
    let i=1;
    const foodSection=document.querySelector(`.foods`);
    const iRender = (item) => {
        // if (i>8) {
        //     return;
        // }
        console.log(item)
        foodSection.innerHTML+=
        `<div class="item">
                    <div class="itmimg"><img src="${item.itemImgLoc}" alt=""></div>
                    <p class="itmname">${item.itemName}</p>
                    <p class="itemprice">${item.itemPrice}</p>
                    <button class="atcbutton" onclick="addtocart()">add to cart</button>
                </div>
            `
            i++;
    }

    return {
        iRender,

    }
})();


//search

const sbtn=document.querySelector('.sbtn');
sbtn.addEventListener("click",()=>{
    console.log("click")
    document.querySelector(`.foods`).innerHTML="";
    let stxt=document.querySelector(`.stext`).value;
    foodsArr.forEach(item=>{
        if (item.itemName.includes(stxt)) {
            console.log(item)
            // i=1;
            render.iRender(item);
        }
    })
})