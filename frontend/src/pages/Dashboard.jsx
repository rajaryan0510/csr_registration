import React from 'react'
import SideBar from '../components/Sidebar/SideBar'

import {  Card, CardActionArea, CardContent, Typography } from '@mui/material';
import CulturalIMG from '../images/cultural.jpg'
import SportsIMG from '../images/sport.jpg'
import ResponsibilitiesIMG from '../images/responsibility.jpg'
import { Button } from '@material-tailwind/react';

const Dashboard = () => {
  return (
    <SideBar>
      {/* <div>Dashboard</div> */}

      <div className='flex mt-[-70px]  ' >

        <Card className='mb-[150px] mt-[100px] mx-[50px] ' sx={{ maxWidth: 345 }}>
            <CardActionArea  >
                <img className='m-[30px]  w-[280px] h-[140px] object-cover rounded-lg  ' src={CulturalIMG} alt='cutm'/>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Cultural
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Work on CUTM students Newsletter, Wall Magazine, and Annual Magazine. Organising/Participating in
                    events. Preparing in any event organised by the clubs under cultural activities.
                    Painting and Photography etc.......
                </Typography>
                </CardContent>
            </CardActionArea>
            <div className='mx-[90px] my-[15px] ' >
                <Button variant="" color="red" className="w-[130px]" size="md"  >
                    View Details
                  </Button>
                </div>
            </Card>

            <Card className='mb-[150px] mt-[100px] mx-[50px] ' sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <img className='m-[30px]  w-[280px] h-[140px] object-cover rounded-lg ' src={SportsIMG} alt='cutm'/>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Sport
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Participating in individual and team sports of the Institute. Taking part in Health club/ Yoga Club. Participating / 
                    organising any adventures activities. Organising a college marathon/other sporting event etc........ 
                </Typography>
                </CardContent>
            </CardActionArea>
            <div className='mx-[90px] my-[15px] ' >
                <Button variant="" color="red" className=" w-[130px] " size="md"  >
                    View Details
                  </Button>
                </div>
            </Card>

            <Card className='mb-[150px] mt-[100px] mx-[50px] ' sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <img className='m-[30px]  w-[280px] h-[140px] object-cover rounded-lg ' src={ResponsibilitiesIMG} alt='cutm'/>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Responsibility
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Any activities which benefit the community or environment. Plantation inside or outside CUTM. Visiting and helping in 
                    hospitals or orphanages. Blood Donation Camps. Fund raising for social/environmental projects etc......
                </Typography>
                </CardContent>
                
            </CardActionArea>
            <div className='mx-[90px] my-[15px] ' >
                <Button variant="" color="red" className="" size="md"  >
                    View Details
                  </Button>
                </div>
            </Card>

        </div>

    </SideBar>
  )
}

export default Dashboard