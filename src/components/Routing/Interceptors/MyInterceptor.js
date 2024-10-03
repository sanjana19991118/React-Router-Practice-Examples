// import { useState, useEffect } from "react";
// import axiosInstance from "./axiosInstance.js";

// const fetchData = async (setData) => {
//   try {
//     const response = await axiosInstance.get("/posts");
//     console.log(response.data);
//     setData(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// };

// const MyInterceptor = () => {
//   const [data, setData] = useState([]);

//   // useEffect(() => {
//   //   fetchData(setData);
//   // }, [data]);

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);

//   return (
//     <div>
//       <button onClick={() => fetchData(setData)}>Fetch Data</button>
//       {data.length > 0 && (
//         <div>
//           {data.map((item) => (
//             <div key={item.id}>
//               <h2>{item.title}</h2>
//               <p>{item.body}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyInterceptor;

import { useState, useCallback } from "react";
import axiosInstance from "./axiosInstance.js";

const MyInterceptor = () => {
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await axiosInstance.get("/posts");
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      {data.length > 0 && (
        <div>
          {data.map((item) => (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyInterceptor;

// import { useState, useEffect, useCallback } from "react";
// import axiosInstance from "./axiosInstance.js";

// const MyInterceptor = () => {
//   const [data, setData] = useState([]);

//   const fetchData = useCallback(async () => {
//     try {
//       const response = await axiosInstance.get("/posts");
//       console.log(response.data);
//       setData(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   }, [setData]);

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);

//   return (
//     <div>
//       <button onClick={fetchData}>Fetch Data</button>
//       {data.length > 0 && (
//         <div>
//           {data.map((item) => (
//             <div key={item.id}>
//               <h2>{item.title}</h2>
//               <p>{item.body}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyInterceptor;
