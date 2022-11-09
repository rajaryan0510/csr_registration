import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "@material-tailwind/react";
import SideBar from "../Sidebar/SideBar";
import MusicService from "../../services/MusicService";

class HealthClub extends Component {
  // const MusicClub = () => {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      registrationNo: "",
      branch: "",
      semester: "",
      mobileNo: "",
    };

    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeRegistrationNoHandler =
      this.changeRegistrationNoHandler.bind(this);
    this.changeBranchHandler = this.changeBranchHandler.bind(this);
    this.changeSemesterHandler = this.changeSemesterHandler.bind(this);
    this.changeMobileNoHandler = this.changeMobileNoHandler.bind(this);
  }

  dashboard = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    //navigate("/dashboard");
    useNavigate("/dashboard");
  };
  saveStudent = (e) => {
    e.preventDefault();
    let student = {
      name: this.state.name,
      registrationNo: this.state.registrationNo,
      branch: this.state.branch,
      semester: this.state.semester,
      mobileNo: this.state.mobileNo,
    };
    console.log("student => " + JSON.stringify(student));

    MusicService.createStudent(student).then((response) => {
      this.dashboard();
    });
  };

  changeNameHandler = (event) => {
    this.setState({ name: event.target.value });
  };
  changeRegistrationNoHandler = (event) => {
    this.setState({ registrationNo: event.target.value });
  };
  changeBranchHandler = (event) => {
    this.setState({ branch: event.target.value });
  };
  changeSemesterHandler = (event) => {
    this.setState({ semester: event.target.value });
  };
  changeMobileNoHandler = (event) => {
    this.setState({ mobileNo: event.target.value });
  };

  render() {
    return (
      <div>
        <SideBar>
          <div>
            <div className="md:w-[400px] lg:mx-96 my-8">
              <form className="flex flex-col bg-grey-50 p-10 shadow-md shadow-red-200  rounded">
                <span className="font-medium text-2xl text-grey-800 hidden md:block">
                  <small className="text-2xl text-red-600">Health</small> Club
                </span>
                <div className="flex flex-col my-4 gap-3 ">
                  <div className="my-2">
                    <Input
                      label="Name"
                      type={"text"}
                      color="grey"
                      className="w-full"
                      value={this.state.name}
                      onChange={this.changeNameHandler}
                    />
                  </div>
                  <div className="my-2">
                    <Input
                      label="Registration"
                      type={"number"}
                      color="grey"
                      className="w-full"
                      value={this.state.registrationNo}
                      onChange={this.changeRegistrationNoHandler}
                    />
                  </div>
                  <div className="my-2">
                    <Input
                      label="Branch"
                      type={"text"}
                      color="grey"
                      className="w-full"
                      value={this.state.branch}
                      onChange={this.changeBranchHandler}
                    />
                  </div>
                  <div className="my-2">
                    <Input
                      label="Semester"
                      type={"text"}
                      color="grey"
                      className="w-full"
                      value={this.state.semester}
                      onChange={this.changeSemesterHandler}
                    />
                  </div>
                  <div className="my-2">
                    <Input
                      label="Mobile No."
                      type={"number"}
                      color="grey"
                      className="w-full"
                      value={this.state.mobileNo}
                      onChange={this.changeMobileNoHandler}
                    />
                  </div>
                  <div className="my-2">
                    <Button
                      color="red"
                      className="w-full"
                      onClick={this.saveStudent}
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
}

export default HealthClub;
