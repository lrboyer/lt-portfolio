 
const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center text-2xl">
                <p>Logo</p>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <p>
                    Home
                </p>
                <p>
                    About
                </p>
                <p>
                    Contact
                </p>
                <p>
                    Portfolio
                </p>
            </div>
        </nav>
    )
}

export default Navbar