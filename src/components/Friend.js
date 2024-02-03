import Button from "./Button";

export default function Friend({ friend, onFriendSelect, selectedFriend }) {
  const isSelected = friend.id === selectedFriend?.id;
  return (
    <li key={friend.key} className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 ? (
        <p className="red">
          You owe {friend.name} Rs.{Math.abs(friend.balance)}
        </p>
      ) : friend.balance === 0 ? (
        <p>You and {friend.name} are even</p>
      ) : (
        <p className="green">
          {friend.name} owes you Rs.{Math.abs(friend.balance)}
        </p>
      )}

      <Button onClick={() => onFriendSelect(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
