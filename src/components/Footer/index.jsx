/* eslint-disable jsx-a11y/anchor-is-valid */
import "./style.scss"; //
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="logo.png" alt="E-commerce Logo" />
            <p>AgroNomix</p>
          </div>
          <div className="footer-links">
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="/products">Products</a>
                </li>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Categories</h4>
              <ul>
                <li>
                  <a href="/category/electronics">Electronics</a>
                </li>
                <li>
                  <a href="/category/clothing">Clothing</a>
                </li>
                <li>
                  <a href="/category/home">Home & Living</a>
                </li>
                <li>
                  <a href="/category/books">Books</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#">
                <AiFillFacebook />
              </a>
              <a href="#">
                <AiFillTwitterSquare />
              </a>
              <a href="#">
                <AiFillInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} AgroNomix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
