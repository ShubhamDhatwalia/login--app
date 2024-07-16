import React from 'react'
import {Link} from 'react-router-dom';
import avatar from '../assets/profile.png';
import styles from '../styles/Username.module.css';

export default function Username() {
  return (
    <div className="container mx-auto">
        <div className='flex justify-center items-center h-screen'>
            <div>
                <div className="title flex flex-col items-center">
                    <h4 className='text-5xl font-bold'>Hello Aagain</h4>
                    <span className='py-4 text-xl w-2/3 text-center text-gray-500'> Explore more by connecting with us.</span>
                </div>

                <form action="" className='py-1'>
                    <div className="profile flex justify-center py-4">
                        <img src="" alt="avatar" />
                    </div>

                    <div className="textbox flex flex-col items-center gap-4 ">
                        <input type="text" placeholder='Username'/>
                        <button type='submit'>Let's Go</button>
                    </div>

                    <div className="text-center py-4">
                        <span className='text-gray-500'>Not a Memeber <Link to="/register" className='text-red-500'>Register</Link></span>
                    </div>
                </form>
            </div>

        </div>

    </div>
  )
}
