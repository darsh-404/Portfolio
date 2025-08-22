import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white px-4">
      <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
      <p className="text-lg text-slate-300 max-w-xl text-center mb-6">
        Your message has been successfully sent. I’ll get back to you soon!
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white transition duration-200"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ThankYou;
