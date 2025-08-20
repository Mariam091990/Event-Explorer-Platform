import React, { use, useState } from 'react';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    // const {createUser} = use(AuthContext);
    const { createUser, setUser, updateUser } = use(AuthContext);

    // const {createUser, setUser, updateUser} = use(AuthContext);
    //  const navigate = useNavigate();
    const [nameError, setNameError] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);




    const handleRegister = (e) => {

        e.preventDefault();
        console.log(e.target);

        const form = e.target;
        const name = form.name.value;

        if (name.length < 5) {
            setNameError("Name should be greater than 5 characters");
            return;
        } else {
            setNameError("");
        }



        //  if (name.length < 5) {
        //       <p className='text-red-800'>setNameError ("Name should be more than 5 chracters")</p>
        //       return;
        //     }
        //     else {

        //    setNameError("")
        //     }

        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ name, photo, email, password });
        setErrorMessage("");

        createUser(email, password)
            .then(result => {
                const user = result.user;
                // setUser(user);
                // console.log(user);
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo })

                    })
                    .catch((error) => {
                        console.log(error);
                        setUser(user);

                    });


            })
            .catch((error) => {
                 setErrorMessage(error.message)
            })
    };





    return (


        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Register now!</h1>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleRegister} className="card-body">

                                <label className="label">Name</label>
                                <input name='name' type="text" className="input" placeholder="Name" required />
                                {nameError && <p className="text-red-600">{nameError}</p>}

                                <label className="label ">Photo URL</label>
                                <input name='photo' type="text" className="input" placeholder="Photo URL" required />

                                <label className="label">Email</label>
                                <input name='email' type="email" className="input" placeholder="Email" required />


                                <label className="label">Password</label>
                                <label className="input validator">
                                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <g
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            strokeWidth="2.5"
                                            fill="none"
                                            stroke="currentColor"
                                        >
                                            <path
                                                d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                                            ></path>
                                            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                        </g>
                                    </svg>
                                    <div className='relative'>
                                        <input

                                            name='password'
                                            type={showPassword ? "text" : "password"}

                                            required
                                            placeholder="Password"
                                            minLength="6"
                                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                                            title="Must be more than 6 characters, including number, lowercase letter, uppercase letter"
                                        />
                                        <button onClick={() => { setShowPassword(!showPassword) }}
                                            className='btn btn-xs border-none absolute bg-gray-100'>
                                            {showPassword ? <FaEyeSlash /> : <FaEye />} </button>
                                    </div>
                                </label>
                                <p className="validator-hint hidden">
                                    Must be more than 6 characters, including
                                    <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
                                </p>




                                <button type='submit' className="btn btn-neutral mt-4">Register</button>


                                {
                                    errorMessage && <p className='text-red-500'>{errorMessage}</p>

                                }

                                <p>Already have an account? please <Link className='text-blue-800' to="/auth/login">Login</Link> </p>


                            </form>



                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;
