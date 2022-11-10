import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Input } from "@material-tailwind/react";
import SideBar from "../Sidebar/SideBar";
import DanceService from "../../services/DanceService";

  const DanceClub = () => {

  const [name, setName] = useState('')
  const [registrationNo, setRegistrationNo] = useState('')
  const [branch, setBranch] = useState('')
  const [semester, setSemester] = useState('')
  const [mobileNo, setMobileNo] = useState('')

  const navigate = useNavigate();


  const saveData = (e) => {
        e.preventDefault();

        const dance = { name, registrationNo, branch, semester, mobileNo }

        DanceService.createDanceClub(dance).then((response) => {
            console.log(response.data)
            navigate('/dashboard');
            
            
        }).catch(error => {
          console.log(error)
        })
  }

    return (
      <div>
        <SideBar>
          <div>
            <div className="md:w-[400px] lg:mx-96 my-8">
              <form className="flex flex-col bg-grey-50 p-10 shadow-md shadow-red-200  rounded">
                <span className="font-medium text-2xl text-grey-800 hidden md:block">
                  <small className="text-2xl text-red-600">Dance</small> Club
                </span>
                <div className="flex flex-col my-4 gap-3 ">
                  <div className="my-2">
                    <Input
                      label="Name"
                      type={"text"}
                      color="grey"
                      className="w-full"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="my-2">
                    <Input
                      label="Registration"
                      type={"number"}
                      color="grey"
                      className="w-full"
                      name="registrationNo"
                      value={registrationNo}
                      onChange={(e)=> setRegistrationNo(e.target.value)}
                    />
                  </div>
                  <div className="my-2">
                    <Input
                      label="Branch"
                      type={"text"}
                      color="grey"
                      className="w-full"
                      name="branch"
                      value={branch}
                      onChange={(e)=> setBranch(e.target.value)}
                    />
                  </div>
                  <div className="my-2">
                    <Input
                      label="Semester"
                      type={"text"}
                      color="grey"
                      className="w-full"
                      name="semester"
                      value={semester}
                      onChange={(e)=> setSemester(e.target.value)}
                    />
                  </div>
                  <div className="my-2">
                    <Input
                      label="Mobile No."
                      type={"number"}
                      color="grey"
                      className="w-full"
                      name="mobileNo"
                      value={mobileNo}
                      onChange={(e)=> setMobileNo(e.target.value)}
                    />
                  </div>
                  <div className="my-2">
                    <Button
                      color="red"
                      className="w-full"
                      onClick={(e)=>saveData(e)}
                    >
                      Save
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </SideBar>
      </div>
    );
  }
// }

export default DanceClub;
