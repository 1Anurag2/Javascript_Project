const form = document.querySelector('.form');
form.addEventListener('submit',function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('.result');
    const info = document.querySelector('.info');

    if (height === '' || height < 0 || isNaN(height)){
            result.innerHTML = `Please give a valid height ${height}`
    }
    else if (weight === '' || weight < 0 || isNaN(weight)){
            result.innerHTML = `Please give a valid weight ${weight}`
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        result.innerHTML = `<span>${bmi}</span>`;
        if(bmi < 18.5){
            info.innerHTML = `<h1>Under Weight</h1>`;
        }
        else if(bmi >= 18.5 && bmi <= 24.5){
            info.innerHTML = `<h1>Normal Weight</h1>`;
        }
        else{
            info.innerHTML = `<h1>Over Weight</h1>`;
        }
    }
})