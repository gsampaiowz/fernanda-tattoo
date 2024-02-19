import Carousel from "../carousel";
import EntrarContato from "./entrarContato";

type SectionProps = {
  title: string;
  text: string;
  contatoText: string;
  images?: string[];
  isReverse?: boolean;
  isBgWhite?: boolean;
};

const Section: React.FC<SectionProps> = ({
  title,
  text,
  contatoText,
  images = [],
  isReverse,
  isBgWhite,
}: SectionProps) => {
  const textoFormatado = text
    .split(/<\/?p>/)
    .map((text, index) => (
      <p key={index}>
        {text
          .split(/<\/?b>/)
          .map((text, index) =>
            index % 2 === 0 ? (
              <span key={index}>{text}</span>
            ) : (
              <b key={index}>{text}</b>
            )
          )}
      </p>
    ));

  return (
    <section
      id={title.toLowerCase()}
      className={`max-w-[1440px] sm:px-12 w-full flex flex-col gap-8 py-8 px-6 cssBreak:px-24 ${
        isReverse ? "bg-white" : "bg-primary"
      }`}
    >
      <div
        className={`items-center flex flex-col-reverse cssBreak:flex-row ${
          isReverse ? "cssBreak:flex-row-reverse" : ""
        } justify-between gap-8`}
      >
        <div
          className={`flex flex-col gap-8 items-center ${
            images.length === 0 ? "cssBreak:w-full" : "cssBreak:w-3/6"
          } `}
        >
          <h1 className="font-extrabold text-xl">{title}</h1>
          <span className="indent-8">{textoFormatado}</span>
        </div>
        {images.length === 0 ? null : (
          <Carousel
            slides={images}
            map={images.map((image) => (
              <a
                key={image}
                target="_blank"
                href="https://www.instagram.com/fernandamoraesn/"
                className={`min-w-64 cssBreak:min-w-96 h-full before:flex before:items-center before:self-center before:justify-center before:h-full before:w-full before:absolute before:z-10 before:text-white hover:before:content-['Ir_para_o_Instagram'] bg-center bg-[length:100%] before:font-bold cursor-pointer hover:bg-[length:110%]  before:hover:backdrop-brightness-[60%] transition-all`}
                style={{ backgroundImage: `url(${image})` }}
              ></a>
            ))}
          />
        )}
      </div>

      <EntrarContato text={contatoText} isBgWhite={isBgWhite} />
    </section>
  );
};

export default Section;
