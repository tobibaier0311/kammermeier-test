

let bild = document.getElementById('blur');
let bild2 = document.getElementById('blur2');
let bild3 = document.getElementById('blur3');

function imgBlur() {
    bild.style.filter = 'blur(3px)';
}
function imgOut(){
    bild.style.filter = 'blur(0px)';
}
function imgBlur2() {
    bild2.style.filter = 'blur(3px)';
}
function imgOut2(){
    bild2.style.filter = 'blur(0px)';
}
function imgBlur3() {
    bild3.style.filter = 'blur(3px)';
}
function imgOut3(){
    bild3.style.filter = 'blur(0px)';
}

bild.addEventListener('mouseenter', imgBlur);
bild.addEventListener('mouseleave', imgOut);
bild2.addEventListener('mouseenter', imgBlur2);
bild2.addEventListener('mouseleave', imgOut2);
bild3.addEventListener('mouseenter', imgBlur3);
bild3.addEventListener('mouseleave', imgOut3);







$('.logo').on('click', function(e){
    console.log(this.hash);
});