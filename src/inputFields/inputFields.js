import animateClick from '../services/animateClick.js';

export default function renderInputFields(parent, values, labels) {

    const inputFields = document.createElement('div');
    inputFields.classList.add('input-fields');
    parent.append(inputFields);

    inputFields.innerHTML = `
        <textarea 
            class="input-fields__input-values input-fields__input" 
            placeholder="Enter chart values separated by ','" 
            rows="6"></textarea>
        <textarea 
            class="input-fields__input-labels input-fields__input"  
            placeholder="Enter chart labels separated by ','" 
            rows="6"></textarea>
        <div class="input-fields__input-buttons">
            <button class="input-fields__create-button input-fields__barChart-button plainChart__button">
                New Bar Chart
            </button>
            <button class="input-fields__create-button input-fields__pieChart-button plainChart__button">
                New Pie Chart
            </button>
        </div>  
        `;


    const pieChartBtn = document.querySelector('.input-fields__pieChart-button'),
        barChartBtn = document.querySelector('.input-fields__barChart-button'),
        valuesInput = document.querySelector('.input-fields__input-values'),
        labelsInput = document.querySelector('.input-fields__input-labels');


    valuesInput.value = values;
    labelsInput.value = labels;


    animateClick(barChartBtn, 'plainChart__button', 'plainChart__button_clicked');
    animateClick(pieChartBtn, 'plainChart__button', 'plainChart__button_clicked');

    return { 
        barChartBtn, 
        pieChartBtn, 
        valuesInput, 
        labelsInput 
    };
}