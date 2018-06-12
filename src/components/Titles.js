import React from 'react';

// class Titles extends React.Component {
//   render () {
//     return (
//       <div>
//         <h1>Weather Finder</h1>
//         <p>find temperature, conditions and more...</p>
//       </div>
//     );
//   }
// };
// simplify stateless class by converting to arrow functions

const Titles = () => (
  <div>
    <h1 className="title-container__title">Weather Finder</h1>
    <p className="title-container__subetitle">find temperature, conditions and more...</p>
  </div>
);

export default Titles;
