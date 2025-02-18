import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [userType, setUserType] = useState('user');  
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const loginUser = async (email, password) => {
        const loginUrl = 'https://v2.api.noroff.dev/auth/login';
        const data = { email, password };
        try {
            const response = await fetch(loginUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.message || 'Login failed');
            }
            localStorage.setItem('token', result.data.token);
            localStorage.setItem('username', result.data.name);
            navigate('/');
        } catch (error) {
            console.error('Login failed:', error);
            setError(error.message);
        }
    };

    const registerUser = async (email, password, name, userType) => {
        const registerUrl = 'https://v2.api.noroff.dev/auth/register';
        const data = { name, email, password, userType };

        try {
            setLoading(true); 
            const response = await fetch(registerUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.message || 'Unknown error');
            }
            console.log('User registered successfully:', result);
            loginUser(email, password);
        } catch (error) {
            console.error('Registration failed:', error);
            setError(error.message); 
        } finally {
            setLoading(false);  
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password || !name) {
            setError('All fields are required');
            return;
        }

        if (!email.endsWith('@stud.noroff.no')) {
            setError('Email must end with @stud.noroff.no');
            return;
        }

        if (password.length < 8) {
            setError('Password must be at least 8 characters long');
            return;
        }

        setError('');
        registerUser(email, password, name, userType);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name (Username):</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="userType" className="block text-sm font-medium text-gray-700">User Type:</label>
                        <select
                            id="userType"
                            value={userType}
                            onChange={(e) => setUserType(e.target.value)}
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="user">User</option>
                            <option value="manager">Manager</option>
                        </select>
                    </div>

                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        {loading ? 'Registering...' : 'Register'}
                    </button>
                    <Link to="/login" className="block mt-4 text-center text-blue-600 hover:text-blue-800">
                        Already got a user? Click here
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Register;



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Register = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [name, setName] = useState('');
//     const [userType, setUserType] = useState('user');  
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(false);

//     const registerUser = async (email, password, name, userType) => {
//         const apiUrl = 'https://v2.api.noroff.dev/auth/register';

//         const data = {
//             name: name,
//             email: email,
//             password: password,
//             userType: userType,  
//         };

//         try {
//             setLoading(true); 
//             const response = await fetch(apiUrl, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(data),
//             });

//             const result = await response.json();
//             if (!response.ok) {
//                 console.error('Error response:', result);
//                 throw new Error(result.message || 'Unknown error');
//             }
//             console.log('User registered successfully:', result);
//         } catch (error) {
//             console.error('Registration failed:', error);
//             setError(error.message); 
//         } finally {
//             setLoading(false);  
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (!email || !password || !name) {
//             setError('All fields are required');
//             return;
//         }

//         if (!email.endsWith('@stud.noroff.no')) {
//             setError('Email must end with @stud.noroff.no');
//             return;
//         }

//         if (password.length < 8) {
//             setError('Password must be at least 8 characters long');
//             return;
//         }

//         setError('');
//         registerUser(email, password, name, userType);
//     };

//     return (
//         <div className="flex justify-center items-center min-h-screen bg-gray-50">
//             <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
//                 <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-4">
//                         <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
//                         <input
//                             type="email"
//                             id="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                             className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
//                         <input
//                             type="password"
//                             id="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                             className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name (Username):</label>
//                         <input
//                             type="text"
//                             id="name"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                             required
//                             className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="userType" className="block text-sm font-medium text-gray-700">User Type:</label>
//                         <select
//                             id="userType"
//                             value={userType}
//                             onChange={(e) => setUserType(e.target.value)}
//                             className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         >
//                             <option value="user">User</option>
//                             <option value="manager">Manager</option>
//                         </select>
//                     </div>

//                     {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

//                     <button
//                         type="submit"
//                         disabled={loading}
//                         className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     >
//                         {loading ? 'Registering...' : 'Register'}
//                     </button>
//                     <Link to="/login" className="block mt-4 text-center text-blue-600 hover:text-blue-800">
//   Already got a user? Click here
// </Link>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Register;

