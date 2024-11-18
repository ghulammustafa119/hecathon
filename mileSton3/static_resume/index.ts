
window.addEventListener('load', () => {
    // Retrieving data from local storage
    const name = localStorage.getItem('name');
    const fname = localStorage.getItem('f-name');
    const desig = localStorage.getItem('desig');
    const dbirth = localStorage.getItem('d-birth');
    const gender = localStorage.getItem('gender');
    const domicyle = localStorage.getItem('domicyle');
    const phone = localStorage.getItem('phone');
    const email = localStorage.getItem('email');
    const add = localStorage.getItem('add');
    const pass1 = localStorage.getItem('pass1');
    const deg1 = localStorage.getItem('deg1');
    const uni1 = localStorage.getItem('uni1');
    const pass2 = localStorage.getItem('pass2');
    const deg2 = localStorage.getItem('deg2');
    const uni2 = localStorage.getItem('uni2');
    const skill1 = localStorage.getItem('skill-1');
    const skill2 = localStorage.getItem('skill-2');
    const skill3 = localStorage.getItem('skill-3');
    const skill4 = localStorage.getItem('skill-4');
    const skill5 = localStorage.getItem('skill-5');
    const stYear = localStorage.getItem('st-year');
    const endYear = localStorage.getItem('end-year');
    const company = localStorage.getItem('company');
    const comLocation = localStorage.getItem('com-location');
    const jobTitle = localStorage.getItem('job-title');
    const achv1 = localStorage.getItem('achv-1');
    const achv2 = localStorage.getItem('achv-2');
    const achv3 = localStorage.getItem('achv-3');
    const lang1 = localStorage.getItem('lang-1');
    const lang2 = localStorage.getItem('lang-2');
    const picture = localStorage.getItem('Profile-Picture');

    // Assigning values to the corresponding elements
    const setTextContent = (id: string, value: string | null) => {
        const element = document.getElementById(id) as HTMLElement;
        if (element) element.textContent = value || '';
    };

    setTextContent('resName', name);
    setTextContent('resFname', fname);
    setTextContent('resDesig', desig);
    setTextContent('resDb', dbirth);
    setTextContent('resDomicyle', domicyle);
    setTextContent('resPhone', phone);
    setTextContent('resEmail', email);
    setTextContent('resAddress', add);
    setTextContent('resPass', pass1);
    setTextContent('resDeg', deg1);
    setTextContent('resInst', uni1);
    setTextContent('resPass2', pass2);
    setTextContent('resDeg2', deg2);
    setTextContent('resInst2', uni2);
    setTextContent('resSkill1', skill1);
    setTextContent('resSkill2', skill2);
    setTextContent('resSkill3', skill3);
    setTextContent('resSkill4', skill4);
    setTextContent('resSkill5', skill5);
    setTextContent('resStartYear', stYear);
    setTextContent('resEndYear', endYear);
    setTextContent('resCompany', company);
    setTextContent('resCompanyLocation', comLocation);
    setTextContent('resJobTitle', jobTitle);
    setTextContent('resAchv1', achv1);
    setTextContent('resAchv2', achv2);
    setTextContent('resAchv3', achv3);
    setTextContent('resLang1', lang1);
    setTextContent('resLang2', lang2);

    // Gender display
    const genderElement = document.getElementById('resGender') as HTMLElement;
    if (genderElement) genderElement.textContent = gender || '';

    // Displaying the image
    const resImg = document.getElementById('resImg') as HTMLImageElement;
    if (resImg && picture) resImg.src = picture;

    
});

