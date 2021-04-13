import React from 'react';
import Header from "../../components/Header/Header";
import Room from "../../components/Room/Room";
import {RoomType} from "../../types/types";
import axios from "axios";
import cn from "classnames";
import Link from "next/link";

type PropsType = {
  room: RoomType
}

const RoomPage: React.FC<PropsType> = ({room}) => {
  console.log(room)
  return (
    <>
      <Header />
      <Link href={'/rooms'}>
        <div className={cn('d-flex cup ml-30')}>
          <img src={'/static/back-arrow.svg'} alt={'back'} className={'mr-10'}/>
          <h3 className={'cup'}>Back</h3>
        </div>
      </Link>
      <div>
        <Room room={room} />
      </div>
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  const {id: roomId} = ctx.query
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
