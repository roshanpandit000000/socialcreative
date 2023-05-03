import React from "react";
import Layout from "./Layout";
import ProductItem from "./ProductItem";
import data from "@/utils/data";
import Product from '../models/Product';
import db from '../utils/db';
import { Store } from '../utils/Store';

export default function HomePage() {
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

