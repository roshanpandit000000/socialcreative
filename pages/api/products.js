// posts.js
import Product from "@/models/Product";
import { useSession } from "next-auth/react";
import User from "../../models/User";
import db from "../../utils/db";

export default async function handler(req, res) {

  // const { data: session } = useSession();
  // console.log(session.user ? session.user : "no user");

  await db.connect();
  switch (req.method) {
    case "POST":
      try {
        const productFromBody = new Product({ ...req.body });
        const existingProduct = await Product.findOne({ name: req.body.name });
        if (existingProduct) {
          res.status(422).json({ message: "Product exists already!" });
          await db.disconnect();
          return;
        }
        await productFromBody.save();
        res.json(productFromBody);
      } catch (error) {
        console.log(error);
      }
      break;
    case "GET":
      try {
        const allProducts = await Product.find({}).lean();
        res.json({ status: 200, data: allProducts });
      } catch (error) {
        console.log(error);
      }
      break;
  }
}
