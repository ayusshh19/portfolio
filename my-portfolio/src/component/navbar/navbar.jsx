import "./navbar.css";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
const Navbar = () => {
  const togglebutton=()=>{
    const toggle=document.querySelector('.toggle')
    if (toggle.classList.contains('blackbox')) {
      toggle.classList.toggle('blackbox')
      toggle.classList.add('lightbox')
      document.querySelector('body').style.backgroundColor='white'
      document.querySelector('body').style.color='black'
      document.querySelector('body').classList.toggle('blackish')
      document.querySelector('body').classList.toggle('lightish')
      for (const item of document.querySelectorAll('.nav-link')) {
        item.style.color='black'
      }
      

    }
    else{
      toggle.classList.add('blackbox')
      toggle.classList.toggle('lightbox')
      document.querySelector('body').style.backgroundColor='black'
      document.querySelector('body').style.color='white'
      document.querySelector('body').classList.toggle('lightish')
      document.querySelector('body').classList.toggle('blackish')
      for (const item of document.querySelectorAll('.nav-link')) {
        item.style.color='white'
      }
      
    }
  }
  const togglenavbar=()=>{
  const nav_header=document.querySelector('.nav')
  console.log(nav_header)
    nav_header.classList.toggle('active')
  }
  return (
    <nav>
      <div className="nav">
        <div className="left">
          <div className="heading">
            <h1>Ayush</h1>
          </div>
          <div className="toggle lightbox" onClick={()=>togglebutton()}>
            <div className="dark">
              <DarkModeIcon />
            </div>
            <div className="light">
              <WbSunnyIcon />
            </div>
          </div>
        </div>
        <div className="right">
          <ul>
            <li onClick={togglenavbar}><a className="nav-link" href="#home">HOME</a> </li>
            <li onClick={togglenavbar}><a className="nav-link" href="#service">Service</a> </li>
            <li onClick={togglenavbar}><a className="nav-link" href="#committe">Experience</a> </li>
            <li onClick={togglenavbar}><a className="nav-link" href="https://github.com/ayusshh19">Portfolio</a> </li>
            <li onClick={togglenavbar}><a className="nav-link" href="#contact"> Contact us</a></li>
          </ul>
          <div className="mobile-navbar-btn" onClick={togglenavbar}>
            <MenuIcon  name="menu-outline" className="mobile-nav-icon"/>
            <CloseIcon name="close-outline" className="mobile-nav-icon"/>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
