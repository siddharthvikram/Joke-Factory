var btn = document.querySelector("#btn");
var inputTxt= document.querySelector("#txtarea");
var outputbox= document.querySelector("#out");
var outputbox1= document.querySelector("#out1");

function clickhandler(){
  fetch("https://v2.jokeapi.dev/joke/Any").then(response => response.json()).then(json =>{
    var set = json.setup;
    var del = json.delivery;
    console.log(set);
    console.log(del);
    if (set == undefined || del == undefined){
        alert("Something went wrong. Please try again")
    }
    else{
    outputbox.innerText = set;
    outputbox1.innerText = del;}
  })
    
}

btn.addEventListener("click", clickhandler)