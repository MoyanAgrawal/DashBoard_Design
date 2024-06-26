import React from "react";
import SideNav from "../components/SideNav";
import Box from "@mui/material/Box";
import NavBar from "../components/NavBar";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import { Card, Stack, Typography } from "@mui/material";
import "../Dash.css";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PaymentIcon from "@mui/icons-material/Payment";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import AccordianDash from "../components/AccordianDash"
import BarChart from "../charts/Barchart";
import CountUp from "react-countup";


function Home() {
  return (
    <>
      <div className="bgColor">
        <NavBar />
        <Box height={55} />
        <Box sx={{ display: "flex" }}>
          <SideNav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Stack direction="row" spacing={2}>
                  <Card
                    sx={{ minWidth: 49 + "%", height: 152 }}
                    className="gradient"
                  >
                    <CardContent>
                      <div className="colorWhite">
                        <PaymentIcon />
                      </div>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="colorWhite"
                      >
                        $
                        <CountUp start={0} end={500} duration={0.5} />
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
                    sx={{ minWidth: 49 + "%", height: 152 }}
                    className="gradientLight"
                  >
                    <CardContent>
                      <div className="colorWhite">
                        <LocalMallIcon />
                      </div>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="colorWhite"
                      >
                        $
                        <CountUp start={0} end={900} duration={0.75} />
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Total Order
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
              <Grid item xs={4}>
                <Stack spacing={2}>
                  <Card sx={{ maxWidth: 345 }} className="gradientLight">
                    <Stack direction="row">
                      <div className="iconStyle colorWhite">
                        <StorefrontIcon />
                      </div>
                      <div className="paddingAll">
                        <span className="priceTitle">$230K</span>
                        <br />
                        <span className="priceSubTitle">Total Income</span>
                      </div>
                    </Stack>
                  </Card>
                  <Card sx={{ maxWidth: 345 }}>
                    <Stack direction="row">
                      <div className="iconStyle">
                        <StorefrontIcon />
                      </div>
                      <div className="paddingAll">
                        <span className="priceTitle">$230K</span>
                        <br />
                        <span className="priceSubTitle">Total Income</span>
                      </div>
                    </Stack>
                  </Card>
                </Stack>
              </Grid>
            </Grid>
            <Box height={20} />
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Card sx={{ height: 62 + "vh" }}>
                  <CardContent>
                    <BarChart />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ height: 62 + "vh" }}>
                  <CardContent>
                    <div className="paddingAll">
                      <span className="priceTitle">Popular Products</span>
                      <br />
                    </div>
                    <AccordianDash number={1} />
                    <AccordianDash number={2} />
                    <AccordianDash number={3} />
                    <AccordianDash number={4} />
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

export default Home;
