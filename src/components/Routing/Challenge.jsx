import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Challenge() {
  const [jsonData, setJsonData] = useState();
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "C:/Users/ADMIN/DDM/ddm/src/components/Routing/data.json"
        );
        console.log("res", response);
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error("Error Fetching JSON data:", error);
      }
    };

    fetchData();
  }, []);

  const handleButtonClick = (item) => {
    history.push({
      pathname: "/some-path",
      search: `?q=${item.heading}&id=${item.id}`,
    });
  };

  return (
    <div>
      {console.log("JD", jsonData)}
      {jsonData.map((item, index) => {
        return (
          <div>
            <button
              key={index}
              onClick={() => {
                handleButtonClick(item);
              }}
            >
              {item.heading}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Challenge;
