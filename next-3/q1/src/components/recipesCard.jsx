import Link from "next/link";
export default function RecipesCard({
  image,
  name,
  ingredients,
  instructions,
  id
}) {

    const firsfouringredients= ingredients.slice(0, 3);
  return (
    <div className="card w-64 h-resipes bg-white rounded-md flex flex-col gap-2  px-4 card-recipes">
      <img src={image} alt="" className="w-full h-36 rounded-md mt-1" />
      <p className="text-base font-bold ">{name}</p>
      <div className="flex ">
        
        <div className="flex flex-wrap gap-1 bbb">
          {ingredients.map((item, index) => (
            <p key={index} className="text-xs font-semibold ">
              {item}
            </p>
          ))}
          <p className="text-xs font-semibold"> ...</p>
        </div>
      </div>


      <p className="text-xs font-medium aaa" >{instructions}</p>
      <Link href={`/recipes/${id}`} className="w-full h-7 btn rounded-md font-medium text-neutral-800 flex justify-center items-center">more information</Link>
           
    </div>
  );
}
