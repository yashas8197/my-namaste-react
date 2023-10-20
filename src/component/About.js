import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent component did mount");
  }

  render() {
    console.log("parent render");
    return (
      <div>
        <h1>its a about page(class)</h1>
        <UserClass name={"Yashas(class)"} location={"Udupi(class)"} />
      </div>
    );
  }
}

export default About;
