const list = document.getElementById('list');
const form = document.querySelector('form');
const item = document.getElementById('item');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    list.innerHTML += `<li class="list">${item.value}</li>`;
    item.value = '';
})