
// show menu 
const navMenu = document.getElementById('nav__menu'),
    navToggle = document.getElementById('nav__toggle'),
    navClose = document.getElementById('nav__close')

// show menu 
if(navToggle){
    navToggle.addEventListener('click' ,() =>{
        navMenu.classList.add('show__menu')
    })
}

// Hidden menu 
if (navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show__menu')
    })
}


// Remove Menu Mobile 
const navLink = document.querySelectorAll('.nav__list')

const linkAction = () => {
    const navMenu = document.getElementById('nav__menu')
// When we Click on each nav__link , we remove the show__menu
    navMenu.classList.remove('show__menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


// Add blur to Header 

const blurHeader = () => {
    const header = document.getElementById('header')

    //when the scroll is greater than 50 viewport heght add the blur-header class to 

    this.scrollY >= 50 ? header.classList.add('blur-header')
                        : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)



// Email sent 

const contactFrom = document.getElementById('contact__from') 
const contactMessage = document.getElementById('contact__message')

const sendEmail = (e) =>{
    e.preventDefault()

    // serviceID - templateID - #form - publickey
    emailjs.sendEmail('service_bf98lum', 'template_7h3ik67', 'contact__from' ,'k7wl9w2jryuqxd_E7' )
    .then(() =>{
        //Show sent message 
        contactMessage.textContent = 'Message sent successfully ✅' 

        //remove mgs after 5 sec
        setTimeout(() =>{
            contactMessage.textContent = ''
        },5000)

        // clear input feild 
        contactFrom.reset()


    }, () =>{
        // show error message 
        contactMessage.textContent = 'Message not sent (service error) ❌'  
    })

}

contactFrom.addEventListener('submit' , sendEmail)



// Show Scroll Up 

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    // when the scroll is higher than 350 viewport height , add the show-scroll class to the a tag with the scrollup

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);


// scroll section active link 

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight ,
            sectionTop = current.offsetTop - 58 ,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active')
        } else {
            sectionsClass.classList.remove('active')
        }
    }) 
}
window.addEventListener('scroll' , scrollActive)



// Scroll js 
const sr = ScrollReveal({
    distance:'60px',
    duration:2600 ,
    reset : true 
})
// home 
sr.reveal('.home__data ',{delay:150, origin:'top'})
sr.reveal('.home__social ',{delay:150, origin:'left'})
sr.reveal('.home__title ',{delay:250, origin:'left'})
sr.reveal('.home__image',{delay:350, origin:'right'})

// about 
sr.reveal('.about__data',{delay:350, origin:'right'})
sr.reveal('.about__image',{delay:350, origin:'left'})

//course
sr.reveal('.courses__data',{delay:250, origin:'top'})
sr.reveal('.courses__item.one',{delay:250, origin:'bottom'})
sr.reveal('.courses__item.two',{delay:300, origin:'left'})
sr.reveal('.courses__item.three',{delay:350, origin:'top'})
sr.reveal('.courses__item.four',{delay:400, origin:'bottom'})
sr.reveal('.courses__item.five',{delay:350, origin:'right'})
sr.reveal('.courses__item.six',{delay:300, origin:'top'})
sr.reveal('.courses__item.seven',{delay:400, origin:'bottom'})

// Service 
sr.reveal('.services__card.one',{delay:200, origin:'left'})
sr.reveal('.services__card.two',{delay:200, origin:'bottom'})
sr.reveal('.services__card.three',{delay:200, origin:'right'})

//Projects 
sr.reveal('.projects__card.zero',{delay:200, origin:'left'})
sr.reveal('.projects__card.one',{delay:200, origin:'top'})
sr.reveal('.projects__card.two',{delay:200, origin:'right'})
sr.reveal('.projects__card.three',{delay:300, origin:'left'})
sr.reveal('.projects__card.four',{delay:300, origin:'bottom'})
sr.reveal('.projects__card.five',{delay:300, origin:'right'})


// contact 
sr.reveal('.contact__input.one',{delay:200, origin:'left'})
sr.reveal('.contact__input.two',{delay:200, origin:'right'})
sr.reveal('.contact__input.three',{delay:300, origin:'bottom'})

//skill 
sr.reveal('.imgbx.one',{delay:200, origin:'left'})
sr.reveal('.imgbx.two',{delay:300, origin:'right'})
sr.reveal('.imgbx.three',{delay:200, origin:'top'})
sr.reveal('.imgbx.four',{delay:400, origin:'bottom'})
sr.reveal('.imgbx.five',{delay:300, origin:'right'})
sr.reveal('.imgbx.six',{delay:350, origin:'bouutn'})
sr.reveal('.imgbx.seven',{delay:250, origin:'left'})
sr.reveal('.imgbx.eight',{delay:400, origin:'top'})
sr.reveal('.imgbx.nine',{delay:300, origin:'bottom'})
sr.reveal('.imgbx.ten',{delay:200, origin:'left'})
sr.reveal('.imgbx.eleven',{delay:400, origin:'right'})
sr.reveal('.imgbx.twelve',{delay:300, origin:'top'})