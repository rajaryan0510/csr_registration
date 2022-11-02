import React from 'react'
import { Button,  Input,} from '@material-tailwind/react'
import SideBar from '../Sidebar/SideBar'
const DanceClub = () => {
  return (

    <SideBar>

    <div>
      <div className='md:w-[400px] lg:mx-96 my-8'>


        <form className='flex flex-col bg-grey-50 p-10 shadow-md shadow-red-200  rounded'>
         <span className='font-medium text-2xl text-grey-800 hidden md:block'><small className='text-2xl text-red-600'>Dance</small> Club</span>
          <div className='flex flex-col my-4 gap-3 '>
            <div className='my-2'>
              <Input label="Name" type={'text'} color='grey' className='w-full' />
            </div>
            <div className="my-2">
              <Input label="Registration" type={'number'} color='grey' className='w-full' />
            </div>
            <div className="my-2">
              <Input label="Branch" type={'text'}  color='grey' className='w-full' />
            </div>
            <div className="my-2">
              <Input label="Semester" type={'text'}  color='grey' className='w-full' />
            </div>
            <div className="my-2">
              <Input label="Mobile No." type={'number'} color='grey' className='w-full' />
            </div>
            <div className='my-2'>
              <Button color='red' className='w-full'>Save</Button>
            </div>
          </div>
        </form>

      </div>
    </div>

    </SideBar>
  )
}

export default DanceClub