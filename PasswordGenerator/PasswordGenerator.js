const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const NUMS = "0123456789";
const SYMBOLS = "!@#$%^&*<>_+";


function generatePassword(){
    var charStr = "";
    var outputStr = "";
    var upper = "";
    var lower = "";
    var number = "";
    var sym = "";
    var passwordLength = document.getElementById("pLength").value;

    if(passwordLength < 9 || passwordLength > 20){
        alert("Password length must be between 9 and 20 characters");

    }else{
        if(document.getElementById("uppercase").checked){
            upper = UPPERCASE;
        }
        if(document.getElementById("lowercase").checked){
            lower = LOWERCASE;
        }
        if(document.getElementById("numbers").checked){
            number = NUMS;
        }
        if(document.getElementById("symbols").checked){
            sym = SYMBOLS;
        }
        charStr = upper + lower + number + sym;
    
        for(let i = 0; i < passwordLength; i++){
            outputStr += charStr.charAt(Math.floor(Math.random() * charStr.length));
        }
    
        document.getElementById("output").innerHTML = outputStr;
    }

}

function clearfields(){
    document.getElementById("output").innerHTML = "";
    document.getElementById("pLength").value = "";
    document.getElementById("pLength").focus();
    document.getElementById("uppercase").checked = true;
    document.getElementById("lowercase").checked = true;
    document.getElementById("numbers").checked = true;
    document.getElementById("symbols").checked = true;
}