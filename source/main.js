// import 'babel-core/register';
// import 'babel-polyfill';
 

//const jsToggle = document.querySelector('.js-toggle');
const root = document.querySelector('#nav');
const jsToggle = document.querySelector('.js-toggle');
const jCarousel = document.querySelector('.ui-carousel--responsive .jcarousel');
root.innerHTML = 'Injected';


async function loadActiveModule(moduleJS) {
    const { default: activeModule } = await import(`../global/${moduleJS}.js`);
    activeModule();
  }

root && loadActiveModule('active-toggle'); 
root && loadActiveModule('carousel');                 
console.log('test');

//document.addEventListener("DOMContentLoaded", function() {
      // if (root) loadActiveToggle();
      // jsToggle && loadActiveModule('active-toggle'); 
      // jCarousel && loadActiveModule('carousel');                 
      // console.log('test');
 //});
    