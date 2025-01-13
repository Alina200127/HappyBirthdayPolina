function onEntry(entry) {
    entry.forEach((change) => {
        if (change.isIntersecting) {
            change.target.classList.add("element-show");
        } else {
            change.target.classList.remove("element-show");
        }
    });
}

let options = {
    threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".box__text");

for (let elm of elements) {
    observer.observe(elm);
}
// =====================================================================
function onEntryIMG(entry) {
    entry.forEach((change) => {
        if (change.isIntersecting) {
            change.target.classList.add("element-show-img");
        } else {
            change.target.classList.remove("element-show-img");
        }
    });
}

let optionsIMG = {
    threshold: [0.5],
};
let observerIMG = new IntersectionObserver(onEntryIMG, optionsIMG);
let elementsIMG = document.querySelectorAll(".box__img");

for (let elm of elementsIMG) {
    observerIMG.observe(elm);
}

/* slider */
const slider = document.querySelector("#slider");
const sliderItems = Array.from(slider.children);
console.log(sliderItems);
sliderItems.forEach(function (slide, index) {
    if (index !== 0) {
        slide.classList.add("none");
    }

    slide.dataset.index = index;

    slide.addEventListener("click", function () {
        slide.classList.add("none"); // скрываем текущий слайд

        let nextSlideIndex;
        if (index + 1 === sliderItems.length) {
            nextSlideIndex = 0;
        } else {
            nextSlideIndex = index + 1;
        }

        const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
        nextSlide.classList.remove("none"); // показываем следующий слайд
    });
});
