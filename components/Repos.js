import React from "react";
import getRepos from "../utils/getRepos.js";

class ReposList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    };
  }
  componentDidMount() {
    this.setState({
      repos: getRepos()
    });
  }
  top6(item, index) {
    return index < 6;
  }
  render() {
    return (
      <ul>
        {this.state.repos.filter(top6).map((repo, idx) => (
          <li
            key={idx}
            style={{
              marginBottom: rhythm(1 / 4)
            }}
          >
            <Link style={{ boxShadow: "none" }} to={prefixLink(page.path)}>
              {get(page, "data.title", page.path)}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}
