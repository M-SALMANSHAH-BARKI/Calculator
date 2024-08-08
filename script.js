// console.log("This is an online calculator")
let string = "";
let buttons = document.querySelectorAll('.button');
// console.log(buttons)
Array.from(buttons).forEach((button)=>{
button.addEventListener('click' , (e)=>{
     // console.log(e.target)
    if(e.target.innerHTML == '='){
        string = eval(string);
        document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'AC'){
        document.querySelector('input').value = string;
        string = "";
    }
    else if(e.target.innerHTML == 'C'){
        document.querySelector('input').value = string;
        // if(string.length > 0){
        //  string1 = string.slice(0 , -1)
        //  return string1;
        // }
    }
    else{
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
    }
})
})