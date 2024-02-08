import Logo from "@/assets/img/logo.png";

const Header = () => {
  return (
    <header className="w-full h-24 flex items-center justify-center bg-white">
      <img style={{objectPosition: "25% 36%"}} className="object-cover w-48 h-24" src={Logo.src} alt="Logo" />
    </header>
  );
};

export default Header;
