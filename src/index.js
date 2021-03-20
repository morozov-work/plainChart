import PlainChart from './plainChart/plainChart.js';

import './style/style.scss';


export function init(parent, data) {
    return new PlainChart(parent, data);
}