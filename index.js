const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "!@#$%^&*()~<>?}{|+_";
const passwordField = document.getElementById("main-input");
const totalChar = document.getElementById("item_inputnumebr");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("number");
const symbolInput = document.getElementById("symbols");

const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)];
};

const generatePassword = () => {
    let password = "";
    const length = parseInt(totalChar.value) || 8; // Default to 8 if no input

    let dataSets = [];
    if (upperInput.checked) dataSets.push(upperSet);
    if (lowerInput.checked) dataSets.push(lowerSet);
    if (numberInput.checked) dataSets.push(numberSet);
    if (symbolInput.checked) dataSets.push(symbolSet);

    if (dataSets.length === 0) {
        alert("Please select at least one checkbox!");
        return;
    }

    for (let i = 0; i < length; i++) {
        const randomSet = dataSets[Math.floor(Math.random() * dataSets.length)];
        password += getRandomData(randomSet);
    }

    passwordField.value = password;
};

document.getElementById("item_btn").addEventListener("click", generatePassword);
