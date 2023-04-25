var menuShow = 
document.getElementById('nav__burger-menu');

var menuHide = 
document.getElementById('mobile-nav__exit');

var buttonNext = 
document.getElementById('Next')

var buttonPrev = 
document.getElementById('Prev')

var slider = 
document.getElementById('show-slides__slider') 

var slideIndex = 0;

var switch1 = 
document.getElementById('switch1')

var switch2 = 
document.getElementById('switch2')

var switch3 = 
document.getElementById('switch3')

var switch4 = 
document.getElementById('switch4')


function showMenu() {
    let head_and_intro = document.getElementById('header-intro-container');
    
    let plus = 
    document.getElementById('plus');
    
    let show_slides = 
    document.getElementById('show-slides');
    
    let footer =
    document.getElementById('footer');
    
    let mob_nav = 
    document.getElementById('mobile-nav')
    
    head_and_intro.style.display = 'none';
    plus.style.display = 'none';
    show_slides.style.display = 'none';
    footer.style.display = 'none';
    mob_nav.style.display = 'block';
    
    
}


function hideMenu() {
    let head_and_intro = document.getElementById('header-intro-container');
    
    let plus = 
    document.getElementById('plus');
    
    let show_slides = 
    document.getElementById('show-slides');
    
    let footer =
    document.getElementById('footer');
    
    let mob_nav = 
    document.getElementById('mobile-nav')
    
    head_and_intro.style.display = 'block';
    plus.style.display = 'flex';
    show_slides.style.display = 'flex';
    footer.style.display = 'flex';
    mob_nav.style.display = 'none';
}


function nextSlide(){
    
    if (slideIndex == 0){
        slider.style.background = "url('img/main_slider/moscow.webp')";
        slider.style.backgroundSize = "cover";
        switch1.style.background = '#FFFFFF'
        switch2.style.background = '#272727'
        switch3.style.background = '#272727'
        switch4.style.background = '#272727'
        console.log(slideIndex)
    }
    
     if (slideIndex == 1){
        slider.style.background = "url('img/main_slider/crim.webp')";
        slider.style.backgroundSize = 'cover';
        switch1.style.background = '#272727'
        switch2.style.background = '#FFFFFF'
        switch3.style.background = '#272727'
        switch4.style.background = '#272727'
        console.log(slideIndex)
    }
    
     if (slideIndex == 2){
        slider.style.background = "url('img/main_slider/saint-peterburg.webp')";
        slider.style.backgroundSize = 'cover';
        switch1.style.background = '#272727'
        switch2.style.background = '#272727'
        switch3.style.background = '#FFFFFF'
        switch4.style.background = '#272727'
        console.log(slideIndex)
    }
    
     if (slideIndex == 3){
        slider.style.background = "url('img/main_slider/altai.webp')";
        slider.style.backgroundSize = 'cover';
        switch1.style.background = '#272727'
        switch2.style.background = '#272727'
        switch3.style.background = '#272727'
        switch4.style.background = '#FFFFFF'
        console.log(slideIndex)
         
     }
     
     if (slideIndex == 4){
        slideIndex = 0;
        slider.style.background = "url('img/main_slider/moscow.webp')";
        slider.style.backgroundSize = 'cover';
        switch1.style.background = '#FFFFFF'
        switch2.style.background = '#272727'
        switch3.style.background = '#272727'
        switch4.style.background = '#272727'
        console.log(slideIndex)
     }
    slideIndex++;
}

function prevSlide(){    
     if (slideIndex == 4){
        slider.style.background = "url('img/main_slider/saint-peterburg.webp')";
        slider.style.backgroundSize = 'cover';
        switch1.style.background = '#272727'
        switch2.style.background = '#272727'
        switch3.style.background = '#FFFFFF'
        switch4.style.background = '#272727'
        console.log(slideIndex)
     }    
     if (slideIndex == 3){
        slider.style.background = "url('img/main_slider/crim.webp')";
        slider.style.backgroundSize = 'cover';
        switch1.style.background = '#272727'
        switch2.style.background = '#FFFFFF'
        switch3.style.background = '#272727'
        switch4.style.background = '#272727'
        console.log(slideIndex)
     }
        
     if (slideIndex == 2){
        slider.style.background = "url('img/main_slider/moscow.webp')";
        slider.style.backgroundSize = 'cover';
        switch1.style.background = '#FFFFFF'
        switch2.style.background = '#272727'
        switch3.style.background = '#272727'
        switch4.style.background = '#272727'
        console.log(slideIndex)
     }

     if (slideIndex == 1){
        slider.style.background = "url('img/main_slider/altai.webp')";
        slider.style.backgroundSize = 'cover';
        switch1.style.background = '#272727'
        switch2.style.background = '#272727'
        switch3.style.background = '#272727'
        switch4.style.background = '#FFFFFF'
        console.log(slideIndex)
     }
    
     if (slideIndex == 0){
        slideIndex = 4;
        slider.style.background = "url('img/main_slider/saint-peterburg.webp')";
        slider.style.backgroundSize = 'cover';
        switch1.style.background = '#272727'
        switch2.style.background = '#272727'
        switch3.style.background = '#FFFFFF'
        switch4.style.background = '#272727'
        console.log(slideIndex)
     }
    slideIndex--;
}

menuShow.addEventListener('click', showMenu)
menuHide.addEventListener('click', hideMenu)
buttonNext.addEventListener('click', nextSlide)
buttonPrev.addEventListener('click', prevSlide)
