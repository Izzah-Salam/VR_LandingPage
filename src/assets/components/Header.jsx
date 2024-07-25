import { GiVirtualMarker } from "react-icons/gi";
import "./custom.css";
const Header = () => {
  return (
    <div className="flex justify-between py-3 px-10 items-center shadow-box-shadow  ">
      <div className="flex space-x-4 items-center">
        <GiVirtualMarker className="text-orange-600 text-2xl" />
        <p className="font-bold text-xl">VirtualR</p>
      </div>
      <div>
        <ul className="flex space-x-10 text-sm">
          <li>Features</li>
          <li>Pricing</li>
          <li>Workflow</li>
          <li>Testimonial</li>
        </ul>
      </div>
      <div className="flex space-x-3 text-sm">
        <button className="border border-white p-2 rounded-md">Sign In</button>
        <button className="bg-custom-gradient p-2 rounded-md">
          Create an account
        </button>
      </div>
    </div>
  );
};

export default Header;
