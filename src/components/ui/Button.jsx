// components/SeeMyWorksButton.jsx
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const MyButton = ({ to = "", label = "", sec = false }) => {
  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-2 ${sec ? 'border border-primary' : 'bg-primary'} px-5 py-2 rounded-full hover:opacity-90 transition-all`}
    >
      <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
        <ArrowRight className="text-black w-4 h-4" />
      </span>
      <span className={`whitespace-nowrap ${sec ? 'text-white' : 'text-black'}`}>{label}</span>
    </Link>
  );
};

export default MyButton;
