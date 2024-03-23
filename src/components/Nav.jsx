import { Form, NavLink } from "react-router-dom";

//assets
import logomark from "../assets/logomark.svg";

const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink aria-label="Go to home" to="/">
        <img src={logomark} height={30} alt="" />
        <span>HomeBudget</span>
      </NavLink>
      {userName && (
        <Form
          method="POST"
          action="/logout"
          onSubmit={(e) => {
            if (!confirm("are you sure")) {
              e.preventDefault();
            }
          }}
        >
          <button className="btn btn--warning" type="submit">
            Delete User
          </button>
        </Form>
      )}
    </nav>
  );
};

export default Nav;
