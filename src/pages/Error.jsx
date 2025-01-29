import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/"); // Navigate to the home page
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <h2 className="text-2xl font-semibold">Error: Page not found</h2>
      <p className="text-gray-600">The requested page could not be found.</p>
      <a onClick={handleHome} className="text-blue-500 cursor-pointer text-2xl">
        Back to Home
      </a>
    </div>
  );
};

export default Error;
