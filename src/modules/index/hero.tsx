import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Hero = () => {
    return (
            <StaticImage
            alt="Group photo with a HackerspaceSG logo and Mitch Altman in December 2014"
            src="../../images/hero-mitch.jpg"
            className="filter brightness-[0.2]"
            />
    )
  };
  
  export default Hero;
  