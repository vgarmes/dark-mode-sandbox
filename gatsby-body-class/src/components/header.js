import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import DarkToggle from "./dark-toggle";

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          {siteTitle}
        </Link>
      </h1>
      <DarkToggle />
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
