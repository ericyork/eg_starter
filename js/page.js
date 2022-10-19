// the code below tests whether js is loading: if it is, some text is blue
window.addEventListener('load', () => {           // runs a nameless function when the window object is loaded
  let testBit = document.getElementById('test');  // sets testBit equal to #test
  testBit.classList.add('blue');                  // adds the class .blue to #test
});
