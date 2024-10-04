import { MailOutlined, PlaceOutlined } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

function Contact() {
  return (
    <>
      {/* Subheader Section with Background Image */}
      <Box className="proposal">
        <Typography variant="h4" align="center" color="#fff" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="subtitle1" align="center" color="#fff">
          We are here to assist you
        </Typography>
      </Box>

      {/* Contact detail section */}
      <Box textAlign={"center"} fontSize={"20px"}>
        <Grid container>
          {/* Pakistan Office */}
          <Grid item xs={12} md={4}>
            <Box p={6} height={"100%"}>
              <PlaceOutlined />
              <Typography variant="h6" className="font-bold mb-2 py-5">
                Pakistan Office
              </Typography>
              <Typography className="py-5">
                Suite# 610, Park Avenue, PECHS Block-6, Karachi 75400, Pakistan
              </Typography>
              <Typography className="py-5">Timings: 10 AM to 6 PM (GMT+5)</Typography>
            </Box>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Box p={6} sx={{ backgroundColor: "#f4f4f4", color: "#333", height: "100%" }}>
              <MailOutlined />
              <Box>
                <Typography variant="h6" className="font-bold mb-2 py-5">
                  Contact Us
                </Typography>
                <Typography>Call (US): (832) 548-5844</Typography>
                <Typography>Call (Pak): +92-309-2156445</Typography>
              </Box>
              <Box>
                <Typography variant="h6" className="font-bold mb-2 py-5">
                  Email Us 
                </Typography>
                <Typography>General: hello(@)zeracreative.com</Typography>
                <Typography>HR: hr(@)zeracreative.com</Typography>
              </Box>
            </Box>
          </Grid>

          {/* USA Offices */}
          <Grid item xs={12} md={4}>
            <Box p={6} sx={{ backgroundColor: "#000", color: "#fff", height: "100%" }}>
              <PlaceOutlined />
              <Typography variant="h6" className="font-bold mb-2 py-5">
                USA Offices
              </Typography>
              <Typography>
                Office #1: 30 N Gould St Ste R, Sheridan, WY 82801.
              </Typography>
              <Typography>
                Office #2: 49 Smith St. Saint Cloud, MN 56301.
              </Typography>
              <Typography className="py-5">Timings: 10 AM to 6 PM (GMT+5)</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Contact us form */}
      <Box sx={{ backgroundColor: "#4A7766", height:"100%", padding: "40px" }} >
        <section className="text-gray-600 body-font relative">
          <div className="container mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                Get in touch
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
                Let's work together.
              </p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-white"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                {/* Additional Fields */}
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="number"
                      className="leading-7 text-sm text-white"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="number"
                      name="number"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="budget"
                      className="leading-7 text-sm text-white"
                    >
                      Budget
                    </label>
                    <input
                      type="text"
                      id="budget"
                      name="budget"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="service"
                      className="leading-7 text-sm text-white"
                    >
                      Which service are you interested in? *
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    >
                      <option value="">Select a service</option>
                      <option value="webDevelopment">Web Development</option>
                      <option value="seo">SEO</option>
                      <option value="digitalMarketing">
                        Digital Marketing
                      </option>
                    </select>
                  </div>
                </div>

                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-white"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      defaultValue={""}
                    />
                  </div>
                </div>

                <div className="p-2 w-full">
                  <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Submit For Your Success
                  </button>
                </div>

                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                  <a className="text-indigo-500">example@email.com</a>
                  <p className="leading-normal my-5">
                    49 Smith St.
                    <br />
                    Saint Cloud, MN 56301
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Box>
    </>
  );
}

export default Contact;
