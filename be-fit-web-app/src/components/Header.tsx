import Logo from './Logo';

const Header = () => {
  return <header className="px-8 py-8 lg:px-16 w-full bg-gradient-to-b from-black/20 to-transparent absolute z-10">
    <Logo></Logo>
  </header>;
};

export default Header;
