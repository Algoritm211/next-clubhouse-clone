import React from 'react';
import Header from "../components/Header/Header";
import { RoomType } from '../types/types';
import Button from "../components/UI/Button/Button";
import axios from 'axios';
import RoomCard from "../components/RoomCard/RoomCard";
import Link from 'next/link';

type RoomsType = {
  rooms: Array<RoomType>
}

const Rooms: React.FC<RoomsType> = ({rooms}) => {

  const conversationBlock = rooms.map((conversation, index) => {
    return (
      <Link href={`/room/${conversation.id}`} key={conversation.id}>
        <a>
          <RoomCard room={conversation} />
        </a>
      </Link>
    )
  })

  return (
    <div>
      <Header />
      <div className="container">
        <div className={'mt-20 mb-20 d-flex justify-content-between'}>
          <h1>All conversations</h1>
          <Button color={'green'}>+ Create room</Button>
        </div>
        <div className={'grid'}>
          {conversationBlock}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  try {
    const {data} = await axios.get('http://localhost:3000/rooms.json')
    return {
      props: {
        rooms: data
      }
    }
  } catch (error) {
    console.log(error)
    return { props: { rooms: [] }}
  }
}

export default Rooms;
