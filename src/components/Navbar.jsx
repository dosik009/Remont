import logo from "../../public/images/logoo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="w-full flex gap-96  items-center pr-20 pl-20 h-[60px] fixed bg-slate-400 py-9 rounded-full my-4  ml-80">
            <Link to='/' className="flex gap-3">
                <img src={logo} alt="logo" width={100} height={100} />
                <h3 className="text-3xl font momo py-2.5">RemontPro</h3> 
            </Link>
            <div className="hidden md:flex gap-7">
                <button className="bg-blue-500 rounded-3xl w-32 h-7 text-purple-200 "><Link to="/">Main Page</Link></button>
                <button className="bg-blue-500 rounded-3xl w-32 h-7 text-purple-200 "><Link to="/generate">Generate</Link></button>
            </div>
            <div className="md:hidden">burger button</div>
        </div>
    );
};

export default Navbar;
