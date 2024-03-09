function fun(){
    let btnAdd = document.querySelector('button');
    let table = document.querySelector('table');

    let temp = `
            <tr>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
            </tr>`;

    table.innerHTML += temp;
}
