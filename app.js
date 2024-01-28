const celsiusfield = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
    degree.value = "";
    celsiusfield.innerHTML = "";
});

if(degree.value === ""){
    convertBtn.setAttribute("disabled", "");
    setTimeoutmeout(() => {
        convertBtn.removeAttribute('disabled');
    }, 4000);
}



convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    convertToCelsius();

    convertBtn.innerHTML = "<span class='icon'><i class='fa-solid fa-spinner'></i>Converting...</span>";
    setTimeout(() => {
        convertBtn.innerHTML = "<span>Convert</span>"
    },1000)
});

function convertToCelsius(){
    let inputValue = degree.value;

    if(tempType.value === "farenheit"){
        const farenheitToCelsius = (inputValue -32) * (5/9);
        celsiusfield.innerHTML = `${farenheitToCelsius.toFixed(3)} &deg;
        c`;
    }
    else if(tempType.value === "kelvin") {
        const kelvinToCelsius = inputValue - 273.15;
        celsiusfield.innerHTML = `${kelvinToCelsius.toFixed(3)} &deg;
        c`;
    }

}