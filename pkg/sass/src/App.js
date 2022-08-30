import './App.css';
import {Grid} from "@mui/material";

import LogsListView from "./components/LogsListView";
import Actions from "./components/Actions";
import {MockData} from "./MockData";

function App() {
  // Sort data
  MockData.sort((a, b) => b.date - a.date)

  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Actions/>
        </Grid>
        <Grid item xs={12}>
          <LogsListView data={MockData} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
