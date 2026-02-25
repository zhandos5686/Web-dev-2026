let counter = 0;

const counterValue = document.getElementById("counterValue");
const decreaseBtn = document.getElementById("decreaseBtn")
const resetBtn = document.getElementById("resetBtn")
const increaseBtn = document.getElementById("increaseBtn")


function update(){
    counterValue.textContent = counter; 
    if (counter>0){
        counterValue.style.color = "green";
    } else if(counter == 0){
        counterValue.style.color = "black";
    } else{
        counterValue.style.color = "red";
    }
    
}

increaseBtn.addEventListener("click", function(){
    counter++;
    update();
})
decreaseBtn.addEventListener("click", function(){
    counter--;
    update();
})
resetBtn.addEventListener("click",function(){
    counter = 0;
    update();
})
