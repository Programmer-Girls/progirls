export default function header(){
    return(
        <header>
            <section className="pt-10 bg-emphasis">
             </section>
            <section className="px-20 py-6 flex justify-between border-2 border-foreground">
                <div>
                    <h1 className="text-4xl font-black;">ProGirls</h1>
                </div>
                <nav className="w-2/4 pt-2">
                    <ul className="flex justify-around align-middle	">
                        <li><a href="">Home</a></li>
                        <li><a href="">Comunidade</a></li>
                        <li><a href="">Sobre Nós</a></li>
                    </ul>
                </nav>
                <div>
                    <button className="bg-foreground text-background w-28 h-8 rounded	">Comece Agora</button>
                </div>

            </section>
             
        </header>
    )
}