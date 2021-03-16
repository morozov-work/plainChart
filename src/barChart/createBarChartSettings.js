import animateClick from '../services/animateClick.js';

export default function createBarChartSettings(width, height, bright, columnWidth, gap, fontSize, scale) {
    const chartSettings = document.querySelector('.chartSettings');

    chartSettings.innerHTML = `
                            <div class="plainChart-options-wrapper">
                                <div> 
                                    width
                                    <input 
                                        type="range" 
                                        class="plainChart-options plainChart-width" 
                                        min="200" 
                                        value="${width}"
                                        max="900" 
                                        step="any">
                                </div>
                                <div> 
                                    height 
                                    <input 
                                        type="range" 
                                        class="plainChart-options plainChart-height" 
                                        min="200" 
                                        value="${height}"
                                        max="900" 
                                        step="any">
                                </div>
                                <div> 
                                    bright 
                                    <input 
                                        type="range" 
                                        class="plainChart-options plainChart-bright" 
                                        min="0" 
                                        value="${bright}"
                                        max="5" 
                                        step="any">
                                </div>
                                <div> 
                                    columnWidth 
                                    <input 
                                        type="range" 
                                        class="plainChart-options plainChart-columnWidth" 
                                        min="10" 
                                        value="${columnWidth}"
                                        max="40" 
                                        step="any">
                                </div>
                                <div> 
                                    gap 
                                    <input 
                                        type="range" 
                                        class="plainChart-options plainChart-gap" 
                                        min="0" 
                                        value="${gap}"
                                        max="50" 
                                        step="any">
                                </div>
                                <div> 
                                    fontSize 
                                    <input 
                                        type="range" 
                                        class="plainChart-options plainChart-fontSize" 
                                        min="5" 
                                        value="${fontSize}"
                                        max="20" 
                                        step="any">
                                </div>
                                <div> 
                                    scale 
                                    <input 
                                        type="range" 
                                        class="plainChart-options plainChart-scale" 
                                        min="0.1" 
                                        value="${scale}"
                                        max="2" 
                                        step="any">
                                </div>
                                <button class="plainChart-EditBtn plainChart-button-color"><p>Edit</p></button>
                            </div>
                            `;


    const widthInput = document.querySelector('.plainChart-width');
    const heightInput = document.querySelector('.plainChart-height');
    const brightInput = document.querySelector('.plainChart-bright');
    const columnWidthInput = document.querySelector('.plainChart-columnWidth');
    const gapInput = document.querySelector('.plainChart-gap');
    const fontSizeInput = document.querySelector('.plainChart-fontSize');
    const scaleInput = document.querySelector('.plainChart-scale');
    
    
    const editBtn = document.querySelector('.plainChart-EditBtn');
    animateClick(editBtn, '.plainChart-button-color', 'chartButton-clicked');
    

    return { 
        widthInput, 
        heightInput, 
        brightInput, 
        columnWidthInput, 
        gapInput, 
        fontSizeInput, 
        scaleInput, 
        editBtn };
}
