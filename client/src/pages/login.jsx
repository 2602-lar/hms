import React, { useState } from 'react'
import { TxtInput } from '../reusables/components'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const Login = () => {

  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const Navigate = useNavigate()
  const Login = () => {
    console.log(password.length, username.length)
    if (password.length === 0 || username.length === 0) {
      toast.warning('Provide all details to login !')
    } else {
      Navigate('/home')
    }
  }
  return (
    <div className='h-screen w-screen'>
      <img src={'tinydocs.jpg'} alt="" className='w-full h-full' />

      <div className='fixed z-10  backdrop-blur-lg h-[60%] w-[36%] top-[20%] left-[32%]'>'
        <div className='w-[80%] h-[90%] bg-blue-500 rounded-xl ml-[10%]'  >
          <div className='w-full mt-0 bg-blue-600 h-[10%] text-center text-white font-bold text-2xl'>
            Login
          </div>

          <div className='mt-10 mx-10'>
            <TxtInput
              label={'Enter Username'}
              type={'text'}
              value={username}
              setvalue={setUsername}
            />
            <TxtInput
              label={'Enter Password'}
              type={'password'}
              value={password}
              setvalue={setPassword}
            />

            <button className='w-full h-[20%] bg-white rounded-md hover:rounded-3xl font-semibold' onClick={() => { Login() }}>
              Login
            </button>

            <div className='w-full flex justify-between text-white mt-3'>
              <p className='hover:font-semibold hover:cursor-pointer'>register</p>
              <p className='hover:font-semibold hover:cursor-pointer'>forgot password ?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
