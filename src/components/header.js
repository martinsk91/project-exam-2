import Logo from './logo.js';
import Nav from './nav.js';
import { NavLink, useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const username = localStorage.getItem('username'); 

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        navigate('/login');
    };

    return (
        <header className="bg-orange-500 sticky top-0 flex-wrap z-[20] mx-auto flex w-full items-center justify-between max-w-[1600px]">
            <Logo />
            <Nav />
            {username ? (
                <div className="flex items-center space-x-4">
                    <span className="text-white">{`${username}`}</span>
                    <button
                        onClick={logout}
                        className="p-3 bg-red-500 text-white rounded-lg hover:bg-red-600 "
                    >
                        Logout
                    </button>
                </div>
            ) : (
                <NavLink className="p-3 text-white" to="/register">Register/Login</NavLink>
            )}
            
          
 
        </header>
    );
}

export default Header;




// import Logo from './logo.js'
// import Nav from './nav.js';
// import { NavLink } from 'react-router-dom';
// function Header() {


//   return (
//     <header className="bg-orange-500 sticky top-0 flex-wrap z-[20] mx-auto flex  w-full items-center justify-between max-w-[1600px]">
//       <Logo />
//       <Nav />
//       <NavLink className="p-3" to="/register">Register</NavLink>
//     </header>
//   );
// }

// export default Header;
