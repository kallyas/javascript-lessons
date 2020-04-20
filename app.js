const h1 = document.getElementById("header"); //grab elements from the dom

h1.innerHTML = "This text is inserted with Javascript"; //use the element to write to the browser

const input = document.getElementById("inp"); //grab elements from the dom

input.value = "hello"; //use the element to write to the browser

 const addnum = document.getElementById("add");

function add() {
  
  addnum.addEventListener('click');
  
  const sum = 2 + 2;
  
  console.log(sum);
}

addnum.onclick = add();