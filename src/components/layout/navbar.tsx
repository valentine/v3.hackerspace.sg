import * as React from 'react';

import { Link } from 'gatsby';

import crestSVG from '../../images/hackerspacesg-crest.svg';
import crestPNG from '../../images/hackerspacesg-crest.png';

export interface NavbarProps {
  className?: string
  title: string
}

export const NavBar: React.FC<NavbarProps> = ({ className, title }) => {
  return (
    <nav className="fixed z-10 flex items-center justify-center w-screen h-16 bg-gradient-to-b from-black">
        <Link to="/" className="flex-shrink-0 w-16 ">
          <picture title="HackerspaceSG Crest">
            <source type="image/svg+xml" srcSet={crestSVG} />
            <img src={crestPNG} alt="HackerspaceSG Crest" />
          </picture>
        </Link>
      <div className="w-full max-w-4xl ml-5 font-mono">
        <ul className="flex flex-wrap text-gray-50">
          <li className="px-10"><a href="/">Home</a></li>
          <li className="px-10"><a href="/">Visit Us</a></li>
          <li className="px-10"><a href="/">Membership</a></li>
          <li className="px-10"><a href="/">About</a></li>
          <li className="px-10"><a href="/">Connect</a></li>
          <li className="px-10"><a href="/">Docs</a></li>
        </ul>
      </div>
    </nav>
  );
};
