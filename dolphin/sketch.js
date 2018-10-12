// Image Minipulation Demo
// Areeb
// October 9th, 2018
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let dropdown;
let console;

function setup() {
  dropdown = createSelect(); // or create dropdown?
  dropdown.option("name 1","value1");
  dropdown.option("name 2","value2");
  dropdown.option("name 3","value3");
  dropdown.option("pear","pear");
  dropdown.select("value3");

  dropdown.changed(mySelectEvent);
}

function draw() {
  if (dropdown.selected === "pear") {
    ellipse(0, 0, 100, 100);
  }
}

function mySelectEvent() {
  let selected = this.selected();
  if (selected === "pear") {
    console.log("it's a pear!");
  }
}
