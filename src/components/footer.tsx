import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className='footer footer-center p-10 bg-base-200 text-base-content rounded'>
      <nav>
        <div className='grid grid-flow-col gap-10'>
          <Link
            target='_blank'
            href={"https://www.linkedin.com/in/agustinpfarherr/"}
          >
            <FaLinkedin className='h-10 w-10' />
          </Link>

          <Link target='_blank' href={"https://github.com/Lylhium"}>
            <FaGithub className='h-10 w-10' />
          </Link>
          <Link
            target='_blank'
            href={
              "mailto:agustinpfarherr@gmail.com?subject=Hello Agustín&body="
            }
          >
            <SiGmail className='h-10 w-10' />
          </Link>
        </div>
      </nav>
      <aside>
        <p>Developed by Agustín Pfarherr </p>
      </aside>
    </footer>
  );
};

export default Footer;
