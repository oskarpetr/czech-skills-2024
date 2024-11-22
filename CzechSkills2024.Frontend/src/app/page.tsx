import Games from "@/components/home/Games";
import About from "@/components/home/About";
import Layout from "@/components/layout/Layout";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Annapurna Interactive</title>
        <meta property="og:title" content="Annapurna Interactive" />
        <meta
          property="og:description"
          content="Established in 2016, Annapurna Interactive works with game creators
          from around the world"
        />
      </Head>

      <Games />
      <About />
    </Layout>
  );
}
