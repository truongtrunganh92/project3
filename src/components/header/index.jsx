import { Link } from "react-router-dom";

export default function Header() {
    return <div>
        <nav className="flex items-center justify-between h-20 mx-auto w-9/12" >
            <Link to={'/'}>
                <div className="ml-5">
                    <h1 className="text-red-900 font-bold text-xl sm:text-2x1 md:text-3xl cursor-pointer tracking-wide">
                        REACT REDUX SHOPPING CART
                    </h1>

                </div>
            </Link>
            <ul className="flex items-center list-none space-x-6 text-gray-800 font-semibold">
                <Link to={'/'}>
                    <li className="cursor-pointer">Home</li>
                </Link>
                <Link to={'/cart'}>
                    <li className="cursor-pointer">Cart</li>
                </Link>
            </ul>
        </nav>
    </div>
}