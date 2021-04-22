import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import "./Cards.css";

export default function Cards({
  data: { confirmed, recovered, deaths, lastUpdate },
}) {
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <div className="card-container">
      <Grid container space={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className="card infected">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              INFECTED
            </Typography>
            <Typography variant="h5" gutterBottom>
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of active COVID cases
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className="card recovered">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              RECOVERED
            </Typography>
            <Typography variant="h5" gutterBottom>
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">Number of COVID recoveries</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className="card deaths">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              DEATHS
            </Typography>
            <Typography variant="h5" gutterBottom>
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">Number of COVID deaths</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}
