import { utility } from "./utility.js"

// const body = document.getElementById('body')

window.addEventListener('scroll', function (event) {
   utility.changeAppearance({elementId: 'nav', background: 'transparent'})
})