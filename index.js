// Code your solution in this file!
function scuberGreetingForFeet(ride){
    //write your code here
    if (ride <=400){
        return `This one is on me!`;
    }else if(ride >=2500){
        return "No can do.";
    }else {
        return " I will gladly take your thirty bucks.";
    }
    debugger

}
function ternaryCheckCity(city){
    //write your code here
    if (city === "NYC") {
        return `ok,sounds good.`;
    }else if (city!=="NYC"){
        return "No go.";
    }
}

function switchOnCharmFromTip(tip){
    //write your code here!
    if(tip === "generous"){
        return`Thankyou so much`;
    }else if(tip === "not as generous"){
        return `Thankyou`;
    }else{
        retun `Bye`;
    }
    //switch (tip) {
        // case "Tip":
        //"Thamk you so much.";
    }
