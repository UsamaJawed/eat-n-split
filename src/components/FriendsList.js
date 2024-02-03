import Friend from "./Friend";

export default function FriendsList({
  friends,
  onFriendSelect,
  selectedFriend,
}) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onFriendSelect={onFriendSelect}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
