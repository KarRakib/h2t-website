import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider';

const Resister = () => {
    const { UserRegister } = useContext(AuthContext)
    const { register, handleSubmit, reset } = useForm()
    const handleOnSubmit = (data) => {
        console.log(data);
        UserRegister(data.email, data.password)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                console.log(error);
            });
        reset()
    }
    return (
        <div>
            <h1 className='text-center text-2xl'> Welcome Please Create account</h1>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center hidden lg:block md:block lg:text-left">
                        <img className='w-[501px] rounded-lg' src='https://i.ibb.co/886vYjT/register.png' alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(handleOnSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input style={{ border: '1px solid #D2D4D7' }} {...register('name', { required: true })} placeholder="Name" type="text" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input style={{ border: '1px solid #D2D4D7' }} {...register('email', { required: true })} placeholder="email" type="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input style={{ border: '1px solid #D2D4D7' }} {...register('password', { required: true })} placeholder="Password" type="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn ">Register</button>
                            </div>
                            <span className='top-0'> Already Account Please<Link to='/login'> LogIn </Link></span>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Resister;