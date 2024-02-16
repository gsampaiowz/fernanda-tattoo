"use client";

import { useState } from "react";
import { BiMenu } from "react-icons/bi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-10 pr-8 w-full h-16 bg-white cssBreak:bg-transparent backdrop-blur-xl backdrop-brightness-125">
      <div className="max-w-[1440px] flex items-center justify-between h-full m-auto">
        <img
          style={{ objectPosition: "25% 36%" }}
          className="object-cover min-w-32 h-full"
          src="https://drive.google.com/thumbnail?id=12KDSKravj-fzhMR22eK5SG1ynkTO-hJJ&sz=w10000"
          alt="Logo"
        />
        <BiMenu className="block cssBreak:hidden cursor-pointer z-30" onClick={() => setMenuOpen(!menuOpen)} size={30} color="black"/>
        <nav className={`fixed ${menuOpen ? "right-0" : "-right-64"} transition-all top-0 h-screen bg-white p-12 z-20 gap-8 flex flex-col w-64 cssBreak:h-auto cssBreak:p-0 cssBreak:flex-row cssBreak:w-auto cssBreak:static`}>
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
          <a
            className="capitalize font-semibold text-black [text-shadow:_0_0_4px_rgb(255_255_255_/_100%)]"
            href="#contato"
          >
            contato
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
