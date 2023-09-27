import { useState, useEffect } from 'react'
import Room from '../Componenets/Room'
function Homescreen() {
  const [rooms, setrooms] = useState([])
  useEffect(() => {
    async function fetchMyAPI() {
      let data = await fetch('./api/rooms/getallrooms')
      data = await data.json()
      setrooms(data)
    }

    fetchMyAPI()
  }, [])
  return (
    <div className='container'>
      <div className='row justify-content-center mt-5'>
        {(rooms.map(room => {
          return <div className="col-md-9 mt-2">
            <Room room={room} />
          </div>
        }))}
      </div>

    </div>
  )
}

export default Homescreen