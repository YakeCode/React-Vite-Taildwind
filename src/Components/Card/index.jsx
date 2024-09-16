const Card = ()=> {
    return (

        <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">

            <figure className="relative mb-2 w-full h-4/5 ">

                <span className="absolute left-0 bottom-0 bg-white/60 rounded-md text-xs px-3 py-0.5 text-black m-2 "
                >
                    Category
                </span>

                <img className="w-full h-full object-cover rounded-lg"
                src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600" alt="product-img" />

                <button className="absolute top-0 right-0 flex justify-center items-center rounded-full bg-white/90 text-black/70 w-6 h-6 m-2 p-1 font-extrabold text-lg">
                    +
                </button>

            </figure>
            <p className="flex justify-between items-center w-full">
                <span className="text-md font-light">Product</span>
                <span className="font-semibold text-lg">$Price</span>
            </p>
        </div>
    )
}

export default Card