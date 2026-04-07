(function() {
    'use strict';

    const button = document.querySelector('button');
    const buttonCont = document.querySelector('.button');
    const body = document.querySelector('body');
    const sections = document.querySelectorAll('section')
    const container = document.querySelector('#container');
    const header = document.querySelector('header');
    const h1 = document.querySelector('h1');
    const h2 = document.querySelector('h2');
    let mode = 'outside';

    button.addEventListener('click', function() {
        if (mode === 'outside') {
            container.className = 'switch';
            body.className = 'switch';
            header.className = 'switch';
            h1.className = 'switch';
            h2.className = 'switch';
            button.className = 'switch';
            button.innerHTML = 'go outside';
            buttonCont.className = 'switch';
            for (const section of sections) {
                section.className = 'switch';
            }
            mode = 'inside';
        } else {
            container.removeAttribute('class');
            body.removeAttribute('class');
            header.removeAttribute('class');
            h1.removeAttribute('class');
            h2.removeAttribute('class');
            button.removeAttribute('class');
            buttonCont.removeAttribute('class');
            buttonCont.className = 'button';
            button.innerHTML = 'go inside';
            for (const section of sections) {
                section.removeAttribute('class');
            }
            mode = 'outside'
        }
    })
})();