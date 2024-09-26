import "./index.css"

function ProductDetail() {
    return (
        <aside className="product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white "
        >
            <div className="flex justify-between items-center px-4 pt-2">
                <h2 className="font-medium text-xl"
                >Detail
                </h2>
                <span className="text-white bg-red-700 rounded-xl px-2">x</span>
            </div>
        </aside>
    )
}

export {ProductDetail}