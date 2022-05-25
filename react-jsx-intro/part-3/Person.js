const Person = (props) => {
  let voteText =  props.age >= 18  ? "Go Vote ": "You must be 18 and above to vote";
  let hobbies = props.hobbies.map(hobby => <li>{hobby}</li>)
	return (
  <div>
    <p>Learn some info about this person</p>
    <ul>
        <li>Name {props.name}</li>
        <li>Age {props.age}</li>
      <ul>
      Hobbies: 
        {hobbies}
      </ul>
    </ul>
    <h3>{voteText}</h3>
  </div>
	);
};