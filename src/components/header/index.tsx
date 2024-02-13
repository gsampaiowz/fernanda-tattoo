"use client";
const Header = () => {
  return (
    <header className="fixed top-0 z-10 pr-8 w-full h-16 bg-transparent backdrop-blur-xl backdrop-brightness-125">
      <div className="max-w-[1440px] flex items-center justify-between h-full m-auto">
        <img
          style={{ objectPosition: "25% 36%" }}
          className="object-cover w-32 h-full"
          src="https://drive.google.com/thumbnail?id=12KDSKravj-fzhMR22eK5SG1ynkTO-hJJ&sz=w10000"
          alt="Logo"
        />
        <nav className="flex gap-8">
          <a
            onClick={() => {
              setTimeout(() => {
                window.scrollBy(0, -60);
              }, 700);
            }}
            className="capitalize font-semibold text-black [text-shadow:_0_0_4px_rgb(255_255_255_/_100%)]"
            href="#sobre"
          >
            sobre
          </a>
          <a
            onClick={() => {
              setTimeout(() => {
                window.scrollBy(0, -60);
              }, 700);
            }}
            className="capitalize font-semibold text-black [text-shadow:_0_0_4px_rgb(255_255_255_/_100%)]"
            href="#tatuagens"
          >
            tatuagens
          </a>
          <a
            onClick={() => {
              setTimeout(() => {
                window.scrollBy(0, -60);
              }, 700);
            }}
            className="capitalize font-semibold text-black [text-shadow:_0_0_4px_rgb(255_255_255_/_100%)]"
            href="#pintura"
          >
            pintura
          </a>
          <a
            onClick={() => {
              setTimeout(() => {
                window.scrollBy(0, -60);
              }, 700);
            }}
            className="capitalize font-semibold text-black [text-shadow:_0_0_4px_rgb(255_255_255_/_100%)]"
            href="#marca"
          >
            marca
          </a>
          <a
            onClick={() => {
              setTimeout(() => {
                window.scrollBy(0, -60);
              }, 700);
            }}
            className="capitalize font-semibold text-black [text-shadow:_0_0_4px_rgb(255_255_255_/_100%)]"
            href="#prints"
          >
            prints
          </a>
          <a
            onClick={() => {
              setTimeout(() => {
                window.scrollBy(0, -60);
              }, 700);
            }}
            className="capitalize font-semibold text-black [text-shadow:_0_0_4px_rgb(255_255_255_/_100%)]"
            href="#stickers"
          >
            stickers
          </a>
          <a
            onClick={() => {
              setTimeout(() => {
                window.scrollBy(0, -60);
              }, 700);
            }}
            className="capitalize font-semibold text-black [text-shadow:_0_0_4px_rgb(255_255_255_/_100%)]"
            href="#magic box"
          >
            magic box
          </a>
          <a
            onClick={() => {
              setTimeout(() => {
                window.scrollBy(0, -60);
              }, 700);
            }}
            className="capitalize font-semibold text-black [text-shadow:_0_0_4px_rgb(255_255_255_/_100%)]"
            href="#cerâmica"
          >
            cerâmica
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
