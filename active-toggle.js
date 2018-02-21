/*
 *   Simple toggle script
 *
 *   Toggles 'active' class on the element on click.
 *
 *   Use: apply 'js-toggle' class to element.
 *   To set initial state as open, apply both 'js-toggle' and 'active'
 *   classes on the element.
 *
 *   Can be used with CSS sibling selector to show/hide sections.
 *
 */
function test() {
    console.log('Test from Module');
    return document.querySelector('#root').innerHTML = 'injected from module';
    

}

export default test

//console.log('Test from Module');