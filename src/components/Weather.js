import React from 'react';


// class Weather extends React.Component {
//   render () {
//     return (
//       <div>
//       {this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
//       {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
//       {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
//       {this.props.description && <p>Conditions: {this.props.description}</p>}
//       {this.props.error && <p>Error: {this.props.error}</p>}
//       </div>
//     );
//   }
// };
// since this is a stateless component we can simplify the code by using an arrow function.
// Because we are using an arrow function 'this' no longer works so we get rid of that. the keyword props must also be defined. We pass it in as an argument. Because we are only returning one element 'div', we can get rid of the curly braces and the return keyword and wrap the div in parenthesis.
const Weather = props => (
    <div className="weather__info">
    {
      props.city && props.country && <p className="weather__key">Location:
        <span className="weather__value"> {props.city}, {props.country}</span>
      </p>
    }
    {
      props.temperature && <p className="weather__key">Temperature:
        <span className="weather__value"> {props.temperature}</span>
      </p>
    }
    {
      props.humidity && <p className="weather__key">Humidity:
          <span className="weather__value"> {props.humidity}</span>
        </p>
    }
    {
      props.description && <p className="weather__key">Conditions:
        <span className="weather__value"> {props.description}</span>
      </p>
    }
    {
      props.error && <p className="weather__error">Error: {props.error}</p>
    }
    </div>
  );

export default Weather;
