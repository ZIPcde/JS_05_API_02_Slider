const cats = [
    "cat (1).jpg",
    "cat (2).jpg",
    "cat (3).jpg",
    "cat (4).jpg",
    "cat (5).jpg",
    "cat (6).jpg"
];   

const sliderPicturesArray = [
    sliderMinus2 = document.querySelector(".slider_item__-2"),
    sliderMinus1 = document.querySelector(".slider_item__-1"),
    slider0 = document.querySelector(".slider_item___0"),
    slider1 = document.querySelector(".slider_item__1"),
    slider2 = document.querySelector(".slider_item__2")
  ];

const switcher = [
    [4, 5, 0, 1, 2],
    [5, 0, 1, 2, 3],
    [0, 1, 2, 3, 4],
    [1, 2, 3, 4, 5],
    [2, 3, 4, 5, 0],
    [3, 4, 5, 0, 1]
];

const paginationPrev = document.querySelector(".pagination_prev");
const paginationPoints = [
    paginationPoint1 = document.querySelector(".pagination_point1"),
    paginationPoint2 = document.querySelector(".pagination_point2"),
    paginationPoint3 = document.querySelector(".pagination_point3"),
    paginationPoint4 = document.querySelector(".pagination_point4"),
    paginationPoint5 = document.querySelector(".pagination_point5"),
    paginationPoint6 = document.querySelector(".pagination_point6")
];
const paginationNext = document.querySelector(".pagination_next");

const currentSlide = [0, 1, 2, 3, 4];

const render = () => {
    sliderPicturesArray.forEach(function(element, index) {
        element.src = "./img/cats/" + cats[currentSlide[index]];
});
};
render();

const paginationRender = () => {
    paginationPoints.forEach(function(element, index) {
        if (index === currentSlide[2]) {
            element.classList.add("active");
        } else {
            element.classList.remove("active");
        }
    });
};
paginationRender();

paginationPrev.addEventListener("click", () => {
    for (let i = 0; i < currentSlide.length; i++) {
        if (currentSlide[i] !== 0) {
            currentSlide[i] = currentSlide[i] - 1;
        } else {
            currentSlide[i] = cats.length - 1;
        }
    }
    render();
    paginationRender();
});

paginationNext.addEventListener("click", () => {
    for (let i = 0; i < currentSlide.length; i++) {
        if (currentSlide[i] !== cats.length - 1) {
            currentSlide[i] = currentSlide[i] + 1;
        } else {
            currentSlide[i] = 0;
        }
    }
    render();
    paginationRender();
});

paginationPoints.forEach((element, index) => {
    let max = paginationPoints.length - 1;
    element.addEventListener("click", () => {
        console.log(switcher[index]);
        for (let i = 0; i < currentSlide.length; i++) {
            currentSlide[i] = switcher[index][i];
        }
        render();
        paginationRender();
        console.log(currentSlide);
    });
});