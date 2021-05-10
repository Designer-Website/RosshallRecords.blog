// const home = document.getElementById('homeEmulator')
// const profile = document.getElementById('profileEmulator')
// const stats = document.getElementById('statsEmulator')
// const quiz = document.getElementById('quizEmulator')
// const news = document.getElementById('newsEmulator')
// const shop = document.getElementById('shopEmulator')
// const game = document.getElementById('gameEmulator')
// const modal = document.getElementById('modalEmulator')


var currentPage = document.getElementById('homeEmulator');
var currentInfo = document.getElementById('homeInfo');
currentInfo.style.display = 'block'

function toPage(pageID) {
    // set style and move desired page to position
    page = document.getElementById(pageID + 'Emulator')
    page.style.transition = '0.5s'
    page.style.zIndex = '5'
    page.classList.add('center')
    page.classList.remove('right')

    // change color of the background to make sure the screen designs don't clash with the color of the bg
    if (pageID == 'game' || pageID == 'news') {
        document.getElementById('bgColor').style.backgroundColor = 'var(--darkHover)'
    } else {
        document.getElementById('bgColor').style.backgroundColor = 'var(--main-bg)'
        
    }

    //show desired page info
    pageInfo = document.getElementById(pageID + 'Info')
    pageInfo.style.display = 'block'

    //set style and current page to hide away
    page.style.zIndex = '1'
    currentPage.classList.remove('center')
    currentPage.classList.add('right')

    //set current page info to hide
    currentInfo.style.display = 'none'

    currentPage = page
    currentInfo = pageInfo
}

// Developer Tools

const handleThemeUpdate = (cssVars) => {
    const root = document.querySelector(':root');
    const keys = Object.keys(cssVars);
    keys.forEach(key => {
      root.style.setProperty(key, cssVars[key]);
    });
}

const dynamicInputs = document.querySelectorAll('input.input-color-picker');

  
  dynamicInputs.forEach((item) => {
    item.addEventListener('input', (e) => {
      const cssPropName = `--${e.target.getAttribute('data-id')}`;
      const cssWritten = document.getElementById(`${e.target.getAttribute('data-id')}--`)
      cssWritten.innerHTML = `        ${cssPropName}: ${e.target.value};`
      handleThemeUpdate({
        [cssPropName]: e.target.value
      });
    });
  });


 
const main_bg = document.getElementById('main-bg')
const light = document.getElementById('light')
const dark = document.getElementById('dark')
const dark_hover = document.getElementById('dark-hover')
const text_dark = document.getElementById('text-dark')
const text_light = document.getElementById('text-light')
const text_semi_light = document.getElementById('text-semi-light') 
const text_semi_semi_light = document.getElementById('text-semi-semi-light')
const alertCSS = document.getElementById('alert')
const lighter =  document.getElementById('lighter')

const main_bgCSS = document.getElementById('main-bg--')
const lightCSS = document.getElementById('light--')
const darkCSS = document.getElementById('dark--')
const dark_hoverCSS = document.getElementById('dark-hover--')
const text_darkCSS = document.getElementById('text-dark--')
const text_lightCSS = document.getElementById('text-light--')
const text_semi_lightCSS = document.getElementById('text-semi-light--') 
const text_semi_semi_lightCSS = document.getElementById('text-semi-semi-light--')
const alertCSSCSS = document.getElementById('alert--')
const lighterCSS =  document.getElementById('lighter--')

function resetColours() {
    main_bg.value = '#83c5be'
    light.value = '#edf6f9'
    dark.value = '#006d77'
    dark_hover.value = '#037b86'
    text_dark.value = '#3b3b3b'
    text_light.value = '#ffffff'
    text_semi_light.value = '#afabab'
    text_semi_semi_light.value = '#d8d8d8'
    alertCSS.value = '#cee8e6'
    lighter.value = '#a9d7d3'

    main_bgCSS.innerHtml = '        --main-bg: rgb(131,197,190);'
    lightCSS.innerHtml = '        --light: rgb(237,246,249);'
    darkCSS.innerHtml = '        --dark: rgb(0,109,119);'
    dark_hoverCSS.innerHtml = '        --darkHover: rgb(3, 123, 134);'
    text_darkCSS.innerHtml = '        --text-dark: rgb(59,59,59);'
    text_lightCSS.innerHtml = '        --text-light: rgb(255,255,255);'
    text_semi_lightCSS.innerHtml = '        --text-semi-light: rgb(175,171,171);'
    text_semi_semi_lightCSS.innerHtml = '        --text-semi-semi-light: rgb(216, 216, 216);'
    alertCSSCSS.innerHtml = '        --alert: rgb(206,232,230);'
    lighterCSS.innerHtml = '        --lighter: rgb(169,215,211);'
}
resetColours()


var toggleBrain = 0
function toggle() {
    if (toggleBrain == 0) {
        document.getElementById('openToggle').style.display = 'none'
        document.getElementById('closeToggle').style.display = 'block' 

        document.getElementById('developerTools').style.left = '0em'
        document.getElementById('cssCode').style.right = '-31em'
        document.getElementById('DeveloperTitle').style.left = '4em'

        toggleBrain = 1   
    } else {
        document.getElementById('openToggle').style.display = 'block'
        document.getElementById('closeToggle').style.display = 'none'

        document.getElementById('developerTools').style.left = '-5em'
        document.getElementById('cssCode').style.right = '2em'
        document.getElementById('DeveloperTitle').style.left = '-5em'

        toggleBrain = 0  
    }
}

function hideMessage() {
  document.getElementById('messageInfo').style.display = "none"
}

// var md = new MobileDetect(window.navigator.userAgent);
// if( md.tablet() ) {
//   document.getElementById('Body').style.fontSize = '14px'
// }
// if( md.phone() ) {
//   document.getElementById('Body').style.fontSize = '18px'
// }