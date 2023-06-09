let carNames = [
  {
    carName: "2023 Mercedes-Benz Brabus G-Class",
    image: "https://i.postimg.cc/VkP83TNK/Screenshot-2023-05-31-150003.png",
  },
  {
    carName: "2021 Mercedes-Benz Brabus G-Class 4x4",
    image: "https://i.postimg.cc/52yRKSBs/Screenshot-2023-05-31-150125.png",
  },
  {
    carName: "2020 Mercedes-Benz Brabus G-Class",
    image: "https://i.postimg.cc/tRDD0VCw/Screenshot-2023-05-31-150229.png",
  },
  {
    carName: "2013 Mercedes-Benz G63 AMG 6×6 Brabus",
    image:"https://i.postimg.cc/3NHPcLtZ/Screenshot-2023-06-09-112010.png",
  },
];

localStorage.setItem("cars", JSON.stringify(carNames));
let Information = JSON.parse(localStorage.getItem("cars"));
console.log(Information);

// show image
document.querySelector("#carlist");

carlist.innerHTML = "";
carNames.forEach((car) => {
  carlist.innerHTML += `
    <h1>${car.carName}</h1>
    <img src="${car.image}" alt="${car.carName}" loading="lazy" id="pics">
    `;
});

document.write(localStorage.getItem("cars"));
