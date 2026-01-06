const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const  passwardDisplay = document.querySelector("[data-passwardDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateBtn");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '`-=[]/.~!@#$%^&*()_+}{}:?';

let passward = "";
let passwardLength = 10;
let checkcount = 0;
//set strength circle to a grey

handleSlider();
//set passward length
function handleSlider() {
    inputSlider.value = passwardLength;
    lengthDisplay.innerText = passwardLength;
}

function setIndicator(color){
    indicator.style.backgroundColor = color;
    //shadow
   indicator.style.boxShadow = "10px 20px 30px color";
   indicator.style.opacity = "1";
}

function getRndInteger(min,max){
   return Math.floor(Math.random() * (max - min) + min);
}

function generateRandomNumber(){
    return getRndInteger(0,9);
}

function generateLowercase() {
     return String.fromCharCode(getRndInteger(97,123));
}

function generateUppercase() {
    return String.fromCharCode(getRndInteger(65,91));
}

function generateSymbol(){
    const randNum = getRndInteger(0,symbols.length);
    return symbols.charAt(randNum);
}

function calcStrength () {
    let hasUpper = false;
    let hasLower = false;
    let hasSym = false;
    let hasNum = false;

    if(uppercaseCheck.checked) hasUpper = true;
    if(lowercaseCheck.checked) hasLower = true;
    if(symbolsCheck.checked) hasSym = true;
    if(numbersCheck.checked) hasNum = true;

    if (hasUpper && hasLower && (hasNum || hasSym) && passwardLength >= 8){
        setIndicator("#0f0")
    }
    else if ( (hasLower || hasUpper) && (hasNum || hasSym) && passwardLength >=6 ) {
        setIndicator("#ff0");
    }
    else{
        setIndicator("#f00");
    }
}

async function copyContent () {
    try{
        await  navigator.clipboard.writeText(passwardDisplay.value);
        copyMsg.innerText = "copied";
    }
    catch(e){
          copyMsg.innerText = "failed";
    }
     
    //to make copy span visisble
    copyMsg.classList.add('active');

    setTimeout(() => {
        copyMsg.classList.remove('active');
    },2000)
   

}

inputSlider.addEventListener('input',(e) => {
    passwardLength = e.target.value;
    handleSlider();
});

copyBtn.addEventListener('click',() => {
    if(passwardDisplay.value)
    copyContent();
});


allCheckBox.forEach ((checkbox) => {
    checkbox.addEventListener('change',handleCheckBoxChange);
})

function handleCheckBoxChange () {
    checkcount = 0;
    allCheckBox.forEach((checkbox) => {
        if(checkbox.checked){
            checkcount++;
        }
    });

    //special case
    if(passwardLength < checkcount) {
        passwardLength = checkcount;
        handleSlider();
    }
}

generateBtn.addEventListener('click',() =>{

    //none of the checkbox is selected
    if(checkcount <= 0) return;

    //special case
    if(checkcount > passwardLength) { passwardLength = checkcount; handleSlider(); };

    //lets start

    //remove old passward
    passward = "";

    //lets put the stuff mentioned by checkboxes

    /* if(uppercaseCheck.checked){
        passward += generateUppercase();
    }


    if(lowercaseCheck.checked){
        passward += generateLowercase();
    }

    if(numbersCheck.checked){
        passward += generateRandomNumber();
    }

    if(symbolsCheck.checked){
        passward += generateSymbol();
    } */
    

    let funcArr = [];

    if(uppercaseCheck.checked){
        funcArr.push(generateUppercase);
    }

    if(lowercaseCheck.checked){
        funcArr.push(generateLowercase);
    }

    if(symbolsCheck.checked){
        funcArr.push(generateSymbol);
    }

    if(numbersCheck.checked){
        funcArr.push(generateRandomNumber);
    }

    //compulsary addition
    for(let i = 0; i<funcArr; i++){
        passward += funcArr[i]();
    }

    //remaining addition
    for(let i=0; i<passwardLength-funcArr.length; i++){
        let randIndex = getRndInteger(0,funcArr.length);
        passward += funcArr[randIndex]();
    }

    //shuffle the passward
    passward = shufflePassward(Array.from(passward));

    //show on ui
    passwardDisplay.value = passward;

    //calculate strength
    calcStrength();
})

function shufflePassward (array) {
    //fisher yates method
     for(let i = array.length-1; i>0 ;i--){
        const j = Math.floor(Math.random() * (i+1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
     }
     let str = "";
     array.forEach((el) => (str += el));
     return str;
}