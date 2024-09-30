"use client"
import { useState } from "react";

export default function Home() {

  const [datas, setDatas] = useState([]);



  const addHandler = async () => {
    try {
      const data = {
        id: Date.now(),
        name: "Male"
      }
      const url = `https://aslamcmes.vercel.app/api/gender`;
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(`Failed to save data. Status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData);

    } catch (error) {
      console.error(`Error saving data: ${error.message || error}`);
      throw new Error("Data save was not completed successfully.");
    }
  }




  const showHandler = async () => {
    try {

      const url = `https://aslamcmes.vercel.app/api/gender`;
      const response = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch data from ${url}. Status: ${response.status}`);
      }
      const data = await response.json();
      setDatas(data);
      console.log(data);
    } catch (error) {
      console.error(`Error fetching data from ${url}: ${error.message || error}`);
      return []; // Return an empty array in case of an error
    }
  }

  return (
    <div>
      <button onClick={addHandler}>Add New</button><br /><br /><br /><br />
      <button onClick={showHandler}>Show All</button>
      {datas.length?datas.map(d=><p key={d.id}>{d.name}</p>):null}
    </div>
  );
}
