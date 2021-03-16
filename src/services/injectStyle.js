export default function injectStyle() {

    const head = document.querySelector('head'),
        style = document.createElement('style');

    style.innerHTML = `

        .plainChart {
            position: relative;
            display: inline-block;
        }

        .plainChart-options {
            cursor: pointer;
            user-select: none;
        }

        .chartSettings {
            border: 1px solid black;
            position: fixed;
            top: 20px;
            left: 350px;
        }

        .chartSettings-icon {
            cursor: pointer;
            position: absolute;
            top: 0;
            left: 0;
        }

        .legend {
            display: flex; 
            justify-content: flex-start; 
            flex-wrap: wrap;
        }

        .inputFields {
            box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex-wrap: wrap;
            align-items: stretch;
            padding: 10px;
            min-width: 400px;
        }

        .plainChart-input {
            margin-bottom: 10px;
            border: none;
            border-radius: 5px;
            resize: none;
            outline: none;
            font-size: 16px;
            font-style: normal;
            font-family: Courier;
            box-shadow: 0px 0px 4px 0px rgba(34, 60, 80, 0.2);
            padding: 5px;
        }

        .plainChart-input-name {
            font-weight: bold;
        }

        .plainChart-input-values, 
        .plainChart-input-labels { 
            font-weight: normal;
        }

        .plainChart-input-buttons {
            display: flex;
            justify-content: space-between;
            
            
        }

        .plainChart-createButton {
            box-shadow: 0px 0px 4px 0px rgba(34, 60, 80, 0.2);
            border: none;
            outline: none;
            display: block;
            flex-grow: 1;
            border-radius: 5px;
            padding: 2em 0;
            transition: .5s;
            font-size: 16px;
            font-style: normal;
            font-family: Courier;
            font-weight: bold;
        }

        .plainChart-button-color {
            background-color: rgba(255, 255, 255, 0.2);
            transition: .2s;
        }

        .plainChart-button-color:hover, 
        .plainChart-EditBtn:hover {
            background-color: rgba(34, 60, 80, 0.2);
            transition: .1s;
        }



        .barChart-button {
            margin-right: 10px;
        }

        .plainChart-EditBtn {
            font-size: 16px;
            font-style: normal;
            font-family: Courier;
            outline: none;
            border: none;
            user-select: none;
            cursor: pointer;
            box-shadow: 0px 0px 4px 0px rgba(34, 60, 80, 0.2);
            margin: 10px;
            padding: 0;
        }

        .plainChart-EditBtn p {
            margin: 10px;
        }

        .chartButton-clicked {
            background-color: rgba(34, 60, 80, 0.2);
            box-shadow: 0px 0px 4px 0px rgba(34, 60, 80, 0.2) inset;
            transition: none;
            font-size: 15.9px;
            padding-left: .4px;
            padding-right: .4px;
        }

        .hide {
            display: none;
        }
    `;

    head.append(style);
}   
