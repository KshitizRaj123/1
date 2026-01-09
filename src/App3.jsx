import Person from "../Components2/Person";
import Product from "../Components2/Product";
import Weather from "../Components2/Weather";
import Parent from "../Components2/UserStatus";
import Greetings from "../Components2/Greetings";

function isValidPassword()
{
    return(
        <h1>Valid Password!!!</h1>
    )
}
const InvalidPassword = () =><h1>Invalid Password!!!</h1>

function Password({isValid}) {
    // if(isValid)
    // {
    //     return isValidPassword();
    // }
    // return <InvalidPassword />;
    return isValid ? isValidPassword():<InvalidPassword/>;
}
const Cart=()=>{
    const items=["Aloo","Pyaz","Tamatar"];
    
    return(
        <div>
           <h1>Cart 🛒</h1> 
           
           {items.length >0 && <h2>You have {items.length} items in your cart</h2>}
           {items.map(alpha=>(<ul key={Math.random()} >
            <li>
                <h3>
                    {alpha}
                </h3>
            </li>
           </ul>
        ))}
           
        </div>
    )
}
const App3 = () => {
    return (
        <div>
            <Person />
            <Product />
            <Password isValid={true}/>
            <Cart/>
            <Weather/>
            <Parent />
            <Greetings timeOfDay="morning"/>
        </div>
    )
}

export default App3;