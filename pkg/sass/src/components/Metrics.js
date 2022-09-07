import "./Metrics.css"
import React, {useState} from "react";
import {Button, Grid} from "@mui/material";
import TriggerProd from "./TriggerProd";
import TriggerInt from "./TriggerInt";
import { Chart } from 'primereact/chart';

export default function Metrics({data}) {
    return (
        <div>
            <PreviousRunsChart data={data} env="int"/>
            <PreviousRunsChart data={data} env="prod"/>
            <div className="PieChartDiv">
                <div style={{flex: 1}}>
                    <PieChart data={data} env="int"/>
                </div>
                <div style={{flex: 1}}>
                    <PieChart data={data} env="prod"/>
                </div>
            </div>
        </div>
    )
}

function PreviousRunsChart({data, env}) {
    let whichENV = env ==="prod" ? true : false
    let runCounter = 7
    console.log(whichENV)
    return (
        <div className="Main">
            <div className="Title">
                { whichENV ? "Prod Runs" : "Int Runs"}
            </div>
            {data.map((item) => {
                if(item.environment === env && runCounter > 0) {
                    const dateAndTime = new Date(item.date).toISOString().split('T')
                    const time = dateAndTime[1].split(':')
                    const date = dateAndTime[0]+'T'+time[0]+':'+time[1]
                    runCounter--;
                    let bColor = item.status ? '#8eea70' : '#f65f5f'
                    return (
                        <RunInfo color={bColor} title={date} txt={timeSince(item.date)}/>
                        // <div className="Run" style={{backgroundColor: bColor}} title={date}/>
                    )
                }
            })}
            <div className="TriggerButtonDiv">
            { whichENV ? (
                <Button className="Button" variant="contained" onClick={() => TriggerProd()}>New Run</Button>
            ) : (
                <Button className="Button" variant="contained" onClick={() => TriggerInt()}>New Run</Button>
            )}
            </div>
        </div>
    )
}

function RunInfo({title, color, txt}) {
    return(
        <div className="Run" style={{backgroundColor: color}} title={title}>
            {txt}
        </div>
    )
}

function PieChart({data, env}) {
    let successCount = 0
    let failCount = 0

    data.forEach((item) => {
        if(item.environment == env) {
            if(item.status) {
                successCount++
            } else {
                failCount++
            }
        }
    })

    const [chartData] = useState({
        labels: ['Success', 'Fail'],
        datasets: [
            {
                data: [successCount, failCount],
                backgroundColor: [
                    "#8eea70",
                    "#f65f5f",
                ],
                hoverBackgroundColor: [
                    "#d3efca",
                    "#fcbaba",
                ]
            }]
    });

    return (
        <div className="PieChartDiv">
            <Chart type="doughnut" data={chartData}/>
        </div>
    )
}

function timeSince(date) {
    var seconds = Math.floor((new Date() - date) / 1000);
    var interval = seconds / 31536000;
    if (interval > 1) {
        return Math.floor(interval) + "y";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + "mo";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + "d";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + "hrs";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + "min";
    }
    return Math.floor(seconds) + "sec";
}
