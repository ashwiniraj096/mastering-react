import { useState } from "react";

const User = ({ name, email, ...rest }) => {
  const [rating] = useState(2);
  //  console.log("function component called");
  return (
    <div className="resto-info-box">
      <h2>Name: {name}</h2>
      <h3>Email: {email}</h3>
      <h3>Designation: {rest.designation}</h3>
      <h3>Expertise: {rest.expertise?.join(",")}</h3>
      <h4>{rating} star rating</h4>
    </div>
  );
};

export default User;
