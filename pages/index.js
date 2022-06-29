import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from "../components/Nav/Nav";
import {useRouter} from "next/router";
import {useUser} from "../hooks/useUser";
import {useEffect} from "react";
import Image from "next/image";
import Logo from "../assets/pokemon-logo.png"
import AshImage from "../assets/pokemon-background.png"

export default function Home() {
    const [user] = useUser()
    const router = useRouter()

    useEffect(() => {
        if (user) {
            router.push("home")
        }
    }, [user, router])

    return (<div className={styles.container}>
        <Head>
            <title>Pokemon Next App</title>
            <meta name="description" content="Pokemon App generated by create next app"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <Nav/>
        <main className={styles.main}>
            <div className="container bg-opacity-20 bg-white rounded-2xl flex flex-col items-center">
                <Image src={Logo} width={500} height={200}/>
                <h1 className={styles.title}>
                    POKEMON CARDS APP
                </h1>
                <section className="flex w-full">
                    <article className="flex-[3] m-5 rounded-2xl backdrop-blur-[20px]">
                        <p className="text-2xl text-justify p-3">Pokemon Cards App es una aplicación para
                            visualizar cartas pokemon.
                        </p>
                        <p className="text-2xl text-justify p-3">
                            Iniciá sesión para conocer todo acerca de los pokémon!!!
                        </p>
                    </article>
                    <aside className="p-5 flex-[2] m-5 rounded-2xl backdrop-blur-[20px] flex justify-center">
                        <Image src={AshImage} width={400} height={300}></Image>
                    </aside>
                </section>
            </div>


            <div className={styles.grid}>

            </div>

        </main>
        <footer className={styles.footer}>
            <p>Powered by Vercel</p>
        </footer>
    </div>)
}
