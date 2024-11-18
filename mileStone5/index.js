"use strict";
// Accessing input elements
const myName = document.getElementById('name');
const fName = document.getElementById('f-name');
const desig = document.getElementById('desig');
const dBirth = document.getElementById('d-birth');
const male = document.getElementById('male');
const female = document.getElementById('female');
const domicyle = document.getElementById('domicyle');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const add = document.getElementById('add');
const pass1 = document.getElementById('pass1');
const deg1 = document.getElementById('deg1');
const uni1 = document.getElementById('uni1');
const pass2 = document.getElementById('pass2');
const deg2 = document.getElementById('deg2');
const uni2 = document.getElementById('uni2');
const skill1 = document.getElementById('skill-1');
const skill2 = document.getElementById('skill-2');
const skill3 = document.getElementById('skill-3');
const skill4 = document.getElementById('skill-4');
const skill5 = document.getElementById('skill-5');
const stYear = document.getElementById('st-year');
const endYear = document.getElementById('end-year');
const company = document.getElementById('company');
const comLocation = document.getElementById('com-location');
const jobTitle = document.getElementById('job-title');
const achv1 = document.getElementById('achv-1');
const achv2 = document.getElementById('achv-2');
const achv3 = document.getElementById('achv-3');
const lang1 = document.getElementById('lang-1');
const lang2 = document.getElementById('lang-2');
const pic = document.getElementById('pic');
// Form and submit button
const form = document.getElementById('form');
// Handling form submission
form?.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Get gender value (radio buttons)
    const gender = male.checked ? 'Male' : female.checked ? 'Female' : '';
    // Store form data in local storage
    localStorage.setItem('name', myName.value);
    localStorage.setItem('f-name', fName.value);
    localStorage.setItem('desig', desig.value);
    localStorage.setItem('d-birth', dBirth.value);
    localStorage.setItem('gender', gender);
    localStorage.setItem('domicyle', domicyle.value);
    localStorage.setItem('phone', phone.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('add', add.value);
    localStorage.setItem('pass1', pass1.value);
    localStorage.setItem('deg1', deg1.value);
    localStorage.setItem('uni1', uni1.value);
    localStorage.setItem('pass2', pass2.value);
    localStorage.setItem('deg2', deg2.value);
    localStorage.setItem('uni2', uni2.value);
    localStorage.setItem('skill-1', skill1.value);
    localStorage.setItem('skill-2', skill2.value);
    localStorage.setItem('skill-3', skill3.value);
    localStorage.setItem('skill-4', skill4.value);
    localStorage.setItem('skill-5', skill5.value);
    localStorage.setItem('st-year', stYear.value);
    localStorage.setItem('end-year', endYear.value);
    localStorage.setItem('company', company.value);
    localStorage.setItem('com-location', comLocation.value);
    localStorage.setItem('job-title', jobTitle.value);
    localStorage.setItem('achv-1', achv1.value);
    localStorage.setItem('achv-2', achv2.value);
    localStorage.setItem('achv-3', achv3.value);
    localStorage.setItem('lang-1', lang1.value);
    localStorage.setItem('lang-2', lang2.value);
    // Handle image upload asynchronously
    if (pic.files && pic.files[0]) {
        let reader = new FileReader();
        reader.addEventListener('load', () => {
            let textImage = reader.result;
            localStorage.setItem('Profile-Picture', textImage);
        });
        reader.readAsDataURL(pic.files[0]);
    }
    else {
        // Redirect immediately if no image is uploaded
        window.location.href = "/static_resume/index.html";
    }
    // Redirect after storing the image
    window.location.href = "/static_resume/index.html";
});
