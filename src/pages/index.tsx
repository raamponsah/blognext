import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import axios from 'axios'
import { PropsWithChildren } from 'react'
import { Props } from 'next/script'
import { GetStaticProps } from 'next'

const inter = Inter({ subsets: ['latin'] })
type Data = {
  name:string
}
export default function Home(data:Data) {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>DEPLOYED! {data.name}</h1>
       {/* {
        data.docs.map((datum:any)=>{
         return (<h3 key={datum.id}>{datum?.fullName}</h3>)
        })
       } */}
      </main>
    </>
  )
}


export const getStaticProps:GetStaticProps = async()=>{

  // const response = await axios.get('http://localhost:3000/api/staff/')
  const data = {name:'John Lennon'}

  return {
      props:{data:'names'}
  }
}
