import { useRouteError } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const ErrorPage = () => {
      const error = useRouteError();
      console.log(error);
      return (
      <div>
            <h1>Oops!</h1>
            <p>An error occurred while loading the page.</p>
            {error && <p>{error.data}</p>}
            <NavLink to="/">
            <button>Go back to home</button>
            </NavLink>
      </div>
      );
};