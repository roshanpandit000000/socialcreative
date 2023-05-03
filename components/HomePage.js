import React from "react";
import Layout from "./Layout";
import ProductItem from "./ProductItem";
import Product from "@/models/Product";
import db from "@/utils/db";


export default function HomePage(props) {
  const products = props.products || [];
  return (
    <>
      <Layout title="Home Page">
        <div className="container py-28 mx-auto px-7 sm:px-7 lg:px-0 ">
          <div class="grid grid-cols-2 md:grid-cols-6 gap-6">
            {products.map((product) => (
              <ProductItem product={product} key={product.slug}></ProductItem>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find().lean();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
