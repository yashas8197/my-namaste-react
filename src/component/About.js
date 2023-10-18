import User from "./UserInfo";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>its a about page</h1>
      <User name={"yashas(function)"} location={"udupi(function)"} />
      <UserClass name={"Yashas(class)"} location={"Udupi(class)"} />
    </div>
  );
};

export default About;
