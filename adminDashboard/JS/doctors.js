let removeButton = document.querySelectorAll(".remove-button");

for(let i = 0 ; i<removeButton.length ; i++){
    removeButton[i].onclick = (event)=>{
        removeButton[i].parentElement.parentElement.remove();
    }
}