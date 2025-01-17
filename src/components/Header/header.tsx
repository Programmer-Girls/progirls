import Image from "next/image";
import "./style.css";
import Link from "next/link";
import Button from "../Button/button";

export default function header() {
  return (
    <header className="w-full">
      <div className="destaque"></div>
      <section className="navegacao flex justify-items-center overflow-x-hidden ">
      <div className="min-w-[150px] md:min-w-[100px] flex-shrink-0">
    <Link href="/">
        <Image 
            src="proGirls.svg" 
            alt="Logo ProGirls"
            width={200} 
            height={100} 
            className="w-full h-auto"
        />
    </Link>
</div>
        <nav className="paginas p-4">
          <ul className="flex space-x-12">
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
          <Button />
        </div>
      </section>
    </header>
  );
}