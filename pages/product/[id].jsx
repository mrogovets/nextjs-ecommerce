import React, { useState } from "react";
import Head from "next/head";
import { getData } from "../../utils/fetchData";

const DetailProduct = (props) => {
  const [product] = useState(props.product);
  const [tab, setTab] = useState(0);
  return (
    <div className="row detail_page">
      <Head>
        <title>Detail Product</title>
      </Head>

      <div className="col-md-6">
        <img
          src={product.images[tab].url}
          alt={product.images[tab].url}
          className="d-block img-thumbnail rounded mt-4 w-100"
          style={{ height: "350px" }}
        />

        <div className="row mx-0" style={{ cursor: "pointer" }}>
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img.url}
              alt={img.url}
              className="img-thumbnail rounded"
              style={{ height: "80px", width: "20%" }}
              onClick={() => setTab(index)}></img>
          ))}
        </div>
      </div>
      <div className="col-md-6"></div>
    </div>
  );
};

export async function getServerSideProps({ params: { id } }) {
  const res = await getData(`product/${id}`);

  //server side rendering
  return {
    props: { product: res.product },
  };
}

export default DetailProduct;
