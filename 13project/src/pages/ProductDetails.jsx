import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const responseInJson = await response.json();
      setData(responseInJson);
    }
    fetchData();
  }, [id]);
  return (
    <>
      <div>
        <div
          key={data.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "12px",
            padding: "20px",
            margin: "20px auto",
            maxWidth: "700px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            //   backgroundColor: "#fefefe",
          }}
        >
          <img
            src={data.thumbnail}
            alt={data.title}
            style={{
              width: "100%",
              height: "300px",
              objectFit: "cover",
              borderRadius: "8px",
              marginBottom: "15px",
            }}
          />
          <h4 style={{ margin: "0 0 5px 0" }}>{data.category}</h4>
          <h2 style={{ margin: "0 0 10px 0" }}>{data.title}</h2>
          <p style={{ fontSize: "16px" }}>{data.description}</p>

          <p
            style={{
              marginTop: "10px",
              fontWeight: "bold",
            }}
          >
            Price: ₹{data.price}
          </p>
          <p>Discount: {data.discountPercentage}%</p>
          <p>Rating: ⭐ {data.rating} / 5</p>
          <p>
            Stock: {data.stock > 0 ? `${data.stock} available` : "Out of stock"}
          </p>
          <p>Brand: {data.brand}</p>
          <p>SKU: {data.sku}</p>
          <p>Weight: {data.weight}g</p>
          <p>Warranty: {data.warrantyInformation}</p>
          <p>Shipping: {data.shippingInformation}</p>
          <p>Availability: {data.availabilityStatus}</p>
          <p>Return Policy: {data.returnPolicy}</p>
          <p>Minimum Order Qty: {data.minimumOrderQuantity}</p>

          <div style={{ marginTop: "10px" }}>
            <strong>Tags:</strong>{" "}
            {data.tags?.map((tag, idx) => (
              <span
                key={idx}
                style={{
                  display: "inline-block",
                  backgroundColor: "#e0e0e0",
                  color: "#333",
                  padding: "5px 10px",
                  margin: "5px",
                  borderRadius: "20px",
                  fontSize: "14px",
                }}
              >
                #{tag}
              </span>
            ))}
          </div>

          <div style={{ marginTop: "20px" }}>
            <strong>Customer Reviews:</strong>
            {data.reviews?.map((review, idx) => (
              <div
                key={idx}
                style={{
                  // background: "#f5f5f5",
                  padding: "10px",
                  borderRadius: "8px",
                  marginTop: "10px",
                }}
              >
                <p style={{ margin: 0 }}>
                  <strong>{review.reviewerName}</strong> ({review.rating}⭐)
                </p>
                <p style={{ margin: "5px 0" }}>{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetails;
