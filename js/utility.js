export const utility = {

    changeAppearance: function ({elementId, background}){

        const element = document.getElementById(elementId)

        element.style.background = background
        
    }
}