import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home({data}:any) {
  console.log(data.docs)
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
       {
        data.docs.map((datum:any)=>{
         return (<h3 key={datum.id}>{datum?.fullName}</h3>)
        })
       }
      </main>
    </>
  )
}


export  const getStaticProps = async ()=>{

  const response = await fetch('http://localhost:3000/api/staff/')
  const data = await response.json()
  console.log(data)
  return {
      props:{data}
  }
}
