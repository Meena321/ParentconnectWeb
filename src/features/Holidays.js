import React, { Component } from "react";
import { connect } from "react-redux";
import HOC from "../global/Hoc";
class Holidays extends Component {
  render() {
    return (
      <div style={{ padding: "5px", marginTop: "5px" }}>
        <h2>Holidays</h2>
      </div>
    );
  }
}
const mapStateToProps = () => {};
const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(HOC(Holidays));
