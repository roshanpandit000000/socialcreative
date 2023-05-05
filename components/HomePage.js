import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import ProductItem from "./ProductItem";
import Product from "@/models/Product";
import { useContext } from "react";
import { Store } from "@/utils/Store";
import db from "@/utils/db";
import { getServerSideProps } from "@/utils/fetchProducts";
import { useSession } from "next-auth/react";


export default function HomePage() {
  const {products, setProducts} = useContext(Store)
  const { data: session } = useSession();
  console.log(session?.user);

  useEffect(() => {
    getServerSideProps().then((res) => {
      setProducts(res);
    });
  }, []);

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
