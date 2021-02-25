const inputfield = document.getElementById("inputfield");
const button = document.getElementById("addtodo");
const todolist = document.getElementById("todocontainer");


button.addEventListener("click", function(event){
      // alert(inputfield.value);
      var tag = document.createElement('p');
      //we can create element by above line.
      tag.classList.add("paragrph-styling");
      //above we can add css through js wth clasList.add("css selcector")
      tag.innerHTML=inputfield.value;
      //inputfield.value will give us the value we type in empty input field
      todolist.appendChild(tag);
      //this is how we add a created element in existing element;
      inputfield.value="";
      //set our inputfield to blank.
      tag.addEventListener("click",()=>{
        tag.style.textDecoration = "line-through";
        //this will sketch a line on text by clicking it.
      })

      tag.addEventListener("dblclick",()=>{
        todolist.removeChild(tag);
        //by double clicking we can remove the element that we are clicking.
      })

});
