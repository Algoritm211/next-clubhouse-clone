
export interface RoomType {
  id: string,
  avatars: Array<string>,
  guestsCount: number,
  speakersCount: number,
  title: string,
  guests: Array<string>
}
