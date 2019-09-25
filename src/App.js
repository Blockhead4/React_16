import React, { Component, Fragment } from "react";
import { createPortal } from "react-dom";

// this.setState = null
const MAX_PIZZAS = 20;

const eatPizza = (state, props) => {
  const { pizzas } = state;
  if (pizzas < MAX_PIZZAS) {
    return {
      pizzas: pizzas + 1
    };
  } else {
    return null;
  }
};

class Controlled extends Component {
  state = {
    pizzas: 0
  };
  render() {
    const { pizzas } = this.state;
    return (
      <button onClick={this._handleClick}>{`I have eaten ${pizzas} ${
        pizzas <= 1 ? "pizza" : "pizzas"
      }`}</button>
    );
  }
  _handleClick = () => {
    this.setState(eatPizza);
  };
}

class App extends Component {
  render() {
    return <Controlled />;
  }
}

export default App;

// ====== 4. Higher Order Components ======
// const BoundaryHOC = ProtectedComponent =>
//   class Boundary extends Component {
//     state = {
//       hasError: false
//     };

//     componentDidCatch = () => {
//       this.setState({
//         hasError: true
//       });
//     };

//     render() {
//       const { hasError } = this.state;
//       if (hasError) {
//         return <ErrorFallback />;
//       } else {
//         return <ProtectedComponent />;
//       }
//     }
//   };

// class ErrorMaker extends Component {
//   state = {
//     friends: ["jisu", "flynn", "daal", "kneeprayer"]
//   };

//   componentDidMount = () => {
//     setTimeout(() => {
//       this.setState({
//         friends: undefined
//       });
//     }, 2000);
//   };

//   render() {
//     const { friends } = this.state;
//     return friends.map(friend => ` ${friend} `);
//   }
// }

// const PErrorMaker = BoundaryHOC(ErrorMaker);

// ====== 2. Portals ======
// class Portals extends Component {
//   render() {
//     return createPortal(<Message />, document.getElementById("touchme"));
//   }
// }

// const PPortals = BoundaryHOC(Portals);

// const Message = () => "Just touched it!";

// class RetrunTypes extends Component {
//   render() {
//     return "hello";
//   }
// }

// const ErrorFallback = () => " Sorry something went wrong";

// class App extends Component {
// ====== 3. Error Boundaries ======
// state = {
//   hasError: false
// };

// componentDidCatch = (error, info) => {
//   console.log(`catched ${error} the info i have is ${JSON.stringify(info)}`);
//   this.setState({
//     hasError: true
//   });
// };

//   render() {
//     return (
//       <Fragment>
//         <RetrunTypes />
//         <PPortals />
//         <PErrorMaker />
//       </Fragment>
//     );
//   }
// }

// ====== 1. Fragment , Return only String ======
// class RetrunTypes extends Component {
//   render() {
//     return "hello";
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <Fragment>
//         <RetrunTypes />
//       </Fragment>
//     );
//   }
// }
