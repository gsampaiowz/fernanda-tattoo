import Header from "@/components/Header/Header";
import Image from "next/image";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* HOME */}
      <Header />

      <main className="flex min-h-screen flex-col items-center">
        {/* SOBRE */}
        <section className="max-w-[1440px] w-full items-center flex flex-col-reverse cssBreak:flex-row justify-center bg-primary gap-8 py-8 px-8 flex-wrap">
          <span className="indent-8 cssBreak:w-3/6">
            <p>
              <b>Fernanda Moraes</b> artista visionária e tatuadora. Seu
              trabalho aborda a Arte Visionária e tatuagens inspiradas nas artes
              de diferentes etnias, culturas ancestrais, espiritualidade, bem
              como em seu próprio estilo de vida. Fernanda cresceu em uma
              pequena cidade do interior do Espírito Santo, onde, seu contato
              próximo com a natureza nutria a vasta imaginação daquela criança
              que, desde bem cedo manifestava uma criatividade potente. Logo seu
              talento pela arte foi aflorando junto com sua sensibilidade para
              observar e traduzir a natureza em suas criações.
            </p>
            <p>
              A tatuagem surgiu em sua vida primeiro como uma paixão, como forma
              de expressão da personalidade. Depois se tornou uma profissão.
              Fernanda atua como tatuadora desde <b>2017</b> mas foi em{" "}
              <b>2020</b> que as geometrias, mandalas e padrões entraram com
              força em sua vida e em seus desenhos. Naquele momento também foi
              quando ela deu início à construção de sua identidade artística e
              como tatuadora. “Eu via mandalas por todas as partes, em volta das
              pessoas, no céu, nos objetos... Eu sonhava com formas geométricas
              coloridas. Era lindo!”
            </p>
          </span>

          <Image
            className="w-96 rounded-lg"
            src="https://drive.google.com/thumbnail?id=1F4y3hZD0GCj3gpR1acZMtzoLi4r2PHDR&sz=w10000"
            alt="Fotografia fernanda"
          />
        </section>
        <section className="max-w-[1440px] w-full items-center flex justify-center bg-white gap-8 py-8 px-8 flex-wrap">
          <Image
            className="w-96 rounded-lg"
            src="https://drive.google.com/thumbnail?id=1EDlo_UzIZiUuyAGBhUPvh8Qf84NoYn7A&sz=w10000"
            alt="Tattoo"
          />
          <p className="indent-8 cssBreak:w-3/6">
            Como tatuadora, Fernanda estuda cada vez mais profundamente a
            relação entre o Ser, o corpo e a tatuagem. Buscando exaltar a
            personalidade de seus clientes através do seu{" "}
            <b>traçado característico</b> e <b>tatuagens atemporais</b>.
            “Observo a personalidade de cada pessoa que vem até mim. Parto para
            a criação intuindo as formas. Deixo elas virem. Uso o movimento e a
            anatomia do corpo a meu favor. O corpo fala.“ Diz ela sobre como ela
            cria seus projetos únicos de tatuagens.
          </p>
        </section>
        <section className="max-w-[1440px] w-full items-center flex flex-col-reverse cssBreak:flex-row justify-center bg-primary gap-8 py-8 px-8 flex-wrap">
          <p className="indent-8 cssBreak:w-3/6">
            Recentemente, a artista começou a desenvolver seu trabalho com a
            Arte Visionária através da <b>pintura</b>. Suas telas em cores
            vibrantes misturam surrealismo e arte psicodélica, como forma de
            tornar material e visível para todos, aquilo que ela enxerga em suas
            meditações e sonhos. Desde sempre ela carrega consigo esse olhar
            profundo, de ver além do óbvio e o desejo de expressar esse
            sentimento através da sua arte. “Essa é a Matéria-Prima da minha
            obra.” “Acredito que a verdadeira fonte de onde busco inspiração
            para o meu trabalho, vem da imersão no meu próprio ser.” “As vezes
            sinto que posso conversar com os animais. As vezes tenho certeza.”
            “Eu quero mostrar ao mundo aquilo que vejo, e que as pessoas sintam
            esse amor!”
          </p>
          <Image
            className="w-96 rounded-lg"
            src="https://drive.google.com/thumbnail?id=1A3qxKB-wYOINEz6RtWyppsCDNTUnZtT7&sz=w10000"
            alt="Pintura"
          />
        </section>
        <section className="max-w-[1440px] w-full items-center flex justify-center bg-white gap-8 py-8 px-8 flex-wrap">
          <h1 className="font-extrabold text-xl">
            Marca de roupas e acessórios
          </h1>
          <p className="indent-8">
            O desejo da artista de levar sua mensagem e imprimir seu estilo de
            vida nas coisas e nas pessoas, se fundiu com sua paixão pela
            customização para o nascimento da sua própria marca CosmicArt. A
            ideologia da Cosmic é levar a mensagem do Amor através da Arte,
            criar conexão entre pessoas e semear a linguagem do Amor Divino para
            nosso planeta. Para isso, as artes da Fernanda Moraes viram
            <b>estampas</b>. Elas são trazidas tanto de suas obras pintadas à
            mão, quanto criadas digitalmente. As roupas e acessórios ganham vida
            em suas coleções vibrantes!
          </p>
        </section>
        <section className="max-w-[1440px] w-full items-center flex justify-center bg-primary gap-8 py-8 px-8 flex-wrap">
          <h1 className="font-extrabold text-xl">Prints</h1>
          <p className="indent-8">
            Os prints são impressões em alta qualidade, das obras originais.
            Eles são produzidos com o método de impressão Fine-art, que trata-se
            da melhor qualidade e tecnologia de impressão atualmente. Os prints
            também são uma forma de comercializar as obras para mais pessoas com
            valores mais acessíveis em relação aos originais. Além disso, eles
            são produzidos em *séries limitadas*, ou seja, são feitos em número
            exato(pré definido) e limitado. São um à um assinados a mão e
            numerados.
          </p>
        </section>
        <section className="max-w-[1440px] w-full items-center flex justify-center bg-white gap-8 py-8 px-8 flex-wrap">
          <h1 className="font-extrabold text-xl">Stickers</h1>
          <p className="indent-8">
            Quem ai também curte colecionar stickers? Aqui estão os adesivos
            colecionáveis. Alguns vindo direto das obras originais pintadas à
            mão e outros criados exclusivamente para os colecionadores!
          </p>
        </section>
        <section className="max-w-[1440px] w-full items-center flex justify-center bg-primary gap-8 py-8 px-8 flex-wrap">
          <Image
            className="w-96 rounded-lg"
            src="https://drive.google.com/thumbnail?id=1hjLaSJDvJR9geUpc8ZdMXqwMuN-y1jSI&sz=w10000"
            alt="Magic Box"
          />
          <p className="indent-8">
            As Magic box são caixas de madeira pintadas à mão. Que servem tanto
            como uma peça de arte decorativa quanto para guardar objetos.
          </p>
        </section>
        <section className="max-w-[1440px] w-full items-center flex justify-center bg-white gap-8 py-8 px-8 flex-wrap">
          <p className="indent-8">
            De forma criativa, Fernanda produz peças de cerâmica feitas à mão
            através do processo de modelagem (pinch pot). Para isso ela utiliza
            a argila, que após ser modelada e esculpida, será queimada em forno
            profissional. Assim, através da queima a argila torna-se biscoito
            cerâmico. Em seguida é esmaltada e queimada novamente em alta
            temperatura.
          </p>
          <Image
            className="w-96 rounded-lg"
            src="https://drive.google.com/thumbnail?id=13cF25byJYODW1VfyEApXP-Zus_Fixlyq&sz=w10000"
            alt="Cerâmica"
          />
        </section>
        <section className="max-w-[1440px] w-full items-center flex flex-col justify-center bg-primary gap-8 py-8 px-8 flex-wrap">
          <h1 className="font-extrabold text-xl">Contato</h1>
          <div className="flex flex-col gap-4">
            <p className="text-md font-bold flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              WhatsApp: (27)99875-5278
            </p>
            <p className="text-md font-bold flex gap-4">
              E-mail: fernanda_moraes08@hotmail.com
            </p>
            <p className="text-md font-bold flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Instagram: @fernandamoraesn
            </p>
          </div>
        </section>
        <footer className="h-12 w-full justify-center flex items-center">
          <small>&copy; 2024 Fernanda Tattoo</small>
        </footer>
      </main>
    </>
  );
}
