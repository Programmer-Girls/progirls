import TextFaq from "@/components/TextFaq";
import React from "react";
import { Text } from "@/components/text";
import Button from "@/components/button";
import { Image } from "@/components/image";
import { SocialIcon } from "@/components/social-icon";
import {
  TiSocialGithub,
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialYoutube,
} from "react-icons/ti";
import Link from "next/link";

const Teste: React.FC = () => {
  return (
    <div>
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

            <div className="flex gap-2 justify-center">
              <Link href="https://www.linkedin.com/???????????????????????">
                <SocialIcon>
                  <TiSocialLinkedin size={30} />
                </SocialIcon>
              </Link>

              <Link href="https://github.com/Programmer-Girls">
                <SocialIcon>
                  <TiSocialGithub size={30} />
                </SocialIcon>
              </Link>

              <Link href="https://www.instagram.com/comunidade_progirls/">
                <SocialIcon>
                  <TiSocialInstagram size={30} />
                </SocialIcon>
              </Link>

              <Link href="https://www.youtube.com/????????????????????">
                <SocialIcon>
                  <TiSocialYoutube size={30} />
                </SocialIcon>
              </Link>
            </div>

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
