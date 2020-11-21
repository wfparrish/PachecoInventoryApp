//Problem Statement: Given an array of objects, render the objects as
//HTML forms and display the objects in the browser.
//The position of each form shall be based on their position properties'
//values

// Understanding the Problem
//  input - an array composed of n objects
//  output - html elements properly spaced from the well object using
//            DOM scripted values
//  rules/requirements
//    -render a view (the solution must use the browser)

// Examples / Test Cases
// loadStacksInView(stacks)     Output ==> 'Stacks Loaded'

// Data Structures / Control Structures
// input - array
// output - a primitive (boolean)
// rules/requirements
//  -a looping structure to iterate over the stacks array

// Algorithm(plain english)
// -declare a function named loadStacksInView that takes one array (stacks)
// -for each element of stacks
//    -get the well object
//    -create a form
//    -set attribute values for the form
//    -create inputs for the form
//    -set attribute values for each of the forms' inputs
//    -append the inputs to the form
//    -style the position of the form
//    -append the form to the well

// Algorithm(pseudocode)
// FUNCTION loadStacksInView(stacks) {
//  stacks.FOREACH((stack, index) => {
//    SET well = document.body.children[1].children[1].children[1].children[2];
//    SET form = document.CREATEELEMENT('form');
//    form.SETATTRIBUTE('id','stackIcon');
//    form.SETATTRIBUTE('name','stackIcon');
//    form.SETATTRIBUTE('class','stack created ui-droppable dropped');
//    form.SETATTRIBUTE('action','/api/stack');
//    form.SETATTRIBUTE('method','POST');
//    form.SETATTRIBUTE('onsubmit','return false;');
//    form.SETATTRIBUTE('target','stackSaved');
//    SET leftInput = document.CREATEELEMENT('input');
//    leftInput.SETATTRIBUTE('type','hidden');
//    leftInput.SETATTRIBUTE('name','left');
//    leftInput.SETATTRIBUTE('value','stacks[index]['leftPosition']');
//    SET topInput = document.CREATEELEMENT('input');
//    topInput.SETATTRIBUTE('type','hidden');
//    topInput.SETATTRIBUTE('name','top');
//    topInput.SETATTRIBUTE('value','stacks[index]['topPosition']');
//    form.APPENDCHILD(leftInput);
//    form.APPENDCHILD(topInput);
//    form.style.left = stacks[index]['leftPosition'];
//    form.style.top = stacks[index]['topPosition'];
//    well.APPENDCHILD(form);
//
//    })
//  }

// JavaScript for the Algorithm
// function loadStacksInView(stacks) {
//   stacks.forEach((stack) => {
//     let well = document.body.children[1].children[1].children[1].children[2];
//     let form = document.CREATEELEMENT('form');
//     form.setAttribute('id', 'stackIcon');
//     form.setAttribute('name', 'stackIcon');
//     form.setAttribute('class', 'stack created ui-droppable dropped');
//     form.setAttribute('action', '/api/stack');
//     form.setAttribute('method', 'POST');
//     form.setAttribute('onsubmit', 'return false;');
//     form.setAttribute('target', 'stackSaved');
//     let leftInput = document.createElement('input');
//     leftInput.setAttribute('type', 'hidden');
//     leftInput.setAttribute('name', 'left');
//     leftInput.setAttribute('value', 'stack["leftPosition"]');
//     let topInput = document.createElement('input');
//     topInput.setAttribute('type', 'hidden');
//     topInput.setAttribute('name', 'left');
//     topInput.setAttribute('value', 'stack["topPosition"]');
//     form.appendChild(leftInput);
//     form.appendChild(topInput);
//     form.style.left = stack['leftPosition'];
//     form.style.top = stack['topPosition'];
//     well.appendChild(form);
//   });
// }


//----------------------------------------------

//Initially this was the code in a file named sectorMapView
//I deleted the file, but wanted to keep record of the code just in case

{/* <div class="grid-container">
  <div class="quadrant1">
    <div class="sector__link1">
      <div class="sector__link__badge">1</div>
    </div>
    <div class="sector__link2">
      <div class="sector__link__badge">2</div>
    </div>
    <div class="sector__link3">
      <div class="sector__link__badge">3</div>
    </div>
  </div>

  <div class="quadrant2">
    <div class="sector__link5">
      <div class="sector__link__badge">5</div>
    </div>
    <div class="sector__link6">
      <div class="sector__link__badge">6</div>
    </div>
    <div class="sector__link7">
      <div class="sector__link__badge">7</div>
    </div>
    <div class="sector__link8">
      <div class="sector__link__badge">8</div>
    </div>
    <div class="sector__link9">
      <div class="sector__link__badge">9</div>
    </div>
    <div class="sector__link10">
      <div class="sector__link__badge">10</div>
    </div>
    <div class="sector__link11">
      <div class="sector__link__badge">11</div>
    </div>
    <div class="sector__link12">
      <div class="sector__link__badge">12</div>
    </div>
  </div>


  <div class="quadrant3">
    <div class="sector__link14">
      <div class="sector__link__badge">14</div>
    </div>
  </div>

  <div class="quadrant4">
    <div class="sector__link15">
      <div class="sector__link__badge">15</div>
    </div>
  </div>

  <div class="quadrant5">
    <div class="sector__link4">
      <div class="sector__link__badge">4</div>
    </div>
    <div class="sector__link13">
      <div class="sector__link__badge">13</div>
    </div>
  </div>

</div> */}

