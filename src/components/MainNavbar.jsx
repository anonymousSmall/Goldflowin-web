<nav className="bg-[#3b74f0]">
  <div className="container mx-auto max-w-[1320px] relative p-6 flex justify-between items-center">

    {/* Logo */}
    <div>
      <Link to="/">
        <img src={logo3} className="h-10" alt="logo" />
      </Link>
    </div>

    {/* Desktop Menu */}
    <ul className="hidden md:flex gap-6 items-center">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            isActive
              ? "text-white bg-blue-900 px-4 py-2 rounded-lg font-medium"
              : "text-white/90 hover:text-white hover:bg-blue-800/60 px-4 py-2 rounded-lg"
          }
        >
          {item.name}
        </NavLink>
      ))}
    </ul>

    {/* User Profile (Desktop + Mobile) */}
    <Menu as="div" className="relative hidden md:block">
      {user ? (
        <>
          <MenuButton className="flex rounded-full bg-gray-800 focus:ring-2 focus:ring-white">
            <img
              alt=""
              src="https://cdn.iconscout.com/icon/free/png-512/free-avatar-icon-download-in-svg-png-gif-file-formats--user-professor-avatars-flat-icons-pack-people-456317.png?f=webp&w=256"
              className="size-8 rounded-full"
            />
          </MenuButton>

          <MenuItems
            transition
            className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1"
          >
            <MenuItem>
              <Link
                to="/user/history"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                History
              </Link>
            </MenuItem>
            <MenuItem>
              <button
                onClick={logout}
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Sign out
              </button>
            </MenuItem>
          </MenuItems>
        </>
      ) : (
        <div className="hidden md:flex gap-4 items-center">
          <NavLink
            to="/login"
            className="px-4 py-2 bg-white rounded-md text-gray-700 hover:bg-slate-200"
          >
            Login
          </NavLink>
          <Link
            to="/register"
            className="py-2 px-4 bg-[#4CAF4F] text-white rounded-md"
          >
            Sign up
          </Link>
        </div>
      )}
    </Menu>

    {/* Mobile Hamburger */}
    <FaBars
      onClick={() => setToggle(!toggle)}
      className="text-white text-2xl md:hidden cursor-pointer"
    />
  </div>

  {/* Mobile Menu */}
  {toggle && (
    <div className="md:hidden bg-[#3b74f0] px-6 pb-4">
      <ul className="flex flex-col gap-3">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={() => setToggle(false)}
            className="text-white py-2 px-3 rounded-lg hover:bg-blue-800/60"
          >
            {item.name}
          </NavLink>
        ))}

        {user ? (
          <>
            <Link
              to="/user/history"
              className="text-white py-2 px-3 rounded-lg hover:bg-blue-800/60"
              onClick={() => setToggle(false)}
            >
              History
            </Link>
            <button
              onClick={() => {
                logout();
                setToggle(false);
              }}
              className="text-white py-2 px-3 rounded-lg hover:bg-blue-800/60 text-left"
            >
              Sign out
            </button>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              onClick={() => setToggle(false)}
              className="text-white py-2 px-3 rounded-lg hover:bg-blue-800/60"
            >
              Login
            </NavLink>
            <Link
              to="/register"
              className="py-2 px-4 bg-[#4CAF4F] text-white rounded-md w-fit"
            >
              Sign up
            </Link>
          </>
        )}
      </ul>
    </div>
  )}
</nav>
