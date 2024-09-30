import React from "react";
import { Typography, Box, Grid, Button } from "@mui/material";
import Requestproposal from "../components/Requestproposal";

function About() {
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
      <Box className="container px-5 py-24 mx-auto">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box className="w-full rounded-lg overflow-hidden">
              <img
                alt="feature"
                className="object-cover object-center h-full w-full"
                src="https://dummyimage.com/460x500"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              ABOUT Us
            </Typography>
            <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold" }}>
              Converting Leads into Loyal Customers
            </Typography>
            <Typography variant="body1" paragraph>
              DEVSCRIPTER is dedicated to providing small business owners with
              professional, high-quality websites at affordable rates. We are a
              passionate community of tech-savvy individuals who strive to
              empower businesses by creating websites that are not only
              functional but also visually appealing.
            </Typography>
            <Typography variant="body1" paragraph>
              Our mission is to deliver solutions that reflect the value of each
              business while fostering their growth through collaboration and
              innovation.
            </Typography>
            <Typography variant="body1" paragraph>
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
        </Grid>
      </Box>

      {/* 3rd Creative Section */}
      <Box className="bg-[#4a7766] py-12">
        <Grid container className="container mx-auto px-5" spacing={6}>
          <Grid item xs={12} md={6}>
            <Box className="w-full rounded-lg overflow-hidden">
              <img
                alt="feature"
                className="object-cover object-center h-full w-full"
                src="https://dummyimage.com/460x500"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="flex flex-col justify-center">
              {/* Creative Approach */}
              <Box className="flex items-start mb-10">
                <Box className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </Box>
                <Box ml={3}>
                  <Typography variant="h6" className="text-white">
                    Creative Approach
                  </Typography>
                  <Typography variant="body1" className="text-white">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </Typography>
                </Box>
              </Box>
              {/* Timeline Assurance */}
              <Box className="flex items-start mb-10">
                <Box className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <circle cx={6} cy={6} r={3} />
                    <circle cx={6} cy={18} r={3} />
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                  </svg>
                </Box>
                <Box ml={3}>
                  <Typography variant="h6" className="text-white">
                    Timeline Assurance
                  </Typography>
                  <Typography variant="body1" className="text-white">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </Typography>
                </Box>
              </Box>
              {/* Granted Success */}
              <Box className="flex items-start">
                <Box className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                </Box>
                <Box ml={3}>
                  <Typography variant="h6" className="text-white">
                    Granted Success
                  </Typography>
                  <Typography variant="body1" className="text-white">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </Typography>
                </Box>
              </Box>
            </div>
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
                  WE MAKE AWESOME CONTRIBUTIONS FOR OUR
                  CLIENTS. CHECK OUT SOME OF OUR WORK.
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

      {/* Request Proposal Section */}
      <Box sx={{ width: "100%", marginTop: "20px" }}>
        <Requestproposal />
      </Box>
    </>
  );
}

export default About;
