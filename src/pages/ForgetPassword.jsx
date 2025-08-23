import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useLocation } from 'react-router';
import Swal from 'sweetalert2';

const ForgetPassword = () => {
    const { resetPassword } = use(AuthContext);
    const location = useLocation();
    const [email, setEmail] = useState("");



    useEffect(() => {




        if (location.state?.email) {

            setEmail(location.state.email)
        }
    }, [location])




    const handleReset = async (e) => {
        e.preventDefault();

        try {
            await resetPassword(email);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Reset mail sent successfully",
                showConfirmButton: false,
                timer: 1500
            }).then(() => {

                window.location.href = "https://mail.google.com";
            })

        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: error.messege || "Invalid credentials",
                icon: "error",
                confirmButtonText: "Try Again",
            });
        }



    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
            <form onSubmit={handleReset}>
                <input
                    type="email"
                    className="border w-full p-2 mb-4"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded w-full"
                >
                    send Reset Link
                </button>

            </form>
        </div>
    );
};

export default ForgetPassword;