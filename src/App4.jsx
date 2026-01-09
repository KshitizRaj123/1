
import ProfileCard from "../Components3/ProfileCard"
import StyledCard from "../Components3/StyledCard"
import IconComponent from "../Components3/IconComponent"

function Press()
{
    return(console.log(Math.round(Math.random()*100)));
}
function copyHandler()
{
    alert("Stop copying content madarchod!!!!");
}
function Para()
{
    return(
        <p onCopy={copyHandler}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam praesentium numquam enim illo ipsa voluptate harum dolore laboriosam magni cum, ad nesciunt placeat! Dolorem similique animi incidunt optio veniam deserunt inventore ut natus soluta excepturi quas architecto voluptatum nobis a id, recusandae laudantium temporibus tenetur quod repellendus non reprehenderit velit fugiat quis? Autem laboriosam blanditiis accusamus impedit sunt beatae esse at accusantium dolorem voluptate numquam sit necessitatibus neque sint possimus, ullam libero. Deserunt laudantium, esse illum incidunt, aliquid aliquam praesentium vitae sapiente fugiat sunt nostrum hic minima assumenda recusandae culpa voluptatum et ab! Ducimus fugit perferendis quibusdam sequi, labore pariatur?
        </p>
    )
}
function Hoverer()
{
    alert("You copied the content!!!!");
    console.log("Content copied!!!!");
}
function Para2()
{
    return (
        <p onMouseOver={Hoverer}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ratione, aliquid quo harum corrupti laborum magni? Ipsum perferendis odit assumenda? Velit at nisi omnis numquam nihil odio laudantium autem ipsa, perspiciatis nemo, voluptate cumque nam placeat cupiditate soluta alias quis veniam corporis qui voluptatibus rem!
        </p>
    )
}
const Button=()=>
    {
    return(
        <button onClick={Press}>
            Click Me
        </button>
        );
    };
const App4 = () => {
  return (
    <section>
        <StyledCard />
        <ProfileCard />
        <IconComponent />
        <Button />
        <Para />
        <Para2 />

    </section>
  )
}

export default App4

