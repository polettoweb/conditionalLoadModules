// import 'babel-core/register';
// import 'babel-polyfill';
 

//const jsToggle = document.querySelector('.js-toggle');
const root = document.querySelector('#nav');
const jsToggle = document.querySelector('.js-toggle');
const jCarousel = document.querySelector('.ui-carousel--responsive .jcarousel');


async function loadActiveModule(moduleJS) {
    const { default: activeModule } = await import(`../modules/carousel/index.js`);
    //activeModule();
  }


//document.addEventListener("DOMContentLoaded", function() {
      // if (root) loadActiveToggle();
      // jsToggle && loadActiveModule('active-toggle'); 
      // jCarousel && loadActiveModule('carousel');                 
      // console.log('test');
 //});
    