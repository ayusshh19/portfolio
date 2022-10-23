import './navbar.css'
const Navbar = () => {
  return (
    <div className="nav">
      <div className="left">
        <div className="heading">
          <h1>Ayush</h1>
        </div>
        <div className="toggle">
          <h1>Toggle</h1>
        </div>
      </div>
      <div className="right">
        <ul>
          <li>HOME</li>
          <li>Service</li>
          <li>Experience</li>
          <li>Portfolio</li>
          <li>Testimonials</li>
        </ul>
        <div className="contact-us">
          <button className='cont-button'>Contact us</button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
