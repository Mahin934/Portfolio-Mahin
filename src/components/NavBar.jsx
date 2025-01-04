import { NavLink } from "react-router-dom";


const NavBar = () => {
    const links =(<>
        <li className="md:mr-3"><NavLink to="/">Home</NavLink></li>
        <li className="md:mr-3"><NavLink to="/work">Work</NavLink></li>
        <li className="md:mr-3"><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
    </>)
    return (
        <div>
            <div class="navbar justify-between bg-base-100">
                <div>
                    <div class="dropdown">
                        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabindex="0"
                            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a class="btn btn-ghost text-xl uppercase">Mahin</a>
                </div>
                <div class="hidden lg:flex">
                    <ul class="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;