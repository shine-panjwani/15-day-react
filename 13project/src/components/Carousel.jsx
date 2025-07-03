// import React, { useEffect, useState } from "react";
// import { Carousel as ReactCarousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // important CSS

// const Carousel = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch("https://dummyjson.com/products?limit=5");
//       const result = await response.json();
//       setData(result.products);
//     }
//     fetchData();
//   }, []);

//   return (
//     <div style={{ maxWidth: "700px", margin: "auto" }}>
//       <ReactCarousel
//         autoPlay
//         infiniteLoop
//         showThumbs={false}
//         showStatus={false}
//         showIndicators={true}
//         interval={3000}
//       >
//         {data.map((item) => (
//           <div key={item.id}>
//             <img
//               src={item.images[0]}
//               alt={item.title}
//               style={{ height: "400px", objectFit: "cover" }}
//             />
//             {/* <p className="legend">{item.title}</p> */}
//           </div>
//         ))}
//       </ReactCarousel>
//     </div>
//   );
// };

// export default Carousel;
// Carousel.jsx
import React, { useEffect, useState } from "react";
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // required CSS

const Carousel = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://dummyjson.com/products?limit=5");
      const result = await response.json();
      setData(result.products);
    }
    fetchData();
  }, []);

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "auto",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",

      }}
    >
      <ReactCarousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        interval={3000}
      >
        {data.map((item) => (
          <div key={item.id}>
            <img
              src={item.images[0]}
              alt={item.title}
              style={{
                height: "400px",
                objectFit: "cover",
                width: "100%",
              }}
            />
            <p
              style={{
                backgroundColor: "rgba(0,0,0,0.5)",
                color: "#fff",
                padding: "10px",
                position: "absolute",
                bottom: "0",
                width: "100%",
                margin: 0,
                fontSize: "18px",
              }}
            >
              {item.title}
            </p>
          </div>
        ))}
      </ReactCarousel>
    </div>
  );
};

export default Carousel;
