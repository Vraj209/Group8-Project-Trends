import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear(); // Efficiently get the current year once

  return (
    <footer className="bg-blue-800 text-white p-4">
      <div className="container mx-auto text-center">
        <div className="py-4">
          <h3 className="text-xl font-bold">Connect With Us</h3>
          <p className="text-sm mt-2">
            Follow us on social media for updates and special offers:
          </p>
          <div className="flex justify-center space-x-4 mt-3">
            <Link to="/social/facebook" className="hover:text-blue-300 transition-colors duration-300 ease-in-out">
              Facebook
            </Link>
            <Link to="/social/twitter" className="hover:text-blue-300 transition-colors duration-300 ease-in-out">
              Twitter
            </Link>
            <Link to="/social/instagram" className="hover:text-blue-300 transition-colors duration-300 ease-in-out">
              Instagram
            </Link>
          </div>
        </div>
        <div className="border-t border-blue-700 pt-4">
          <p>
            © {year} Car Rental Service. All rights reserved.
          </p>
          <div>
            <Link to="/privacy-policy" className="hover:text-blue-300 transition-colors duration-300 ease-in-out">
              Privacy Policy
            </Link>
            <span> | </span>
            <Link to="/terms-of-service" className="hover:text-blue-300 transition-colors duration-300 ease-in-out">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
