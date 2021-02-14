const btn = document.getElementById('buttoncolor');

btn.addEventListener('click', () => {
    changeBG();
})

function changeBG() {
    const col1 = randomRGB();
    const col2 = randomRGB();
    const col3 = randomRGB();

    const colorString = `rgb(${col1}, ${col2}, ${col3})`
    document.body.style.background = colorString;
    document.getElementById('color').innerHTML = colorString;
    console.log(`Le background a changer : ${colorString}`);
}


function randomRGB() {
    return Math.floor(Math.random() * 256)
}