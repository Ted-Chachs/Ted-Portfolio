// scroll section section active link 
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    for (let s in sections) {
        if (sections.hasOwnProperty(s) && sections[s].offsetTop <= scrollPos && sections[s].offsetTop + sections[s].offsetHeight > scrollPos) {
            let id = sections[s].id;
            for (let n in navlinks) {
                if (navlinks.hasOwnProperty(n)) {
                    navlinks[n].classList.remove('active');
                }

                if (navlinks[n].hasAttribute('href') && navlinks[n].getAttribute('href').indexOf('#' + id) !== -1) {
                    navlinks[n].classList.add('active');
                }
            }
        }
    }

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    //sticky navbar
    let header = document.querySelector('header');
};