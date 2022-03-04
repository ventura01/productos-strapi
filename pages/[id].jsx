import React from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";

const InfoPage = ({ producto }) => {
  console.log(producto);
  return (
    <Layout>
      <Head>
        <title>Strapi | Next Prod. {producto[0].id}</title>
        <meta
          name="description"
          content="Página de información de productos."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>InfoPage</h1>
      <p>{producto[0].attributes.titulo}</p>
      <p>{producto[0].attributes.descripcion}</p>
      <p>{producto[0].attributes.cantidad}</p>
      <p>{producto[0].attributes.precio}</p>
      <p>{producto[0].attributes.referencia}</p>
      <Link href="/">
        <a className="btn btn-primary">Volver al inicio</a>
      </Link>
    </Layout>
  );
};

export default InfoPage;

export async function getStaticPaths() {
  const res = await fetch("http://localhost:1337/api/productos?populate=*");
  const productos = await res.json();
  const paths = productos.data.map(({ id }) => ({ params: { id: `${id}` } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const res = await fetch(
    `http://localhost:1337/api/productos?populate=*${id}`
  );
  const datos = await res.json();
  const producto = datos.data;

  return { props: { producto } };
}
