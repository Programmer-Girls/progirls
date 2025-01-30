import MemberCard, { Member } from "@/components/member-card";

const member: Member = {
  name: "Fufu da Silva",
  city: "RJ",
  image: "/foto.png",
  link_linkedin: "https://www.linkedin.com/???????????????????????",
  link_github: "https://github.com/???????????????????????",
  link_perfil: "???????????????????????",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

const members: Member[] = Array.from({ length: 3 * 3 }, () => member);

export default function Comunidade() {
  return (
    <section>
      <div className="mx-auto mt-16 mb-16">
        <hr className="flex border-black/50 border-t" />
        <p className="mt-16 text-6xl">
          Encontre as Profissionais que
          <br />
          <span className="text-emphasis font-normal">Transformam</span> a
          Tecnologia
        </p>
      </div>

      <div className="flex md:justify-end mb-32">
        <div className="p-6 flex flex-col md:w-[60%]">
          <p className="uppercase pb-5 border-b border-black/50">leia abaixo</p>

          <p className="mt-2">
            Somos uma comunidade de mais de 150 mulheres na tecnologia, de áreas{" "}
            <br /> como programação, análise de dados, UX/UI, DevOps e
            engenharia de <br /> requisitos. Todas aqui estão dedicadas a
            aumentar a presença feminina no <br /> setor. Conheça nossas
            integrantes por área de atuação:
          </p>
        </div>
      </div>

      <div className="container mx-auto flex flex-wrap gap-20 justify-center">
        {members.map((member, index) => (
          <MemberCard {...member} key={index} className="md:w-1/3 w-full" />
        ))}
      </div>
    </section>
  );
}
