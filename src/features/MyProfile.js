import React, { Component } from "react";
import { connect } from "react-redux";
import HOC from "../global/Hoc";
class MyProfile extends Component {
  render() {
    return (
      <div style={{ padding: "5px", marginTop: "5px" }}>
        <h2>Profile</h2>
      </div>
    );
  }
}
const mapStateToProps = () => {};
const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(HOC(MyProfile));
