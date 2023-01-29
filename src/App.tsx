import logo from "./assets/logo.svg";
import logo_big from "./assets/logo_big.svg";

import heroImage from "./assets/hero_image.svg";
import sheild from "./assets/sheild.svg";
import computer from "./assets/computer.svg";
import time from "./assets/time.svg";
import folder from "./assets/folder.svg";
import swirl from "./assets/swirl.svg";
import Oval from "./assets/Oval.svg";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import quote from "./assets/quote.svg";

import mail from "./assets/mail.svg";
import location from "./assets/location.svg";
import phone from "./assets/phone.svg";
import facebook from "./assets/facebook.svg";
import instagram from "./assets/instagram.svg";
import twitter from "./assets/twitter.svg";

export default function App() {
  return (
    <div className="container px-9 mx-auto">
      <nav className="flex justify-between align-center my-6">
        <img src={logo} alt="" />
        <ul className="flex gap-4">
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">Sign In</a>
          </li>
        </ul>
      </nav>
      <section className="text-center flex flex-col items-center my-24 flow">
        <img src={heroImage} alt="" />
        <h1 className="text-3xl font-bold">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="font-sans text-sm">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <button className="bg-blue-500 w-full py-4 rounded-full">
          Get Started
        </button>
      </section>
      <section className="my-40">
        <ul className="flex flex-col gap-20">
          <li className="flex flex-col items-center text-center">
            <img src={computer} alt="" />
            <h4 className="text-lg font-bold my-4">
              Access your files, anywhere
            </h4>
            <p>
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </p>
          </li>
          <li className="flex flex-col items-center text-center">
            <img src={sheild} alt="" />
            <h4 className="text-lg font-bold my-4">Security you can trust</h4>
            <p>
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </p>
          </li>
          <li className="flex flex-col items-center text-center">
            <img src={time} alt="" />
            <h4 className="text-lg font-bold my-4">Real-time collaboration</h4>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </li>
          <li className="flex flex-col items-center text-center">
            <img src={folder} alt="" />
            <h4 className="text-lg font-bold my-4">Store any type of file</h4>
            <p>
              Whether you're sharing holidays photos or work documents, Fylo has
              you covered allowing for all file types to be securely stored and
              shared.
            </p>
          </li>
        </ul>
      </section>
      <section className="flex flex-col  my-40 flow">
        <img src={swirl} className="text-center" alt="" />
        <h4 className="text-lg font-bold">Stay productive, wherever you are</h4>
        <p className="">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <div>
          <button className="pb-2 flex items-center gap-2 text-[#5FD9D2] border-b-2 border-b-[#5FD9D2] text-lg">
            See how Fylo works
            <span>
              <img src={Oval} alt="" />
            </span>
          </button>
        </div>
      </section>
      <section>
        <ul className="flex flex-col gap-8 relative">
          <li className="bg-[#202A3C] custom-shadow py-10 px-8 flow">
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="flex gap-4">
              <img src={img1} className="h-12 w-12" alt="" />
              <div className="">
                <p>Satish Patel</p>
                <p className="opacity-60">Founder & CEO, Huddle</p>
              </div>
            </div>
          </li>
          <li className="bg-[#202A3C] custom-shadow py-10 px-8 flow">
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="flex gap-4">
              <img src={img2} className="h-12 w-12" alt="" />
              <div>
                <p>Bruce McKenzie</p>
                <p className=" opacity-60">Founder & CEO, Huddle</p>
              </div>
            </div>
          </li>
          <li className="bg-[#202A3C] custom-shadow py-10 px-8 flow">
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="flex gap-4">
              <img src={img3} className="h-12 w-12" alt="" />
              <div className="">
                <p>Iva Boyd</p>
                <p className="opacity-60">Founder & CEO, Huddle</p>
              </div>
            </div>
          </li>
          <div className="absolute text-xl -top-4 -z-10">
            <img src={quote} className="h-12 w-12" alt="" />
          </div>
        </ul>
      </section>

      <section className="bg-[#202A3C] custom-shadow my-40 py-10 px-8 flow">
        <h3 className="text-lg font-bold my-4">Get early access today</h3>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <input
          className="w-full rounded-full py-4 px-4 text-black"
          type="text"
          placeholder="email@example.com"
        />
        <button className="custom-button py-4 font-bold text-lg w-full rounded-full">
          Get Started For Free
        </button>
      </section>
      <footer className="my-40 flow">
        <img src={logo_big} alt="" />
        <div className="flow">
          <div className="flex gap-4 align-center">
            <img src={location} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="flex gap-4 align-center">
            <img src={phone} alt="" />
            <p>+1-543-123-4567</p>
          </div>
          <div className="flex gap-4 align-center">
            <img src={mail} alt="" />
            <p>example@fylo.com </p>
          </div>
        </div>
        <ul className="flex flex-col gap-4 my-4">
          <li>About Us</li>
          <li>Jobs</li>
          <li>Press</li>
          <li>Blog</li>
        </ul>
        <ul className="flex flex-col gap-4">
          <li>Contact Us</li>
          <li>Terms</li>
          <li>Privacy</li>
        </ul>
        <div className="flex">
          <img src={facebook} />
          <img src={instagram} />
          <img src={twitter} />
        </div>
      </footer>
    </div>
  );
}
