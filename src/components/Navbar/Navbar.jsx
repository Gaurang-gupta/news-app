import { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import "./Navbar.css"
import { Link } from 'react-router-dom';

function Navbar({setClicked}) {
    const [open, setOpen] = useState(false);
    const urlParams = new URLSearchParams(window?.location?.search);
    const myParam = urlParams?.get('target');

  return (
    <nav className=''>
        <header className='grid grid-cols-3 p-10 items-center'>
            <div>
                <RxHamburgerMenu onClick={() => setOpen(!open)} className='text-3xl cursor-pointer'/>
            </div>
            <a href='/'>
                <h1 className='font-serif text-4xl text-center'>
                    The <span
                        className='underline decoration-6 decoration-orange-400'
                    >NEWS</span>
                </h1>
            </a>
            <div className='flex items-center justify-end space-x-2'>
            <button className="hidden md:inline bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800">Subscribe Now</button>
            </div>
        </header>
        <ul className={`${open && "hidden"} grid xs:grid-cols-1 sm:grid-cols-4 md:grid-cols-7 text-xs md:text-sm gap-4 pb-10 max-w-6xl mx-auto border-b`}>
            <Link to={"/news?target=general"} onClick={() => setClicked("general")} className={`navlink ${myParam === "general" && 'active'}`}>general</Link>
            <Link to={"/news?target=business"} onClick={() => setClicked("business")} className={`navlink ${myParam === "business" && 'active'}`}>business</Link>
            <Link to={"/news?target=entertainment"} onClick={() => setClicked("entertainment")} className={`navlink ${myParam === "entertainment" && 'active'}`}>entertainment</Link>
            <Link to={"/news?target=health"} onClick={() => setClicked("health")} className={`navlink ${myParam === "health" && 'active'}`}>health</Link>
            <Link to={"/news?target=science"} onClick={() => setClicked("science")} className={`navlink ${myParam === "science" && 'active'}`}>science</Link>
            <Link to={"/news?target=sports"} onClick={() => setClicked("sports")} className={`navlink ${myParam === "sports" && 'active'}`}>sports</Link>
            <Link to={"/news?target=technology"} onClick={() => setClicked("technology")} className={`navlink ${myParam === "technology" && 'active'}`}>technology</Link>
        </ul>
    </nav>
  )
}

export default Navbar