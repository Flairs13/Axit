
const ACTIVE_CLASSNAME = 'active';

const toggle = (el) => el.classList.toggle(ACTIVE_CLASSNAME);
const remove = (el) => el.classList.toggle(ACTIVE_CLASSNAME);

const getActiveIndex = (tabs) => 
    (activeTab) =>
        Array.from(tabs)
            .findIndex(el =>  el === activeTab);


function init(){
    const tabs = document.querySelector('.toggle-items').children;
    
    const activeTab = Array.from(tabs).find(el => {
        return el.classList.contains(ACTIVE_CLASSNAME);
    });

    const getActive = getActiveIndex(tabs);

    const indexActiveTab = getActive(activeTab);

    const aboutChildrens = document.querySelector('.features-about-item').children;

    aboutChildrens[indexActiveTab].classList.add('show');

    return {
        tabs,
        activeTab,
        getActive,
        aboutChildrens,
    }
}

let { tabs, activeTab, getActive, aboutChildrens } = init();


// в цикле вешаем обработчики событий по вкладкам
for (let tab of tabs) {
    tab.onclick = function() {
        const currentIndex = getActive(activeTab);
        toggle(tab);
        remove(activeTab);
        activeTab.classList.remove(ACTIVE_CLASSNAME);
        aboutChildrens[currentIndex].classList.remove('show');
        activeTab = tab;

        const newIndex = getActive(activeTab);
        aboutChildrens[newIndex].classList.add('show');


    }
}

/**
 * находим 3 элемента, у них у одного уже есть класс актив, при клике мы добавляем класс на кнопку которую кликаем, и должны убрать класс у других кнопок.
 */



let hamburg = document.querySelector('.menu-icon-wrapper')
const mobileNavContainer = document.querySelector('#mobile-nav')
let hamburg2 = document.querySelector('.menu-icon')
hamburg.onclick = function() {
    hamburg2.classList.toggle('menu-icon-active')
    mobileNavContainer.classList.toggle('mobile-nav--active')
}


let menuIcon = document.querySelector('.menu-icon')
let mobileNav = document.querySelectorAll('.mobile-navigation-item')
for (nav of mobileNav) {
    nav.onclick = function() {
        mobileNavContainer.classList.remove('mobile-nav--active')
        menuIcon.classList.remove('menu-icon-active')
    }
}

// var temperature = 27;
// var isRaining = false;
// var minutes = 0;


// if (isRaining) {
//   console.log('Гулять не хожу')
//   minutes = 0
// } else if (temperature >= 10 && temperature < 15) {
//   console.log('Гуляю 30 минут')
//   minutes = 30
// } else if (temperature >= 15 && temperature < 25) {
//   console.log('Гуляю 40 минут')
//   minutes = 40
// } else if (temperature >= 25 && temperature <= 35) {
//   console.log('Гуляю 20 минут')
//   minutes = 20
// } else {
//   console.log('Гулять не выхожу')
//   minutes = 0
// } 


