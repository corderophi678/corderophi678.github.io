import React from "react";
import { Link } from "react-router";
import sortBy from "lodash/sortBy";
import get from "lodash/get";
import { prefixLink } from "gatsby-helpers";
import { rhythm } from "utils/typography";
import Helmet from "react-helmet";
import { config } from "config";
import include from "underscore.string/include";
import Bio from "components/Bio";
import pkgjson from "../package.json";

class BlogIndex extends React.Component {
  render() {
    // Sort pages.
    const sortedPages = sortBy(this.props.route.pages, "data.date");
    // Posts are those with md extension that are not 404 pages OR have a date (meaning they're a react component post).
    const visiblePages = sortedPages.filter(
      page =>
        (get(page, "file.ext") === "md" &&
          !include(page.path, "/about") &&
          !include(page.path, "/404")) ||
        get(page, "data.date")
    );
    return (
      <div>
        <Helmet
          title={config.blogTitle}
          meta={[
            { name: "description", content: pkgjson.description },
            { name: "keywords", content: pkgjson.keywords }
          ]}
        />
        <Bio location={this.props.location} />
        <ul>
          {visiblePages.map(page => (
            <li
              key={page.path}
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
      </div>
    );
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object
};

export default BlogIndex;
