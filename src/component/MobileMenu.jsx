import Button from "./Button";
import Logo from "./Logo";

const MobileMenu = ({ menuOpen, setMenuOpen, menuItems }) => {
  return (
    <div
      className={`fixed left-0 top-0 z-30 h-full w-64 transform border-r-2 border-white/15 bg-white/10 px-4 backdrop-blur transition-transform duration-300 delay-150 ${
        menuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="mt-5 mb-1">
        <Logo />
      </div>

      <hr className="border-2 border-white/20 mb-4" />

      <nav>
        <ul className="space-y-4 flex-col flex ">
          {menuItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="nav-item"
                onClick={() => setMenuOpen(false)} // Optionally close menu on click
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
        <Button variant="outline" className="mt-5 py-2">Contact Me</Button>
    </div>
  );
};

export default MobileMenu;
