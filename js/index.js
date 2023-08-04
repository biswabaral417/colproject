
let foodsArr = [];


const fetchData = async () => {
    const response = await fetch("../js/foods.JSON");
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
            season = "shisir"
            break;
        case (3 || 4):
            season = "basanta"
            break;
        case (5 || 6):
            season = "grisma"
            break;
        case (7 || 8):
            season = "barsa"
            break;
        case (9 || 10):
            season = "sharad"
            break;
        case (10 || 11):
            season = "hementa"
            break;
        default:
            break;
    }


        foodsArr.forEach(element => {
            if (element.rSeason == season) {
                render.iRender(element);
            }
        });
}




const render = (() => {
    let i=1;
    const foodSection=document.querySelector(`.foods`);
    const iRender = (item) => {
        console.log(item)
        foodSection.innerHTML+=
        `<div class="item">
                    <div class="itmimg"><img src="${item.itemImgLoc}" alt=""></div>
                    <p class="itmname">${item.itemName}</p>
                    <p class="itemprice">${item.itemPrice}</p>
                    <button class="atcbutton" onclick="addtocart()">add to cart</button>
                </div>
            `
    }

    return {
        iRender,

    }
})();