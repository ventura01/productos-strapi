import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Link from "next/link";

const API_URL = "http://localhost:1337";

export default function Home({ productos }) {
  console.log(productos.data);
  return (
    <Layout
      title="Strapi - Next | Inicio"
      description="Sitio web de productos tecnológicos."
      home
      header={true}
    >
      <h1 className={styles.titulo}>
        Hola <i className="bi bi-apple"></i>!
      </h1>
      {productos.data.map((producto) => (
        <div key={producto.id}>
          <h3>{producto.attributes.titulo}</h3>
          <Image
            src={`${API_URL}${producto.attributes.imagen.data[0].attributes.url}`}
            alt="img"
            width={500}
            height={500}
          ></Image>
          <p>{producto.attributes.descripcion.substring(0, 60)}...</p>
          <h6>
            <i className="bi bi-tag"></i>{" "}
            {producto.attributes.categorias.data[0].attributes.nombre}
          </h6>
          <h6>
            <i className="bi bi-upc-scan"></i> {producto.attributes.referencia}
          </h6>
          <Link href={`/${producto.id}`}>
            <a className="btn btn-primary">Más información</a>
          </Link>
        </div>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:1337/api/productos");
  const productos = await res.json();

  return { props: { productos } };
}
