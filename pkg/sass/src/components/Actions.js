import React from "react";
import {Button, Grid} from "@mui/material";

export default function Actions() {

    const mirrorINT = () => {
        console.log("mirrorINT")
    }

    const mirrorPROD = () => {
        console.log("mirrorPROD")
    }

    return (
        <Grid container spacing={2} style={{marginTop: "10px"}}>
            <Grid item xs={6} >
                <Button variant="contained" onClick={mirrorINT}>Mirror INT</Button>
            </Grid>
            <Grid item xs={6}>
                <Button variant="contained" onClick={mirrorPROD}>Mirror PROD</Button>
            </Grid>
        </Grid>
    )
}