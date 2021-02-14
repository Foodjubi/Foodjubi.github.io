const red = document.getElementById('red');
const blue = document.getElementById('blue');
const green = document.getElementById('green');
const white = document.getElementById('white');
const dark = document.getElementById('dark');
const coulour = document.querySelector('.coulour');

red.addEventListener('click', () => {
    const colorString = `rgb(255,0,0)`;
    document.body.style.background = colorString;
    console.log(`Le background a changer : ${colorString}`);
    coulour.innerHTML = colorString;
})

green.addEventListener('click', () => {
    const colorString = `rgb(0,255,0)`
    document.body.style.background = colorString;
    console.log(`Le background a changer : ${colorString}`);
    coulour.innerHTML = colorString;
})

blue.addEventListener('click', () => {
    const colorString = `rgb(0,0,255)`
    document.body.style.background = colorString;
    console.log(`Le background a changer : ${colorString}`);
    coulour.innerHTML = colorString;
})

white.addEventListener('click', () => {
    const colorString = `rgb(255,255,255)`;
    document.body.style.background = colorString;
    console.log(`Le background a changer : ${colorString}`);
    coulour.innerHTML = colorString;
})

dark.addEventListener('click', () => {
    const colorString = `rgb(0,0,0)`
    document.body.style.background = colorString;
    console.log(`Le background a changer : ${colorString}`);
    coulour.innerHTML = colorString;
})

