import React from "react";
import { Text } from "@/components/text";
import { Image } from "@/components/image";


const Sobre: React.FC = () => {
  return (
    <>
      <section className="flex h-[45vh] py-10 items-center justify-center">
        <div className="flex-col w-[50%] p-20">
          <h1 className="uppercase text-4xl font-medium font-montserrat mb-6">Sobre Nós</h1>
          <Text>A Programmer Girl começou em 2022 como uma iniciativa de Raquel Maia (@maia_dev) para compartilhar conhecimentos em programação. <br/> Hoje, é uma comunidade com mais de 150 mulheres no WhatsApp, LinkedIn e Instagram, apoiada pelas administradoras Maria, Sabrinne, Joana e Fufu. <br/>
          O grupo promove inclusão, suporte emocional, aprendizado técnico, idiomas, troca de experiências e oportunidades de trabalho, criando um ambiente seguro e acolhedor para mulheres de todas as origens crescerem juntas na área de tecnologia.</Text>
        </div>
        <Image
          src="/sobre-bg.png"
          alt="grupo de mulheres"
          width={120}
          height={120}
          className="w-[40%] h-[60%] saturate-0 rounded-e-full"
        />
      </section>
      <Image
        src="/break-session.png"
        alt="linha curva quebrando a sessão"
        width={120}
        height={120}
        className="w-[100%]"
        />
      <section className="bg-black flex flex-col items-center py-10 gap-10">
        <div className="flex flex-col w-[32%] items-center p-10 border-e-white border-2 rounded-2xl">
          <h2 className="text-emphasis">Nossa Missão</h2>
          <Text className="text-white text-center">Fortalecer o protagonismo feminino na tecnologia, promovendo desenvolvimento profissional e
          autonomia econômica para mulheres.</Text>
        </div>
        <div className="flex flex-col w-[32%] items-center p-10 border-e-white border-2 rounded-2xl">
          <h2 className="text-emphasis">Nossa Visão</h2>
          <Text className="text-white text-center">Queremos ser uma força que impulsiona a formação técnica e empregabilidade de mulheres na TI, acompanhando desde o despertar para a área até a conquista de posições de liderança.</Text>
        </div>
        <div className="flex flex-col w-[32%] items-center p-10 border-e-white border-2 rounded-2xl">
          <h2 className="text-emphasis">Nossos Valores</h2>
          <Text className="text-white text-center">Valorizamos o empoderamento, a inclusão, a colaboração, a excelência e o impacto. Esses valores são o que cultivamos diariamente em todas as nossas relações. Acreditamos que, juntas, somos capazes de transformar o mercado de trabalho e abrir caminhos para mais mulheres.</Text>
        </div>
      </section>
    </>
  );
};
export default Sobre;