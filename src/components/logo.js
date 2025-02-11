import LogoImage from '../images/LOGO2.jpg';

function Logo() {
    return (
      <div className="logo h-16 w-16">
        <img src={LogoImage} alt="Logo" />
      </div>
    );
  }
  
  export default Logo;