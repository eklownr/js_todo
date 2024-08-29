const todoList = [];


function renderTodoList() {
    let todoListHtml = '';

    for (let i=0; i<todoList.length; i++){
        const todo = todoList[i];
        const html = `
        <p>
        ${todo}
        <button onclick="
            todoList.splice(${i}, 1)
            renderTodoList()
        ">Delete</button>
        </p>`;
        todoListHtml += html;
    }
    console.log(todoListHtml);

    document.querySelector('.js_todo_list')
        .innerHTML = todoListHtml;
}


function addTodo() {
    const inputElement = document.querySelector('.js_name_input');
    todoList.push(inputElement.value);

    inputElement.value = '';
    console.log(todoList);

    renderTodoList();
}

const todo_list = [{
    name: 'Make dinner',
    due_date: '2024-08-29'
}, {
    name: 'Do dishes',
    due_date: '2024-08-29'
}]
