import { Avatar, Button, Navbar, Typography } from '@material-tailwind/react';
import React, { useState } from 'react'

import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import profile from '../../images/raj.jpg'

import { useNavigate } from 'react-router-dom'

const Header = () => {

  const [user, setUser] = useState()
  const navigate = useNavigate()
  const login = () => {
    setUser(false)
  }
  const logout = (e) => {
    e.preventDefault()
    localStorage.removeItem("token");
    navigate('/')
  }

  return (
    <div className=''>
      <Navbar className="max-w-full h-20 justify-center items-center">
        <div className="container flex justify-between items-center mx-auto absolute left-0  right-0 text-blue-grey-900">
          <Toolbar className=''>
          </Toolbar>
          <Typography
            as="a"
            href="/dashboard"
            variant="small"
            className="py-1.5 absolute  font-normal cursor-pointer uppercase flex items-center "
          >
              <span className='font-medium text-base text-grey-800 hidden md:block'><small className='text-base text-red-600'>STUDENT</small> REGISTRATION</span>
          </Typography>
          
          <div className="flex items-center space-x-4 hidden md:block ">
            {
              user ? (
                <div className=''>
                  <Button variant="" color="red" className="" size="md" onClick={login}>
                    Login
                  </Button>


                  <Button variant="" color="red" size="md" className="">
                    Signup
                  </Button>
                </div>
              ) : (
                <div className=''>
                  <Button variant="" color="red" className="" size="md" onClick={logout} >
                    Logout
                  </Button>
                  <IconButton className='hover:shadow-red-500 shadow-md'>
                    <Avatar className="cursor-pointer shadow-2xl" src={profile} variant="circular" />
                  </IconButton>
                </div>
              )
            }

          </div>
        </div>

      </Navbar>
    </div>
  )
}

export default Header