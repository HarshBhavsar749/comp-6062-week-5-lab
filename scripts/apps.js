let element=document.querySelector("#numberInput");

element.addEventListener("input",function()
{
    if(element.value<=-10||element.value>=10)
    {
    alert("The number should be between -10 and 10");
    }
});

const fruit={
    Name:"Strawberry",
    Colour:"Red",
    Test:"Tangy",
};
let fruits=document.querySelector("#fruitName");
fruits.innerHTML=`Name:${fruit.Name}`;
console.log(fruits.innerHTML);

let element2=document.querySelector("#fruitColor");
element2.innerHTML=`Color:${fruit.Colour}`;
console.log(element2.innerHTML);

let element3=document.querySelector("#fruitTaste");
element3.innerHTML=`Teste:${fruit.Test}`;
console.log(element3.innerHTML);




