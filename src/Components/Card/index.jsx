const Card = (data)=> {

    
    return (

        <div  id={data.data.id} className="bg-white cursor-pointer w-60 h-64 rounded-lg mb-4 shadow-lg shadow-[#b0bccd] transition-transform transform hover:scale-[102%]">

            <figure className="relative mb-2 w-full h-4/5 ">

                <span className="absolute left-0 bottom-0 bg-white/60 rounded-md text-xs px-3 py-0.5 text-black m-2 "
                >
                    {data.data.category}
                </span>

                <img className="w-full h-full object-fill rounded-lg"
                src={data.data.image} alt={data.data.title + 'img'}  />

                <button className="absolute top-0 right-0 flex justify-center items-center rounded-md bg-[#59A0A2] text-[#C0D7BD] w-6 h-6 m-2 p-1 font-semibold text-md">
                    +
                </button>

            </figure>
            <p className="flex justify-evenly items-center w-full px-2">
                <span className="text-sm font-light w-3/5 overflow-hidden text-ellipsis whitespace-nowrap font-sans">
                    {data.data.title}
                </span>

                <span className="font-semibold text-lg w-1/5  text-slate-500">
                    ${data.data.price}
                </span>
            </p>
        </div>
    )
}

export default Card