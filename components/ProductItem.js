import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProductItem({ product }) {
  return (
    <>
      <div class="grid gap-4">
        <div className=" ">
          <div className="relative overflow-hidden group ">
            <Link href={`/product/${product.slug}`}>
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={0}
                className="rounded-lg group-hover:brightness-50 "
              />
              <p className="text-base font-semibold text-gray-700">
                {" "}
                {product.name}{" "}
              </p>
            </Link>
            <div className="absolute text-2xl text-blue-300 top-2 right-1  opacity-0 group-hover:opacity-100">
              <button
                type="button"
                className="text-white hover:text-gray-800 hover:bg-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2 mr-2 mb-2 border-2 border-white"
              >
                Save
              </button>
            </div>
            <div className="absolute text-xl text-white hover:text-gray-800 border-white border-2 bottom-9 right-3 opacity-0 group-hover:opacity-100 hover:bg-white rounded-full p-1">
              <Link href={product.slug}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
