import animateClick from '../services/animateClick.js';

export default function createPieChartSettings(radius, donut) {
    const chartSettings = document.querySelector('.chart-settings');

    chartSettings.innerHTML = `
                            <div class="plainChart__options__wrapper">
                                <div class="plainChart__options">
                                    radius
                                    <input type="range" 
                                        class="plainChart__options pieChart__radius" 
                                        min="55" 
                                        value="${radius}"
                                        max="250" 
                                        step="any">
                                </div>
                                <div class="plainChart__options">
                                    donut
                                    <input type="range" 
                                        class="plainChart__options pieChart__donut"     
                                        min="0" 
                                        value="${donut}"
                                        max="95" 
                                        step="any">
                                </div>
                                <div class="plainChart__options">
                                    legend
                                    <input type="checkbox" 
                                        class="plainChart__options pieChart__legend-checkbox" checked>
                                </div>
                                <button class="plainChart__edit-button plainChart__button"><p>Edit</p></button>
                            </div>
                            `;

    const radiusInput = document.querySelector('.pieChart__radius');
    const donutInput = document.querySelector('.pieChart__donut');
    const legendCheckbox = document.querySelector('.pieChart__legend-checkbox');

    const editBtn = document.querySelector('.plainChart__edit-button');
    animateClick(editBtn, 'plainChart__button', 'plainChart__button_clicked');
    
    return { radiusInput, donutInput, legendCheckbox, editBtn };
}