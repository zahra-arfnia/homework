import Link from "next/link"
export default function UserCard({firstName,lastName,email,age,image,id}) {
    return(
        <div className="card w-64 h-64 bg-white rounded-lg shadow-md  flex flex-col  justify-around px-4 ">
            <div className="w-full flex justify-around items-center ">
                <img src={image} className="img w-1/3 h-3/4 rounded-full"/>
                <p className=" text-lg font-semibold">{firstName} {lastName}</p>
            </div>
            <div className="flex flex-col gap-3">
                <div className="text-sm font-semibold">age : {age} </div>
                <div className="text-sm font-semibold email">gamil : {email} </div>
            </div>
            <Link href={`/users/${id}`} className="w-full h-9 btn rounded-md font-medium text-neutral-800 flex justify-center items-center">more information</Link>
           
        </div>
    )
}