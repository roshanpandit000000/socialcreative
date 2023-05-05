import axios from "axios";


export async function getServerSideProps() {
  let Products;
  await axios.get("http://localhost:3000/api/products").then((res) => {
    Products = res.data.data;
  });
  console.log("done");
  return Products;
}
