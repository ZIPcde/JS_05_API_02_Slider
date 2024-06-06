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

  console.log(sliderPicturesArray);
const currentSlide = [0, 1, 2, 3, 4];

const render = () => {
    sliderPicturesArray.forEach(function(element, index) {
        element.src = "./img/cats/" + cats[currentSlide[index]];
});
};
render();

const paginationPrev = document.querySelector(".pagination_prev");
paginationPrev.addEventListener("click", () => {
    currentSlide.forEach(element => {
        if (element !== 0) {
            element--;
        } else {
            element = cats.length;
        }
    });
    render()
});
const paginationPoint1 = document.querySelector(".pagination_point1");
const paginationPoint2 = document.querySelector(".pagination_point2");
const paginationPoint3 = document.querySelector(".pagination_point3");
const paginationPoint4 = document.querySelector(".pagination_point4");
const paginationPoint5 = document.querySelector(".pagination_point5");
const paginationNext = document.querySelector(".pagination_next");