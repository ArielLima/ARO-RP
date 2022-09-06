import React from "react";
import { Chart } from "react-google-charts";
import {Grid} from "@mui/material";

export default function Metrics() {
    return (
        <div>
            <CalendarChart/>
        </div>
    )
}

function PieChart({}) {
    const options = {
        title: "Success Rate",
        pieHole: 0.4,
        is3d: false,
        colors: ["#d10d0d", "#22ab3e"]
    }
    return (
        <Chart
            chartType="PieChart"
            data={[
                ["Mirrors", "Success Rate"],
                ["Errors", 8],
                ["Success", 14]]}
            options={options}
            width="100%"
            height="400px"
        />
    )
}

function CalendarChart() {

    const data = [
        [
            { type: "date", id: "Date" },
            { type: "number", id: "Won/Loss" },
        ],
        [new Date(2013, 2, 4), 10],
        [new Date(2013, 2, 5), 3],
        [new Date(2013, 2, 7), -1],
        [new Date(2013, 2, 8), 2],
        [new Date(2013, 2, 12), -1],
        [new Date(2013, 2, 13), 1],
        [new Date(2013, 2, 15), 1],
        [new Date(2013, 2, 16), -4],
        [new Date(2013, 1, 4), 10],
        [new Date(2013, 1, 5), 3],
        [new Date(2013, 1, 7), -1],
        [new Date(2013, 1, 8), 2],
        [new Date(2013, 1, 12), -1],
        [new Date(2013, 1, 13), 1],
        [new Date(2013, 1, 15), 1],
    ];

    const options = {
        title: "Mirror PROD History"
    };

    return (
        <div style={{display: "flex", flexDirection: "row", backgroundColor: "green"}}>
            <div style={{flex: 1, backgroundColor: "green", height: "15vh"}}></div>
            <div style={{flex: 1, backgroundColor: "red", height: "15vh"}}>
                <Chart
                    chartType="Calendar"
                    data={data}
                    options={options}
                />
            </div>
            <div style={{flex: 2, backgroundColor: "green", height: "15vh"}}></div>

            {/*<Chart*/}
            {/*    chartType="Calendar"*/}
            {/*    data={data}*/}
            {/*    options={{*/}
            {/*        title: "Mirror INT History"*/}
            {/*    }}*/}
            {/*/>*/}
        </div>
    );
}