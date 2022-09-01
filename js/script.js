"use strict";

let dash_open = document.getElementsByClassName('dashboad_contents');
let j;
let l = dash_open.length;
for (j = 0; j < l; j++) {
  dash_open[j].addEventListener('click', function () {
        this.classList.toggle('open');
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        }
        else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    })

}
