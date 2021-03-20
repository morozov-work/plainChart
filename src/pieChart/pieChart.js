/*jshint -W030 */

import getColor from '../services/getColor.js';
import createLegend from './createLegend.js';
import {selectedSector} from './createLegend.js';
import createPieChartSettings from './createPieChartSettings.js';


export default class PieChart {
    constructor(values, labels, settings = {}) {
        this.values = values;
        this.labels = labels;
        this.colors = settings.colors.innerHTML.split(';');
        this.wrapper = document.querySelector('.chart-wrapper');

        const {currentRadius = 100, currentDonut = 50} = settings;

        const {radiusInput, donutInput, legendCheckbox, editBtn}  = createPieChartSettings(currentRadius, currentDonut);

        this.radiusInput = radiusInput;
        this.donutInput = donutInput;
        this.legendCheckbox = legendCheckbox;

        
        const createNewChart = () => {
            //====PROPERTIES==============
            this.height = this.radiusInput.value * 2.5;
            this.width = this.radiusInput.value * 2.5;
            this.center = { x: this.width / 2, y: this.height / 2 };
            this.radius = this.radiusInput.value;
            this.donut = this.donutInput.value;
            //============================

            //====NEW CANVAS==============
            const canvas = document.createElement('canvas');
            canvas.classList.add('chart');

            canvas.height = this.height;
            canvas.width = this.width;

            this.wrapper.append(canvas);

            const ctx = canvas.getContext('2d');
            //============================
            
            //====RESIZE==================
            const resize = (event) => {
                const Y = [];
                Y.push(event.clientY);
                Y.push(event.clientY);
            
                const moveToResize = (event) => {
                    Y.push(event.clientY);
                    Y.shift();
                    Y[1] > Y[0] ? this.radiusInput.value++ : this.radiusInput.value--; 
                    updateChart();
                };

                window.addEventListener('mousemove', moveToResize);

                window.addEventListener('mouseup', () => {
                    window.removeEventListener('mousemove', moveToResize);
                });
            };
            
            canvas.addEventListener('mousedown', resize);
            //=====================================
    
            //====CREATE ANGLES FOR SECTORS OF CHART=============
            const getAngles = () => {
                const sumValue = this.values.reduce((acc, cur) => acc + cur);
                const proportions = this.values.map(value => value / sumValue);
                const angles = proportions.map((prop, i, arr) => {
                    const obj = {};
        
                    if(i) {
                        const startPoint = proportions
                            .filter((prop, index) => index < i)
                            .reduce((acc, cur) => acc + cur);

                        obj.startAngle = 2 * Math.PI * startPoint;
                    } else {
                        obj.startAngle = 0;
                    }
                
                    obj.endAngle = 2 * Math.PI * prop + obj.startAngle;
        
                    return obj;
                });
                return angles;
            };

            const angles = getAngles();
            //=============================================

            //====CREATE SECTORS OF CHART==================
            const createSector = (start, end, color) => {
                ctx.beginPath();
                ctx.moveTo(this.center.x, this.center.y);

                ctx.lineTo(
                    this.center.x - this.radius * Math.cos(start), 
                    this.center.y - this.radius * Math.sin(start)
                    ); 

                ctx.arc(this.center.x, this.center.y, this.radius, start, end);

                ctx.fillStyle = `rgb(${color})`;
                ctx.fill();
            };   

            const createSelectedSector = (start, end, color) => {
                ctx.beginPath();
                ctx.moveTo(this.center.x, this.center.y);

                ctx.lineTo(
                    this.center.x - this.radius * 1.1 * Math.cos(start), 
                    this.center.y - this.radius * 1.1 * Math.sin(start)
                    ); 

                ctx.arc(this.center.x, this.center.y, this.radius * 1.1, start, end);

                ctx.fillStyle = `rgb(${color})`;
                ctx.fill();
            };    

            angles.forEach((item, i) => {
                let newColor;

                if(this.colors.length >= this.values.length) {
                    newColor = this.colors[i];
                } else {
                    newColor = getColor();
                    this.colors.push(newColor);
                }
        
                i === +selectedSector ? 
                createSelectedSector(item.startAngle, item.endAngle, newColor) : 
                createSector(item.startAngle, item.endAngle, newColor);
            });
            //===============================================

            //====CREATE DONUT CHART=========================
            const donut = this.radius * this.donut / 100;
            ctx.globalCompositeOperation = 'xor';
            ctx.fillStyle = 'white';
            ctx.beginPath();
            ctx.arc(this.center.x, this.center.y, donut, 0, 2 * Math.PI);
            ctx.fill();
            //===============================================
        };
        
        const updateChart = () => {
            this.wrapper.innerHTML = '';
            createNewChart();
            createLegend(this.wrapper, labels, this.colors, updateChart, this.legendCheckbox);
        };

        this.radiusInput.addEventListener('input', updateChart);
        this.donutInput.addEventListener('input', updateChart);
        
        this.legendCheckbox.addEventListener('click', () => {
            document.querySelector('.pieChart__legend')
            .classList.toggle('chart-elem_hidden');
        });

        updateChart();      
        
        return {radiusInput, donutInput, legendCheckbox, editBtn};
    }
}
