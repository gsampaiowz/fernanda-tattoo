import { FaWhatsapp } from "react-icons/fa";

type EntrarContatoProps = {
  text: string;
  isBgWhite?: boolean;
};

const EntrarContato = ({ text, isBgWhite = false }: EntrarContatoProps) => {
  return (
    <a
    href="https://api.whatsapp.com/send?phone=5527998755278"
      className={`border-2 cursor-pointer max-w-72 px-8 py-2 w-full items-center self-center flex gap-4 ${
        isBgWhite
          ? "border-primary text-primary hover:text-white hover:bg-primary"
          : "border-white text-white hover:text-primary hover:bg-white"
      }`}
    >
      <FaWhatsapp className="stroke-[15]" size={20} />

      <h1 className="text-base font-bold">{text}</h1>
    </a>
  );
};

export default EntrarContato;
