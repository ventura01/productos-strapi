import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";

const InfoPage = ({ producto }) => {
  console.log(producto);
  const API_URL = "http://localhost:1337";
  return (
    <Layout>
      <Head>
        <title>Strapi | Next Prod. {producto.id}</title>
        <meta
          name="description"
          content="Página de información de productos."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>InfoPage</h1>

      <Image
        src={`${API_URL}${producto.attributes.imagen.data[0].attributes.url}`}
        height={500}
        width={500}
        alt="Img"
        // layout="responsive"
      ></Image>
      <p>{producto.attributes.titulo}</p>
      <p>{producto.attributes.descripcion}</p>
      <p>{producto.attributes.cantidad}</p>
      <p>{producto.attributes.precio}</p>
      <p>{producto.attributes.referencia}</p>
      <Link href="/">
        <a className="btn btn-primary">Volver al inicio</a>
      </Link>
      <Link href="/">
        <a className="btn btn-success ms-3">Agregar al carrito</a>
      </Link>
    </Layout>
  );
};

export default InfoPage;

export async function getStaticPaths() {
  const res = await fetch("http://localhost:1337/api/productos");
  const productos = await res.json();
  const paths = productos.data.map(({ id }) => ({ params: { id: `${id}` } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const res = await fetch(
    `http://localhost:1337/api/productos/${id}?populate=*`
  );
  const datos = await res.json();
  const producto = datos.data;

  return { props: { producto } };
}
