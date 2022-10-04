

// grab all the buttons as in array
//loop through them and click add event listner to each element
//when elements are clicked
// , get the buttons innner text to 

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

let lastOperator  = ""

const audio = new Audio("abc.wav")

allButtons.map((btn, i)=>{
    btn.addEventListener("click", () => {
        const val = btn.innerText;

        
            displayElm.style.background = "";
            displayElm.style.color = "black";
            displayElm.classList.remove("prank");
       

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
            lastOperator = val;

            if(!strToDisplay){
                return;
            };
            const lastChar = strToDisplay[strToDisplay.length -1];
            if (operators.includes(lastChar)){
                strToDisplay = strToDisplay.slice(0, -1);

            }
        }
        
        if ( val === "."){

            if(lastOperator){
                const operatorIndex = strToDisplay.lastIndexOf(lastOperator);
                const lastNumberSet = strToDisplay.slice(operatorIndex + 1);
                if (lastNumberSet.includes(".")){
                    return;
                }
            }

            if(!lastOperator && strToDisplay.includes(".")){
                return;
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
 const extra = randomNumber();
//  console.log(extra);

if(extra > 0){
    displayElm.style.background = "red";
    displayElm.style.color = "white";
    displayElm.classList.add("prank");
    audio.play()
}

    const ttl = eval(strToDisplay) + extra;
    strToDisplay = ttl.toString();

    display(strToDisplay);

};


const randomNumber = () => {
    const num = Math.round(Math.random() *10);
    return num < 5 ? num : 0;
}

// The above code is all about the prank calculator that will give some wrong result and some animations are added to display those results are wrong












