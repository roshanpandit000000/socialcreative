import Layout from "@/components/Layout";
import ProductItem from "@/components/ProductItem";
import { Store } from "@/utils/Store";
import data from "@/utils/data";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { getServerSideProps } from "@/utils/fetchProducts";

function ProductScreen() {
  const { state, dispatch, products, setProducts } = useContext(Store);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const { query } = useRouter();
  const { slug } = query;
  useEffect(() => {
    getServerSideProps().then((res) => {
      setProducts(res);
    });
  }, []);
  const clickedProduct = products?.find((x) => x.slug === slug);
  if (!clickedProduct) {
    return <div>Produt Not Found</div>;
  }

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === clickedProduct.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (clickedProduct.countInStock < quantity) {
      alert("Sorry. Product is out of stock");
      return;
    }

    dispatch({ type: "CART_ADD_ITEM", payload: { ...clickedProduct, quantity } });
  };

  return (
    <>
      <Layout title={clickedProduct.name}>
        <div className="md:flex items-start justify-center py-10 2xl:px-40 md:px-6 px-4 mt-16">
          <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
            <Image
              src={clickedProduct.image}
              alt={clickedProduct.name}
              width={600}
              height={0}
              className="rounded-lg"
            />
          </div>
          <div className="md:hidden">
            <Image
              src={clickedProduct.image}
              alt={clickedProduct.name}
              width={500}
              height={0}
              className="rounded-lg"
            />
          </div>
          <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
            <div className="border-b border-gray-200 pb-6 flex justify-between ...">
              <div className="">
                <h1
                  className="
					lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						"
                >
                  {clickedProduct.name}
                </h1>
              </div>
              <div className="">
                <button
                  type="button"
                  onClick={addToCartHandler}
                  className="text-gray-800 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-6 py-2 mr-2 mb-2 border-2 border-gray-800"
                >
                  Save
                </button>
              </div>
            </div>
            <div className="py-4 border-b border-gray-200 flex items-center justify-between">
              <p className="text-base leading-4 text-gray-800">Category</p>
              <div className="flex items-center justify-center">
                <p className="text-sm leading-none text-gray-600 mr-5">
                  {clickedProduct.category}
                </p>
              </div>
            </div>
            <div className="py-4 border-b border-gray-200 flex items-center justify-between">
              <p className="text-base leading-4 text-gray-800">Brand</p>
              <div className="flex items-center justify-center">
                <p className="text-sm leading-none text-gray-600 mr-7">
                  {" "}
                  {clickedProduct.brand}{" "}
                </p>
              </div>
            </div>

            <div>
              <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-blue-600 mt-7">
                {clickedProduct.description}
              </p>
              <p className="text-base leading-4 mt-7 text-gray-600">
                <span className="font-semibold text-gray-900"> Rating : </span>{" "}
                {clickedProduct.rating}
              </p>
              <p className="text-base leading-4 mt-4 text-gray-600">
                <span className="font-semibold text-gray-900"> Reviews : </span>{" "}
                {clickedProduct.numReviews}
              </p>
              <p className="text-base leading-4 mt-4 text-gray-600">
                <span className="font-semibold text-gray-900"> Status : </span>
                {clickedProduct.countInStock > 0 ? "In stock" : "Unavailable"}
              </p>
            </div>
            <div>
              <div className="border-t border-b py-4 mt-7 border-gray-200">
                <div
                  onClick={() => setShow(!show)}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <p className="text-2xl font-semibold leading-4 text-gray-800">
                    Comments
                  </p>
                  <button
                    className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                    aria-label="show or hide"
                  >
                    <svg
                      className={
                        "transform " + (show ? "rotate-180" : "rotate-0")
                      }
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 1L5 5L1 1"
                        stroke="#4B5563"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  className={
                    "pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " +
                    (show ? "block" : "hidden")
                  }
                  id="sect"
                >
                  You will be responsible for paying for your own shipping costs
                  for returning your item. Shipping costs are nonrefundable
                </div>
              </div>
              <div className="my-5">
                <form className="flex items-center w-full">
                  <label for="simple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-4  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                    <span className="sr-only">Search</span>
                  </button>
                </form>
              </div>
            </div>
            <div></div>
          </div>
        </div>

        <div className="container py-10 mx-auto px-7 sm:px-7 lg:px-0">
          <p className="text-center text-2xl font-semibold mb-5">
            More like this
          </p>
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

export default ProductScreen;
