function getLanguage() {
    if (localStorage.getItem("lang") === null){
        localStorage.setItem("lang", 'pl');
    }
    return localStorage.getItem("lang");
}
    
function setLanguage(lang) {
    localStorage.setItem("lang", lang); 
    loadPage();
}

function loadPage() {
    console.log(localStorage.getItem("lang"));
}
