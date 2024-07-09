import React from "react";
import User from "./User/User";
import UserClass from "./User/UserClass";

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    /** 1. to call the constructor of parent class - React.Component
    2. to receive the component's props and make it available in the component
    */
    this.state = {
      userInfo: {
        name: "",
        designation: "",
      },
    };
    // console.log("parent constructor");
  }

  componentDidMount() {
    // console.log("parent did mount -  API call is made and setState invoked");
    const response = fetch("API CAll");
    this.setState({
      userInfo: response.data,
    });
  }

  componentDidUpdate() {
    // console.log("the state is updated,  UI rendered with new data");
  }

  componentWillUnmount() {
    // console.log(
    //   "when the HTML is removed from the web page -  going to different page"
    // );
  }
  render() {
    //   console.log("parent render");
    return (
      <div>
        <h1>Welcome to About Us Page</h1>
        <User
          name="Ashwini 1"
          email="ash@gmail.com"
          designation="Sr. Engineer"
          expertise={["React", "Node Js", "Python"]}
        />
        <UserClass
          name="Chandan 2"
          email="chan@gmail.com"
          designation="Sr. Engineer"
          expertise={["C", "C++", "Python", "wi-fi"]}
        />
        <UserClass
          name="Chandan 3"
          email="chan@gmail.com"
          designation="Sr. Engineer"
          expertise={["C", "C++", "Python", "wi-fi"]}
        />
      </div>
    );
  }
}

export default AboutPage;

/**
 * parent constructor called
 * parent render called
 * child 1 called --- function
 * child 2 constructor
 * child 2 render
 * child 3 contructor
 * child 3 render
 * child 2 component did mount
 * child 3 component did mount
 *
 * for optimization react will batch all the renders and execute once then DOM update happens(did mount happens later)
 * because dom manipulation is costlier
 * render phase -> commit phase(dom)
 */
