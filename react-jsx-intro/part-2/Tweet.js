const Tweet = (props) => {
	return (
    <div>
      <ul>
        <li>Name {props.name}</li>
        <li>Username {props.username}</li>
        <li>Message {props.message}</li>
        <li>Date {props.date}</li>
      </ul>
    </div>
		
	);
};