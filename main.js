window.onload = function () {


    const input = document.querySelector('.input')
    const list = document.querySelector('.list')

    let arrOfList = [];
    if (localStorage.getItem('todo') != undefined) {
        arrOfList = JSON.parse(localStorage.getItem('todo'));
    }

    document.querySelector('.btn').onclick = function () {
        let elements = {};
        elements.todo = input.value;
        elements.check = false;
        arrOfList.push(elements);

        out()

        localStorage.setItem('todo', JSON.stringify(arrOfList))
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
            markedFinishTasks(listItem)
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

    function markedFinishTasks(item) {
        item.addEventListener('click', e => {
            if (e.target) {
                item.classList.toggle('checked');
            }
        })
    }



}