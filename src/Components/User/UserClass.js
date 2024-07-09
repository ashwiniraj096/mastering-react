import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 3,
    };
    // console.log(props.name, "constructor");
  }

  componentDidMount() {
    // console.log(this.props.name, "did mount");
  }

  render() {
    const { name, email, designation, expertise } = this.props;
    // console.log(this.props.name, "render");
    return (
      <div className="resto-info-box">
        <h2>Name: {name}</h2>
        <h3>Email: {email}</h3>
        <h3>Designation: {designation}</h3>
        <h3>Expertise: {expertise?.join(",")}</h3>
        <h4>{this.state.rating} star Rating</h4>
        <button
          onClick={() => {
            this.setState({ rating: this.state.rating + 1 });
          }}
        >
          Add star Rating
        </button>
      </div>
    );
  }
}

export default UserClass;
