window.onload = function () {


    const input = document.querySelector('.input')
    const list = document.querySelector('.list')

    let arrOfList = [];
    if (localStorage.getItem('todo') != undefined) {
        arrOfList = JSON.parse(localStorage.getItem('todo'));
    }

    document.querySelector('.btn').onclick = function () {
        // arrOfList = []
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
            checked(listItem)
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

    function checked(item) {
        let inputCheck = document.createElement("input");
        inputCheck.type = "checkbox";
        item.appendChild(inputCheck)

        let allItems = document.querySelectorAll('li');
        console.log(allItems)
        for (let key of allItems) {

            if (inputCheck.checked) {
                key.classList.add('checked')
            } else {
                key.classList.remove('checked')
            }
        }

    }



}