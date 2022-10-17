import React, { Component, useState } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import Footer from "../components/Footer";
import ErrorBoundary from "../components/ErrorBoundary";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
      robots: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        this.setState({ robots: res.data });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({
      searchField: value,
    });
  };

  render() {
    const { robots, searchField } = this.state;
    const { handleChange } = this;

    const searchedItems = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    if (!robots.length) {
      return <h1>Loading....</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f2">RoboFriends</h1>
          <SearchBox searchChange={handleChange} />

          <Scroll>
            <ErrorBoundary>
              <CardList robots={searchedItems} />
            </ErrorBoundary>
          </Scroll>
          <Footer />
        </div>
      );
    }
  }
}

export default App;

// ***** using hooks****//

// function App() {
//   const [search, setSearch] = useState("");
//   const [robots, setRobot] = useState([]);

//   function handleChange(event) {
//     const { value } = event.target;
//     setSearch(value);
//   }

//   axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
//     const users = res.data;
//     setRobot(users);
//   });

//   const searchedItems = robots.filter((robot) => {
//     return robot.name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
//   });

//   if (robots.length === 0) {
//     return <h1>Loading....</h1>;
//   } else {
//     return (
//       <div className="tc">
//         <h1>RoboFriends</h1>
//         <SearchBox handleChange={handleChange} />
//         <Scroll>
//           <CardList robots={searchedItems} />
//         </Scroll>
//       </div>
//     );
//   }
// }

// export default App;
