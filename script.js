let menuicon = document.querySelector('#menuicon');
let navbar = document.querySelector('#navbar');

menuicon.onclick = () =>{
    menuicon.classList.toggle('bx-x');    
    navbar.classList.toggle('active');    
}

let extra = document.querySelector('.hide');
let extrabtn = document.querySelector('.rmbtn');

extrabtn.onclick = () => {
    extra.classList.toggle('show');
    less.classList.toggle('show');
}

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = ()=>{
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
    let header= document.querySelector('header');
    
    header.classList.toggle('sticky', window.scrollY > 100);

    menuicon.classList.remove('bx-x');    
    navbar.classList.remove('active');    
}



ScrollReveal({
    distance: '80px',
    duration: 1000,
    delay: 200
})

ScrollReveal().reveal('.content, .heading', { origin: 'top' });
ScrollReveal().reveal('#homeimage, #homeimage img, #content3, #content4, #contact form', { origin: 'bottom' });
ScrollReveal().reveal('#aboutimage, #aboutimage img, #content h1', { origin: 'left' });
ScrollReveal().reveal('#content2, #content p', { origin: 'right' });


const typed = new Typed('.multipletext', {
    strings: ['Full Stack Developer', 'Front End Developer', 'Back End Developer'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 2000,
    loop: true
})