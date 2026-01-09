const UserList = () => {
    const users=
    [
        {id:1, name:'Kshitiz',age:24},
        {id:2, name:'Ashu',age:25},
        {id:3, name:'Shruti',age:23},
    ]
  return (
    <div>
        {users.map(({id, name, age}) => (
            <ul key={id}>
                <li>
                    Name: {name}
                </li>
                <li>
                    Age: {age}
                </li>
            </ul>
        ))}
    </div>
  )
}

export default UserList