import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Ghazipur",
        avartar_url: "",
      },
    };
}

  async componentDidMount() {
    
      const data = await fetch("https://api.github.com/users/MdAnassiddiqui");
      const json = await data.json();
      this.setState({
        userInfo: {
          name: json.name,
          location: json.location,
          avartar_url: json.avatar_url,
        },
      });
      console.log(json);
    
  }

  render() {
    const { name, location, avartar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avartar_url} alt="User Avatar" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: 8933802764</h4>
      </div>
    );
  }
}

export default UserClass;
