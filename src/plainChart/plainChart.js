/*jshint -W116 */

import PieChart from '../pieChart/pieChart.js';
import BarChart from '../barChart/barChart.js';
import getColor from '../services/getColor.js';
import renderInputFields from '../inputFields/inputFields.js';
import renderChartWrapper from '../chartWrapper/renderChartWrapper.js';




export default class PlainChart {
    constructor(parent = 'no parent', data = 'no data') {
        
        //======VERIFICATION=========================================
        if(parent === 'no parent') throw new Error('No parent to create a chart');
        if(data === 'no data') throw new Error('No data to create a chart');

        const {type, values, labels, settings = {} } = data;

        if(!type || !values || !labels) throw new Error('No data to create a chart');
        //==========================================================




        //======PROPERTIES===========================================
        this.parent = parent;
        this.type = type;
        this.values = values;
        this.labels = labels;
        this.settings = settings;
        //==========================================================

        //=======SAVE COLORS SETTINGS===============================
        const colors = document.createElement('div');

        const updateColors = () => {
            colors.innerHTML = '';
        
            for(let i = 0; i < this.values.length; i++) {
                const newColor = getColor(this.bright);
                colors.innerHTML += `${newColor};`;
            }
        };

        if(!settings.colors) {
            updateColors();
            this.settings.colors = colors;
        } else {
            colors.innerHTML = settings.colors;
            this.settings.colors = colors; 
        }
        //==========================================================

        //========CREATE COMPONENTS=================================
        const createInputFields = () => {
            this.parent.innerHTML = '';

            const { 
                barChartBtn, 
                pieChartBtn, 
                valuesInput, 
                labelsInput 
            } = renderInputFields(this.parent, this.values, this.labels);

            pieChartBtn.addEventListener('click', () => {
                this.values = valuesInput.value;
                this.labels = labelsInput.value;
                createPieChart();
            });

            barChartBtn.addEventListener('click', () => {
                this.values = valuesInput.value;
                this.labels = labelsInput.value;
                createBarChart();
            });
        };




        const createPieChart = () => {
            this.parent.innerHTML = '';
            renderChartWrapper(this.parent);

            const {
                radiusInput, 
                donutInput, 
                legendCheckbox, 
                editBtn
            } = new PieChart(this.values, this.labels, this.settings);

            const updateCurrRadiusAndDonut = () => {
                this.settings.currentRadius = radiusInput.value;
                this.settings.currentDonut = donutInput.value;
            };

            editBtn.addEventListener('click', () => {
                updateCurrRadiusAndDonut();
                createInputFields();
            });

            radiusInput.addEventListener('input', updateCurrRadiusAndDonut);
            donutInput.addEventListener('input', updateCurrRadiusAndDonut);
        };




        const createBarChart = () => {
            this.parent.innerHTML = '';
            renderChartWrapper(this.parent);

            const { 
                widthInput, 
                heightInput, 
                brightInput, 
                columnWidthInput, 
                gapInput, 
                fontSizeInput, 
                scaleInput,
                colors, 
                editBtn } = new BarChart(this.values, this.labels, this.settings);
                
            const updateCurrSettings = () => {
                this.settings.CurrentWidth = widthInput.value;
                this.settings.CurrentHeight = heightInput.value;
                this.settings.CurrentBright = brightInput.value;
                this.settings.CurrentColumnWidth = columnWidthInput.value;
                this.settings.CurrentGap = gapInput.value;
                this.settings.CurrentFontSize = fontSizeInput.value;
                this.settings.CurrentScale = scaleInput.value;
                this.settings.colors = colors;
                };

                editBtn.addEventListener('click', () => {
                    updateCurrSettings();
                    createInputFields();
                });

                widthInput.addEventListener('input', updateCurrSettings);
                heightInput.addEventListener('input', updateCurrSettings);
                brightInput.addEventListener('input', updateCurrSettings);
                columnWidthInput.addEventListener('input', updateCurrSettings);
                gapInput.addEventListener('input', updateCurrSettings);
                fontSizeInput.addEventListener('input', updateCurrSettings);
                scaleInput.addEventListener('input', updateCurrSettings);

                updateCurrSettings();
        };
        //=================================================




        //=======SELECT CHART TYPE=========================
        switch(this.type) {
            case 'barChart':
                createBarChart();
                break;

            case 'pieChart':
                createPieChart();
                break;

            default:
                createInputFields();
        }
        //=================================================
    }




    //==================================================
    get values() {
        return this._values;
    }

    set values(values) {
        this._values = values.split(',').map(val => +val);
    }

    get labels() {
        return this._labels;
    }

    set labels(labels) {
        this._labels = labels.split(',');
    }
    //===================================================


    

    //====RETURN VALUES, LABELS AND CHART SETTINGS=======
    getData() {
        const ObjectForReturn = {
            type: this.type,
            values: this.values,
            labels: this.labels,
            settings: this.settings
        };

        ObjectForReturn.settings.colors = this.settings.colors.innerHTML;
        
        return ObjectForReturn;
    }
}



