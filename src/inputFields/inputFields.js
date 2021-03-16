import animateClick from '../services/animateClick.js';

export default function renderInputFields(parent, values, labels) {

    const inputFields = document.createElement('div');
    inputFields.classList.add('inputFields');
    parent.append(inputFields);

    inputFields.innerHTML = `
        <input 
            type="text" 
            class="plainChart-input-name plainChart-input" 
            placeholder="Enter a name for the chart">
        <textarea 
            class="plainChart-input-values plainChart-input" 
            placeholder="Enter chart values separated by ','" 
            rows="6"></textarea>
        <textarea 
            class="plainChart-input-labels plainChart-input"  
            placeholder="Enter chart labels separated by ','" 
            rows="6"></textarea>
        <div class="plainChart-input-buttons">
            <button class="plainChart-createButton barChart-button plainChart-button-color ">
                New Bar Chart
            </button>
            <button class="plainChart-createButton pieChart-button plainChart-button-color ">
                New Pie Chart
            </button>
        </div>  
        `;


    const pieChartBtn = document.querySelector('.pieChart-button');
    const barChartBtn = document.querySelector('.barChart-button');
    const valuesInput = document.querySelector('.plainChart-input-values');
    const labelsInput = document.querySelector('.plainChart-input-labels');
    const nameInput = document.querySelector('.plainChart-input-name');


    valuesInput.value = values;
    labelsInput.value = labels;


    animateClick(barChartBtn, 'plainChart-button-color', 'chartButton-clicked');
    animateClick(pieChartBtn, 'plainChart-button-color', 'chartButton-clicked');

    return { barChartBtn, pieChartBtn, valuesInput, labelsInput };

}