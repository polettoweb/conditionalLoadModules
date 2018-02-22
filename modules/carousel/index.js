const moduleName = 'carousel';
const carousels = document.querySelectorAll('[data-js-module="m-carousel"]');

async function initCarousel() {
    const { default: createCarousel } = await import(/* webpackChunkName: "m-carousel" */'./module.js');
    carousels.forEach((index, element) => {
        createCarousel(element);
    });
}

if(carousels.length) initCarousel();