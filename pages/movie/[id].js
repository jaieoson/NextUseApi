import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function MovieItem({info}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

      <Link href="/busca">ir para busca</Link>

        <h1 className={styles.title}>

         {info.title}
        </h1>

        <p>Nota: {info.vote_average}</p>

        <p>{info.overview}</p>


<img src={`https://image.tmdb.org/t/p/original${info.backdrop_path}`} width="400" /><br/>


      </main>

  



    </div>
  )
}


export async function getServerSideProps(context){

  const res = await fetch(`http://localhost:3000/api/movie/${context.query.id}`)

  const json = await res.json();

  return{

    props:{
      info: json.info
    }
  }
}