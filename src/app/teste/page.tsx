import Header from "../../components/Header/header";
import TextFaq from "../../components/TextFaq";
import React from "react";
import SocialIcons from "../../components/SocialIcons";
import Text from "@/components/TextComponent";
import Button from "@/components/Button";
import { Image } from "@/components/Image";

const Teste: React.FC = () => {
  return (
    <div>
      <Header />

      <div className="flex">
        <div className="w-[60%] py-[80px]">
          <div className="flex flex-col align-center max-w-[690px] mx-auto">
            <Text className="uppercase text-emphasis font-montserrat mb-6">
              a Tecnologia Feita por Mulheres
            </Text>

            <h1 className="text-6xl mb-6 text-center font-medium">
              Code, Conecte-se e Cresça com a ProGirls
            </h1>

            <Text className="mb-8">
              Uma comunidade feita para você desenvolver habilidades,
              <br />
              criar conexões e alcançar seu potencial na tecnologia.
            </Text>

            <Button className="bg-pink mx-auto mb-[69px]">Comece Agora</Button>

            <Text className="mb-[69px]">
              Mais de <span className="text-emphasis">250+</span> mulheres
              programadoras confiando na ProGurls.
            </Text>

            <SocialIcons />

            <hr className="border-pink mx-auto w-[60%] mt-[69px]" />
          </div>
        </div>

        <Image
          src="/home-bg.png"
          alt="teste"
          width={1000}
          height={1000}
          className="w-[40%]"
        />
      </div>

      <TextFaq />
    </div>
  );
};

export default Teste;
