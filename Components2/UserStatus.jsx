const UserStatus = ({loggedIn,isAdmin}) => {
  if(loggedIn && isAdmin)
  {
    return <h1>Hello Admin!</h1>
  }
  else if (loggedIn)
  {
    return <h1>Hello User</h1>
  }
}
const Parent=()=>{
    return(
        <div>
            <UserStatus loggedIn={true}/>
        </div>
    )
}
export default Parent