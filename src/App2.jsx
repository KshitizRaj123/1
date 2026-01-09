import ProductList from "../Components2/ProductList";
import UserList from "../Components2/UserList";
import userImg from "./image.png";


const App2 = () => {
    return (
        <div>
            <h1>User Information</h1>
            <UserList />
            <h1>Product Information</h1>
            <ProductList />
            <User 
            banana="John Doe" 
            age={30} 
            isMarried={false} 
            img={userImg}
            hobbies={['Reading', 'Traveling', 'Gaming']}
            />
        </div>
    )
}
const User = ({img,banana,age,isMarried,hobbies}) => {
    return(
        <div>
            <img src={img} width={200} height={400} alt={banana} />
            <h2>User Name:{banana}</h2>
            <h2>User Age:{age}</h2>
            <h2>User isMarried:{isMarried}</h2>
            <h2>Hobbies: {hobbies.join(', ')}</h2>
        </div>
    )
}
export default App2;