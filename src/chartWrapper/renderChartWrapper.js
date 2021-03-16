import settingsIcon from '../services/settingsIcon.js';

export default function renderChartWrapper(parent) {

    function addDiv(parent, cssClass) {
        const newDiv = document.createElement('div');
        newDiv.classList.add(cssClass);
        parent.append(newDiv);
        return newDiv;
    }

    const plainChart = addDiv(parent, 'plainChart');
    const chartWrapper = addDiv(plainChart, 'chartWrapper');
    const chartSettings = addDiv(plainChart, 'chartSettings');
    const icon = addDiv(plainChart, 'chartSettings-icon');

    icon.addEventListener('click', () => {
        chartSettings.classList.toggle('hide');
    });

    settingsIcon(icon);
}