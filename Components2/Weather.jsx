const Weather = () => {
    
  return (
    <div><Temperature temp={12}/></div>
  )
}
const Temperature=(temp)=>{
        if(temp<15)
        {
            return (
                <div>
                    <h1>
                    Its cold outside! Wear warm clothes.
                    </h1>
                </div>  
            )
        }
        else if(temp>=15 && temp<=25)
        {
            return (
                <div>
                    <h1>
                    The weather is pleasant today!
                    </h1>
                </div>  
            )
        }
        else
        {
            return (
                <div>
                    <h1>
                    It's hot outside! Stay hydrated.
                    </h1>
                </div>  
            )
        }

    }
export default Weather