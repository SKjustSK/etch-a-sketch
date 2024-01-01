const NUMBER_OF_DIVS = 16*16;

const container = document.querySelector('#container');

for (let i = 0 ; i < NUMBER_OF_DIVS ; i++)
{
    let div = document.createElement('div');
    div.setAttribute('class', `draw element${i+1}`);
    div.style.backgroundColor = "#ffffff";

    div.addEventListener('mouseenter', () => {
        div.style.backgroundColor = '#CB00F5';
    });

    container.appendChild(div);
}
