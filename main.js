/* page content */
const homePageContent = `
<h1>Min hemsida</h1>
                <p id="my-id">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae et esse autem pariatur? Laboriosam cum molestias architecto eligendi beatae necessitatibus. Nesciunt, natus adipisci debitis repellat quod vel sit aperiam beatae.</p>
                <p class="my-class">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias repellat pariatur reiciendis laudantium ea, nostrum modi iste rem est molestiae! Officiis quis ut eligendi. Harum ad commodi nesciunt odit illum?</p>
                <p class="two classes">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas autem soluta error quos eligendi voluptatum possimus adipisci rerum, mollitia aperiam accusamus sint maiores deleniti eum cumque, iusto eius molestias facere.</p>
`;

const aboutPageContent = `
    <h1>Om mig </h1>

    <p>Här kan du skriva lite om dig själv</p>
`;

const hobbiesPageContent = `
<h1>Mina hobbies</h1>
<p>Här kan du skriva lite om dina hobbies</p>
`;

const contactPageContent = `
<h1>Kontact</h1>
<p>Kontakta mig</h1>
`;

/*Functions*/
//grab elements
const mainContent = document.querySelector("#main-content");
const navLinks = document.querySelectorAll("nav a");

//Get all navlinks and add event listeners to them//
navLinks.forEach(link => {
link.addEventListener("click", event => {
event.preventDefault(); //prevent page reload
const page = link.dataset.page; //get the string from each data-page attributes
setActiveNavLink(link); //move the active link class
updatePageContent(page); //render new page

});

});
/* way 1 for of 
//set the active clas on the page we are currently on 
function setActiveNavLink(link) {
    for(nav of navLinks) {

        nav.classlist.remove("active");
    }
    link.classlist.add("active");

}*/
//way 2 forEach
function setActiveNavLink(link) {

    navLinks.forEach(link => link.classList.remove("active"));
    link.classList.add("active");
}

//update page content
function updatePageContent(page) {

switch(page) {

    case "home" : 
    mainContent.innerHTML = homePageContent;
    break;
    case "about" :
        mainContent.innerHTML = aboutPageContent;
        break;
        case "hobbies": 
        mainContent.innerHTML = hobbiesPageContent;
        break;

        case "contact" : 
        mainContent.innerHTML = contactPageContent;
        break;

        default: 
        mainContent.innerHTML = homePageContent;
        break;
}
}

updatePageContent();