import UserForm from "./UserForm"


const UserList = () => {
    
  return (
    <div >
        <div className="bg-amber-300 w-80 h-100 shadow">
            <form action="get">
                <label htmlFor="User">User <input type="text"/></label>

            </form>
            {/* interface ClothListProps {
  items: ProductType[];
}

const ClothList = ({ items }: ClothListProps) => {
  return (
    <div className="flex justify-around">
      {items.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
}; */}

        </div>
      
        <UserForm />
    </div>
  )
}

export default UserList
