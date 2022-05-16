import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Sobre({student}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Sobre o sistema
        </h1>



<p>Estudo sobre uso dos recursos do next e uso de api. Foi usado a api do site TMDB</p>


<hr/>

Student: {student} <br/>

<hr/><br/>

<Link href="https://www.themoviedb.org/">Site TMDB</Link>



      </main>

  

    </div>
  )
}


export async function getStaticProps(){



 // const res = await fetch('http://localhost:3000/api/trending')
  //const json = await res.json();
 /* return{
    props:{
      list: json.list
    }
 } */

return{

    props:{
        student: 'Jailson'
    }
}


}