

async function addData() {
    const titlee = document.getElementById('task-input').value;
    const bodye = document.getElementById('task-input2').value;
    const obj = {
        title: titlee,
        body: bodye

    }



    
    const response = await fetch("http://localhost:3000/todos",
        {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: { 'Content-Type': 'application/json' }
        }
    )
}







const btn = document.getElementById('submitt');
btn.addEventListener('click', addData);




async function fetchData() {
    const response = await fetch('http://localhost:3000/todos');
    const data = await response.json();

    let template = '';
    data.forEach(post => {
        template += `
            <div class="post">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </div>
        `;
    });

    const container = document.getElementById('task-list');
    container.innerHTML = template;
}

// Call the function to fetch and display data
fetchData();

