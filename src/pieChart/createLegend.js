export let selectedSector;

const createLegend = (wrapper, labels, colors,  updateChart, checkbox) => {
    const legend = document.createElement('div');
    legend.classList.add('legend');

    if(!checkbox.checked) {
        legend.classList.add('hide');
    }
    
    wrapper.append(legend);

    labels.forEach((label, i) => {
        const wrap = document.createElement('div');
        wrap.style.cssText = `
                            display: flex; 
                            justify-content: between; 
                            align-items: center; 
                            margin: 0 10px;
                            padding: 0;
                            cursor: pointer;
                            `;

        const colorBlock = document.createElement('div');
        const titleBlock = document.createElement('div');

        legend.append(wrap);

        colorBlock.style.cssText = `
                                    width: 12px; 
                                    height: 12px; 
                                    margin: 5px;
                                    background-color: rgb(${colors[i]})
                                    `;
        wrap.append(colorBlock);

        titleBlock.textContent = labels[i];
        titleBlock.style.cssText = `
                                    font-style: normal; 
                                    font-size: 14px; 
                                    color: black; 
                                    font-family: sans-serif; 
                                    user-select: none
                                    `;
        wrap.append(titleBlock);


        wrap.addEventListener('click', () => {
            selectedSector = i;
            updateChart();
        });
    });
};

export default createLegend;