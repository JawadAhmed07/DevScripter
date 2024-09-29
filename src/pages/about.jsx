import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import Subheader from "../components/Subheader";
import Features from "../components/Features";
import Requestproposal from "../components/Requestproposal";

function About() {
  return (
    <>
    <div >
    <Subheader parentPage="Home" currentPage="About Us" />
    </div>
    <Box className="container flex justify-center">
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box>
            <img
              src="https://media.licdn.com/dms/image/v2/D4E22AQHsKKtLErEeUQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1706904750939?e=2147483647&v=beta&t=NyCtAiFUAFRo8kDhaWGgtlBM6TeOJrJ7IhH-gr4DePE"
              alt="About Us"
              style={{ maxWidth: "80%", height: "auto", borderRadius: "10px", margin:"20px"  }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom>
            About DEVSCRIPTER
          </Typography>
          <Typography variant="body1" gutterBottom>
            DEVSCRIPTER is dedicated to providing small business owners
            with professional, high-quality websites at affordable rates. We are
            a passionate community of tech-savvy individuals who strive to
            empower businesses by creating websites that are not only functional
            but also visually appealing. Our mission is to deliver solutions
            that reflect the value of each business while fostering their growth
            through collaboration and innovation. At DEVSCRIPTERS, we work
            closely with our clients, ensuring their success is our priority by
            offering comprehensive and affordable services that drive real
            results.
          </Typography>
        </Grid>
        <Features />
      </Grid>
    </Box>
    <Box sx={{ width: '100%', marginTop: '20px' }}>
        <Requestproposal />
      </Box>
    </>
  );
}

export default About;
