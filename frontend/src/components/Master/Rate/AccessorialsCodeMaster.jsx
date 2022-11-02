import React from 'react'
import { Button, Input } from '@material-tailwind/react'
const AccessorialsCodeMaster = () => {
  return (
    <div>
      <div className='md:w-1/2 mx-auto my-8'>


        <form className='flex flex-col bg-grey-50 p-10 shadow-md shadow-red-200  rounded'>
          <h3 className='text-2xl'> Accessorials Code Master  </h3>
          <div className='flex flex-col my-4 gap-3 '>
            <div className='my-2'>
              <Input label="Accessorial Code ID" type={'number'} color='grey' className='w-full' />
            </div>
            <div className="my-2">
              <Input label="Accessorial Code Details" type={'text'} color='grey' className='w-full' />
            </div>
            <div className="my-2">
              <Input label="Flow Through" type={'text'} color='grey' className='w-full' />
            </div>
            <div className="my-2">
              <Input label="Always Apply" type={'text'} color='grey' className='w-full' />
            </div>
            <div className="my-2">
              <Input label="Sequencing Factor" type={'text'} color='grey' className='w-full' />
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

export default AccessorialsCodeMaster 