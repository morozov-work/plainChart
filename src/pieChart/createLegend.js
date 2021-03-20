export let selectedSector;

const createLegend = (wrapper, labels, colors,  updateChart, checkbox) => {
    const legend = document.createElement('div');
    
    legend.classList.add('pieChart__legend');

    if(!checkbox.checked) {
        legend.classList.add('chart-elem_hidden');
    }
    
    wrapper.append(legend);

    labels.forEach((label, i) => {
        const wrap = document.createElement('div');
        wrap.classList.add('pieChart__legend__wrap');

        const colorBlock = document.createElement('div');
        const titleBlock = document.createElement('div');

        legend.append(wrap);

        colorBlock.classList.add('pieChart__legend__colorBlock');
        colorBlock.style.cssText = `background-color: rgb(${colors[i]})`;
        wrap.append(colorBlock);

        titleBlock.textContent = labels[i];
        titleBlock.classList.add('pieChart__legend__titleBlock');
        wrap.append(titleBlock);


        wrap.addEventListener('click', () => {
            selectedSector = i;
            updateChart();
        });
    });
};

export default createLegend;