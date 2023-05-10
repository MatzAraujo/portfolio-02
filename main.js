const colorThemes = document.querySelectorAll('[name="theme"]');

const storeTheme = function(theme){
    localStorage.setItem("theme",theme)
};

const retrieveTheme = function () {
    const activeTheme = localStorage.getItem("theme")
    colorThemes.forEach((themeOption) => {
        if(themeOption.id === activeTheme){
            themeOption.checked = true;
        }
    });
};

colorThemes.forEach(themeOption => {
    themeOption.addEventListener('click', () => {
        storeTheme(themeOption.id)
    });
});

document.onload = retrieveTheme()

const toggle = document.querySelector('fieldset')
const colorToggle = document.querySelectorAll('input')

for(const element of colorToggle){
    element.addEventListener('click', () =>{
        toggle.classList.toggle('show')
    })
}