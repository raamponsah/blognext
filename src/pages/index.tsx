import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import axios from 'axios'
import { PropsWithChildren } from 'react'
import { Props } from 'next/script'
import { GetStaticProps, NextPage } from 'next'

const inter = Inter({ subsets: ['latin'] })

interface DocInterface{
  id:string,
  fullName:string,
  about:string,
  createdAt:string,
  updatedAt:string
}

export default function Home({docs}:{docs:DocInterface[]}) {
console.log("Data received! =>", docs)
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>DEPLOYED!</h1>
       {
        docs.map((datum:any)=>{
         return (<h3 key={datum.id}>{datum?.fullName}</h3>)
        })
       }
      </main>
    </>
  )
}


export const getStaticProps:GetStaticProps = async()=>{

  const response = await axios.get('http://localhost:3000/api/staff/')
  const data = await response.data
  const {docs} = data

  return {
      props:{docs}
  }
}
