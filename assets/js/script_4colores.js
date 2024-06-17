const uno = document.getElementById('uno');
const dos = document.getElementById('dos');
const tres = document.getElementById('tres');
const cuatro = document.getElementById('cuatro');

var color = 'black';

pintar = () => uno.style.backgroundColor = color
uno.addEventListener('click', pintar);
pintar = () => dos.style.backgroundColor = color
dos.addEventListener('click', pintar);
pintar = () => tres.style.backgroundColor = color
tres.addEventListener('click', pintar);
pintar = () => cuatro.style.backgroundColor = color
cuatro.addEventListener('click', pintar);