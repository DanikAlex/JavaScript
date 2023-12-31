(() => {
    // AJAX
    // Asynchronous Javascript and XML

    // XML
    // the old way for data representation
    // in other words, an earlier version of JSON
    // which nobody likes to use anymore
    // however, there are still XML files around

    // XML vs JSON
    /*

    json:
    {
        type: "dog",
        age: 8,
        breed: "german shepherd"
    }

    XML:
    <animal>
        <type>dog</type>
        <age>8</age>
        <breed>german shepherd</breed>
    </animal>

    */

    const usersButton = document.getElementById('showTodos');
    usersButton.addEventListener('click', async () => {
        // once, to invoke an ajax call, we used something called:
        // XMLHttpRequest
        // nowadays we use the more modern fetch function
        // XMLHttpRequest used to work with callbacks
        // fetch works with promises

        // a site that demos a server: https://jsonplaceholder.typicode.com/

        // a tool to view JSON as structured data: https://jsonviewer.stack.hu/

        const response = await fetch('https://jsonplaceholder.typicode.com/todos');

        const todos = await response.json();

        const reduced = todos.map(todo => `
            <tr>
                <td>${todo.id}</td>
                <td>${todo.title}</td>
                <td><input type="checkbox" ${todo.completed ? 'checked' : ''}></td>
            </tr>
        `).reduce((accumulator, tr) => accumulator + tr, '')

        const todoTable = document.getElementById('todoTable');
        todoTable.innerHTML = reduced;


        // the same code with promises instead of async/await
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(users => {
        //         users.map(user => `
        //             <tr>
        //                 <td>${user.name}</td>
        //                 <td>${user.email}</td>
        //                 <td>${user.address.city}</td>
        //             </tr>
        //         `).reduce((accumulator, tr) => accumulator + tr, '')

        //         const usersTableBody = document.getElementById('usersTableBody');
        //         usersTableBody.innerHTML = reduced;
        //     })
    });

})();