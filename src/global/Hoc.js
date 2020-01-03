import React from "react";
import StatusBar from "./StatusBar";
// const hoc = ({ WrappedComponent }) => {
//   return (
//     <div>
//       <h1>Main Title</h1>
//       <WrappedComponent {...this.props} />
//     </div>
//   );
// };
// export default hoc;

const hoc = WrappedComponent => {
  return ({}) => (
    <div>
      <StatusBar />
      <WrappedComponent />
    </div>
  );
};

export default hoc;
