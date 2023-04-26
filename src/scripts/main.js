document.addEventListener('DOMContentLoaded', function() {
// Adding houses modifiers when clicking header buttons
const gryffindorButton = document.getElementById('gryffindor');
const slytherinButton = document.getElementById('slytherin');
const ravenclawButton = document.getElementById('ravenclaw');
const hufflepuffButton = document.getElementById('hufflepuff');

const modifiers = ['--is-gryffindor', '--is-slytherin', '--is-ravenclaw', '--is-hufflepuff'];

const directorsSection = document.querySelector('.directors-producers');
const gallerySection = document.querySelector('.gallery');
const footer = document.querySelector('.footer');

gryffindorButton.addEventListener('click', function() {
    removeModifiers(directorsSection, modifiers);
    removeModifiers(gallerySection, modifiers);
    removeModifiers(footer, modifiers);
    directorsSection.classList.toggle('--is-gryffindor');
    gallerySection.classList.toggle('--is-gryffindor');
    footer.classList.toggle('--is-gryffindor');
})

slytherinButton.addEventListener('click', function() {
    removeModifiers(directorsSection, modifiers);
    removeModifiers(gallerySection, modifiers);
    removeModifiers(footer, modifiers);
    directorsSection.classList.toggle('--is-slytherin');
    gallerySection.classList.toggle('--is-slytherin');
    footer.classList.toggle('--is-slytherin');
})

ravenclawButton.addEventListener('click', function() {
    removeModifiers(directorsSection, modifiers);
    removeModifiers(gallerySection, modifiers);
    removeModifiers(footer, modifiers);
    directorsSection.classList.toggle('--is-ravenclaw');
    gallerySection.classList.toggle('--is-ravenclaw');
    footer.classList.toggle('--is-ravenclaw');
})

hufflepuffButton.addEventListener('click', function() {
    removeModifiers(directorsSection, modifiers);
    removeModifiers(gallerySection, modifiers);
    removeModifiers(footer, modifiers);
    directorsSection.classList.toggle('--is-hufflepuff');
    gallerySection.classList.toggle('--is-hufflepuff');
    footer.classList.toggle('--is-hufflepuff');
})



// Header buttons
const arrowUpButton = document.querySelector('.fa-angle-up');
let sticky = arrowUpButton.offsetTop;


// Hero buttons
let letterButton = document.querySelector('.hero__content__information__letter');
let arrowButton = document.querySelector('.fa-caret-up');
let hero = document.querySelector('.hero');
let text = document.querySelector('.hero__about')

letterButton.addEventListener('click', function () {
    hero.classList.remove('--is-cropped');

    if (!hero.classList.contains('--is-cropped')) {
        text.scrollIntoView({ behavior: 'smooth' });
    };
});

arrowButton.addEventListener('click', function () {
    hero.classList.add('--is-cropped');

    if (hero.classList.contains('--is-cropped')) {
        hero.scrollIntoView({behavior: 'smooth'});
    };
});

//Arrow-up button
document.addEventListener('scroll', function() {
    if (window.pageYOffset > sticky) {
        arrowUpButton.classList.add('fa-angle-up--is-visible');
    } else {
        arrowUpButton.classList.remove('fa-angle-up--is-visible');
    }
})

arrowUpButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


//Adding scale to gallery
let galleryOverlays = document.querySelectorAll('.gallery__container__item__overlay');
let galleryImages = document.querySelectorAll('.gallery__container__item img');

for (let i = 0; i < galleryOverlays.length; i++) {
    galleryOverlays[i].addEventListener('mouseover', function(event) {
        galleryImages[i].style.transform = 'scale(1.1)';
    });

    galleryOverlays[i].addEventListener('mouseout', function(event) {
        galleryImages[i].style.transform = 'none';
    });
};


//Section Filming-set accordion
let accordionHeaders = document.querySelectorAll('[data-accordion-header]');

    for (let i = 0; i < accordionHeaders.length; i++) {
        accordionHeaders[i].addEventListener('click', openOrCloseAnswers);
    }

});




////////////////////////////////////////////////////////FUNCTIONS////////////////////////////////////////////////////////////////


// Function for closing accordion tabs
function openOrCloseAnswers(element) {
    const isOpenClass = 'filming-set__container__items__accordion__item--is-open';
    const parentElement = element.target.parentNode;

    if (parentElement.classList.contains(isOpenClass)) {
        parentElement.classList.remove(isOpenClass);
    } else {
        document.querySelectorAll('.filming-set__container__items__accordion__item--is-open').forEach((element) => {
            element.classList.remove(isOpenClass);
        })

        parentElement.classList.add(isOpenClass);
    };
};

// Function to remove section house modifiers 
function removeModifiers(element, modifiers) {
    modifiers.forEach(modifier => {
        if (!element.classList.contains(modifier)) {
            return;
        }
        element.classList.remove(modifier);
    });
};



function hideHeaderElements() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function showHeaderElements() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
};