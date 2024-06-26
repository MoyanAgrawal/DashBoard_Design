import React from "react";
import SideNav from "../components/SideNav";
import Box from "@mui/material/Box";
import NavBar from "../components/NavBar";
import { Grid, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import HBarChart from "../charts/HBarChart";
import GeoChart from "../charts/GeoChart";
import PieChart from "../charts/PieChart";
import CountUp from "react-countup";

function Analytics() {
  return (
    <>
      <div className="bgColor">
        <NavBar />
        <Box height={55} />
        <Box sx={{ display: "flex" }}>
          <SideNav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Stack spacing={2}>
                  <Card
                    sx={{ minWidth: 49 + "%", height: 142 }}
                    className="gradient"
                  >
                    <CardContent>
                      <div className="colorWhite">{/* <PaymentIcon /> */}</div>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="colorWhite"
                      >
                        <CountUp start={0} end={22000} duration={1.25} />
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Total Earning
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{ minWidth: 49 + "%", height: 142 }}
                    className="gradient"
                  >
                    <CardContent>
                      <div className="colorWhite">{/* <PaymentIcon /> */}</div>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="colorWhite"
                      >
                        <CountUp start={0} end={22000} duration={1.25} />
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Total Earning
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
              <Grid item xs={3}>
                <Stack spacing={2}>
                  <Card
                    sx={{ minWidth: 49 + "%", height: 142 }}
                    className="gradientLight"
                  >
                    <CardContent>
                      <div className="colorWhite">{/* <PaymentIcon /> */}</div>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="colorWhite"
                      >
                        <CountUp start={0} end={42000} duration={1.75} />
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Total Earning
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{ minWidth: 49 + "%", height: 142 }}
                    className="gradientLight"
                  >
                    <CardContent>
                      <div className="colorWhite">{/* <PaymentIcon /> */}</div>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="colorWhite"
                      >
                        <CountUp start={0} end={12000} duration={0.75} />
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Total Earning
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Card sx={{ minWidth: 100 + "%", height: 300 }}>
                  <CardContent>
                    <HBarChart />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={8}>
                <Card sx={{ minWidth: 100 + "%", height: 320 }}>
                  <CardContent>
                    <GeoChart />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ minWidth: 100 + "%", height: 320 }}>
                  <CardContent>
                    <PieChart />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
}

export default Analytics;
