import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";

export default function Home({ productos }) {
  console.log(productos.data);
  return (
    <Layout
      title="Strapi | Next Inicio"
      description="Sitio web de productos tecnológicos."
      home
    >
      <h1 className={styles.titulo}>
        Hola <i className="bi bi-apple"></i>!
      </h1>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:1337/api/productos?populate=*");
  const productos = await res.json();

  return { props: { productos } };
}
