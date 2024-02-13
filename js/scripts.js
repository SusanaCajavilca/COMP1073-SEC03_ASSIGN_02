// Name: Susana Cajavilca Turco - cod#: 200553998
// constants for query selector
const page = document.body;
const dinamycStudentId=document.querySelector("#myStudentId");
const customNumberConst=document.querySelector("#customNumber");
const imagesConst=document.querySelector("#images");

const custColorConst=document.querySelector(".custColor");
const randColorConst=document.querySelector(".randColor");
const selectImageCosnt = document.querySelector("#imageSelect");

// function to change bg color from user input and add student id
function changeCustomColor() {
    dinamycStudentId.textContent="Cod: #200553998";  // displaying my code

    var rand = customNumberConst.value;  // getting the numeric value from the input

    // I decided to use switch-case structure, I think it fits better

    switch(true) { // switch case structure according to the instructions
        case rand < 0 || rand > 100:
        page.style.backgroundColor = "red"; 
        page.style.color= "black";   
        break;    
        case rand >= 0 && rand <= 20:
        page.style.backgroundColor = "green"; 
        page.style.color= "white";  
        break;
        case rand >20 && rand <= 40:
        page.style.backgroundColor = "blue";
        page.style.color= "white";   
        break;
        case rand >40 && rand <= 60: 
        page.style.backgroundColor = "orange";
        page.style.color= "black";  
        break;
        case rand >60 && rand <= 80: 
        page.style.backgroundColor = "purple";
        page.style.color= "white";  
        break;
        case rand >80 && rand <= 100: 
        page.style.backgroundColor = "yellow";
        page.style.color= "black";  
        break;
     }
     
}

// function to change bg color from random no.
function changeRandomColor() {
    dinamycStudentId.textContent="Name: Susana Cajavilca Turco";  // displaying my name

    let rand = Math.floor((Math.random() * 100) + 1);  // generating a random whole number from 0 to 100
    console.log(rand); // just to check what random number was generated

    switch(true) {     // switch case structure according to the instructions, there is no case for red color in this situation
        case rand >= 0 && rand <= 20:
        page.style.backgroundColor = "green"; 
        page.style.color= "white";  
        break;
        case rand >20 && rand <= 40:
        page.style.backgroundColor = "blue";
        page.style.color= "white";  
        break;
        case rand >40 && rand <= 60: 
        page.style.backgroundColor = "orange";
        page.style.color= "black";  
        break;
        case rand >60 && rand <= 80: 
        page.style.backgroundColor = "purple";
        page.style.color= "white";  
        break;
        case rand >80 && rand <= 100: 
        page.style.backgroundColor = "yellow";
        page.style.color= "black";  
        break;
     }
     
     
}

// creating an array to store the location of the file images 
var fileArray= ["img/img1.jpg","img/img2.jpg","img/img3.jpg","img/img4.jpg","img/img5.jpg"];

// creating an array to store the name of the file images 
var optionArray = ["Imagen 1","Imagen 2","Imagen 3","Imagen 4","Imagen 5"];

// we must keep the same order of the files in order to make this code work

//console.log(selectImageCosnt.options.length);
// function to generate options for select list
function addList() {

   // Tip: you might have to check length condition so that the list does not keep growing when clicked
   // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
  if(selectImageCosnt.options.length === 1)   //  in the very first time the lenght is 1
   {
    for(var i=0; i<=4; i++){  // for loop to add the elements of the var optionArray
        var option = document.createElement("option");
        option.text = optionArray[i];
        selectImageCosnt.appendChild(option);
        
    }
   
  }
}

// function to change image
function changeImage() {

    // getting the index of the optionArray where is the element in the selectbox displayed
    var index = optionArray.indexOf(selectImageCosnt.value);
    //console.log(index)

    //getting the right element of the var fileArray with the index previously found
    var ubication = fileArray[index];

    //console.log(ubication)

    if (index >=0)  // because it can be -1 of we click on 'Please choose...'
     {
        // seting atribute to change the image
        imagesConst.setAttribute("src", ubication);
     }
     
}

// event listeners for on click event of buttons and select
custColorConst.addEventListener("click",changeCustomColor);
randColorConst.addEventListener("click",changeRandomColor);
selectImageCosnt.addEventListener("click",addList);

// event listeners for on change event of select
selectImageCosnt.addEventListener("click",changeImage);