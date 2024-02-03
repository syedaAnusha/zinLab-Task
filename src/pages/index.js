import Head from "next/head";
import { Inter } from "next/font/google";
import ParentContainer from "../components/ParentContainer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>zintools</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/zintools-logo.jpg" />
      </Head>
      <main className={`${inter.className}`}>
        <ParentContainer />
      </main>
    </>
  );
}