import React from "react";

const InfoPage = ({ producto }) => {
  console.log(producto);
  return (
    <div>
      <h1>InfoPage</h1>
      <p>{producto[0].attributes.titulo}</p>
      <p>{producto[0].attributes.descripcion}</p>
      <p>{producto[0].attributes.cantidad}</p>
      <p>{producto[0].attributes.precio}</p>
      <p>{producto[0].attributes.referencia}</p>
    </div>
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
