// TODO
function attachEvents() {
    function createElement(type, content, parentNode, id, classes, attributes) {
        const htmlElement = document.createElement(type)

        if (content && type !== 'input') {
            htmlElement.textContent = content;
        }

        if (content && type === 'input') {
            htmlElement.value = content;
        }

        if (id) {
            htmlElement.id = id;
        }

        if (classes) {
            htmlElement.classList.add(...classes);
        }

        if (parentNode) {
            parentNode.appendChild(htmlElement);
        }

        //{ src: 'link to img', href: 'link to site' }
        if (attributes) {
            for (const key in attributes) {
                htmlElement.setAttribute(key, attributes[key]);
            }
        }
        return htmlElement
    }
    let BASE_URL = 'http://localhost:3030/jsonstore/tasks/';
    let addBtn = document.getElementById('add-button');
    addBtn.addEventListener('click', addHandler);
    let loadBtn = document.getElementById('load-button');
    loadBtn.addEventListener('click', loadHandler);
    let ul = document.getElementById('todo-list');
    let inputField = document.getElementById('title');

    let serverData = {}
        function loadHandler(event) {
        
            event.preventDefault();
            
         
            ul.innerHTML = '';
            let li = createElement('li', null, ul);

            fetch(BASE_URL)
                .then((res) => res.json())
                .then((data) => {
                    serverData = data;
                    console.log(`THis is server data: ${Object.entries(serverData)}`)
                    data = Object.values(data)
                    // console.log(data);
                    data.forEach(element => {
                        console.log(element)
                        let li = createElement('li', null, ul);
                        let span = createElement('span', `${element.name}`, li)
                        let removeBtn = createElement('button', 'Remove', li);
                        removeBtn.addEventListener('click', removeHandler)
                        let editBtn = createElement('button', 'Edit', li);
                        editBtn.addEventListener('click', editHandler)
                    });
                })
        }
    function addHandler(event) {
        event.preventDefault()
        console.log('This is inputfield')
        console.log(inputField.value);
        let headerContent = {name:inputField.value};
        fetch(BASE_URL, {method:'POST',body:JSON.stringify(headerContent)
    })  
        inputField.form.reset();
        loadHandler(event);
    }
    function removeHandler(event) {
        let parent = this.parentElement;
        
        let contentParent = parent.children[0].textContent;
        console.log(contentParent);
        console.log('From remove button :')
        for (let item in serverData){
            if(serverData[item].name = contentParent){
                console.log(`THis is id: ${serverData[item]._id}`)
                id = serverData[item]._id;
                fetch(`${BASE_URL}${id}`, {method:'DELETE'});
                break;
            }
        loadHandler();
        }
       
        // fetch(`${BASE_URL}${element._id}`, {method:'DELETE'})
                            
    }

    function editHandler() {
    
    }
}


attachEvents();
