
let sbtn = document.querySelector('.sbtn');

sbtn.addEventListener('click', () => {
    console.log("clicked");
});

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
    wsf.heoolo()
    // Call other functions that depend on foodsArr here

})();





const render = (() => {

    const iRender = (item) => {
        // console.log(item)
        









    }

    return {
        iRender,

    }
})();

