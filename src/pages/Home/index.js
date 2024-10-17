import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import testImage from "../../assets/images/ankole-4636125_1280.jpg";

const Home = () => {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>About</title>

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
        <meta name="og:url" property="og:url" content="/about" />
        <meta name="og:image" property="og:image" content={testImage} />
        <link rel="canonical" href="/about" />
        <meta name="description" content="About page" />
        <meta name="keywords" content="about, page" />
      </Helmet>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </>
  );
};

export default Home;
