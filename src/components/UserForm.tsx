

   

const UserForm = () => {
  return (
    <form action="method">

    <div className="bg-amber-100 w-80 h-90 shadow mt-30 ml-60 items-center flex flex-col">
        <h1 className="font-semibold text-2xl pt-10">User Form </h1>
   <label className="font-bold ">User Name:<input className="w-50 h-10 border" type="text" /></label>
      <label className=" pt-5 font-bold ">Nationality:<input className="w-50 h-10 border " type="text" /></label>
   <button className="border w-50 h-10 font-bold justify-end bg-amber-800 mt-5 rounded-30 text-amber-50">Add UserForm</button>
    </div>
    </form>
    
{/*import type { ProductType } from "../Types/ProductType";

interface ProductCardProps {
  item: ProductType;
}
const ProductCard = ({  item }: ProductCardProps) => {

console.log(item.image)

  return (
    <div>
      <div className="bg-amber-100 w-96 h-160 mt-10 justify-center items-center hover:shadow-2xl">
        <img className="w-full object-cover p-3" src={item.image} alt="kkkk" />
        <p className="pl-2">{item.title}</p>
        <h1 className="font-bold text-left pl-2">PKR {item.price}</h1>
        <button className="ml-2 mt-2 font-semibold rounded border border-black w-35 h-10 hover:bg-pink-950 hover:text-white ">
          ADD TO BAG
        </button>
        <ul className="flex gap-2 items-center justify mb-2 ">
            
         { [2,4,6,8,10].map( n =>   (<li className="bg-red-400 rounded-full size-8 text-center mt-3 flex justify-center items-center">{n}</li>)
            )}
        </ul>a
      </div>
 
    </div>
  );
};

export default ProductCard;
 */} 

  )
}

export default UserForm
