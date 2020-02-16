import React from "react";
import SearchForm from "./form/SearchForm";
import SearchResults from "./SearchResults";
import "./App.css";

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <SearchForm fieldLabel="Search"></SearchForm>
        </div>
        <div className="grid">
          <SearchResults />
        </div>
      </div>
    );
  }
}
export default App;
