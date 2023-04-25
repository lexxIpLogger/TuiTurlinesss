var pict1 = document.getElementById('gallery-body__item-1')
var pict2 = document.getElementById('gallery-body__item-2')
var pict3 = document.getElementById('gallery-body__item-3')
var pict4 = document.getElementById('gallery-body__item-4')
var pict5 = document.getElementById('gallery-body__item-5')
var pict6 = document.getElementById('gallery-body__item-6')
var pict7 = document.getElementById('gallery-body__item-7')
var pict8 = document.getElementById('gallery-body__item-8')
var pict9 = document.getElementById('gallery-body__item-9')
var pict10 = document.getElementById('gallery-body__item-10')
var pict11 = document.getElementById('gallery-body__item-11')
var pict12 = document.getElementById('gallery-body__item-12')

var head_gallery = document.getElementById('header-gallery')

var container_gallery = document.getElementById('gallery-body')

var full_gallery = document.getElementById('gallery-slider')

var pict_container = document.getElementById('gallery-slider__container')

var exit_gallery = document.getElementById('exit-gallery')

var pict_next = document.getElementById('next-pict')

var pict_prev = document.getElementById('prev-pict')

var pict_index = 0;

function showPict1(){
    head_gallery.style.display = 'none';
    container_gallery.style.display = 'none';
    full_gallery.style.display = 'block';
    pict_container.style.background = "url('../img/gallery/brodway.webp')";
    pict_container.style.backgroundSize = 'cover';
    pict_index = 1;
}


function showPict2(){
    head_gallery.style.display = 'none';
    container_gallery.style.display = 'none';
    full_gallery.style.display = 'block';
    pict_container.style.background = "url('../img/gallery/bukingemskiy-dvorets.webp')";
    pict_container.style.backgroundSize = 'cover';
    pict_index = 2;
}


function showPict3(){
    head_gallery.style.display = 'none';
    container_gallery.style.display = 'none';
    full_gallery.style.display = 'block';
    pict_container.style.background = "url('../img/gallery/eyfeleva-bashnya.webp')";
    pict_container.style.backgroundSize = 'cover';
    pict_index = 3;
}


function showPict4(){
    head_gallery.style.display = 'none';
    container_gallery.style.display = 'none';
    full_gallery.style.display = 'block';
    pict_container.style.background = "url('../img/gallery/pizanskaya-bashnya.webp')";
    pict_container.style.backgroundSize = 'cover';
    pict_index = 4;
}



function showPict5(){
    head_gallery.style.display = 'none';
    container_gallery.style.display = 'none';
    full_gallery.style.display = 'block';
    pict_container.style.background = "url('../img/gallery/goriz-krasiv.webp')";
    pict_container.style.backgroundSize = 'cover';
    pict_index = 5;
}


function showPict6(){
    head_gallery.style.display = 'none';
    container_gallery.style.display = 'none';
    full_gallery.style.display = 'block';
    pict_container.style.background = "url('../img/gallery/krasnaya-ploshchad-sverkhu.webp')";
    pict_container.style.backgroundSize = 'cover';
    pict_index = 6;
}


function showPict7(){
    head_gallery.style.display = 'none';
    container_gallery.style.display = 'none';
    full_gallery.style.display = 'block';
    pict_container.style.background = "url('../img/gallery/luvr.webp')";
    pict_container.style.backgroundSize = 'cover';
    pict_index = 7;
}


function showPict8(){
    head_gallery.style.display = 'none';
    container_gallery.style.display = 'none';
    full_gallery.style.display = 'block';
    pict_container.style.background = "url('../img/gallery/notr-dam-de-pari.webp')";
    pict_container.style.backgroundSize = 'cover';
    pict_index = 8;
}


function showPict9(){
    head_gallery.style.display = 'none';
    container_gallery.style.display = 'none';
    full_gallery.style.display = 'block';
    pict_container.style.background = "url('../img/gallery/pisayushchiy-malchik.webp')";
    pict_container.style.backgroundSize = 'cover';
    pict_index = 9;
}


function showPict10(){
    head_gallery.style.display = 'none';
    container_gallery.style.display = 'none';
    full_gallery.style.display = 'block';
    pict_container.style.background = "url('../img/gallery/reykhstag.webp')";
    pict_container.style.backgroundSize = 'cover';
    pict_index = 10;
}


function showPict11(){
    head_gallery.style.display = 'none';
    container_gallery.style.display = 'none';
    full_gallery.style.display = 'block';
    pict_container.style.background = "url('../img/gallery/statuya-svobody.webp')";
    pict_container.style.backgroundSize = 'cover';
    pict_index = 11;
}


function showPict12(){
    head_gallery.style.display = 'none';
    container_gallery.style.display = 'none';
    full_gallery.style.display = 'block';
    pict_container.style.background = "url('../img/gallery/vodopad-viktoriya.webp')";
    pict_container.style.backgroundSize = 'cover';
    pict_index = 12;
}


function exitGallery(){
    head_gallery.style.display = 'flex';
    container_gallery.style.display = 'flex';
    full_gallery.style.display = 'none';
}

function nextPict() {
    
    if(pict_index == 0){
        pict_container.style.background = "url('../img/gallery/brodway.webp')";
        pict_container.style.backgroundSize = 'cover';
    }
    
    if(pict_index == 1){
        pict_container.style.background = "url('../img/gallery/bukingemskiy-dvorets.webp')";
        pict_container.style.backgroundSize = 'cover';
    }
    
    if(pict_index == 2){
        pict_container.style.background = "url('../img/gallery/eyfeleva-bashnya.webp')";
        pict_container.style.backgroundSize = 'cover';
    }
    
    if(pict_index == 3){
        pict_container.style.background = "url('../img/gallery/pizanskaya-bashnya.webp')";
        pict_container.style.backgroundSize = 'cover';
    }
    
    
    if(pict_index == 4){
        pict_container.style.background = 
        "url('../img/gallery/goriz-krasiv.webp')";
        pict_container.style.backgroundSize = 'cover';
    }
    
    if(pict_index == 5){
        pict_container.style.background = "url('../img/gallery/krasnaya-ploshchad-sverkhu.webp')";
        pict_container.style.backgroundSize = 'cover';
    }
    
    if(pict_index == 6){
        pict_container.style.background = "url('../img/gallery/luvr.webp')";
        pict_container.style.backgroundSize = 'cover';
    }
    
    if(pict_index == 7){
        pict_container.style.background = "url('../img/gallery/notr-dam-de-pari.webp')";
        pict_container.style.backgroundSize = 'cover';
    }
    
    if(pict_index == 8){
        pict_container.style.background = "url('../img/gallery/pisayushchiy-malchik.webp')";
        pict_container.style.backgroundSize = 'cover';
    }
    
    if(pict_index == 9){
        pict_container.style.background = "url('../img/gallery/reykhstag.webp')";
        pict_container.style.backgroundSize = 'cover';
    }
    
    if(pict_index == 10){
        pict_container.style.background = "url('../img/gallery/statuya-svobody.webp')";
        pict_container.style.backgroundSize = 'cover';
    }
    
    if(pict_index == 11){
        pict_container.style.background = "url('../img/gallery/vodopad-viktoriya.webp')";
        pict_container.style.backgroundSize = 'cover';
    }
    
    if(pict_index == 12){
        pict_container.style.background = "url('../img/gallery/brodway.webp')";
        pict_container.style.backgroundSize = 'cover';
        pict_index = 0;
    }
    
    pict_index++;
    
}

function prevPict() {
    
    pict_index--;
    
    if(pict_index == 12){
        pict_container.style.background = "url('../img/gallery/vodopad-viktoriya.webp')";
        pict_container.style.backgroundSize = 'cover';
    }
    
    if(pict_index == 11){
        pict_container.style.background = "url('../img/gallery/statuya-svobody.webp')";
        pict_container.style.backgroundSize = 'cover';
    }
    
    if(pict_index == 10){
        pict_container.style.background = "url('../img/gallery/reykhstag.webp')";
        pict_container.style.backgroundSize = 'cover';
    }
    
    if(pict_index == 9){
        pict_container.style.background = "url('../img/gallery/pisayushchiy-malchik.webp')";
        pict_container.style.backgroundSize = 'cover';
    }
    
    if(pict_index == 8){
        pict_container.style.background = "url('../img/gallery/notr-dam-de-pari.webp')";
        pict_container.style.backgroundSize = 'cover';
    }
    
    if(pict_index == 7){
        pict_container.style.background = "url('../img/gallery/luvr.webp')";
        pict_container.style.backgroundSize = 'cover';
    }
    
    if(pict_index == 6){
        pict_container.style.background = "url('../img/gallery/krasnaya-ploshchad-sverkhu.webp')";
        pict_container.style.backgroundSize = 'cover';
    }
    
    if(pict_index == 5){
        pict_container.style.background = "url('../img/gallery/goriz-krasiv.webp')";
        pict_container.style.backgroundSize = 'cover';
    }
    
    if(pict_index == 4){
        pict_container.style.background = "url('../img/gallery/pizanskaya-bashnya.webp')";
        pict_container.style.backgroundSize = 'cover';
    }
    
    if(pict_index == 3){
        pict_container.style.background = "url('../img/gallery/eyfeleva-bashnya.webp')";
        pict_container.style.backgroundSize = 'cover';
    }
    
    if(pict_index == 2){
        pict_container.style.background = "url('../img/gallery/bukingemskiy-dvorets.webp')";
        pict_container.style.backgroundSize = 'cover';
    }
    
    if(pict_index == 1){
        pict_container.style.background = "url('../img/gallery/brodway.webp')";
        pict_container.style.backgroundSize = 'cover';
    }
    
    if(pict_index == 0){
        pict_container.style.background = "url('../img/gallery/vodopad-viktoriya.webp')";
        pict_container.style.backgroundSize = 'cover';
        pict_index = 12;
    }
}

pict1.addEventListener('click', showPict1)
pict2.addEventListener('click', showPict2)
pict3.addEventListener('click', showPict3)
pict4.addEventListener('click', showPict4)
pict5.addEventListener('click', showPict5)
pict6.addEventListener('click', showPict6)
pict7.addEventListener('click', showPict7)
pict8.addEventListener('click', showPict8)
pict9.addEventListener('click', showPict9)
pict10.addEventListener('click', showPict10)
pict11.addEventListener('click', showPict11)
pict12.addEventListener('click', showPict12)

pict_prev.addEventListener('click', prevPict)
pict_next.addEventListener('click', nextPict)
exit_gallery.addEventListener('click', exitGallery)
