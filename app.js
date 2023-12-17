let menuButton = document.querySelector('.fa-bar');
let closeButton = document.querySelector('.fa-xmark');
let aside = document.querySelector('aside');
let greatJones = document.querySelector('.greatJones')

// setting up main body dots....

let allMainDots = document.querySelector('.mainBodyDots').querySelectorAll('i');
let mainBody = document.querySelector('.mainBody');
let mainBodyText = document.querySelector('.mainBodyText');
allMainDots.forEach(dot => {
    dot.addEventListener('click', function () {
        let oldActiveDot = document.querySelector('.activeMainDot');
        oldActiveDot.classList.remove('activeMainDot');
        if (dot.id === "brown") {
            if (document.body.clientWidth <= 1350) {
                mainBody.style.backgroundImage = 'url("https://greatjonesgoods.com/cdn/shop/files/holiday-hosting-01_768x1024_crop_center@2x.jpg?v=1701296886")';
            }
            else {
                mainBody.style.backgroundImage = 'url("https://greatjonesgoods.com/cdn/shop/files/holiday-hosting-02_ad637f00-3e4a-49be-b255-dd4b0291ac68_2160x1215_crop_center.jpg?v=1701293221")';
            }
            mainBodyText.children[0].innerHTML = "Great Jones x Houseplant"
            mainBodyText.children[1].innerHTML = "Get baking with our two collaborative gift sets."
            mainBodyText.children[2].style.backgroundColor = "#0e5540";
        }
        else {
            if (document.body.clientWidth <= 1350) {
                mainBody.style.backgroundImage = 'url("https://greatjonesgoods.com/cdn/shop/files/Holiday_General_Mobile_768x1024_crop_center@2x.jpg?v=1701116607")';
            }
            else {
                mainBody.style.backgroundImage = 'url("https://greatjonesgoods.com/cdn/shop/files/Holiday_General_Desktop2_2160x1215_crop_center.jpg?v=1701159133")';
            }
            mainBodyText.children[0].innerHTML = "Welcome to Great Jones"
            mainBodyText.children[1].innerHTML = "Holiday gifts that look as fantastic function.."
            mainBodyText.children[2].style.backgroundColor = "blue";
        }
        dot.classList.add('activeMainDot')
    })
})

// if (document.body.clientWidth <= 1350) {
//     mainBody.style.backgroundImage = 'url("https://greatjonesgoods.com/cdn/shop/files/Holiday_General_Mobile_768x1024_crop_center@2x.jpg?v=1701116607")';
// }
// else {
//     mainBody.style.backgroundImage = 'url("https://greatjonesgoods.com/cdn/shop/files/Holiday_General_Desktop2_2160x1215_crop_center.jpg?v=1701159133")';
// }

// setting up offer div when we scroll windows
let offersDiv = document.querySelector('.offers');
window.addEventListener('scroll', function () {
    if (window.scrollY == 0) {
        offersDiv.style.display = "flex";
    }
    else {
        offersDiv.style.display = "none";
    }
})

// setting up the aside property....

menuButton.addEventListener('click', function () {
    aside.classList.add('showAside');
    greatJones.classList.add('hideGreatJones');
})
closeButton.addEventListener('click', function () {
    aside.classList.remove('showAside');
    greatJones.classList.remove('hideGreatJones');
})

// setting up vogue btns and div

let allVogueDisplays = document.querySelector('.vogueDisplay').querySelectorAll('div');
let vogueButtons = document.querySelector('.vogueButtons');
let allVogueDots = vogueButtons.querySelectorAll('i');
allVogueDots.forEach(button => {
    button.addEventListener('click', function (e) {
        console.log(e.target.id);
        allVogueDisplays.forEach(display => {
            console.dir(display);
            if (display.className === "showVogueDisplay") {
                display.classList.remove('showVogueDisplay');
            }
            if (display.id === e.target.id) {
                display.classList.add('showVogueDisplay');
            }
        })
        allVogueDots.forEach(dot => {
            dot.style.color = "grey";
        })
        let newVogueActiveDot = vogueButtons.querySelector(`#${e.target.id}`);
        newVogueActiveDot.style.color = "white";
    })
})


// dragging the mouse event

let activeVogue = document.querySelector('.showVogueDisplay');
activeVogue.addEventListener('mousedown', function (e) {
    console.dir(e);
})

// setting up the menu catalogs...............

let menuList = document.querySelector('.menuList');
let menuUl = menuList.querySelector('ul');
let allListItems = menuUl.querySelectorAll('li');
let allCatalogs = document.querySelectorAll('.itemCatalog');
allListItems.forEach(li => {
    li.addEventListener('click', function (e) {
        const id = e.target.id;
        document.querySelector('.activeCatalog').classList.remove('activeCatalog');
        allCatalogs.forEach(catalog => {
            if (catalog.id === id) {
                catalog.classList.add('activeCatalog');
            }
        })
        document.querySelector('.activeMenuType').classList.remove('activeMenuType');
        let menuItem = menuUl.querySelector(`#${id}`);
        menuItem.classList.add('activeMenuType');
    })
})

// setting up the menu catalogs..........

let isDown = false;
let startX;
let scrollLeft;
let endScrollLeft;
const dishCatalog = document.querySelector('.dishCatalog');
let dishesCatalog = document.querySelector('.dishesCatalog');
dishesCatalog.addEventListener('mousedown', function (e) {
    isDown = true;
    startX = e.pageX - dishesCatalog.offsetLeft;
    scrollLeft = dishesCatalog.scrollLeft;
});
dishesCatalog.addEventListener('mouseleave', function () {
    isDown = false;
    console.log(endScrollLeft);
    console.log(dishCatalog.clientWidth);
    let index = Math.floor(endScrollLeft / dishCatalog.clientWidth);
    let iButtons = document.querySelector('#iBtns');
    let allDots = iButtons.children;
    let activeDishCatalogDot = document.querySelector('.activeIBtn');
    activeDishCatalogDot.classList.remove('activeIBtn');
    allDots[index].classList.add('activeIBtn');
})
dishesCatalog.addEventListener('mouseup', function () {
    isDown = false;
    const maximumScroll = (dishesCatalog.scrollWidth - dishesCatalog.clientWidth);
    let index = Math.floor(endScrollLeft / dishCatalog.clientWidth);
    let iButtons = document.querySelector('#iBtns');
    let allDots = iButtons.children;
    let activeDishCatalogDot = document.querySelector('.activeIBtn');
    activeDishCatalogDot.classList.remove('activeIBtn');
    if (endScrollLeft === maximumScroll) {
        allDots[6].classList.add('activeIBtn');
    }
    else {
        allDots[index].classList.add('activeIBtn');
    }
});
dishesCatalog.addEventListener('mousemove', function (e) {
    if (!isDown) {
        return;
    }
    e.preventDefault();
    const x = e.pageX - dishesCatalog.offsetLeft;
    const walk = (x - startX) * 1.3;
    dishesCatalog.scrollLeft = scrollLeft - walk;
    endScrollLeft = dishesCatalog.scrollLeft;
})


// same for mobiles ( touch events ) ........

dishesCatalog.addEventListener('touchstart', function (e) {
    isDown = true;
    startX = e.changedTouches[0].pageX - dishesCatalog.offsetLeft;
    scrollLeft = dishesCatalog.scrollLeft;
});
dishesCatalog.addEventListener('touchcancel', function () {
    isDown = false;
    console.log(endScrollLeft);
    console.log(dishCatalog.clientWidth);
    let index = Math.floor(endScrollLeft / dishCatalog.clientWidth);
    let iButtons = document.querySelector('#iBtns');
    let allDots = iButtons.children;
    let activeDishCatalogDot = document.querySelector('.activeIBtn');
    activeDishCatalogDot.classList.remove('activeIBtn');
    allDots[index].classList.add('activeIBtn');
})
dishesCatalog.addEventListener('touchend', function () {
    isDown = false;
    const maximumScroll = (dishesCatalog.scrollWidth - dishesCatalog.clientWidth);
    let index = Math.floor(endScrollLeft / dishCatalog.clientWidth);
    let iButtons = document.querySelector('#iBtns');
    let allDots = iButtons.children;
    let activeDishCatalogDot = document.querySelector('.activeIBtn');
    activeDishCatalogDot.classList.remove('activeIBtn');
    if (endScrollLeft === maximumScroll) {
        allDots[6].classList.add('activeIBtn');
    }
    else {
        allDots[index].classList.add('activeIBtn');
    }
});
dishesCatalog.addEventListener('touchmove', function (e) {
    if (!isDown) {
        return;
    }
    e.preventDefault();
    const x = e.changedTouches[0].pageX - dishesCatalog.offsetLeft;
    const walk = (x - startX) * 1.3;
    dishesCatalog.scrollLeft = scrollLeft - walk;
    endScrollLeft = dishesCatalog.scrollLeft;
})




//By dots.................


let iButtons = document.querySelector('#iBtns');
iButtons.addEventListener('click', function (e) {
    let activeDishCatalogDot = document.querySelector('.activeIBtn')
    if (e.target.localName === "i") {
        const id = e.target.id;
        const activeId = activeDishCatalogDot.id;
        if (id > activeId) {
            dishesCatalog.scrollLeft += (id - activeId) * 470;
        }
        else {
            dishesCatalog.scrollLeft -= (activeId - id) * 470;
        }
        activeDishCatalogDot.classList.remove('activeIBtn');
        e.target.classList.add('activeIBtn');
    }
});


// by left and right arrow..........


const btns = document.querySelector('.btns');
let leftArrow = btns.querySelector('.fa-arrow-left');
let rightArrow = btns.querySelector('.fa-arrow-right');
rightArrow.addEventListener('click', function () {
    console.log("right");
    dishesCatalog.scrollLeft += 470;
})
leftArrow.addEventListener('click', function () {
    dishesCatalog.scrollLeft -= 470;
})


// setting vogue for laptop screen

let vogueText = document.querySelector('.vogueText');
let ul = vogueText.querySelector('ul');
ul.addEventListener('click', function (e) {
    if (e.target.localName === 'img') {
        let clickedButtonName = e.target.parentElement;
        console.log(clickedButtonName.id);
        document.querySelector('.active').classList.remove('active')
        clickedButtonName.classList.add('active')
        let anchorText = document.querySelector('.anchorText');
        anchorText.querySelector('.active').classList.remove('active');
        anchorText.querySelector(`#${clickedButtonName.id}`).classList.add('active')
    }
})


// setting up the timer for the offer........

let updateTimer;
let futureTime = new Date(2023, 11, 25, 23, 0, 0);
futureTime = futureTime.getTime();
let allTimeUnits = document.querySelectorAll('.timer h5');
function getTimer() {
    let currentTime = Date.now();
    if (futureTime < currentTime) {
        document.querySelector('.timer').innerHTML = "<h4>( The offer has been expired..!! )</h4>"
    }
    let remainTime = futureTime - currentTime;
    const getDays = Math.floor(remainTime / (24 * 60 * 60 * 1000));
    remainTime = Math.floor(remainTime % (24 * 60 * 60 * 1000));
    const getHours = Math.floor(remainTime / (60 * 60 * 1000));
    remainTime = Math.floor(remainTime % (60 * 60 * 1000));
    const getMins = Math.floor(remainTime / (60 * 1000));
    remainTime = Math.floor(remainTime % (60 * 1000));
    let getSecs = Math.floor(remainTime / (1000));
    let allValues = [getDays, getHours, getMins, getSecs];
    function formatTime(time) {
        if (time < 10) {
            return (time = `0${time}`);
        }
        return time;
    }
    allTimeUnits.forEach(function (timeUnit, index) {
        timeUnit.innerHTML = formatTime(allValues[index]);
    })
}
function startTimer() {
    clearInterval(updateTimer);
    updateTimer = setInterval(getTimer, 1000);
}
startTimer();


// setting up the offer div scrolling
const windowWidth = document.body.clientWidth;
let offerDiv = document.querySelector('.offerDiv');
let isdown = false;
let offerStartX;
let walk = 0;
offersDiv.addEventListener('mousedown', function (e) {
    isdown = true;
    offerStartX = e.pageX - offerDiv.offsetLeft;
    offerScrollLeft = offerDiv.scrollLeft;
});
offersDiv.addEventListener('mouseup', function () {
    if (walk !== 0) {
        if (offerDiv.scrollLeft === windowWidth) {
            offerDiv.scrollLeft = 0;
        }
        else {
            offerDiv.scrollLeft = windowWidth;
        }
        walk = 0;
    }
    isdown = false;
});
offersDiv.addEventListener('mouseleave', function () {
    isdown = false;
});
offersDiv.addEventListener('mousemove', function (e) {
    if (!isdown) {
        return;
    }
    e.preventDefault();
    const x = e.pageX - offerDiv.offsetLeft;
    walk = x - offerStartX;
    console.log(walk);
});

// setting offer div by left & right arrow...........
let offer = document.querySelector('.offers')
let lArrow = offer.querySelector('.fa-arrow-left');
let rArrow = offer.querySelector('.fa-arrow-right');
lArrow.addEventListener('click', function () {
    if (offerDiv.scrollLeft === windowWidth) {
        offerDiv.scrollLeft = 0;
    }
    else {
        offerDiv.scrollLeft = windowWidth;
    }
})
rArrow.addEventListener('click', function () {
    if (offerDiv.scrollLeft === windowWidth) {
        offerDiv.scrollLeft = 0;
    }
    else {
        offerDiv.scrollLeft = windowWidth;
    }
})

// setting up offer div for mobiles.........

offersDiv.addEventListener('touchstart', function (e) {
    isdown = true;
    offerStartX = e.changedTouches[0].pageX - offerDiv.offsetLeft;
    offerScrollLeft = offerDiv.scrollLeft;
});
offersDiv.addEventListener('touchend', function () {
    if (walk !== 0) {
        if (offerDiv.scrollLeft === windowWidth) {
            offerDiv.scrollLeft = 0;
        }
        else {
            offerDiv.scrollLeft = windowWidth;
        }
        walk = 0;
    }
    isdown = false;
});
offersDiv.addEventListener('touchcancel', function () {
    isdown = false;
});
offersDiv.addEventListener('touchmove', function (e) {
    if (!isdown) {
        return;
    }
    e.preventDefault();
    const x = e.changedTouches[0].pageX - offerDiv.offsetLeft;
    walk = x - offerStartX;
    console.log(walk);
});