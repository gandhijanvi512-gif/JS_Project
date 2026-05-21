const upperchars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerchars="abcdefghijklmnopqrstuvwxyz";
const specialchars="!@#$%^&*()_+{}./|";
const numbers="0123456789"

function passwordgenrate(){
    const length=document.getElementById("length").value;
    const upper=document.getElementById("uppercase").checked;
    const lower=document.getElementById("lowercase").checked;
    const special=document.getElementById("specialchars").checked;
    const number=document.getElementById("number").checked;
    

    if(isNaN(length)||length<4||length>50){
        alert("password length must be 4 to 50 chars")
        return;
    };
    
    let chars=""

    if(upper){
        console.log(upper)
        chars=chars+upperchars;
    }
    if(lower){
        chars=chars+lowerchars;
    }
    if(special){
        chars=chars+specialchars;
    }
    if(number){
        chars=chars+numbers;
    }

    if(chars===""){
        alert("please select atleast one option");
        return;
    }

    let password=""

    for(let i=0;i<length;i++){
        const randompass=Math.floor(Math.random()*chars.length);
        password=password+chars[randompass]
    }
    document.getElementById("password").value=password;
}


//copy password

function copypassword(){
    const password=document.getElementById("password").value;

    if(password===""){
        alert("please first generate the password");
        return;
    }
    navigator.clipboard.writeText(password);
    alert("password copy")
}

function savepassword(){
    const password=document.getElementById("password").value;

    if(password===""){
        alert("please first generate the password");
        return;
    }
    let savedata=JSON.parse(localStorage.getItem('password')) || [];
    savedata.push({
        password:password,
        createdDt:new Date().toLocaleString()
    })

    localStorage.setItem('password',JSON.stringify(savedata))
    alert("data saved in local storage")
}


