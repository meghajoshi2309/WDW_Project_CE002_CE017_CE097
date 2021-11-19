window.onload = () => {

    let form1 = document.querySelector('#add_form');
    let add_item = document.querySelector('#add_item');
    let submit = document.querySelector('#submit');

    form1.addEventListener('submit', addItems); //addItems is new function
    add_item.addEventListener('click', removeItems); //removeItems is new function

}

function addItems(e) {
    e.preventDefault();
    console.log("addItem function called.");

    if (submit.value != 'submit') {
        editItem.target.parentNode.childNodes[0].data = document.querySelector('#item').value;
        submit.value = 'submit';
        document.querySelector('#item').value = '';
        document.querySelector('#lblsuccess').innerHTML = "Text Eidted Successfully.";
        document.querySelector('#lblsuccess').style.display = 'block';
        setTimeout(function () {
            document.querySelector('#lblsuccess').style.display = 'none';
        }, 3000);
        return true;
    }

    let newItem = document.querySelector('#item').value;
    console.log(newItem);

    if (newItem.trim() == '' || newItem.trim() == null) {
        return false;
    }
    else {
        document.querySelector('#item').value = '';
    }

    let li = document.createElement('li');
    li.className = "list-group-item";

    let deleteButton = document.createElement('button');
    deleteButton.className = "btn-danger btn btn-sm float-right delete";
    deleteButton.appendChild(document.createTextNode('Delete')); // Give Name Of Button , name is delete

    let editButton = document.createElement('button');
    editButton.className = "btn-warning btn btn-sm float-right edit";
    editButton.appendChild(document.createTextNode('edit'));

    // let markDoneButton = document.createElement('button');
    // markDoneButton.className = "btn-success btn btn-sm float-right markAsDone";
    // markDoneButton.appendChild(document.createTextNode('Mark As Done'));
    
    // let checkbox = document.createElement('input');
    // checkbox.type = "checkbox";
    // checkbox.name = "name";
    // checkbox.value = "value";
    // checkbox.id = "id";
    // checkbox.className = " float-right checkbox";
    // let label = document.createElement('label');
    // label.htmlFor = "id";
    // label.className = "float-right";
    // label.appendChild(document.createTextNode('Done'));

    li.appendChild(document.createTextNode(newItem));
    li.appendChild(deleteButton);
    li.appendChild(editButton);
    // li.appendChild(markDoneButton);
    // li.appendChild(checkbox);

    // Now append li to ul . Here ID of ul is add_item

    add_item.appendChild(li);
}

function removeItems(e) {
    e.preventDefault();

    if (e.target.classList.contains('delete')) {
        if (confirm("Are You Sure ?")) {
            let li = e.target.parentNode;
            add_item.removeChild(li);
            document.querySelector('#lblsuccess').innerHTML = "Text Deleted Successfully.";
            document.querySelector('#lblsuccess').style.display = 'block';
            setTimeout(function () {
                document.querySelector('#lblsuccess').style.display = 'none';
            }, 3000);
        }
    }

    if (e.target.classList.contains('edit')) {
        document.querySelector('#item').value = e.target.parentNode.childNodes[0].data;
        submit.value = 'Edit';

        editItem = e;
    }

    if (e.target.classList.contains('markAsDone')){
        console.log("mark as done");
        e.target.parentNode.childNodes[0].style = 'text-decoration-line: line-through;';
    }

}

function toggleButton(ref, btnId) {
    document.querySelector(`#${btnId}`).disabled = false;
}