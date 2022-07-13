
/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.querySelector('#nav-menu'),
  navToggle = document.querySelector('#nav-toggle'),
  navClose = document.querySelector('#nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', ()=> {
    navMenu.classList.add('show-menu')
  })
}


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', ()=> {
    navMenu.classList.remove('show-menu')
  })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== CARD COLLAPSE ====================*/
let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {

  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "grid") {
      coll[0].innerHTML =
        'Ver más <i class="uil uil-plus-circle collapsible__icon"></i>';
      content.style.display = "none";
    } else {
      coll[0].innerHTML = `Ocultar <i class="uil uil-times-circle collapsible__icon"></i>`;
      content.style.display = "grid";
    }
  });
}

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick) {
  modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () => {
    modal(i)
  })
})

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener('click', () => {
    modalViews.forEach((modalViews) => {
      modalViews.classList.remove('active-modal')
    })
  })
})

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
  const nav = document.getElementById('header')
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// Detect system dark mode
const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

if(userPrefersDark && localStorage.getItem("selected-theme") === null){
    // Add dark theme
    document.body.classList.add(darkTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    // Add icon theme
    localStorage.setItem('selected-icon', 'uil-sun')
    themeButton.classList.toggle(iconTheme)
}

//E-mail encrypt
const mail = document.querySelector('#contact__mailto')
mail.addEventListener('click', () => {
  openMailer(mail)
})

function decode(a) {
  return a.replace(/[a-zA-Z]/g, function(c){
    return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
  })
}; 
function openMailer(element) {
  let y = decode("znvygb:ureanaqrnfv7@tznvy.pbz");
  element.setAttribute("href", y);
  element.setAttribute("onclick", "");
  element.firstChild.nodeValue = "Se abrirá la app de email";
  setTimeout(() => {
    element.firstChild.nodeValue = "Click aqui";
  }, 5000);
  
};


//tooltip hidden in touch
function isTouchDevice(){
  return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
}

if (isTouchDevice()!==false) {
  document.querySelectorAll('.tooltiptext').forEach(txt => txt.style.display = 'none');
}


/*==================== FORM VALIDATION ====================*/
const btnEnviar = document.querySelector("#enviar");
const formulario = document.querySelector("#send-mail");

const email = document.querySelector("#email");
const nombre = document.querySelector("#name");
const mensaje = document.querySelector("#message");
const asunto = document.querySelector("#asunto")

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

evenListenerForm()

function evenListenerForm() {
  document.addEventListener('DOMContentLoaded', startApp);
  email.addEventListener('blur', validarFormulario);
  nombre.addEventListener('blur', validarFormulario);
  mensaje.addEventListener('blur', validarFormulario);
  asunto.addEventListener("blur", validarFormulario);
  formulario.addEventListener('submit', enviarEmail);  
}

function startApp() {
  disabledBtn();
}


// let validReCaptcha = false;
let validFormulario = false;

function validarFormulario(e) {
  if (e.target.value.length > 0) {

      const error = document.querySelector('p.error');
      if ( error ) {
          error.remove();
      }
      e.target.parentElement.classList.remove('input__error');
      e.target.parentElement.classList.add('input__success');
      
  } else {
      e.target.parentElement.classList.remove('input__success');
      e.target.parentElement.classList.add('input__error');

      mostrarError("Todos los campos son obligatorios");
      disabledBtn();
  }

  if (e.target.type === "email") {
      
      if (er.test( e.target.value ) ) {
          
          const error = document.querySelector('p.error');
          if ( error ) {
              error.remove();
          }
                  
          e.target.parentElement.classList.remove('input__error');
          e.target.parentElement.classList.add('input__success');
  
      } else {
        e.target.parentElement.classList.remove('input__success');
        e.target.parentElement.classList.add('input__error');
          mostrarError("Email no válido");
          disabledBtn();
      }
  }

  if ( er.test(email.value) && (nombre.value !== '') && (mensaje.value !== '') ) {
      btnEnviar.disabled = false;
      btnEnviar.classList.remove('enviar__disabled');
      btnEnviar.classList.add('enviar__enabled');
  } else if ((er.test(email.value) && (nombre.value !== '') && (mensaje.value !== ''))) {
    validFormulario = true;
  }
}

//ReCaptcha
// var onReCaptcha = function () {
//   console.log(grecaptcha.getResponse().length)
//   if (grecaptcha.getResponse().length !== 0) {
//     validReCaptcha = true;
//     if (validFormulario) {
//       btnEnviar.disabled = false;
//       btnEnviar.classList.remove('enviar__disabled');
//       btnEnviar.classList.add('enviar__enabled');
//     }
//   }
// };

function mostrarError(mensaje) {
  const mensajeError = document.createElement('p')
  
  mensajeError.textContent = mensaje;
  mensajeError.classList.add('error');
  
  const errores = document.querySelectorAll('.error')
  if ( errores.length === 0) {
      formulario.appendChild(mensajeError);
  }
}

const disabledBtn = () => {
  btnEnviar.disabled = true;
  btnEnviar.classList.add('enviar__disabled');
}

function enviarEmail () {
  e.preventDefault();
  let myForm = document.getElementById("form");
  let formData = new FormData(myForm);
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => console.log("Form successfully submitted"))
    .catch((error) => alert(error));
};

function resetearFormulario(e) {
  formulario.reset();
  e.preventDefault();
}