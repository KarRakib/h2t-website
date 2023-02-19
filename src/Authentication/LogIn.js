import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider';
const LogIn = () => {
    const { UserLogin } = useContext(AuthContext)
    const { register, handleSubmit, reset } = useForm()
    const handleLogin = (data) => {
        console.log(data);
        UserLogin(data.email, data.password)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
    return (
        <div>
            <h1 className='text-center text-2xl'> Please LogIn</h1>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center hidden lg:block md:block lg:text-left">
                        <img className='w-[501px] rounded-lg' src='https://i.ibb.co/K2JDMRp/login.png' alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(handleLogin)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register('email', (require))} style={{ border: '1px solid #D2D4D7' }} placeholder="email" type="text" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register('password')} style={{ border: '1px solid #D2D4D7' }} type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">By continuing, you agree to H2T Bazar Conditions of Use and Privacy Notice.</a>
                                </label>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn ">Login</button>
                            </div>
                            <span className='top-0'> You Have No Account Please<Link to='/register'> Register </Link></span>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LogIn;