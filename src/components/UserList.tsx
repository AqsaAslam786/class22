import UserForm from "./UserForm"


const UserList = () => {
    
  return (
    <div >
        <div className="bg-amber-300 w-80 h-100 shadow">
            <form action="get">
                <label htmlFor="User">User <input type="text"/></label>

            </form>

        </div>
      
        <UserForm />
    </div>
  )
}

export default UserList
