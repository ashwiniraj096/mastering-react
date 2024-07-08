import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>OOPs, something went wrong... {error.status}</h1>
    </div>
  );
};

export default ErrorPage;
