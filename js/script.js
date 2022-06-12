let url = 'https://significado.herokuapp.com/v2/';

let inputTxt = document.querySelector('#container-inputtxt');
let btnTxt = document.querySelector('#container-btn');
let resultado = document.querySelector('#container-result');

btnTxt.addEventListener('click', () => {
    let palavra = inputTxt.value;

    if ( palavra === '') {
        resultado.innerHTML = `<p id="container-significado">É necessário escrever uma palavra!</p>`
    } else {
        fetch(`${url}${palavra}`)
        .then((resposta) => resposta.json())
        .then((data) => {
            console.log(data);
            resultado.innerHTML =
                `<h3 id="container-palavra">${palavra}</h3>
            <p id="container-significado"><span>1º </span>${data[0].meanings[0]}</p>
            <p id="container-significado"><span>2º </span>${data[0].meanings[1]}</p>`;
        }).catch(() => {
            resultado.innerHTML = `<p id="container-significado">Está palavra não foi encontrada. Verifique a ortográfia.</p>`
        })
    }
})
