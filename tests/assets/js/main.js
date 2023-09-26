const els = document.querySelectorAll('*[class-list="true"]');

for (var i = 0; i < els.length; i++) {
    // debug
    // console.log('els: ', els[i]);
    els[i].innerHTML = els[i].className.split(' ');
}