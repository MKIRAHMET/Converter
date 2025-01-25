const celtofahr =() => {
    let celcius = document.getElementById('celcius').value;
    result = (celcius * 9/5) + 32;
    document.getElementById('fahrenheit').value = result;
    return result;
};

const kgtolbs =() => {
    let kgs = document.getElementById('kgs').value;
    result = kgs * 2.2;
    document.getElementById('lbs').value = result;
    return result;
};


const kmtomiles = () => {
    let kms = document.getElementById('kms').value;
    result = kms * 0.62137;
    document.getElementById('miles').value = result;
    return result;
};