import logo from "../assets/images/logo-footer.png";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="logo" />
      <p className="footer__copyright">&copy; 2020 Kasa, All rights reserved</p>
    </footer>
  );
};

export default Footer;