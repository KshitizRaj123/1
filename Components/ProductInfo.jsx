const ProductInfo = () => {
    const information = {
        name: "Laptop",
        price: 1200,
        availability: "In Stock"
    };
  return (
    <div>
        <h1>
            <ul>
                <li>Product Name: {information.name}</li>
                <li>Price: ${information.price}</li>
                <li>Availability: {information.availability}</li>
            </ul>
        </h1>
    </div>
  )
}

export default ProductInfo