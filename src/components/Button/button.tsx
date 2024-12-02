import Link from "next/link";
import './style.css';


const Button = () => {
    return(
        <Link href="/contato">
        <button className="junteSe">Comece Agora</button>
    </Link>
    )
}
export default Button;