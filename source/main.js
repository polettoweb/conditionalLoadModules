
//const jsToggle = document.querySelector('.js-toggle');
const root = document.querySelector('#root');
async function loadActiveToggle() {
    const activeToggle = await import('../active-toggle.js');
    //createGallery(gallery);
  }

document.addEventListener("DOMContentLoaded", function() {
    if (root) loadActiveToggle();
 });
    