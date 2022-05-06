const input = document.querySelector('.input')
const btn = document.querySelector('.btn')
const list = document.querySelector('.list')
// const deleteBtn = document.querySelector('.min-btn')

btn.addEventListener('click', () => {
    if (input.value !== '') {
        createElement(input.value)
    }
    input.value = '';
})

function createElement(value) {
    const listItem = document.createElement('li')
    listItem.classList.add('li')
    list.appendChild(listItem)
    listItem.textContent = value;

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('min-btn')
    listItem.appendChild(deleteBtn)
    deleteBtn.textContent = 'D';

    deleteBtn.addEventListener('click', () => {
        list.removeChild(listItem)
    })
}