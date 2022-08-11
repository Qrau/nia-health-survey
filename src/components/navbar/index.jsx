import { Link } from "react-router-dom";
import { colors } from "..";
import niaLogo from "../../assets/nia-logo.png";

const navElements = [
  { label: "Home", path: "/" },
  { label: "Survey", path: "/survey" }
];

export const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <img style={styles.img} src={niaLogo} alt="nia-medtech" />
      <div>
        {navElements.map((e, i) => (
          <Link style={styles.Link} key={i} to={e.path}>
            {e.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    background: colors.blue,
    display: "flex",
    justifyContent: "space-between",
    padding: "1em"
  },
  img: {
    width: "5em",
    margin: "auto 0",
    position: "relative"
  },
  Link: {
    color: colors.cyan,
    textDecoration: "none",
    padding: "0 1em"
  }
};
