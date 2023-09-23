import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-8 flex flex-col items-center gap-4 text-center">
      <Image src="/images/logo.png" alt="NuCamp Logo" width={50} height={50} />

      <ul className="flex items-center gap-4">
        <li className="hover:underline">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:underline">
          <Link href="/directory">Directory</Link>
        </li>
        <li className="hover:underline">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:underline">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      <div>
        <a role="button" className="btn btn-link" href="tel:+12065551234">
          <i className="fa fa-phone" /> 1-206-555-1234
        </a>
        <br />
        <a
          role="button"
          className="btn btn-link"
          href="mailto:notreal@notreal.co">
          <i className="fa fa-envelope-o" /> campsites@nucamp.co
        </a>
      </div>
    </footer>
  );
};

export default Footer;
