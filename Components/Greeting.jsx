const Greeting = () => {
    const date = new Date();
  return (
    <div>
        <h1>
            Greetings my friends!!!
        </h1>
        <p>
            Todays date is {date.getDate()}
        </p>
    </div>
  )
}

export default Greeting