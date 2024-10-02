import React from "react";
import { Typography, Box, Grid, Button, CircularProgress } from "@mui/material";
import Requestproposal from "../components/Requestproposal";
import WhyChooseUs from "../components/whychoseus";

function About() {
  const progressData = [
    {
      value: 99,
      label: "Creative Approach",
      description:
        "Through our innovative and creative strategies, we continuously achieve excellent results.",
    },
    {
      value: 90,
      label: "Efficiency",
      description:
        "We strive to achieve maximum efficiency in all our processes to deliver the best results.",
    },
    {
      value: 85,
      label: "Client Satisfaction",
      description:
        "Our focus is on ensuring complete client satisfaction in every project we undertake.",
    },
  ];
  return (
    <>
      {/* 1st Section with Background Image */}
      <Box
        className="proposal text-white body-font relative"
        sx={{
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHBlb3BsZSUyMG1lZXRpbmd8ZW58MHwwfDB8fHwy')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Typography variant="h3" sx={{ color: "white", fontWeight: "bold" }}>
          DEVSCRIPTER - Fastest Growing Digital Marketing Company in USA
        </Typography>
      </Box>

      {/* Content Section */}
      <Box className="container px-5 py-5 mx-auto">
        <Grid
          container
          spacing={6}
          alignItems="center"
          justifyContent="center"
          textAlign="left"
        >
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom marginLeft={1}>
              ABOUT US
            </Typography>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
              Converting Leads Into Loyal Customers
            </Typography>
            <Typography variant="body1" fontSize={14} paragraph>
              DEVSCRIPTER is dedicated to providing small business owners with
              professional, high-quality websites at affordable rates. We are a
              passionate community of tech-savvy individuals who strive to
              empower businesses by creating websites that are not only
              functional but also visually appealing.
            </Typography>
            <Typography variant="body1" fontSize={14} paragraph>
              Our mission is to deliver solutions that reflect the value of each
              business while fostering their growth through collaboration and
              innovation.
            </Typography>
            <Typography variant="body1" fontSize={14} paragraph>
              At DEVSCRIPTER, we work closely with our clients, ensuring their
              success is our priority by offering comprehensive and affordable
              services that drive real results.
            </Typography>
            <Box mt={4}>
              <Button
                variant="contained"
                sx={{ marginRight: "10px", padding: "10px 20px" }}
              >
                Learn More About Our Services
              </Button>
              <Button variant="outlined" sx={{ padding: "10px 20px" }}>
                Contact Us
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: "100%",
                maxWidth: "400px",
                height: "auto",
                margin: "auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                alt="feature"
                className="object-cover object-center rounded-lg"
                src="https://dummyimage.com/400x450"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/*Section with Stats */}
      <Box className="mt-5">
        <section className="text-white body-font relative">
          <div className="container px-5 py-24 mx-auto flex flex-wrap h-screen items-center justify-center">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{
                backgroundImage:
                  "url('https://digitalauxilius.com/wp-content/uploads/2021/03/team2.jpg')",
              }}
            ></div>

            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

            {/* Content on top of background */}
            <div className="relative z-10 text-center">
              <div className="w-full mb-6">
                <Typography
                  variant="h3"
                  className="title-font font-bold mb-4 text-white"
                  sx={{ fontWeight: "bold" }}
                >
                  Completed Stories!
                </Typography>
                <Typography
                  className="leading-relaxed text-white mb-8"
                  sx={{ fontWeight: "bold" }}
                >
                  WE MAKE AWESOME CONTRIBUTIONS FOR OUR CLIENTS. CHECK OUT SOME
                  OF OUR WORK.
                </Typography>
              </div>

              {/* Stats section */}
              <Grid container spacing={4} justifyContent="center">
                <Grid item xs={6} sm={3} className="text-white">
                  <Typography variant="h4" className="font-bold">
                    2.7K
                  </Typography>
                  <Typography className="font-bold">Users</Typography>
                </Grid>
                <Grid item xs={6} sm={3} className="text-white">
                  <Typography variant="h4" className="font-bold">
                    1.8K
                  </Typography>
                  <Typography className="font-bold">Subscribes</Typography>
                </Grid>
                <Grid item xs={6} sm={3} className="text-white">
                  <Typography variant="h4" className="font-bold">
                    35
                  </Typography>
                  <Typography className="font-bold">Downloads</Typography>
                </Grid>
                <Grid item xs={6} sm={3} className="text-white">
                  <Typography variant="h4" className="font-bold">
                    4
                  </Typography>
                  <Typography className="font-bold">Products</Typography>
                </Grid>
              </Grid>
            </div>
          </div>
        </section>
      </Box>

      {/* 4rt Creative Section */}
      <Box className="container mx-auto py-12">
        {progressData.map((item, index) => (
          <Grid
            container
            spacing={2}
            alignItems="center"
            className="mb-10"
            key={index}
          >
            {/* Left Circular Progress */}
            <Grid item xs={12} md={6}>
              <Box className="flex justify-center">
                <Box className="relative">
                  <CircularProgress
                    variant="determinate"
                    value={item.value}
                    size={120}
                    thickness={4}
                    className="text-indigo-500"
                  />
                  <Box className="absolute inset-0 flex items-center justify-center">
                    <Typography
                      variant="h4"
                      component="div"
                      color="textPrimary"
                      className="text-indigo-500"
                    >
                      {item.value}%
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            {/* Right Content */}
            <Grid item xs={12} md={6}>
              <Box className="flex flex-col items-center md:items-start">
                <Typography
                  variant="h5"
                  className="text-indigo-500 text-center md:text-left"
                >
                  {item.label}
                </Typography>
                <Typography
                  variant="body1"
                  className="text-center md:text-left text-gray-600 leading-relaxed"
                >
                  {item.description}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Box>

      {/* Why choose us */}
      <Box sx={{ width: "100%", marginBottom: "0px" }}>
        <WhyChooseUs/>
      </Box>

      {/* Request Proposal Section */}
      <Box sx={{ width: "100%", marginTop: "5px" }}>
        <Requestproposal />
      </Box>
    </>
  );
}

export default About;
