//Choose a random color
const button = document.querySelector('button');
const body = document.querySelector('body');
const colors = ['gold', 'yellow', 'purple','olive','beige','blue','cyan', 'indigo','lime green'];

body.style.backgroundColor = 'chartreuse';
button.addEventListener('click', changeBackground);

// function that works when the button is clicked
function changeBackground(){
    const colorIndex = parseInt(Math.random()*colors.length);
    body.style.backgroundColor = colors[colorIndex];
}