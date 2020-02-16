import React from "react";
import { connect } from "react-redux";
import "./SearchResults.css";

const SearchResults = props => {
  const renderSearchResults = item => {
    return (
      <div className="grid-item" key={item.ikea_id + "_" + item.objectID}>
        <img className="item-image" src={item.image} alt={item.name}></img>
        <div className="item-name">{item.name}</div>
      </div>
    );
  };
  var { searchResults } = props;
  if (searchResults && searchResults.results[0].hits.length > 0) {
    return (
      <div>
        <div className="results-grid">{searchResults.results[0].hits.map(renderSearchResults)}</div>
      </div>
    );
  } else {
    return "No Results";
  }
};

const mapStateToProps = state => {
  return {
    searchResults: state.search.searchResults
  };
};

export default connect(mapStateToProps)(SearchResults);
