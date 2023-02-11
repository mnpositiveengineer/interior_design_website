const projects = document.getElementById('projects');
const goToProjects = document.getElementById('goToProjects');
const goToAboutMe = document.getElementById('goToAboutMe');
const goToOffer = document.getElementById('goToOffer');
const goToContact = document.getElementById('goToContact');
const front_img = document.getElementById('front_img');
const logo = document.getElementById('logo');
const aboutme = document.getElementById('aboutme');
const offer = document.getElementById('oferta');
const contact = document.getElementById('formula');
const menu = document.getElementById('menu');
const menuIcon = document.getElementById('menu_icon');
const largeMenu = document.getElementById('large_menu');
const smallMenu = document.getElementById('small_menu');
const full_project = document.getElementById('full_project');
const full_project_content = document.getElementById('full_project_content');
const concept = document.getElementById('concept');
const concept_content = document.getElementById('concept_content');
const changes = document.getElementById('changes');
const changes_content = document.getElementById('changes_content');
const offerInfo = document.getElementById('alert');

goToProjects.addEventListener('click', openProjects);
goToAboutMe.addEventListener('click', openAboutMe);
goToOffer.addEventListener('click', openOffer);
goToContact.addEventListener('click', openContact);
menuIcon.addEventListener('click', openHideMenu);
full_project.addEventListener('click', openHideFullProjectContent);
concept.addEventListener('click', openHideConceptContent);
changes.addEventListener('click', openHideChangesContent);
window.addEventListener('hashchange', returnToPage);

function returnToPage() {
    if (window.location.href.indexOf("#") == -1) {
        isMenuOpened = true;
        openProjects();
      }
}

var isFullProjectContentOpened = false;
var isConceptContentOpened = false;
var isChangesContentOpened = false;

function openHideFullProjectContent() {
    if(isFullProjectContentOpened) {
        full_project_content.classList.remove('active');
        isFullProjectContentOpened = false;
    } else {
        full_project_content.classList.add('active');
        isFullProjectContentOpened = true;
    }
    hideShowOfferInfo();
}

function openHideConceptContent() {
    if(isConceptContentOpened) {
        concept_content.classList.remove('active');
        isConceptContentOpened = false;
    } else {
        concept_content.classList.add('active');
        isConceptContentOpened = true;
    }
    hideShowOfferInfo();
}

function openHideChangesContent() {
    if(isChangesContentOpened) {
        changes_content.classList.remove('active');
        isChangesContentOpened = false;
    } else {
        changes_content.classList.add('active');
        isChangesContentOpened = true;
    }
    hideShowOfferInfo();
}

function hideShowOfferInfo() {
    if (isFullProjectContentOpened || isConceptContentOpened || isChangesContentOpened) {
        offerInfo.classList.add('active');
    } else {
        offerInfo.classList.remove('active');
    }
}

var isMenuOpened = false;

function openHideMenu() {
    if(isMenuOpened) {
        largeMenu.classList.remove('active');
        smallMenu.style.removeProperty('background-color');
        setTimeout(() => {largeMenu.style.display = "none";;}, 400);
        isMenuOpened = false;
    } else {
        largeMenu.classList.remove('fully_hidden');
        largeMenu.style.display = "block";
        setTimeout(() => {
        largeMenu.classList.add('active'); 
        smallMenu.style.backgroundColor = "rgba(242, 240, 238, 100)";
        }, 1); 
        isMenuOpened = true;
    }
}

function openProjects() {
    hideAllSections();
    logo.classList.remove('hidden');
    front_img.classList.remove('hidden');
    projects.classList.remove('hidden');
    removeActiveFromMenuLinks();
    goToProjects.parentElement.classList.add('active');
    openHideMenu();
}


function openAboutMe() {
    hideAllSections();
    aboutme.classList.remove('hidden');
    removeActiveFromMenuLinks();
    goToAboutMe.parentElement.classList.add('active');
    openHideMenu();
}


function openOffer() {
    hideAllSections();
    offer.classList.remove('hidden');
    removeActiveFromMenuLinks();
    goToOffer.parentElement.classList.add('active');
    openHideMenu();
}

function openContact() {
    hideAllSections();
    contact.classList.remove('hidden');
    removeActiveFromMenuLinks();
    goToContact.parentElement.classList.add('active');
    document.body.classList.add('form');
    openHideMenu();
}

function removeActiveFromMenuLinks() {
    goToProjects.parentElement.classList.remove('active');
    goToAboutMe.parentElement.classList.remove('active');
    goToOffer.parentElement.classList.remove('active');
    goToContact.parentElement.classList.remove('active');
}

function hideAllSections() {
    logo.classList.add('hidden');
    front_img.classList.add('hidden');
    projects.classList.add('hidden');
    aboutme.classList.add('hidden');
    offer.classList.add('hidden');
    contact.classList.add('hidden');
    document.body.classList.remove('form');
}

const sendButton = document.getElementById('sendButton');
sendButton.addEventListener('click', sendMessage);

function sendMessage() {
    document.getElementById('thanksMessage').classList.remove('visible');
    const email = document.getElementById('email').value;
    const project = document.getElementById('selectProject').value;
    const city = document.getElementById('city').value;
    const area = document.getElementById('area').value;
    const period = document.getElementById('period').value;
    const message = document.getElementById('message').value;
    if (!(validateForm(email, project, city, area,  period, message))) {
        return;
    } else {
        Email.send({
            SecureToken : "533e3d0d-7447-40ab-9a73-a55bd8840b9b",
            To : 'katarzyna.bryl@gmail.com',
            From : "kontodostronki@gmail.com",
            Subject : "Wiadomość ze strony",
            Body : "<strong>Email:</strong> " + email + "<br>"
            + "<strong>Projekt:</strong> " + project + "<br>"
            + "<strong>Miasto:</strong> " + city + "<br>"
            + "<strong>Powierzchnia:</strong> " + area + "<br>"
            + "<strong>Termin:</strong> " + period + "<br>"
            + "<strong>Wiadomość:</strong> " + message + "<br>"
        }).then(document.getElementById('thanksMessage').classList.add('visible'));
    }
}

function validateForm(email , project, city, area,  period,  message) {
    Array.from(document.getElementsByClassName('validationMessage')).forEach(entry => entry.classList.remove('visible'));
    if (!email.match("[a-z0-9]+@[a-z]+\.[a-z]{2,3}")) {
        document.getElementById('email_validation').classList.add('visible');
        return false;
    }
    if (!(project == 'kompletny projekt' || project == 'koncepcja' || project == 'zmiany deweloperskie' )) {
        document.getElementById('project_validation').classList.add('visible');
        return false;
    }
    if (!city.match("^[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ ]*$") || city == '') {
        document.getElementById('city_validation').classList.add('visible');
        return false;
    }
    if (isNaN(area) || area == "") {
        document.getElementById('area_validation').classList.add('visible');
        return false;
    }
    if (!(period == '1 miesiąc' || period == '2-3 miesiące' || period == '3-6 miesięcy' )) {
        document.getElementById('period_validation').classList.add('visible');
        return false;
    }
    if (!message.match("^[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ0-9\.,;()?%@ ]*$")) {
        document.getElementById('message_validation').classList.add('visible');
        return false;
    }
    return true;
}
