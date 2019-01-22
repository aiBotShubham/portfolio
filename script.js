function myFunction() {
  setTimeout(function(){
	var container = document.getElementById("container");
container.parentNode.removeChild(container);
 }, 3000);
}


myFunction()