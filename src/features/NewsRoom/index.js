import React, { Component } from "react";
import { connect } from "react-redux";
import HOC from "../../global/Hoc";
class NewsRoom extends Component {
  render() {
    return (
      <div>
        <h2>News Room</h2>
      </div>
    );
  }
}
const mapStateToProps = () => {};
const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(HOC(NewsRoom));
