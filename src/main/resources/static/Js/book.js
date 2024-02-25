let form=document.getElementById('book__form'); 
let select = document.getElementById('Select'); 
let inputNumber = document.getElementById('inputNumber'); 
 
let discountInput = document.getElementById('discount');
let discountPrice = document.getElementById('discountPrice'); 
let Price = document.getElementById('Price');  
 
let arrivals =document.getElementById('arrivals');

let urlParams = new URLSearchParams(window.location.search);
let selectedPlace = urlParams.get('selectedPlace'); 
 
if (selectedPlace) {
    select.value = selectedPlace;
}   

select.addEventListener('change',() => {
    const newSelectedPlace = select.value;
    updateUrlParameter('selectedPlace', newSelectedPlace); 
    window.location.reload();
});   
 
function updateUrlParameter(key, value) {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set(key, value);
    const newUrl = window.location.pathname + '?' + urlParams.toString();
    window.history.replaceState({}, '', newUrl);
}

//Start inputNumber value limt   
inputNumber.addEventListener('input',()=> { 
    let inputNumberValue = Math.max(1,parseInt(inputNumber.value)); 
    inputNumber.value = inputNumberValue;  
     
    discountPrice.innerHTML = '';  
    Price.style.textDecoration = 'none';
    Amount(select.value, inputNumber.value); 
});   
 
//End inputNumber value limt 
 
// Start amount Calculation
function Amount(selectedPlace, inputNumberValue) { 
    Price.innerHTML = '';

    let Places = { 
        'Goa': 9999,
        'Munnar': 7999,
        'Ladakh': 22999,
        'Jaipur': 17999,
        'Amritsar': 13999,
        'Ooty': 10999
    }; 

    if (selectedPlace in Places) { 
        let baseAmount = Places[selectedPlace]; 
        let totalAmount = baseAmount * inputNumberValue; 
        Price.innerHTML = '₹' + totalAmount; 
        document.getElementById("hiddenPrice").value='₹ ' + totalAmount;

        // Start Discount amount Calculation 
        discountInput.addEventListener('input', () => {
            let discountCode = discountInput.value; 
            let discountedAmount = totalAmount; 
             
            if (discountCode === 'WEEK10A') {
                // 10% discount
                discountedAmount *= 0.9;
            } else if (discountCode === 'GROUP20B' && inputNumber.value >= 4) {
                // 20% discount
                discountedAmount *= 0.8;
            }else if (discountCode === 'BIRTH30C') {
                // 30% discount
                discountedAmount *= 0.7; 
            }else {
                // No discount
                discountPrice.innerHTML = '';
                Price.style.textDecoration = 'none';
                return;
            }

            discountPrice.innerHTML = '₹' + discountedAmount.toFixed(2);
            Price.style.textDecoration = 'line-through'; 
            document.getElementById("hiddenPrice").value = '₹ ' + discountedAmount.toFixed(2);
        });  
        // End Discount amount Calculation
    }
}  
// End amount Calculation
 
const currentDate = new Date().toISOString().split('T')[0]; 
document.getElementById('arrivalsDate').setAttribute('min', currentDate);
 
//Start date settings 
function setLeavingDate() { 
    let arrivalsDate = document.getElementById('arrivalsDate').value;
    let leavingDate = document.getElementById('leavingDate');  
     
    let defaultLeavingDate = new Date(arrivalsDate);

    let daysToAdd = {
        'Goa': 7,
        'Munnar': 5,
        'Ladakh': 10,
        'Jaipur': 8,
        'Amritsar': 9,
        'Ooty': 6
    };

    let selectedPlace = select.value;

    if (daysToAdd.hasOwnProperty(selectedPlace)) {
        defaultLeavingDate.setDate(defaultLeavingDate.getDate() + daysToAdd[selectedPlace]);
    } else {
        leavingDate.value = arrivalsDate; 
        return;
    }

    leavingDate.valueAsDate = defaultLeavingDate;
} 
 
//End date settings   
 
//Start booking validation  
 
form.addEventListener('submit',(e)=>{
    
    if(!validateInputs()){
         e.preventDefault();
      }
    }) 
      
      
function validateInputs(){
   const selectVal = select.value.trim()
   const numberVal = inputNumber.value.trim();
   const arrivalsVal = arrivals.value.trim();
   let success = true
      
        if(selectVal===''){
            success=false;
            setError(select)
        }else{
            setSuccess(select)
        }  
         
        if(numberVal===''){
            success=false;
            setError(inputNumber)
        }else if(numberVal<=60){ 
            success=false;
            setError(inputNumber)
        }else{
            setSuccess(inputNumber)
        }  
          
        if(arrivalsVal===''){
            success=false;
            setError(arrivals)
        }else{
            setSuccess(arrivals)
        }   
         
        return success; 

}


function setError(element){
    const inputGroup = element.parentElement;

    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element){
    const inputGroup = element.parentElement;
   
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}
//end booking vaidation
 
