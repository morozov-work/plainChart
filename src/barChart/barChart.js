import getColor from '../services/getColor.js';
import createBarChartSettings from '../barChart/createBarChartSettings.js';



export default class BarChart {
    constructor(values, labels, settings = {}) {
        this.values = values;
        this.labels = labels;
        this.colors = settings.colors;
        this.wrapper = document.querySelector('.chartWrapper');


const colors = this.colors;






const updateColors = () => {
    this.colors.innerHTML = '';

    for(let i = 0; i < this.values.length; i++) {
        const newColor = getColor(this.bright);
        this.colors.innerHTML += `${newColor};`;
    }

    
};






        const numberOfSerifs = 10 ;
        const fontColor = 'inherit';



        const { 
            CurrentWidth = 500, 
            CurrentHeight = 300, 
            CurrentBright = 1.5, 
            CurrentColumnWidth = 20, 
            CurrentGap = 0, 
            CurrentFontSize = 14, 
            CurrentScale = 1
            } = settings;

        const { 
            widthInput, 
            heightInput, 
            brightInput, 
            columnWidthInput, 
            gapInput, 
            fontSizeInput, 
            scaleInput, 
            editBtn }  = createBarChartSettings(
                                                CurrentWidth, 
                                                CurrentHeight, 
                                                CurrentBright, 
                                                CurrentColumnWidth, 
                                                CurrentGap, 
                                                CurrentFontSize, 
                                                CurrentScale
                                            );







        const createNewChart = () => {


        this.width = +widthInput.value;
        this.height = +heightInput.value;
        this.bright = +brightInput.value;
        this.columnWidth = +columnWidthInput.value;
        this.gap = +gapInput.value;
        this.fontSize = +fontSizeInput.value;
        this.fontColor = +fontColor;
        this.labelHeight = 2 * this.fontSize;
        this.valueWidth = 80;
        this.scale = +scaleInput.value;
        this.numberOfSerifs = numberOfSerifs;
        this.ratio = this.height / ( Math.max(...this.values) );


        this.canvas = (() => {
            const canvas = document.createElement('canvas');

            canvas.classList.add('chart');
            canvas.width = this.width;
            canvas.height = this.height;
            canvas.textContent = 'trial canvas';

            this.wrapper.append(canvas);

            return canvas;
        })();




        const ctx = this.canvas.getContext('2d');

        this.values.forEach( ( val, i, values ) => {

            const ratioValue = val * this.ratio * this.scale;

            let x = this.gap + i * (this.columnWidth + this.gap);

            const y = this.height - this.labelHeight - ratioValue;

            if(!val.indexOf) {
                x = this.valueWidth + i * (this.columnWidth + this.gap);
            }

            //======GET COLORS=================================
            
            ctx.fillStyle = `rgb(${this.colors.innerHTML.split(';')[i]})`;

            //=================================================

            ctx.fillRect(x, y, this.columnWidth, ratioValue);

            if(this.fontColor !== 'inherit') {
                ctx.fillStyle = this.fontColor;
            }

            ctx.font = `${this.fontSize}px serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(
                this.labels[i], 
                ( x + ( this.columnWidth/2 ) ), 
                ( this.height - (this.labelHeight/2) ), 
                this.columnWidth 
                );
        });

        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.moveTo(this.width, this.height - this.labelHeight);
        ctx.lineTo(this.valueWidth, this.height - this.labelHeight);
        ctx.lineTo(this.valueWidth, 0);
        ctx.stroke();

        for(let i = 0; i < this.numberOfSerifs; i++) {

            const workHeight = this.height - this.labelHeight;
            const totalScale = this.ratio * this.scale;
            const heightOfCurrentSerif = i*( workHeight / this.numberOfSerifs);

            const value = ( heightOfCurrentSerif / totalScale ).toFixed(1);
            const YOfSerif = workHeight - heightOfCurrentSerif;

            ctx.beginPath();
            ctx.strokeStyle = 'black';
            ctx.moveTo(this.valueWidth, YOfSerif);
            ctx.lineTo(this.valueWidth - 10, YOfSerif);
            ctx.stroke();

            ctx.textAlign = 'center';
            ctx.fillText(value, 30, YOfSerif);
        }
    };



    const updateChart = () => {
        this.wrapper.innerHTML = '';
        createNewChart();
    };



    widthInput.addEventListener('input', updateChart);
    heightInput.addEventListener('input', updateChart);
    brightInput.addEventListener('input', () => {  
        updateColors();
        updateChart(); 
    });
    columnWidthInput.addEventListener('input', updateChart);
    gapInput.addEventListener('input', updateChart);
    fontSizeInput.addEventListener('input', updateChart);
    scaleInput.addEventListener('input', updateChart);
    
    

    updateChart();




        return { 
            widthInput, 
            heightInput, 
            brightInput, 
            columnWidthInput, 
            gapInput, 
            fontSizeInput, 
            scaleInput, 
            colors,
            editBtn };
    } 
}

