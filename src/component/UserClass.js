import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "USA",
      },
    };
    console.log("child constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/yashas8197");

    const json = await data.json();

    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    console.log("child render");
    return (
      <div className="w-56 m-auto bg-green-100">
        <img src={avatar_url} className="rounded-lg" />
        <h2 className="p-1 font-bold text-lg">Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>contact: @yashas8197</h3>
      </div>
    );
  }
}

export default UserClass;
