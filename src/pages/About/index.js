import React from "react";
import { Helmet } from "react-helmet-async";
import Image from "../../assets/images/ankole-4636125_1280.jpg";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
        <meta name="description" content="About page" />
        <meta name="keywords" content="about, page" />
        <meta name="og:title" property="og:title" content="About" />
        <meta
          name="og:description"
          property="og:description"
          content="About page
        "
        />

        <meta
          name="og:site_name"
          property="og:site_name"
          content="React Starter"
        />
        <meta name="og:type" property="og:type" content="website" />
        <meta
          name="og:url"
          property="og:url"
          content="https://reactstarter.com/about"
        />
        <meta name="og:image" property="og:image" content={Image} />
        <link rel="canonical" href="/about" />
      </Helmet>
      <div>About</div>
    </>
  );
};

export default About;
