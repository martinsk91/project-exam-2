import React, { useState, useEffect } from 'react';

const Profile = () => {
    const [userData, setUserData] = useState(null);

  
    useEffect(() => {
        const username = localStorage.getItem('username');
        const email = localStorage.getItem('email');

       
        if (username && email) {
            setUserData({
                username,
                email,
            });
        } else {
         
            console.error('No user data found');
        }
    }, []);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-6 text-center">Profile</h2>

                {userData ? (
                    <div className="space-y-4">
                        <div className="flex justify-center">
                    
                            <img 
                                src="https://www.gravatar.com/avatar?d=mp" 
                                alt="User Avatar" 
                                className="w-24 h-24 rounded-full border-2 border-gray-300" 
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Username:</label>
                            <p className="text-lg text-gray-800">{userData.username}</p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email:</label>
                            <p className="text-lg text-gray-800">{userData.email}</p>
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default Profile;


// 8fc1279a-3e76-4394-9f06-e5fa8c816055