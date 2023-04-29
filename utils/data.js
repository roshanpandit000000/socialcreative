import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "John",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Jane",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],

  products: [
    {
      name: "Free Shirt",
      slug: "free-shirt",
      category: "Shirts",
      image: "/images/baby-blancket.jpg",
      download: "/images/baby-blancket.jpg",
      price: 70,
      brand: "Nike",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      name: "Free Shirt",
      slug: "pant",
      category: "Shirts",
      image: "/images/light-sensor.jpg",
      download: "/images/light-sensor.jpg",
      price: 70,
      brand: "Nike",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      name: "Free Shirt",
      slug: "t-shirt",
      category: "Shirts",
      image: "/images/pri-light.jpg",
      download: "/images/pri-light.jpg",
      price: 70,
      brand: "Nike",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      name: "Free Shirt",
      slug: "hat",
      category: "Shirts",
      image: "/images/sensor.jpg",
      download: "/images/sensor.jpg",
      price: 70,
      brand: "Nike",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: "A popular shirt",
    },

    {
      name: "Free Shirt",
      slug: "mug",
      category: "Shirts",
      image: "/images/doop-kit-4.jpg",
      download: "/images/doop-kit-4.jpg",
      price: 70,
      brand: "Nike",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      name: "Free Shirt",
      slug: "shoes",
      category: "Shirts",
      image: "/images/inner-wear-2.jpg",
      price: 70,
      brand: "Nike",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      name: "Free Shirt",
      slug: "fun",
      category: "Shirts",
      image: "/images/Xmas-Post.jpg",
      price: 70,
      brand: "Nike",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: "A popular shirt",
    },

    {
      name: "Free Shirt",
      slug: "mon",
      category: "Shirts",
      image: "/images/baby-blancket.jpg",
      price: 70,
      brand: "Nike",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      name: "Free Shirt",
      slug: "kiss",
      category: "Shirts",
      image: "/images/light-sensor.jpg",
      price: 70,
      brand: "Nike",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      name: "Free Shirt",
      slug: "save",
      category: "Shirts",
      image: "/images/pri-light.jpg",
      download: "/images/pri-light.jpg",
      price: 70,
      brand: "Nike",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      name: "Free Shirt",
      slug: "love",
      category: "Shirts",
      image: "/images/sensor.jpg",
      price: 70,
      brand: "Nike",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: "A popular shirt",
    },

    {
      name: "Free Shirt",
      slug: "grass",
      category: "Shirts",
      image: "/images/doop-kit-4.jpg",
      price: 70,
      brand: "Nike",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      name: "Free Shirt",
      slug: "dobble",
      category: "Shirts",
      image: "/images/inner-wear-2.jpg",
      price: 70,
      brand: "Nike",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      name: "Free Shirt",
      slug: "none ",
      category: "Shirts",
      image: "/images/Xmas-Post.jpg",
      price: 70,
      brand: "Nike",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: "A popular shirt",
    },
  ],
};

export default data;