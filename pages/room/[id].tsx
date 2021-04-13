import React from 'react';
import Header from "../../components/Header/Header";
import Room from "../../components/Room/Room";
import {RoomType} from "../../types/types";
import axios from "axios";

type PropsType = {
  room: RoomType
}

const RoomPage: React.FC<PropsType> = ({room}) => {
  console.log(room)
  return (
    <>
      <Header />
      <div>
        <Room room={room} />
      </div>
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  const {id: roomId} = ctx.query
  console.log(roomId)
  try {
    const {data: allRooms} = await axios.get('http://localhost:3000/rooms.json')
    const currentRoom = allRooms.find((room) => {
      return room.id === roomId
    })
    return { props: { room: currentRoom } }
  } catch (error) {
    console.log(error);
    return {props: {room: []}}
  }


}

export default RoomPage;
