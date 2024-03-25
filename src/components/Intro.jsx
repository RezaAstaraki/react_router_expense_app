import { Form } from "react-router-dom";

//asset
import illustration from "../assets/illustration.jpg";

//icons
import { UserPlusIcon } from "@heroicons/react/24/solid";

const Intro = () => {
  return (
    <div className="intro">
      <div />
      <div>
        <h1>
          Take Control of <span className="accent">Your Money</span>
        </h1>
        <p>
          Personal budgeting is the secret to financial freedom. Start your
          journey today.
        </p>
        <Form method="POST">
          <input type="hidden" name="_action" value="createUser" />
          <input
            required
            placeholder="What is your name?"
            aria-label="Your Name"
            type="text"
            name="userName"
            autoComplete="given-name"
          />
          <button className="btn btn--dark" type="submit">
            Create Account
            <UserPlusIcon width={20} />
          </button>
        </Form>
        <img src={illustration} alt="person with money" />
      </div>
    </div>
  );
};

export default Intro;
