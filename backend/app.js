import axios from "axios";

const fetchProducts = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/products");
    // Handle response data
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

app.use(cors({ origin: "http://localhost:3000" }));
