// const navbar = document.querySelector("[data-navbar]");
// const navTogglerElements = document.querySelectorAll("[data-nav-toggler]");
// const overlay = document.querySelector("[data-overlay]");
// const themeBtn = document.querySelector('#theme-btn')
// const body = document.querySelector('body')
// const getAllDividers = document.querySelectorAll('.divider')

// function handleElementsOnClick(elements, eventType, callbackFunc) {
//   for (let i = 0; i < elements.length; i++) {
//     elements[i].addEventListener(eventType, callbackFunc);
//   }
// }

// function handleToggleNavbar() {
//   navbar.classList.toggle("active");
//   overlay.classList.toggle("active");
// }

// handleElementsOnClick(navTogglerElements, 'click', handleToggleNavbar)

// themeBtn.addEventListener('click', ()=> {
//     if(body.getAttribute('class') === 'black') {
//         body.classList.remove('black')
//         body.classList.add('blue')

//         getAllDividers.forEach(item=> {
//             item.setAttribute('data-theme', 'blue')
//         })
//     } else if(body.getAttribute('class') === 'blue'){
//         body.classList.remove('blue')
//         body.classList.add('violet')
//         getAllDividers.forEach(item=> {
//             item.setAttribute('data-theme', 'violet')
//         })

//     } else if(body.getAttribute('class') === 'violet'){
//         body.classList.remove('violet')
//         body.classList.add('black') 

//         getAllDividers.forEach(item=> {
//             item.setAttribute('data-theme', 'black')
//         })
//     }
// })



// const navbar = document.querySelector("[data-navbar]");
// const navTogglerElements = document.querySelectorAll("[data-nav-toggler]");
// const overlay = document.querySelector("[data-overlay]");
// const themeBtn = document.querySelector('#theme-btn');
// const body = document.querySelector('body');
// const getAllDividers = document.querySelectorAll('.divider');

// // Social Media Links (update with actual URLs)
// const socialMediaLinks = {
//   linkedin: 'https://www.linkedin.com', // Update with actual URL
//   twitter: 'https://twitter.com',      // Update with actual URL
//   github: 'https://github.com',       // Update with actual URL
//   facebook: 'https://facebook.com'    // Update with actual URL
// };

// // Function to scroll to the section smoothly
// function smoothScrollTo(sectionId) {
//   document.querySelector(sectionId).scrollIntoView({
//     behavior: 'smooth'
//   });
// }

// // Event listener for navbar items
// const navbarLinks = document.querySelectorAll('.navbar-link');
// navbarLinks.forEach(link => {
//   link.addEventListener('click', (e) => {
//     e.preventDefault();
//     const targetSection = e.target.textContent.trim().toLowerCase();
//     const sectionId = `#${targetSection}`;
//     smoothScrollTo(sectionId);
//   });
// });

// // Handle social media icon click to open the respective link
// const socialIcons = document.querySelectorAll('.social-icons-wrapper i');
// socialIcons.forEach(icon => {
//   icon.addEventListener('click', (e) => {
//     const iconClass = e.target.classList[1]; // Get the class for the icon
//     switch (iconClass) {
//       case 'fa-linkedin':
//         window.open(socialMediaLinks.linkedin, '_blank');
//         break;
//       case 'fa-twitter':
//         window.open(socialMediaLinks.twitter, '_blank');
//         break;
//       case 'fa-github':
//         window.open(socialMediaLinks.github, '_blank');
//         break;
//       case 'fa-facebook':
//         window.open(socialMediaLinks.facebook, '_blank');
//         break;
//       default:
//         break;
//     }
//   });
// });

// function handleElementsOnClick(elements, eventType, callbackFunc) {
//   for (let i = 0; i < elements.length; i++) {
//     elements[i].addEventListener(eventType, callbackFunc);
//   }
// }

// function handleToggleNavbar() {
//   navbar.classList.toggle("active");
//   overlay.classList.toggle("active");
// }

// handleElementsOnClick(navTogglerElements, 'click', handleToggleNavbar);

// themeBtn.addEventListener('click', () => {
//   if (body.getAttribute('class') === 'black') {
//     body.classList.remove('black');
//     body.classList.add('blue');

//     getAllDividers.forEach(item => {
//       item.setAttribute('data-theme', 'blue');
//     });
//   } else if (body.getAttribute('class') === 'blue') {
//     body.classList.remove('blue');
//     body.classList.add('violet');
//     getAllDividers.forEach(item => {
//       item.setAttribute('data-theme', 'violet');
//     });
//   } else if (body.getAttribute('class') === 'violet') {
//     body.classList.remove('violet');
//     body.classList.add('black');

//     getAllDividers.forEach(item => {
//       item.setAttribute('data-theme', 'black');
//     });
//   }
// });





// const navbar = document.querySelector("[data-navbar]");
// const navTogglerElements = document.querySelectorAll("[data-nav-toggler]");
// const overlay = document.querySelector("[data-overlay]");
// const themeBtn = document.querySelector('#theme-btn')
// const body = document.querySelector('body')
// const getAllDividers = document.querySelectorAll('.divider')

// const seeMyWorkBtn = document.querySelector('.hero .btn:first-of-type');  // "See My Work" button
// const contactMeBtn = document.querySelector('.hero .btn:last-of-type');  // "Contact Me" button

// const projectSection = document.querySelector('.section.project');
// const contactSection = document.querySelector('.section.contact');

// function handleElementsOnClick(elements, eventType, callbackFunc) {
//   for (let i = 0; i < elements.length; i++) {
//     elements[i].addEventListener(eventType, callbackFunc);
//   }
// }

// function handleToggleNavbar() {
//   navbar.classList.toggle("active");
//   overlay.classList.toggle("active");
// }

// function scrollToSection(section) {
//   section.scrollIntoView({ behavior: "smooth" });
// }

// handleElementsOnClick(navTogglerElements, 'click', handleToggleNavbar)

// themeBtn.addEventListener('click', ()=> {
//     if(body.getAttribute('class') === 'black') {
//         body.classList.remove('black')
//         body.classList.add('blue')

//         getAllDividers.forEach(item=> {
//             item.setAttribute('data-theme', 'blue')
//         })
//     } else if(body.getAttribute('class') === 'blue'){
//         body.classList.remove('blue')
//         body.classList.add('violet')
//         getAllDividers.forEach(item=> {
//             item.setAttribute('data-theme', 'violet')
//         })

//     } else if(body.getAttribute('class') === 'violet'){
//         body.classList.remove('violet')
//         body.classList.add('black') 

//         getAllDividers.forEach(item=> {
//             item.setAttribute('data-theme', 'black')
//         })
//     }
// })

// // Add event listeners to the buttons for scrolling to sections
// seeMyWorkBtn.addEventListener('click', () => scrollToSection(projectSection));
// contactMeBtn.addEventListener('click', () => scrollToSection(contactSection));

  

// const navbar = document.querySelector("[data-navbar]");
// const navTogglerElements = document.querySelectorAll("[data-nav-toggler]");
// const overlay = document.querySelector("[data-overlay]");
// const themeBtn = document.querySelector('#theme-btn')
// const body = document.querySelector('body')
// const getAllDividers = document.querySelectorAll('.divider')

// const seeMyWorkBtn = document.querySelector('.hero .btn:first-of-type');  // "See My Work" button
// const contactMeBtn = document.querySelector('.hero .btn:last-of-type');  // "Contact Me" button

// const projectSection = document.querySelector('.section.project');
// const contactSection = document.querySelector('.section.contact');

// const navbarLinks = document.querySelectorAll('.navbar-link');  // Navbar links
// const homeSection = document.querySelector('.hero');  // Home section
// const aboutSection = document.querySelector('.section.about');  // About section
// const projectsSection = document.querySelector('.section.project');  // Projects section
// const contactSectionNav = document.querySelector('.section.contact');  // Contact section

// function handleElementsOnClick(elements, eventType, callbackFunc) {
//   for (let i = 0; i < elements.length; i++) {
//     elements[i].addEventListener(eventType, callbackFunc);
//   }
// }

// function handleToggleNavbar() {
//   navbar.classList.toggle("active");
//   overlay.classList.toggle("active");
// }

// function scrollToSection(section) {
//   section.scrollIntoView({ behavior: "smooth" });
// }

// handleElementsOnClick(navTogglerElements, 'click', handleToggleNavbar)

// themeBtn.addEventListener('click', ()=> {
//     if(body.getAttribute('class') === 'black') {
//         body.classList.remove('black')
//         body.classList.add('blue')

//         getAllDividers.forEach(item=> {
//             item.setAttribute('data-theme', 'blue')
//         })
//     } else if(body.getAttribute('class') === 'blue'){
//         body.classList.remove('blue')
//         body.classList.add('violet')
//         getAllDividers.forEach(item=> {
//             item.setAttribute('data-theme', 'violet')
//         })

//     } else if(body.getAttribute('class') === 'violet'){
//         body.classList.remove('violet')
//         body.classList.add('black') 

//         getAllDividers.forEach(item=> {
//             item.setAttribute('data-theme', 'black')
//         })
//     }
// })

// // Add event listeners to the buttons for scrolling to sections
// seeMyWorkBtn.addEventListener('click', () => scrollToSection(projectSection));
// contactMeBtn.addEventListener('click', () => scrollToSection(contactSection));

// // Navbar links scroll functionality
// navbarLinks.forEach((link) => {
//   link.addEventListener('click', (e) => {
//     e.preventDefault();
//     const target = e.target.textContent.toLowerCase();

//     if (target === 'home') {
//       scrollToSection(homeSection);
//     } else if (target === 'about') {
//       scrollToSection(aboutSection);
//     } else if (target === 'projects') {
//       scrollToSection(projectsSection);
//     } else if (target === 'contact') {
//       scrollToSection(contactSectionNav);
//     }
//   });
// });



const navbar = document.querySelector("[data-navbar]");
const navTogglerElements = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");
const themeBtn = document.querySelector('#theme-btn')
const body = document.querySelector('body')
const getAllDividers = document.querySelectorAll('.divider')

const seeMyWorkBtn = document.querySelector('.hero .btn:first-of-type');  // "See My Work" button
const contactMeBtn = document.querySelector('.hero .btn:last-of-type');  // "Contact Me" button

const projectSection = document.querySelector('.section.project');
const contactSection = document.querySelector('.section.contact');

const navbarLinks = document.querySelectorAll('.navbar-link');  // Navbar links
const homeSection = document.querySelector('.hero');  // Home section
const aboutSection = document.querySelector('.section.about');  // About section
const projectsSection = document.querySelector('.section.project');  // Projects section
const contactSectionNav = document.querySelector('.section.contact');  // Contact section

// Handle elements click actions
function handleElementsOnClick(elements, eventType, callbackFunc) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(eventType, callbackFunc);
  }
}

// Handle toggle navbar functionality
function handleToggleNavbar() {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

// Smooth scroll functionality
function scrollToSection(section) {
  section.scrollIntoView({ behavior: "smooth" });
}

handleElementsOnClick(navTogglerElements, 'click', handleToggleNavbar);

themeBtn.addEventListener('click', () => {
    if (body.getAttribute('class') === 'black') {
        body.classList.remove('black');
        body.classList.add('blue');

        getAllDividers.forEach(item => {
            item.setAttribute('data-theme', 'blue');
        });
    } else if (body.getAttribute('class') === 'blue') {
        body.classList.remove('blue');
        body.classList.add('violet');
        getAllDividers.forEach(item => {
            item.setAttribute('data-theme', 'violet');
        });
    } else if (body.getAttribute('class') === 'violet') {
        body.classList.remove('violet');
        body.classList.add('black');

        getAllDividers.forEach(item => {
            item.setAttribute('data-theme', 'black');
        });
    }
});

// Add event listeners to the buttons for scrolling to sections
seeMyWorkBtn.addEventListener('click', () => scrollToSection(projectSection));
contactMeBtn.addEventListener('click', () => scrollToSection(contactSection));

// Navbar links scroll functionality
navbarLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target.textContent.toLowerCase();

    if (target === 'home') {
      scrollToSection(homeSection);
    } else if (target === 'about') {
      scrollToSection(aboutSection);
    } else if (target === 'projects') {
      scrollToSection(projectsSection);
    } else if (target === 'contact') {
      scrollToSection(contactSectionNav);
    }
  });
});

// Don't interfere with social media links
const socialLinks = document.querySelectorAll('.social-link'); // Assuming the social links have a 'social-link' class
socialLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    window.open(e.target.closest('a').href, '_blank');
  });
});
