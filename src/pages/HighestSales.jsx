import { Flame, Star, ShoppingCart, BadgePercent } from "lucide-react";

const topProducts = [
  {
    id: 1,
    name: "Fresh Spinach",
    category: "Leafy",
    price: 40,
    oldPrice: 55,
    sold: "2,500+ Sold",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=600",
  },
  {
    id: 2,
    name: "Organic Carrot",
    category: "Root",
    price: 60,
    oldPrice: 75,
    sold: "2,100+ Sold",
    rating: 4.8,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwVlZIeWudz-3vDE5BS_b2eCPx4vPbClSt5ldOWReC1o03uGHqHjyiyc8&s=10",
  },
  {
    id: 3,
    name: "Fresh Broccoli",
    category: "Stem",
    price: 90,
    oldPrice: 110,
    sold: "1,900+ Sold",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=600",
  },
  {
    id: 4,
    name: "Green Cabbage",
    category: "Leafy",
    price: 35,
    oldPrice: 45,
    sold: "2,800+ Sold",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1598030304671-5aa1d6f21128?w=600",
  },
  {
    id: 5,
    name: "Fresh Beetroot",
    category: "Root",
    price: 55,
    oldPrice: 70,
    sold: "1,700+ Sold",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600",
  },
  {
    id: 6,
    name: "Drumstick",
    category: "Stem",
    price: 80,
    oldPrice: 95,
    sold: "1,500+ Sold",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600",
  },
];

export default function HighestSales() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="flex items-center gap-2 mb-10">
          <BadgePercent className="text-green-600" />
          <h2 className="text-3xl font-bold">
            Best Selling Vegetables
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {topProducts.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >

              <div className="relative">

                <img
                  src={item.image}
                  alt={item.name}
                  className="h-64 w-full object-cover"
                />

                <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  🔥 Best Seller
                </span>

              </div>

              <div className="p-6">

                <p className="text-sm text-green-600 font-medium">
                  {item.category}
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  {item.name}
                </h3>

                <div className="flex items-center justify-between mt-4">

                  <span className="flex items-center gap-1 text-yellow-500 font-semibold">
                    <Star fill="currentColor" size={18} />
                    {item.rating}
                  </span>

                  <span className="text-sm text-gray-500">
                    {item.sold}
                  </span>

                </div>

                <div className="flex items-center gap-4 mt-5">

                  <span className="text-3xl font-bold text-green-600">
                    ₹{item.price}
                  </span>

                  <span className="line-through text-gray-400">
                    ₹{item.oldPrice}
                  </span>

                </div>

                <button className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl flex items-center justify-center gap-2">
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>
    </div>
  );
}