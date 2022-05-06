const input = document.querySelector('.input')
const btn = document.querySelector('.btn')
const list = document.querySelector('.list')
const deleteBtn = document.querySelector('.min-btn')

btn.addEventListener('click', () => {
    if (input.value !== '') {
        createList(input.value)
    }
    input.value = '';
})

function createList(value) {
    const listItem = document.createElement('li')
    listItem.classList.add('li')
    list.appendChild(listItem)
    listItem.textContent = value;
}