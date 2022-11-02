import React from 'react'
import { Button, Textarea, Input, Typography, Switch } from '@material-tailwind/react'

const ServiceProviderMaster = () => {
  return (
    <div>
      <div className='md:w-1/2 mx-auto my-8'>


        <form className='flex flex-col bg-grey-50 p-10 shadow-md shadow-red-200  rounded'>
          <h3 className='text-2xl'> Service Provider Master </h3>
          <div className='flex flex-col my-4 gap-3 '>
            <div className='my-2'>
              <Input label="Service Provider ID" type={'number'} color='grey' className='w-full' />
            </div>
            <div className="my-2">
              <Input label="Service Provider Name" type={'text'} color='grey' className='w-full' />
            </div>
            <div className="my-2">
              <Input label="Special Carrier Alpha Code" type={'text'} color='grey' className='w-full' />
            </div>
            <div className="my-2">
              <Input label="Add" type={'text'} color='grey' className='w-full' />
            </div>
            <div className="my-2">
              <Input label="Contact" type={'number'} color='grey' className='w-full' />
            </div>
            <div className='my-2'>
              <Textarea label="DGCU" color='grey' />
            </div>
            <div className="my-5 mx-1">
                        <Typography label="Group Type" className='w-full font-normal'>Fleet Yes/No </Typography>
                        <Switch color="red" defaultChecked />
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

export default ServiceProviderMaster