import logo from "./../../../../src/assets/logo.jpg";

function Header() {
    return (
        <header className="text-gray-600 body-font bg-[#2344b9]">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">

            <a href="javascript:void(0)" className="flex title-font items-center mb-4 md:mb-0">
                <img src={logo} alt="Self Logo" className="h-6" />
                <span className="ml-5 text-xs text-white">Your Digital Mental Health Record</span>
            </a>


            <div className="flex">
                <nav className="md:ml-auto flex flex-wrap items-center text-sm justify-center">
                    <a href="javascript:void(0)" className="mr-5 text-white">About</a>
                    <a href="javascript:void(0)" className="mr-5 text-white">Sign Up</a>
                    <a href="javascript:void(0)" className="mr-5 text-white">Login</a>
                </nav>
            </div>

        </div>
        </header>
    )
}

export default Header;