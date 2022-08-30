import React from "react";
import {List} from "@mui/material";
import LogCard from "./LogCard";
import './LogsListView.css'
export default function LogsListView({data}) {
    return (
            <List className="List">
                {data.map((item) => (
                    <LogCard info={item}/>
                ))}
            </List>
        )
}