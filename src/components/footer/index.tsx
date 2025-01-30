import Image from "next/image";
export default function Footer() {
  return (
    <footer className="w-full overflow-x-hidden overflow-y-hidden bottom-0">
      <section className="faixa"></section>
      <div className="container mx-auto">
        <section className="itens">
          <section className="principal">
            <Image
              src="proGirls2.svg"
              alt="Logo ProGirls"
              width={100}
              height={80}
            />
            <div className="body">
              <h2>Estude com ProGirls</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
                vel sed debitis? Delectus odio veritatis neque rem ipsam qui
                soluta.
              </p>
            </div>
          </section>
          <div className="flex items-center justify-end">
            <nav className="gap-12">
              <ul className="sobre lista">
                <li className="mb-5">
                  <span>Sobre Nós</span>
                </li>
                <li>Sobre Nós</li>
                <li>Sobre Nós</li>
              </ul>
              <ul className="recursos lista">
                <li className="mb-5">
                  <span>Recursos</span>
                </li>
                <li>Comunidade</li>
                <li>
                  <a
                    href="https://www.youtube.com/@progirls-c1y?si=rHNJ-0gUoSnzvvrY"
                    target="_blank"
                  ></a>
                  Tutoriais
                </li>
              </ul>
              <ul className="social lista">
                <li className="mb-5">
                  <span>Social</span>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/comunidade_progirls/?igsh=MTJ5dmx4N3B3eTE2OA%3D%3D"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/groups/10008515"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </div>
      <section className="faixaPreta ">
        <p>
          ©{new Date().getFullYear()} ProGirls Todos os Direitos Reservados.
        </p>
      </section>
    </footer>
  );
}
