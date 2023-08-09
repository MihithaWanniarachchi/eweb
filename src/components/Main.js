// import React, { useState, useEffect } from "react";
// import RecipeReviewCard from "./RecipeReviewCard";
// import "../styles/main.css";
// import axios from "axios";
// import PaginationRounded from "./pagination";
// import CustomLoader from "./Loader";
// import ClearIcon from "@mui/icons-material/Clear";
// import { toast } from "react-toastify";

// const Main = ({ handleClick, handlePdp }) => {
//   const [allProducts, setAllProducts] = useState();
//   const [productList, setProductList] = useState();
//   const [isLoading, setLoading] = useState(true);
//   const [page, setPage] = useState(1);
//   const [isSorting, setSorting] = useState(false);

//   useEffect(() => {
//     (async function fetchProductList() {
//       try {
//         const { data } = await axios.get(
//           `https://dummyjson.com/products?limit=100`
//         );
//         const slicedProduct = data?.products?.slice(0, 10);

//         setAllProducts(data.products);
//         setProductList(slicedProduct);
//       } catch (error) {
//         console.log(`error in getting product list`, error);
//         toast.error(error.message);
//       } finally {
//         setTimeout(() => {
//           setLoading(false);
//         }, 4500);
//       }
//     })();
//   }, []);

//   useEffect(() => {
//   //  toast.warning(`Please wait fetching product list`);
//     setLoading(true);
//     const pageChangeProduct = allProducts?.slice(page * 10 - 10, 10 * page);
//     setTimeout(() => {
//       setLoading(false);
//      // toast.success(`Success`);
//     }, 4500);
//     setProductList(pageChangeProduct);
//     setSorting(false);
//   }, [page]);

//   console.log(`productList`, productList);
//   console.log(`allProducts`, allProducts);

//   const handleSort = () => {
//     setSorting(!isSorting);
//     productList?.sort((a, b) => a.price - b.price);
//   //  toast.success(`Applied Low to High`);
//   };

//   const handleClose = () => {
//     setSorting(!isSorting);
//     productList?.sort((a, b) => a.id - b.id);
//    // toast.error(`Sorting Removed`);
//   };

//   return (
//     <>
//       <div className="mt-5 d-flex justify-content-center">
//         <PaginationRounded setPage={setPage} />
//       </div>
//       {!isLoading && (
//         <div className="mt-2">
//           {!isSorting && (
//             <button className="btn btn-dark mx-2" onClick={handleSort}>
//               Sort by Price
//             </button>
//           )}
//           {isSorting && (
//             <button
//               className="btn btn-dark d-flex align-items-center mx-2"
//               onClick={handleClose}
//             >
//               <span>Close</span>
//               <ClearIcon />
//             </button>
//           )}
//         </div>
//       )}
//       <section>
//         {isLoading ? (
//           <CustomLoader />
//         ) : (
//           <>
//             {productList?.map((item) => (
//               <RecipeReviewCard
//                 key={item.id}
//                 item={item}
//                 handleClick={handleClick}
//                 setProductList={setProductList}
//                 productList={productList}
//                 handlePdp={handlePdp}
//               />
//             ))}
//           </>
//         )}
//       </section>
//     </>
//   );
// };

// export default Main;
/*import React, { useState, useEffect } from "react";
import RecipeReviewCard from "./RecipeReviewCard";
import "../styles/main.css";
import axios from "axios";
import PaginationRounded from "./pagination";
import CustomLoader from "./Loader";
import { toast } from "react-toastify";

const Main = ({ handleClick, handlePdp }) => {
  const [allProducts, setAllProducts] = useState();
  const [productList, setProductList] = useState();
  const [isLoading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    (async function fetchProductList() {
      try {
        const { data } = await axios.get(
          `https://dummyjson.com/products?limit=100`
        );

        setAllProducts(data.products);
        setProductList(data.products);
      } catch (error) {
        console.log(`error in getting product list`, error);
        toast.error(error.message);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 4500);
      }
    })();
  }, []);

  useEffect(() => {
    setLoading(true);
    const pageChangeProduct = allProducts?.slice(page * 10 - 10, 10 * page);
    setTimeout(() => {
      setLoading(false);
    }, 4500);
    setProductList(pageChangeProduct);
  }, [page]);

  useEffect(() => {
    if (sortOption === "price") {
      const sortedList = [...productList].sort((a, b) => a.price - b.price);
      setProductList(sortedList);
    } else if (sortOption === "category") {
      const sortedList = [...productList].sort((a, b) =>
        a.category.localeCompare(b.category)
      );
      setProductList(sortedList);
    } else if (sortOption === "model") {
      const sortedList = [...productList].sort((a, b) =>
        a.model.localeCompare(b.model)
      );
      setProductList(sortedList);
    } else {
      // Default sorting (original order)
      setProductList(allProducts?.slice(page * 10 - 10, 10 * page));
    }
  }, [sortOption, page]);

  const handleSortOptionChange = (event) => {
    setSortOption(event.target.value);
    setPage(1); // Reset page when sorting option changes
  };

  const handleResetSorting = () => {
    setSortOption("default");
  };

  return (
    <div style={{ backgroundColor: "lightgrey" }}>
      <div className="mt-5 d-flex justify-content-center">
        <PaginationRounded setPage={setPage} />
      </div>
      <div className="mt-2 d-flex align-items-center">
        <label htmlFor="sortOption" className="me-2">
          Sort by:
        </label>
        <select
          id="sortOption"
          className="form-select form-select-sm"
          style={{ maxWidth: "100px" }}
          onChange={handleSortOptionChange}
          value={sortOption}
        >
          <option value="default">Default</option>
          <option value="price">Price</option>
          <option value="category">Category</option>
          <option value="model">Model</option>
        </select>
        {sortOption !== "default" && (
          <button
            className="btn btn-dark btn-sm ms-2"
            onClick={handleResetSorting}
            style={{
              padding: "5px 10px",
              border: "none",
              fontWeight: "bold",
              backgroundColor: "#ce2029",
              color: "white",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        )}
      </div>
      <section>
        {isLoading ? (
          <CustomLoader />
        ) : (
          <>
            {productList?.map((item) => (
              <RecipeReviewCard
                key={item.id}
                item={item}
                handleClick={handleClick}
                setProductList={setProductList}
                productList={productList}
                handlePdp={handlePdp}
              />
            ))}
          </>
        )}
      </section>
      <div className="mt-5 d-flex justify-content-center">
        <PaginationRounded setPage={setPage} />
      </div>
    </div>
  );
};

export default Main;*/

import React, { useState, useEffect } from "react";
import RecipeReviewCard from "./RecipeReviewCard";
import "../styles/main.css";
import axios from "axios";
import PaginationRounded from "./pagination";
import CustomLoader from "./Loader";
import { toast } from "react-toastify";

const Main = ({ handleClick, handlePdp }) => {
  const [allProducts, setAllProducts] = useState();
  const [productList, setProductList] = useState();
  const [isLoading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [sortOption, setSortOption] = useState("default");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async function fetchProductList() {
      try {
        const { data } = await axios.get(
          `https://dummyjson.com/products?limit=100`
        );

        setAllProducts(data.products);
        setProductList(data.products);
      } catch (error) {
        console.log(`error in getting product list`, error);
        toast.error(error.message);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 4500);
      }
    })();
    
    // Fetch categories
    fetchCategories();
  }, []);

  useEffect(() => {
    setLoading(true);
    const pageChangeProduct = allProducts?.slice(page * 10 - 10, 10 * page);
    setTimeout(() => {
      setLoading(false);
    }, 4500);
    setProductList(pageChangeProduct);
  }, [page]);

  useEffect(() => {
    if (sortOption === "price") {
      const sortedList = [...productList].sort((a, b) => a.price - b.price);
      setProductList(sortedList);
    } else if (sortOption === "category") {
      const sortedList = [...productList].sort((a, b) =>
        a.category.localeCompare(b.category)
      );
      setProductList(sortedList);
    } else if (sortOption === "model") {
      const sortedList = [...productList].sort((a, b) =>
        a.model.localeCompare(b.model)
      );
      setProductList(sortedList);
    } else {
      setProductList(allProducts?.slice(page * 10 - 10, 10 * page));
    }
  }, [sortOption, page, allProducts]);

  const handleSortOptionChange = (event) => {
    setSortOption(event.target.value);
    setPage(1); // Reset page when sorting option changes
  };

  const handleResetSorting = () => {
    setSortOption("default");
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products/categories");
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.log(`Error fetching categories:`, error);
      toast.error("Error fetching categories.");
    }
  };

  const fetchCategoryProducts = async (category) => {
    try {
      const response = await fetch(`https://dummyjson.com/products/category/${category}`);
      const data = await response.json();
      setProductList(data.products);
    } catch (error) {
      console.log(`Error fetching category products:`, error);
      toast.error("Error fetching category products.");
    }
  };

  return (
    <div style={{ backgroundColor: "lightgrey" }}>
      {sortOption === "default" && (
        <div className="mt-5 d-flex justify-content-center">
          <PaginationRounded setPage={setPage} />
        </div>
      )}
      <div className="mt-2 d-flex align-items-center">
        <label htmlFor="sortOption" className="me-2">
          Sort by:
        </label>
        <select
          id="sortOption"
          className="form-select form-select-sm"
          style={{ maxWidth: "100px" }}
          onChange={handleSortOptionChange}
          value={sortOption}
        >
          <option value="default">Default</option>
          <option value="price">Price</option>
          <option value="category">Category</option>
          <option value="model">Model</option>
        </select>
        {sortOption === "category" && (
          <div className="ms-2">
            {categories.map((category) => (
              <button
                key={category}
                className="btn btn-primary btn-sm me-2"
                onClick={() => fetchCategoryProducts(category)}
                style={{ backgroundColor: "white", color: "black", border: `1px solid #ce2029` }}
              >
                {category}
              </button>
            ))}
          </div>
        )}
        {sortOption !== "default" && (
          <button
            className="btn btn-dark btn-sm ms-2"
            onClick={handleResetSorting}
            style={{
              padding: "5px 10px",
              border: "none",
              fontWeight: "bold",
              backgroundColor: "#ce2029",
              color: "white",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        )}
      </div>
      <section>
        {isLoading ? (
          <CustomLoader />
        ) : (
          <>
            {productList?.map((item) => (
              <RecipeReviewCard
                key={item.id}
                item={item}
                handleClick={handleClick}
                setProductList={setProductList}
                productList={productList}
                handlePdp={handlePdp}
              />
            ))}
          </>
        )}
      </section>
      {sortOption !== "default" && (
        <div className="mt-5 d-flex justify-content-center">
          <PaginationRounded setPage={setPage} />
        </div>
      )}
    </div>
  );
};

export default Main;
