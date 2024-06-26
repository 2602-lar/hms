import React, { useContext } from 'react'
import { NavTab } from '../reusables/components'
import { Outlet } from 'react-router-dom'
import AuthContext from '../Context/AuthContext'

export const Home = () => {

    let { logoutUser } = useContext(AuthContext)

    return (
        <div className='fixed w-screen h-screen flex'>
            <div className='w-[20%] h-full bg-blue-500 '>
                <div className='h-[30%] w-full text-center text-white text-3xl pt-2'> H.M.S</div>
                <NavTab
                    label={'Dashboard'}
                />
                <NavTab
                    label={'Patients'}
                />
                <NavTab
                    label={'Appointments'}
                />
                <NavTab
                    label={'Ambulances'}
                />
                <NavTab
                    label={'Doctors'}
                />
                <NavTab
                    label={'Nurses'}
                />
                <NavTab
                    label={'Wards'}
                />
                <NavTab
                    label={'Invoicing'}
                />
                <div className='flex flex-col text-center self-center hover:cursor-pointer hover:border-t-4 border-t-2 border-gray-200 w-full' onClick={() => logoutUser()}>
                    <span className="w-full h-10  text-lg text-white font-semibold" >Logout</span>
                </div>

            </div>


            <div className='w-[80%] h-full bg-gray-200'>
                <header className=' flex justify-between h-[9%] w-full bg-blue-500 border-l-4 border-gray-200 font-extrabold text-3xl text-white'>
                    <span className='ml-4 mt-2'>Dashboard</span>
                    <span className='text-2xl mr-4 mt-2'>wellcome user</span>
                </header>
                <div className='h-[91%] w-full'>
                    <img src='reception2.jpg' alt='' className='w-full h-full' />
                    <div className='z-10 fixed h-[91%] w-[80%] bottom-0 right-0 backdrop-blur-sm '>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}
