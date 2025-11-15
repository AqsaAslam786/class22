

   

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

  )
}

export default UserForm
