let input = document.querySelector('.input');
let meterToFeetText = document.querySelector('.meterToFeet');
let literToGallonsText = document.querySelector('.literToGallons');
let kiloToPoundsText = document.querySelector('.kiloToPounds');
let feet = 3.2808399;
let gallon = 0.264172052;
let pound = 2.20462262;

input.inputText.focus();

input.addEventListener('keyup', e => {
    e.preventDefault();
    let inputValue = input.inputText.value.trim();
    
    if(!inputValue.length){
        inputValue = 0
    };
    
        let meterToFeet = inputValue * feet;
        let meterToFeetResult = meterToFeet.toFixed(2);
        
        let feetToMeter = inputValue / feet;
        let feetToMeterResult = feetToMeter.toFixed(2);


        meterToFeetText.textContent = `${inputValue} meters = ${meterToFeetResult} feet | ${inputValue} feet = ${feetToMeterResult} meters`;
       
        let literToGallon = inputValue * gallon;
        let literToGallonResult = literToGallon.toFixed(2);
        
        let GallonToLiter = inputValue / gallon;
        let gallonToLiterResult = GallonToLiter.toFixed(2);
        
        literToGallonsText.textContent = `${inputValue} liters = ${literToGallonResult} gallons | ${inputValue} gallons = ${gallonToLiterResult} liters`;
        
        let kiloToPound = inputValue / pound;
        let kiloToPoundResult = kiloToPound.toFixed(2);
        
        let poundToKilo = inputValue * pound;
        let poundToKiloResult = poundToKilo.toFixed(2);

       
        kiloToPoundsText.textContent = `${inputValue} kilograms = ${poundToKiloResult} pounds | ${inputValue} pounds = ${kiloToPoundResult} kilograms`;
    

    
})



