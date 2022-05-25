const App = () => {
	return (
		<div>
      <Tweet 
      name="Rama" 
      username="rs" 
      date={new Date().toDateString()}
      message="My first tweet"/>
	
      <Tweet 
      name="Jane" 
      username="js" 
      date={new Date().toDateString()}
      message="Twitter is in trouble"/>
 
      <Tweet 
      name="Kelly" 
      username="ks" 
      date={new Date().toDateString()}
      message="I like to tweet"/>
    </div>
	)
}