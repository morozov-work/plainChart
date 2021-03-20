import animateClick from '../services/animateClick.js';

export default function createBarChartSettings(width, height, bright, columnWidth, gap, fontSize, scale) {
    const chartSettings = document.querySelector('.chart-settings');

    chartSettings.innerHTML = `
                            <div class="plainChart__options__wrapper">
                                <div> 
                                    width
                                    <input 
                                        type="range" 
                                        class="plainChart__options barChart__width" 
                                        min="200" 
                                        value="${width}"
                                        max="900" 
                                        step="any">
                                </div>
                                <div> 
                                    height 
                                    <input 
                                        type="range" 
                                        class="plainChart__options barChart__height" 
                                        min="200" 
                                        value="${height}"
                                        max="900" 
                                        step="any">
                                </div>
                                <div> 
                                    bright 
                                    <input 
                                        type="range" 
                                        class="plainChart__options barChart__bright" 
                                        min="0" 
                                        value="${bright}"
                                        max="5" 
                                        step="any">
                                </div>
                                <div> 
                                    columnWidth 
                                    <input 
                                        type="range" 
                                        class="plainChart__options barChart__column-width" 
                                        min="10" 
                                        value="${columnWidth}"
                                        max="40" 
                                        step="any">
                                </div>
                                <div> 
                                    gap 
                                    <input 
                                        type="range" 
                                        class="plainChart__options barChart__gap" 
                                        min="0" 
                                        value="${gap}"
                                        max="50" 
                                        step="any">
                                </div>
                                <div> 
                                    fontSize 
                                    <input 
                                        type="range" 
                                        class="plainChart__options barChart__font-size" 
                                        min="5" 
                                        value="${fontSize}"
                                        max="20" 
                                        step="any">
                                </div>
                                <div> 
                                    scale 
                                    <input 
                                        type="range" 
                                        class="plainChart__options barChart__scale" 
                                        min="0.1" 
                                        value="${scale}"
                                        max="2" 
                                        step="any">
                                </div>
                                <button class="plainChart__edit-button plainChart__button"><p>Edit</p></button>
                            </div>
                            `;


    const widthInput = document.querySelector('.barChart__width'),
        heightInput = document.querySelector('.barChart__height'),
        brightInput = document.querySelector('.barChart__bright'),
        columnWidthInput = document.querySelector('.barChart__column-width'),
        gapInput = document.querySelector('.barChart__gap'),
        fontSizeInput = document.querySelector('.barChart__font-size'),
        scaleInput = document.querySelector('.barChart__scale');
    
    
    const editBtn = document.querySelector('.plainChart__edit-button');
    animateClick(editBtn, 'plainChart__button', 'plainChart__button_clicked');
    

    return { 
        widthInput, 
        heightInput, 
        brightInput, 
        columnWidthInput, 
        gapInput, 
        fontSizeInput, 
        scaleInput, 
        editBtn 
    };
}
