import React from "react";
import { config } from "config";
import { rhythm } from "utils/typography";
import { Link } from "react-router";
import { prefixLink } from "gatsby-helpers";

class Bio extends React.Component {
  render() {
    return (
      <p
        style={{
          marginBottom: rhythm(2.5)
        }}
      >
        My name is
        {" "}
        <strong>{config.authorName}</strong>
        . I'm a bit of a weirdo. I write about philosophy, culture, politics, sports, and web development. Currently, I'm a freelance developer (always looking for work) and a part-time Equality and Fairness consultant for a large academic test-development organization.
        {" "}
        <a href="https://twitter.com/corderophi678">
          You can follow me on Twitter, if you like.
        </a>
        Or you can read more <Link to={prefixLink("/about/")}>About Me</Link>.
      </p>
    );
  }
}

export default Bio;
