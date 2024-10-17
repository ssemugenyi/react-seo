import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Home = () => {
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
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </>
  );
};

export default Home;
