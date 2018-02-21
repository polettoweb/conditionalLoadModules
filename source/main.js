// import 'babel-core/register';
// import 'babel-polyfill';
 

//const jsToggle = document.querySelector('.js-toggle');
const root = document.querySelector('#root');
root.innerHTML = 'Injected';
async function loadActiveToggle() {
    const { default: activeToggle } = await import('../active-toggle.js');
    activeToggle();
  }

document.addEventListener("DOMContentLoaded", function() {
      if (root) loadActiveToggle();
      console.log('test');
 });
    