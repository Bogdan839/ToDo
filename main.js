window.onload = function () {

    const btn = document.querySelector('.btn')
    const input = document.querySelector('.input')
    const list = document.querySelector('.list')
    let arrOfList = [];

    btn.onclick = () => {

        let elements = {};
        elements.todo = input.value;
        elements.check = false;
        arrOfList.push(elements);


        out()
    }

    function out() {
        let out = '';
        if (input.value !== '') {
            let listItem = document.createElement('li');
            listItem.classList.add('li');
            list.appendChild(listItem)
            input.value = '';

            for (let key in arrOfList) {
                out = arrOfList[key].todo;
            }

            listItem.textContent = out;
            deleteItem(listItem);
        }
    }

    function deleteItem(item) {
        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('min-btn');
        deleteBtn.textContent = 'Delete'
        item.appendChild(deleteBtn)

        deleteBtn.addEventListener('click', () => {
            list.removeChild(item)
        })
    }



}