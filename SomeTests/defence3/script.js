
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const result = document.getElementById("result");
var res;
plus.addEventListener("click", function(){
    res = Number(input1.value) + Number(input2.value);
    console.log(res);
    alert(res);
    update();
});
minus.addEventListener("click", function(){
    res = input1 - input2;
    update();
})
multiply.addEventListener("click", function(){
    res = input1 * input2;
    update();
})
divide.addEventListener("click", function(){
    res = input1/input2;
    update();
})
function update(){
    result.textContent = res;
}