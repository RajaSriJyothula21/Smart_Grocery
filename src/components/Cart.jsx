import { useEffect, useMemo, useState } from "react";
import { ShoppingCart, Package, IndianRupee, CheckCircle, ChefHat, Trash2 } from "lucide-react";

const API = "https://mart-1yi1.onrender.com/api/cart";

export default function Cart() {
  const [carts, setCarts] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [loading, setLoading] = useState(true);

  const loadCart = async () => {
    try {
      setLoading(true);
      const res = await fetch(API);
      const data = await res.json();
      const list = data.carts || [];
      setCarts(list);
      if (list.length) {
        setSelectedId((prev) =>
          prev && list.some((c) => c._id === prev) ? prev : list[0]._id
        );
      } else {
        setSelectedId("");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadCart(); }, []);

  const cart = useMemo(
    () => carts.find((c) => c._id === selectedId),
    [carts, selectedId]
  );

  const deleteCart = async () => {
    if (!cart || !confirm("Delete this cart?")) return;
    await fetch(`${API}/${cart._id}`, { method: "DELETE" });
    loadCart();
  };

  const deleteItem = async (index) => {
    if (!confirm("Remove this item?")) return;
    await fetch(`${API}/${cart._id}/item/${index}`, { method: "DELETE" });
    loadCart();
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center text-3xl font-bold">Loading...</div>;
  if (!cart) return <div className="min-h-screen flex items-center justify-center text-3xl font-bold">No Cart Available</div>;

  const originalTotal = cart.cart.reduce((s,i)=>s+i.originalPrice*i.quantity,0);
  const marketTotal = cart.cart.reduce((s,i)=>s+i.myMarketPrice*i.quantity,0);
  const savings = originalTotal-marketTotal;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-green-600 text-white p-6">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <ShoppingCart size={32}/>
          <div>
            <h1 className="text-3xl font-bold">Smart Grocery Cart</h1>
            <p>Select a saved recipe below</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <label className="font-semibold block mb-2">Choose Recipe</label>
        <select
          value={selectedId}
          onChange={(e)=>setSelectedId(e.target.value)}
          className="w-full md:w-96 border rounded-xl p-3 mb-6 bg-white"
        >
          {carts.map(c=>(
            <option key={c._id} value={c._id}>{c.recipe}</option>
          ))}
        </select>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-white rounded-2xl shadow p-6 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <ChefHat className="text-orange-500"/>
                <div>
                  <h2 className="text-3xl font-bold">{cart.recipe}</h2>
                  <p className="text-gray-500">Serves {cart.servings} People</p>
                </div>
              </div>
              <button onClick={deleteCart} className="bg-red-500 text-white px-4 py-2 rounded-lg flex gap-2 items-center">
                <Trash2 size={18}/>Delete Cart
              </button>
            </div>

            {cart.cart.map((item,index)=>{
              const save=(item.originalPrice-item.myMarketPrice)*item.quantity;
              return (
                <div key={index} className="bg-white rounded-2xl shadow p-6 flex justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <Package className="text-green-600"/>
                      <h3 className="font-bold text-xl">{item.productName}</h3>
                    </div>
                    <p className="mt-2">Qty: {item.quantity} {item.unit}</p>
                    <div className="mt-3 bg-green-50 border rounded-lg p-3">
                      <CheckCircle className="inline mr-2 text-green-600" size={16}/>
                      {item.reason}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">₹{item.myMarketPrice}</div>
                    <div className="line-through text-gray-400">₹{item.originalPrice}</div>
                    <div className="text-red-500 font-semibold mt-2">Save ₹{save}</div>
                    <button onClick={()=>deleteItem(index)} className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg">Remove</button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 max-w-sm w-full h-fit">
  {/* Header */}
  <div className="flex items-center gap-2 mb-6">
    <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
      <IndianRupee className="w-5 h-5" />
    </div>
    <h2 className="text-xl font-bold text-gray-800">Order Summary</h2>
  </div>

  {/* Price Breakdown */}
  <div className="space-y-4 text-sm text-gray-600">
    <div className="flex justify-between items-center">
      <span>Total Items</span>
      <span className="font-semibold text-gray-900">{cart.cart.length}</span>
    </div>
    
    <div className="flex justify-between items-center">
      <span>Original Price</span>
      <span className="font-semibold text-gray-900">₹{originalTotal}</span>
    </div>

    <div className="flex justify-between items-center">
      <span>Market Price</span>
      <span className="font-semibold text-gray-900">₹{marketTotal}</span>
    </div>

    {/* Savings Badge Section */}
    <div className="flex justify-between items-center bg-green-50 text-green-700 px-3 py-2.5 rounded-xl font-medium">
      <span>You Save</span>
      <span className="font-bold">₹{savings}</span>
    </div>
  </div>

  <hr className="my-5 border-gray-100" />

  {/* Final Total (Assuming marketTotal or originalTotal is the final price, adjust variable as needed) */}
  <div className="flex justify-between items-baseline mb-6">
    <span className="text-base font-semibold text-gray-800">Total Amount</span>
    <span className="text-2xl font-extrabold text-gray-900">₹{marketTotal}</span>
  </div>

  {/* CTA Button */}
  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3.5 rounded-xl shadow-md shadow-orange-500/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
    Proceed To Checkout
  </button>
</div>
        </div>
      </div>
    </div>
  );
}
