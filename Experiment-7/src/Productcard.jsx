function ProductCard({ product }) {
    return (
      <div style={{ border: "1px solid black", padding: "10px", background: "white", color: "black" }}>
        {product.image && <img src={product.image} alt={product.name} style={{ width: "100px" }} />}
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
        <p>Status: {product.inStock ? "In Stock" : "Out of Stock"}</p>
      </div>
    );
  }
  
  export default ProductCard;
  