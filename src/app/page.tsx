import Header from "@/components/header";
import { FaInstagram, FaWhatsapp, FaWhatsappSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Section from "./../components/section/index";
import {
  ceramicaImages,
  magicboxImages,
  pinturasImages,
  sobreImages,
  tattooImages,
} from "./../assets/img/index";

export default function Home() {
  return (
    //  HOME
    <>
      {/* CABECALHO */}
      <Header />

      {/* WHATSAPP FIXO */}
      <div className="fixed top-16 right-0 py-2 px-4 cursor-pointer flex justify-center z-10 bg-white rounded-l-lg border-4 border-r-0 border-primary">
        <FaWhatsappSquare color="var(--primary)" size={32} />
      </div>

      <main className="mt-16 flex min-h-screen flex-col items-center">
        {/* SOBRE */}
        <Section
          images={sobreImages as string[]}
          title="Sobre"
          text={`
          <p>
                <b>Fernanda Moraes</b> artista visionária e tatuadora. Seu
                trabalho aborda a Arte Visionária e tatuagens inspiradas nas
                artes de diferentes etnias, culturas ancestrais,
                espiritualidade, bem como em seu próprio estilo de vida.
                Fernanda cresceu em uma pequena cidade do interior do Espírito
                Santo, onde, seu contato próximo com a natureza nutria a vasta
                imaginação daquela criança que, desde bem cedo manifestava uma
                criatividade potente. Logo seu talento pela arte foi aflorando
                junto com sua sensibilidade para observar e traduzir a natureza
                em suas criações.
              </p>
              <p>
                A tatuagem surgiu em sua vida primeiro como uma paixão, como
                forma de expressão da personalidade. Depois se tornou uma
                profissão. Fernanda atua como tatuadora desde <b>2017</b> mas
                foi em <b>2020</b> que as geometrias, mandalas e padrões
                entraram com força em sua vida e em seus desenhos. Naquele
                momento também foi quando ela deu início à construção de sua
                identidade artística e como tatuadora. “Eu via mandalas por
                todas as partes, em volta das pessoas, no céu, nos objetos... Eu
                sonhava com formas geométricas coloridas. Era lindo!”
              </p>
        `}
        />
        {/* TATUAGENS */}
        <Section
          isReverse
          images={tattooImages as string[]}
          title="Tatuagens"
          text="<p>
              Como tatuadora, Fernanda estuda cada vez mais profundamente a
              relação entre o Ser, o corpo e a tatuagem. Buscando exaltar a
              personalidade de seus clientes através do seu 
              <b>traçado característico</b> e <b>tatuagens atemporais</b>.
              “Observo a personalidade de cada pessoa que vem até mim. Parto
              para a criação intuindo as formas. Deixo elas virem. Uso o
              movimento e a anatomia do corpo a meu favor. O corpo fala.“ Diz
              ela sobre como ela cria seus projetos únicos de tatuagens.
            </p>"
        />
        {/* PINTURA */}
        <Section
          images={pinturasImages as string[]}
          title="Pintura"
          text="<p>
              Recentemente, a artista começou a desenvolver seu trabalho com a
              Arte Visionária através da <b>pintura</b>. Suas telas em cores
              vibrantes misturam surrealismo e arte psicodélica, como forma de
              tornar material e visível para todos, aquilo que ela enxerga em
              suas meditações e sonhos. Desde sempre ela carrega consigo esse
              olhar profundo, de ver além do óbvio e o desejo de expressar esse
              sentimento através da sua arte. “Essa é a Matéria-Prima da minha
              obra.” “Acredito que a verdadeira fonte de onde busco inspiração
              para o meu trabalho, vem da imersão no meu próprio ser.” “As vezes sinto que posso conversar com os animais. As vezes tenho certeza.”
              “Eu quero mostrar ao mundo aquilo que vejo, e que as pessoas sintam esse amor!”
            </p>"
        />
        {/* MARCA DE ROUPAS E ACESSORIOS */}
        <Section
          isReverse
          title="Marca"
          text="
        <p>
          O desejo da artista de levar sua mensagem e imprimir seu estilo de
          vida nas coisas e nas pessoas, se fundiu com sua paixão pela
          customização para o nascimento da sua própria marca CosmicArt. A
          ideologia da Cosmic é levar a mensagem do Amor através da Arte,
          criar conexão entre pessoas e semear a linguagem do Amor Divino para
          nosso planeta. Para isso, as artes da Fernanda Moraes viram
          <b>estampas</b>. Elas são trazidas tanto de suas obras pintadas à
          mão, quanto criadas digitalmente. As roupas e acessórios ganham vida em suas coleções vibrantes! 
        </p>
        "
        />
        {/* PRINTS */}
        <Section
          title="Prints"
          text="<p>
          Os prints são impressões em alta qualidade, das obras originais. Eles são produzidos com o método de impressão Fine-art, que trata-se da melhor qualidade e tecnologia de impressão atualmente. Os prints também são uma forma de comercializar as obras para mais pessoas com valores mais acessíveis em relação aos originais. Além disso, eles são produzidos em <b>séries limitadas</b>, ou seja, são feitos em número exato(pré definido) e limitado. São um à um assinados a mão e numerados.
        </p>"
        />
        {/* STICKERS */}
        <Section
          isReverse
          title="Stickers"
          text="<p>
          Quem ai também curte colecionar stickers? Aqui estão os adesivos colecionáveis. Alguns vindo direto das obras originais pintadas à mão e outros criados exclusivamente para os colecionadores!
        </p>"
        />
        {/* MAGIC BOX */}
        <Section
          images={magicboxImages as string[]}
          title="Magic Box"
          text="<p>
          As Magic box são caixas de madeira pintadas à mão. Que servem tanto como uma peça de arte decorativa quanto para guardar objetos.
        </p>"
        />
        {/* CERAMICA */}
        <Section
          images={ceramicaImages as string[]}
          isReverse
          title="Cerâmica"
          text="<p> De forma criativa, Fernanda produz peças de cerâmica feitas à mão através do processo de modelagem (pinch pot). Para isso ela utiliza a argila, que após ser modelada e esculpida, será queimada em forno profissional. Assim, através da queima a argila torna-se biscoito cerâmico. Em seguida é esmaltada e queimada novamente em alta temperatura. </p>"
        />
        {/* CONTATO */}
        <section
          id="contato"
          className="max-w-[1440px] w-full items-center flex flex-col justify-center bg-primary gap-8 py-8 px-8 flex-wrap"
        >
          <h1 className="font-extrabold text-xl">Contato</h1>
          <div className="flex flex-col gap-4">
            <p className="text-md font-bold flex gap-4">
              <FaWhatsapp size={24} color="black" />
              WhatsApp: (27)99875-5278
            </p>
            <p className="text-md font-bold flex gap-4">
              <MdEmail size={24} />
              E-mail: fernanda_moraes08@hotmail.com
            </p>
            <p className="text-md font-bold flex gap-4">
              <FaInstagram size={24} color="black" />
              Instagram: @fernandamoraesn
            </p>
          </div>
        </section>
        {/* RODAPE */}
      </main>

      <footer className="h-12 w-full justify-center flex items-center">
        <small>&copy; 2024 Fernanda Tattoo</small>
      </footer>
    </>
  );
}
