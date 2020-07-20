import React from "react";

import { Link } from "react-router-dom";

class Search extends React.Component {

  render() {
    return (
      <form>
        <input label="search" placeholder="search" />
        <Link to="/search">
          Search
        </Link>
      </form>
    );
  }
}
export default Search;
