const contar = document.getElementById('contar');
const restar = document.getElementById('restar');
const sumar = document.getElementById('suma');
const restableser = document.getElementById('restablecer');

let sumarest = 0;

sumar.addEventListener('click', () => {
    sumarest++
    contar.innerText = sumarest
})

restar.addEventListener('click', () => {
    if (sumarest <= 0) return
    sumarest--;
    contar.innerText = sumarest
})

restableser.addEventListener('click', () => {
    sumarest = 0;
    contar.innerText = 0;
})
