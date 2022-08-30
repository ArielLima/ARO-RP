import React, {useState} from "react";
import {IconButton, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import './LogCard.css'


export default function LogCard({ info }) {

    const [expand, setExpand] = useState(false)
    const borderColor = info.status ? 'green' : 'red'

    // Format date
    const dateAndTime = new Date(info.date).toISOString().split('T')
    const time = dateAndTime[1].split(':')
    const title = info.environment + ' - ' + dateAndTime[0]+'T'+time[0]+':'+time[1]

    return (
        <div
            className="LogCardDiv"
             style={{border: `3px solid ${borderColor}`}}
        >
            <ListItem
                key={info.id}
                secondaryAction={
                    <IconButton className="LogCardButton" onClick={() => {setExpand(!expand)}}>
                        {expand ? (
                            <ArrowDropUpIcon/>
                        ) : (
                            <ArrowDropDownIcon/>
                        )}
                    </IconButton>
                }
            >
                <ListItemAvatar>
                    {
                        info.status ? (
                            <CheckCircleOutlinedIcon color="success" fontSize="large"/>
                        ) : (
                            <DoDisturbIcon fontSize="large" color="error"/>
                        )
                    }
                </ListItemAvatar>
                <ListItemText
                    primary={title}
                    secondary={expand ? info.log : ""}
                />
            </ListItem>
        </div>

    )
}