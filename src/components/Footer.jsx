import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-stone-200 text-white py-6">
      <div className="text-center text-gray-700 mt-4">
        <p>&copy; {new Date().getFullYear()} Fahri Kuzey. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
