import React from 'react'
import { Button, Input, Option, Select } from '@material-tailwind/react'
const RateServiceMaster = () => {
  return (
    <div>
      <div className='md:w-1/2 mx-auto my-8'>


        <form className='flex flex-col bg-grey-50 p-10 shadow-md shadow-red-200  rounded'>
          <h3 className='text-2xl'> Rate Service Master  </h3>
          <div className='flex flex-col my-4 gap-3 '>
            <div className='my-2'>
              <Input label="Rate Service ID" type={'number'} color='grey' className='w-full' />
            </div>
            <div className="my-2">
              <Input label="Rate Service Name" type={'text'} color='grey' className='w-full' />
            </div>
            <div className="my-2 mx-1">
              <Select label="Rate Service Type" color='grey'>
                <Option>Driving Penalty</Option>
                <Option>Waiting Penalty</Option>
              </Select>
            </div>
            <div className="my-2">
              <Input label="Time Window Tolerance" type={'text'} color='grey' className='w-full' />
            </div>
            <div className="my-2">
              <Input label="D.M.H" type={'text'} color='grey' className='w-full' />
            </div>
            <div className="my-2">
              <Input label="Calender Rules" type={'text'} color='grey' className='w-full' />
            </div>
            <div className="my-2">
              <Input label="Max wait time per stop" type={'time'} color='grey' className='w-full' />
            </div>
            <div className="my-2">
              <Input label="Max long haul wait time" type={'time'} color='grey' className='w-full' />
            </div>
            <div className="my-2 mx-1">
              <Select label="Use rush hour for TL" color='grey'>
                <Option>Lane</Option>
                <Option>Service Time</Option>
                <Option>Effective and Expiry</Option>
              </Select>
            </div>
            <div className="my-2">
              <Input label="Effective and Expiry" type={'text'} color='grey' className='w-full' />
            </div>
            <div className='my-2'>
              <Button color='red' className='w-full'>Save</Button>
            </div>
          </div>
        </form>

      </div>
    </div>
  )
}

export default RateServiceMaster 