import { useState } from "react";
import axiosInstance from "./axiosInstance.js";

const MyComponent = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get("/posts");
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      {data && (
        <div>
          <h1>Fetch Data :</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default MyComponent;
