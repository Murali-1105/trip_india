//Start notify  
const notifyBtn = document.getElementById("notify-btn"); 
const notifyBox = document.querySelector(".notify-box-containar");   
 
notifyBtn.addEventListener('click', () =>{ 
    notifyBtn.classList.toggle("fa-times"); 
    notifyBox.classList.toggle('active-notify');
});    

//End notify 
//Start SearchBar 
const searchBtn = document.getElementById("search-btn"); 
const searchBar = document.querySelector(".search-bar-containar");  

searchBtn.addEventListener('click', () =>{ 
    searchBtn.classList.toggle("fa-times"); 
    searchBar.classList.toggle('active');
});   
//End SearchBar 
 
window.onscroll = () => { 
    searchBtn.classList.remove("fa-times");   
    searchBar.classList.remove('active');  
    notifyBtn.classList.remove("fa-times");   
    notifyBox.classList.remove('active-notify');
}; 
 
//Start Menu-bar   
const menuBar = document.getElementById("menu-bar");  
const navbar = document.querySelector(".navbar");   

function showMenu() {        
    navbar.classList.toggle('active-menu');
}    
 
menuBar.addEventListener('click', showMenu);  

//End Menu-bar 
 
//Start From btn and Show,Hide    
const loginBtn = document.getElementById("login-btn"); 
const formContainer = document.querySelector(".login-form-container"); 
const formClose = document.getElementById("form-close");
 
function showForm() {  
    formContainer.style.top = '0px';
} 
function hiddenForm() {  
    formContainer.style.top = null;
}     
 
loginBtn.addEventListener('click', showForm); 
formClose.addEventListener('click', hiddenForm); 

//End From btn and Show,Hide   

//Start From Validation 
const form = document.getElementById("form"); 
const email =document.getElementById('email') 
const password =document.getElementById('password')
 
   
form.addEventListener('submit',(en) =>{  
    if(!validateInputs()){ 
        en.preventDefault();
    }
})  
 
function validateInputs(){ 
    const emailVal=email.value.trim() 
    const passwordVal=password.value.trim()   
    let success=true
     
    if(emailVal===''){  
        success=false
        setError(email,'Email is required')
    } 
    else if(!validateEmail(emailVal)){  
        success=false
        setError(email,'Please enter a vaild email')
    } 
    else { 
        setSuccess(email)
    }
      
     
    if(passwordVal===''){  
        success=false
        setError(password,'Password is required')
    } else if(passwordVal.length<8){  
        success=false
        setError(password,'Password must be atleast 8 characters long')
    } else if(!/[A-Z]/.test(passwordVal)){  
        success=false
        setError(password,'Password must contain at least one uppercase letter')
    } else if(!/[a-z]/.test(passwordVal)){  
        success=false
        setError(password,'Password must contain at least one lowercase letter')
    } else if(!/[0-9]/.test(passwordVal)){  
        success=false
        setError(password,'Password must contain at least one digit letter')
    } else if(!/[!@#$%^&*]/.test(passwordVal)){  
        success=false
        setError(password,'Password must contain at least one special character')
    } else { 
        setSuccess(password)
    } 
     
    return success;
} 
 
function setError(element,message){ 
    const inputBox=element.parentElement; 
    const errorElement=inputBox.querySelector('.error');
     
    errorElement.innerHTML=message; 
    inputBox.classList.add('error');
    inputBox.classList.remove('success');
} 
 
function setSuccess(element,message){ 
    const inputBox=element.parentElement; 
    const errorElement=inputBox.querySelector('.error'); 
     
    errorElement.innerHTML=''; 
    inputBox.classList.add('success'); 
    inputBox.classList.remove('error');
}
 
const validateEmail =(email) =>{ 
    return String(email) 
    .toLowerCase() 
    .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
} 
 
//End From Validation
 

