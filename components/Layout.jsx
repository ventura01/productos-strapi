import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, title, description, header = true }) => {
  return (
    <div>
      <Head home>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
