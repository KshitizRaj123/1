const Product = () => {
  return (
    <div>
        <Prod
        name="Laptop"
        Price={900} />
    </div>
  )
}
const Prod=(props) => {
    return(
        <div>
            <h2>
                Name:{props.name}
            </h2>
            <p>
                Price:{props.Price}
            </p>
        </div>
    )
}
export default Product