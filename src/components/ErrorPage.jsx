import { Link, useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mt-2">
        Oops! Page not found
      </h2>
      <p className="text-gray-600 mt-2">
        {error?.statusText || error?.message || "Something went wrong."}
      </p>

      <Link
        to="/"
        className="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        ⬅ Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
