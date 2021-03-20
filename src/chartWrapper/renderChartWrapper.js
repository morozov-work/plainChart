import settingsIcon from '../services/settingsIcon.js';

export default function renderChartWrapper(parent) {

    function addDiv(parent, cssClass) {
        const newDiv = document.createElement('div');
        newDiv.classList.add(cssClass);
        parent.append(newDiv);
        return newDiv;
    }

    const plainChart = addDiv(parent, 'plainChart');
    const chartWrapper = addDiv(plainChart, 'chart-wrapper');
    const chartSettings = addDiv(plainChart, 'chart-settings');
    const icon = addDiv(plainChart, 'chart-settings__icon');

    icon.addEventListener('click', () => {
        chartSettings.classList.toggle('chart-elem_hidden');
    });

    settingsIcon(icon);
}