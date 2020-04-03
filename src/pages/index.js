import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <Layout>
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </Layout>
  );
};

export default Index;
