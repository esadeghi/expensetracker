import React from "react";
import ChartBar from "./ChartBar/ChartBar";

import './Chart.css';

const Chart = props => {

    const dataPointsValues = props.dataPoints.map(datapoint => datapoint.value);
    console.log(dataPointsValues);
    const maximumTotal = Math.max(...dataPointsValues);
    console.log(maximumTotal);

    return (<div className="chart">
        {props.dataPoints.map(datapoint => <ChartBar 
        key={datapoint.label} 
        value={datapoint.value} 
        maxValue={maximumTotal} 
        label={datapoint.label} />)}
    </div>
    )};

export default Chart;