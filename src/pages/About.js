import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant - "The Hungry Robot" </Typography>
        <p>
        The restaurant, called "The Hungry Robot" is located in the heart of the city.
         It is a small, but cozy establishment with a warm and inviting atmosphere.
          The walls are decorated with colorful paintings, and the tables are set with white linens and fresh flowers.
           The menu features a variety of delicious dishes, all made with fresh, seasonal ingredients.
            The chef, who is originally from France, takes great pride in his work, and it shows in the food. 
            The portions are generous, and the prices are very reasonable.

The Hungry Robot is a great place to go for a casual meal with friends or family. 
The service is friendly and attentive, and the food is always cooked to perfection.
 If you're looking for a delicious and affordable meal in a warm and
 inviting atmosphere, then The Hungry Robot is the place for you.
        </p>
        <br />
       
      </Box>
    </Layout>
  );
};

export default About;
