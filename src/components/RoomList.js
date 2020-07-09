import React from 'react';
import Room from '../components/Room';

export default function RoomList ({rooms}) {
  if(rooms.length === 0) {
    return(
      <div className="empty-search">
        <h3>Unfortunately no rooms matched your search parameters</h3>
      </div>
    )
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map((room,index)=>{
          return <Room key={index} room={room}/>
        })}
      </div>
    </section>
  )
}