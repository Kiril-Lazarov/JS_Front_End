function solve() {



    let tableBody = document.getElementsByTagName('tbody')[0];
    let generateButton = document.querySelector('#exercise > button:nth-child(3)');
    let inputArea = document.querySelector('#exercise > textarea:nth-child(2)')
    generateButton.addEventListener('click', generateHandler);


    function generateHandler(){
        let parsedObject = JSON.parse(inputArea.value);
            let itemsList = ['img', 'name', 'price', 'decFactor', 'input'];


    for (let j = 0; j < parsedObject.length; j++) {
        let newTableRow = document.createElement('tr');
        for (let i = 0; i < 5; i++) {
            let td = document.createElement('td');

            if (itemsList[i] === 'img') {
                let img = document.createElement('img');

                img.src = `${parsedObject[j][itemsList[i]]}`
                td.appendChild(img);
                newTableRow.appendChild(td);
            } else if (itemsList[i] === 'input') {
                let input = document.createElement('input');
                input.type = 'checkbox';

                td.appendChild(input);
                newTableRow.appendChild(td);
            } else {
                let paragraph = document.createElement('p');
                paragraph.textContent = parsedObject[j][itemsList[i]];
                td.appendChild(paragraph);
                newTableRow.appendChild(td);

            }

        }
        tableBody.appendChild(newTableRow)
    }
    }

    let buyButton = document.querySelector('#exercise > button:nth-child(6)');
    buyButton.addEventListener('click', buyHandler)

    function buyHandler(event) {
        let tableData = Array.from(document.querySelector('#exercise > div > div > div > div > table > tbody').children);

        let finalBuyInfo = {
            items: [],
            totalPrice: 0,
            totalFactor: 0
        };
        tableData.forEach(element => {
            if (element.children[4].children[0].checked) {
                console.log(element.children[3].textContent);
                finalBuyInfo.items.push(element.children[1].textContent);
                finalBuyInfo.totalPrice += Number(element.children[2].textContent);
                finalBuyInfo.totalFactor += Number(element.children[3].textContent);
            }


        })
        let textArea = document.querySelector('#exercise > textarea:nth-child(5)');
        textArea.textContent = `Bought furniture: ${finalBuyInfo.items.join(', ')}\nTotal price: ${finalBuyInfo.totalPrice.toFixed(2)}\nAverage decoration factor: ${finalBuyInfo.totalFactor / finalBuyInfo.items.length.toFixed(2)}`

    }





}