// Toggle Menu
const toggleMenu = document.querySelector('#toggle-menu');
const toggleMenuIcon = toggleMenu.querySelector('img');
const menu = document.querySelector('#menu');

toggleMenu.addEventListener('click', () => {
    menu.classList.toggle('translate-y-[-200%]')
    changeMenuIcon()
});

// Close Menu When Click Menu List
const navLinks = document.querySelectorAll('.nav-link')
navLinks.forEach(navLink => {
    navLink.addEventListener('click', ()=>{
        menu.classList.add('translate-y-[-200%]')
        changeMenuIcon()
    })
})

function changeMenuIcon() {
    const isContainTranslate = menu.classList.contains('translate-y-[-200%]')
    const icon = isContainTranslate ? 'icon-menu' : 'icon-close'
    toggleMenuIcon.src = `./img/icon/${icon}.svg`
}

// Toggle Theme
const html = document.querySelector('html');
const toggleTheme = document.querySelector('#toggle-theme');
const toggleThemeIcon = toggleTheme.querySelector('img');

toggleTheme.addEventListener('click', () => {
    html.classList.toggle('dark')
    const isDark = html.classList.contains('dark')
    const themeIcon = isDark ? 'light' : 'dark'
    toggleThemeIcon.src = `./img/icon/icon-${themeIcon}.svg`
})