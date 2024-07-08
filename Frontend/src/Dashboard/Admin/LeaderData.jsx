import axios from "axios";
import React, { useEffect, useState } from "react";
const LeaderData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/StudentRoutes/StudentData"
        );
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((val, index) => (
        <div key={index} className=" ">
<div className="  text-black ">

          <b>Project Leaders</b> 
</div>
          <div className=" bg-orange-300 text-black p-2">
          <p>
            {val.teamMembers[0]?.FullName}
            &nbsp;
            <p>
            {val.teamMembers[0]?.Branch}

            </p>
          </p>
          </div>
        
        </div>
      ))}
    </div>
  );
};

export default LeaderData;
