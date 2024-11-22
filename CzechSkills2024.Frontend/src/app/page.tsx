import Games from "@/components/home/Games";
import Studio from "@/components/home/Studio";
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
      <Studio />
    </Layout>
  );
}
