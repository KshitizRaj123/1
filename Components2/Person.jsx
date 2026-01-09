const Person = () => {
  return (
    <div>
        <Child
        name="Kshitiz"
        age={22}
        />
    </div>
  )
}
const Child=(props)=>{
    return(
        <div>
            <h2>
                Name:{props.name}
            </h2>
            <p>
                Age:{props.age}
            </p>
        </div>
    )

}
export default Person