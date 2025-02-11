import Logo from './logo.js'
import Nav from './nav.js';
function Header() {


  return (
    <header className="bg-orange-500 sticky top-0 flex-wrap z-[20] mx-auto flex  w-full items-center justify-between max-w-[1600px]">
      <Logo />
      <Nav />
    </header>
  );
}

export default Header;
