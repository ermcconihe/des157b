(function() {
    'use strict';

    const button = document.querySelector('button');
    const body = document.querySelector('body');
    const sections = document.querySelectorAll('section')
    const container = document.querySelector('#container');
    const header = document.querySelector('header');
    const h1 = document.querySelector('h1');
    const h2 = document.querySelector('h2');
    const tiles = document.querySelector('.tiles');
    let mode = 'outside';

    button.addEventListener('click', function() {
        if (mode === 'outside') {
            container.className = 'switch';
            body.className = 'switch';
            header.className = 'switch';
            h1.className = 'switch';
            h2.className = 'switch';
            button.className = 'switch';
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
            for (const section of sections) {
                section.removeAttribute('class');
            }
            // for (const tile of tiles) {
            //     tile.className = 'switch';
            //     // section.className = '.tiles';
            // }
            mode = 'outside'
        }
    })
})();