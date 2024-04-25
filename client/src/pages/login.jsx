import React, { useState, useContext } from 'react'
import { TxtInput } from '../reusables/components'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import AuthContext from '../Context/AuthContext'

export const Login = () => {

  let { loginUser } = useContext(AuthContext)
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const Navigate = useNavigate()
  const Tokens = localStorage.getItem('authTokens')

  if (Tokens) {
    Navigate('/home')
  }
  console.log(Tokens)

  const Login = async (e) => {
    const feedback = toast.loading("Authenticating User")
    if (username.length === 0 || password.length === 0) {
      toast.warning('Please provide all information to login!')
    } else {
      let response = await loginUser(username, password)
      console.log(response.status)
      if (response.status === 200) {
        toast.update(feedback, { render: "User authentication succcessful !", type: "success", isLoading: false, autoClose: true })
      } else if (response.status !== 200) {
        if (response.response.data.detail === 'No active account found with the given credentials') {
          toast.update(feedback, { render: "User authentication failed ! Incorrect details.", type: "error", isLoading: false, autoClose: 7000 })
        }
      }
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
