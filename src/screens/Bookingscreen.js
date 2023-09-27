import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
function Bookingscreen () {
  let { roomid } = useParams();
  const [rooms, setrooms] = useState([])
  useEffect(() => {
    async function fetchMyAPI() {
      let data = await fetch("./api/rooms/getroombyid",{roomid}).data;
      data = await data.json()
      setrooms(data)
    }

    fetchMyAPI()
  }, [])

  return (
    <div>
      <h1>Book screen</h1>
      <h1>Room id = {roomid}</h1>
    </div>
  );
}

export default Bookingscreen;