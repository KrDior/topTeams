import axios from 'axios';

async function getHTML() {
    const { data: html } = await axios.get('https://www.sports.ru/epl/table/');
    return html;
}


getHTML()
    .then((html) => {
        getClassById(html);
    })

function getClassById(html) {
    const el = document.createElement('div');
    el.innerHTML = html;
    const title = el.querySelector(`tbody tr:nth-child(1) td:nth-child(2) div a`);
    console.log('DIV INNER TEXT', title.innerText);
}




