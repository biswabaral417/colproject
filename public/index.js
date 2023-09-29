let foodsArr = [];

const fetchData = async () => {
  try {
    const response = await fetch("/api/foods");
    const data = await response.json();
    foodsArr = data[0].foods; // Store the fetched data in the 'foodsArr' variable
    console.table(foodsArr);
    findSeason();
  } catch (error) {
    console.error('Error fetching data from the server:', error);
  }
};


const findSeason = () => {
    let date = new Date();
    let season = "";
    // let month = 12;
    let month = date.getMonth();
    // console.log(month)
    switch (month) {
        case 1:
        case 2:
            season = "Shishir"
            break;
        case 3:
        case 4:
            season = "Basanta"
            break;
        case 5:
        case 6:
            season = "Grisma"
            break;
        case 7:
        case 8:
            season = "Barsa"
            break;
        case 9:
        case 10:
            season = "Sharad"
            break;
        case 11:
        case 12:
            season = "Hemanta"
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
  let i = 1;
  const foodSection = document.querySelector(`.foods`);
  const iRender = (item) => {
    foodSection.innerHTML +=
      `<div class="item">
        <div class="itmimg"><img src="${item.itemImgLoc}" alt=""></div>
        <p class="itmname">${item.itemName}</p>
        <p class="itemprice">${item.itemPrice}</p>
        <button class="atcbutton" onclick="addtocart()">add to cart</button>
      </div>`;
    i++;
  };

  return {
    iRender,
  };
})();

const sbtn = document.querySelector(`.sbtn`);
sbtn.addEventListener("click", async () => {
  document.querySelector(`.foods`).innerHTML = "";
  console.log("click");
  let searchTxt = document.querySelector(`.stext`).value;

  const response = await fetch(`/api/search?searchText=${encodeURIComponent(searchTxt)}`);
  const filteredData = await response.json();

  let i = 1; // Make sure to use 'let' for 'i' to avoid confusion with the 'i' variable in the render function
  filteredData.forEach(item => {
    render.iRender(item);
  });

  console.log(searchTxt);
});

(async () => {
  await fetchData();
})();
