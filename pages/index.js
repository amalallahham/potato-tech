import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Header from "@/components/header/header";
import Profile from "@/components/profileDetails/profile";
import { Grid } from "@mui/material";

export default function Home() {
  return (
    <>
      <Head>
        <title>Potato tech task</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <Header></Header>
        <Grid columns={{ xs: 4, sm: 8, md: 12 }}>
          <Profile></Profile>
        </Grid>
      </main>
    </>
  );
}
