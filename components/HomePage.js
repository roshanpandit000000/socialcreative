import React from "react";
import Layout from "./Layout";
import data from "@/utils/data";
import ProductItem from "./ProductItem";
import OffCanvas from "./Login";

function HomePage() {
  return (
    <>
      <Layout title="Home Page">
        <div className="container py-28 mx-auto px-7 sm:px-7 lg:px-0 ">
          
          <div class="grid grid-cols-2 md:grid-cols-6 gap-6">
            {data.products.map((product) => (
              <ProductItem product={product} key={product.slug}></ProductItem>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default HomePage;
