import React from "react";
import profilepic from "./profilepic.jpg"

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        Person: {
            fullName: "Aziz",
            bio: "Student at Gomycode",
            imgSrc: profilepic,
            profession: "student"
        }
    }   
  }

   componentWillUnmount() {
    console.log("unmount")
    clearInterval(this.state.interval)
   }

  render() {
    return (
        <div>
            <h3>NAME: {this.state.Person.fullName}</h3>
            <h3>Bio: {this.state.Person.bio}</h3>
            <img src={this.state.Person.imgSrc} alt="Profile pic"/>
            <h3>Profession: {this.state.Person.profession}</h3>
        </div>
    )
  }
}

export default Profile  