console.log('Script connected');

let table = [];

fetch('/table')
    .then((res) => res.json())
    .then((data) => {
        table = data;
        window.addEventListener('DOMContentLoaded', start(table));
    });



function start(table) {
    const btn = document.querySelector('.start-btn');
    btn.addEventListener('click', () => { createDOM(table) });
}


function createDOM(data) {


    data.map(function (val, ind) {
        const table = document.createElement('table');
        table.setAttribute('id', `table${ind}`)
        if (ind % 2 == 0) {
            const rowLiga = document.createElement('tr');
            const tdLiga = document.createElement('td');
            tdLiga.innerText = val;
            rowLiga.appendChild(tdLiga);
            table.appendChild(rowLiga);
        } else {
            val.forEach(it => {
                for (const [key, value] of Object.entries(it)) {
                    const rowTeam = document.createElement('tr');
                    const td1 = document.createElement('td');
                    const td2 = document.createElement('td');
                    td1.innerText = key;
                    td2.innerText = value;
                    rowTeam.appendChild(td1);
                    rowTeam.appendChild(td2);
                    table.appendChild(rowTeam);
                }
            });
        }


        document.body.appendChild(table);
    });

}
