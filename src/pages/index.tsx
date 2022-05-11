import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

const IndexPage = () => {
  return (
    <StaticImage
      alt="Group photo with a HackerspaceSG logo and Mitch Altman in December 2014"
      src="../images/hero-mitch.jpg"
    />
  );
};

export default IndexPage;
