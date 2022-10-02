// grab all the buttons as in array
//loop through them and click add event listner to each element
//when elements are clicked, get the buttons innner text to 

// const buttonClick = (val) => {
//     alert(val);
// };



// const btnArgs = Array.from(document.querySelectorAll(".btn"));

// const displayElm = document.querySelector(".display");

// let strToDisplay = ""


// btnArgs.map((elm, i) => {
//     elm.addEventListener('click', () =>{
//         const val = elm.innerText;

//         strToDisplay += val;
//         display(strToDisplay);
//     });
// });

// const display = (str) => {
//     displayElm.innerText = str;
// };



const allButtons = Array.from(document.querySelectorAll(".btn"));
console.log(allButtons);

const displayElm  = document.querySelector(".display");

let strToDisplay = "";

const operators = ["%", "/", "*", "-", "+"];

allButtons.map((btn, i)=>{
    btn.addEventListener("click", () => {
        const val = btn.innerText;

        if(val === "AC"){
            strToDisplay= ''
            display ()
            return;
        }

        if (val === "C"){
            strToDisplay = strToDisplay.slice(0,-1);
            display(strToDisplay)
            return;
        }

        if(val === "="){
            const lastChar = strToDisplay[strToDisplay.length -1];

            if (operators.includes(lastChar)){
                strToDisplay = strToDisplay.slice(0,-1);
            }
            return total();

        }

        if(operators.includes(val)){
            if(!strToDisplay){
                return;
            };
            const lastChar = strToDisplay[strToDisplay.length -1];
            if (operators.includes(lastChar)){
                strToDisplay = strToDisplay.slice(0, -1);

            }
        }
        



        strToDisplay +=val;

        display(strToDisplay);

        
    })
});

const display = (str) => {
    displayElm.innerText = str || "0.00";

}

const total = ( )=>{
    const ttl = eval(strToDisplay)
    strToDisplay = ttl.toString();

    display(strToDisplay);

}
 