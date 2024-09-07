import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Header } from '../components/layout';
import Hero from '../modules/index/hero'

const IndexPage = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Hero />
      <Hero />
    </main>
  );
};

export default IndexPage;
