import animateClick from '../services/animateClick.js';

export default function createPieChartSettings(radius, donut) {
    const chartSettings = document.querySelector('.chartSettings');

    chartSettings.innerHTML = `
                            <div class="plainChart-options-wrapper">
                                <div class="plainChart-options">
                                    radius
                                    <input type="range" 
                                        class="plainChart-options plainChart-radius" 
                                        min="55" 
                                        value="${radius}"
                                        max="250" 
                                        step="any">
                                </div>
                                <div class="plainChart-options">
                                    donut
                                    <input type="range" 
                                        class="plainChart-options plainChart-donut"     
                                        min="0" 
                                        value="${donut}"
                                        max="95" 
                                        step="any">
                                </div>
                                <div class="plainChart-options">
                                    legend
                                    <input type="checkbox" 
                                        class="plainChart-options plainChart-legend" checked>
                                </div>
                                <button class="plainChart-EditBtn plainChart-button-color"><p>Edit</p></button>
                            </div>
                            `;

    const radiusInput = document.querySelector('.plainChart-radius');
    const donutInput = document.querySelector('.plainChart-donut');
    const legendCheckbox = document.querySelector('.plainChart-legend');

    const editBtn = document.querySelector('.plainChart-EditBtn');
    animateClick(editBtn, '.plainChart-button-color', 'chartButton-clicked');
    

    return { radiusInput, donutInput, legendCheckbox, editBtn };
}