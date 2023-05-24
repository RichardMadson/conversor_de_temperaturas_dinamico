function mudandocor(temp_celsius) {
    var cor = 'rgb(184, 238, 255)';

    if (temp_celsius >= 26) {
        var percentual = temp_celsius / 255;
        var corR = Math.round(255 * percentual);
        cor = `rgb(${corR}, 0, 0)`;
    }

    document.body.style.backgroundColor = cor;
}

function converterTemperaturas() {
    var temperatura = document.getElementById('temperatura').value;
    if (temperatura == '') {
        alert('Você precisa digitar uma temperatura!');
        return;
    }

    var escalas = document.getElementsByName('escala');
    var temp_celsius, temp_farenheit, temp_kelvin;

    if (escalas[0].checked) {
        // A temperatura que eu escolhi foi Celsius
        temp_celsius = parseFloat(temperatura);
        temp_farenheit = 1.8 * temp_celsius + 32;
        temp_kelvin = temp_celsius + 273;
    } else if (escalas[1].checked) {
        // A temperatura que eu escolhi foi Farenheit
        temp_farenheit = parseFloat(temperatura);
        temp_celsius = (temp_farenheit - 32) / 1.8;
        temp_kelvin = temp_celsius + 273;
    } else if (escalas[2].checked) {
        // A temperatura que eu escolhi foi Kelvin
        temp_kelvin = parseFloat(temperatura);
        temp_celsius = temp_kelvin - 273;
        temp_farenheit = 1.8 * temp_celsius + 32;
    }

    document.getElementById('valor_celsius').innerText = temp_celsius;
    document.getElementById('valor_farenheit').innerText = temp_farenheit;
    document.getElementById('valor_kelvin').innerText = temp_kelvin;

    mudandocor(temp_celsius);
}


// parte do codigo original

/*if(temp_celsius < 0){
        document.getElementsByTagName('body')[0].style.backgroundColor = 'blue';
    }else if(temp_celsius >= 0 && temp_celsius <= 30){
        document.getElementsByTagName('body')[0].style.backgroundColor = 'orange';
    }else{
        document.getElementsByTagName('body')[0].style.backgroundColor = 'red';
    }*/