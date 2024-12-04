import Image from "next/image";
import "./style.css";
import Link from "next/link";
import Button from "../Button";

export default function header() {
  return (
    <header>
      <div className="destaque border-y border-black"></div>
      <section className="navegacao">
        <div>
          <Link href="/">
            <Image
              src="proGirls.svg"
              alt="Logo ProGirls"
              width={200}
              height={100}
            />
          </Link>
        </div>
        <nav className="paginas">
          <ul>
            <li>
              <Link href="/home">Home</Link>
            </li>
            <li>
              <Link href="/comunidade">Comunidade</Link>
            </li>
            <li>
              <Link href="/sobre">Sobre Nós</Link>
            </li>
          </ul>
        </nav>
        <div>
          <Button className="bg-black">Comece Agora</Button>
        </div>
      </section>
    </header>
  );
}
