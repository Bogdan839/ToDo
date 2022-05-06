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
        input.value = '';

        out()
    }

    function out() {
        let out = '';
        let listItem = document.createElement('li');
        listItem.classList.add('li');
        list.appendChild(listItem)

        for (let key in arrOfList) {
            out = arrOfList[key].todo;
        }

        listItem.textContent = out;
    }



}