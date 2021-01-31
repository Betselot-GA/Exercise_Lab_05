/*  
Here is the exercise on working on the remaining bom method 

Location , Navigator , screen , Window 

Follow the Instruction on the comments 

1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 

Adding Extra is Possible if you want to explore more ...

Good Luck !!! 
*/

// Define UI Variables  here
// Declaring the UI variables for all elements

const props = document.querySelectorAll(".collection-item");
const properties = [
  window.location.href,
  window.location.protocol,
  window.location.host,
  window.location.port,
  window.location.hostname,
  navigator.appName,
  navigator.appVersion,
  navigator.platform,
  navigator.language,
  navigator.cookieEnabled,
  screen.height,
  screen.width,
  screen.pixelDepth,
  window.history.length,
  window.history.state,
];

// Display the BOM Information on the innerHTML of the elements

//window location objects

for (let i = 0; i < 5; i++) {
  props[i].children[0].innerHTML = properties[i];
  props[i].children[0].innerHTML = properties[i];
  props[i].children[0].innerHTML = properties[i];
  props[i].children[0].innerHTML = properties[i];
  props[i].children[0].innerHTML = properties[i];
}
//Browser object properties
for (let i = 5; i < 10; i++) {
  props[i].children[0].innerHTML = properties[i];
  props[i].children[0].innerHTML = properties[i];
  props[i].children[0].innerHTML = properties[i];
  props[i].children[0].innerHTML = properties[i];
  props[i].children[0].innerHTML = properties[i];
}

// screen information properties

for (let i = 10; i < 13; i++) {
  props[i].children[0].innerHTML = properties[i];
  props[i].children[0].innerHTML = properties[i];
  props[i].children[0].innerHTML = properties[i];
}

for (let i = 13; i < 15; i++) {
  props[i].children[0].innerHTML = properties[i];
  props[i].children[0].innerHTML = properties[i];
}
