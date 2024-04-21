const rangeSlider = document.getElementById('range-slider');
const priceValue = document.querySelector(".cost span");
const views = document.querySelector("h3");
const checkbox = document.querySelector('.checkbox');
rangeSlider.addEventListener('input', () => {
    const inputValue = rangeSlider.value;
    document.documentElement.style.setProperty('--progress', inputValue/2 + "%");
    views.innerText = inputValue + "K PAGEVIEWS" ;
    if(!checkbox.checked){
        priceValue.innerText = "$"+ (inputValue*0.16).toFixed(2);
    }else{
        priceValue.innerText = "$"+ (inputValue*0.16*12*0.75).toFixed(2);
    }
});
checkbox.addEventListener("change",function(){
    const inputValue = rangeSlider.value;
    if(!checkbox.checked){
        priceValue.innerText = "$"+ (inputValue*0.16).toFixed(2);
    }else{
        priceValue.innerText = "$"+ (inputValue*0.16*12*0.75).toFixed(2);
    }
});
