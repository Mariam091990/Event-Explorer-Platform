import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

const UserProfile = () => {

    const { user, updateUser } = use(AuthContext);

    const [name, setName] = useState("");
    const [photoURL, setPhotoURl] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {

        if (user) {
            setName(user.dispalyName || '');
            setPhotoURl(user.photoURL || '');

        }
    }, [user])


    const handleUpdate = async (e) => {

        e.preventDefault();


        try {
            await updateUser(

                {

                    displayName: name,
                    photoURL: photoURL,
                }

            )
            setMessage('profile udated');
        } catch (error) {
            console.log(error);
            setMessage('failed to update')
        }


    }




    return (
        <div>
            <Navbar></Navbar>


            <div className=" container my-20 max-w-md mx-auto p-4 bg-white rounded shadow">


                <h2 className="text-xl font-semibold mb-4">My Profile</h2>
                <img src={user?.photoURL} alt="Profile" className="w-20 h-20 rounded-full mb-4" />
                <p><strong>Name:</strong> {user?.displayName}</p>
                <p><strong>Email:</strong> {user?.email}</p>

                <form onSubmit={handleUpdate} className="mt-6">
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Update Name:</label>
                        <input
                            type="text"
                            className="w-full border px-2 py-1 rounded"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Update Photo URL:</label>
                        <input
                            type="text"
                            className="w-full border px-2 py-1 rounded"
                            value={photoURL}
                            onChange={(e) => setPhotoURl(e.target.value)}
                            required
                        />
                    </div>
                    <div className='flex justify-between'>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >


                            Save Changes
                        </button>

                        <Link to="/"><button className="bg-blue-500 text-white px-4 py-2 rounded">Back to home</button></Link></div>
                </form>
                {message && <p className="mt-4 text-green-600">{message}</p>}


            </div>



            <Footer></Footer>

        </div>
    );
};

export default UserProfile;