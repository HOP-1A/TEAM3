import { PrismaClient } from "@prisma/client";
import { Heart } from "lucide-react";
const prisma = new PrismaClient();

const Card = async () => {
  const users = await prisma.user.findMany();

  const products = [
    {
      imageUrl:
        "https://cdnp.cody.mn/spree/images/2824119/zoom/1000021853.jpg?1737973268",
      date: "1 цаг 26 минутын өмнө",
      description: "Lacoste pour femme 90ml edp",
      price: "285,000 ₮ ",
    },
    {
      imageUrl:
        "https://cdnp.cody.mn/spree/images/2852784/zoom/IMG_6030.jpeg?1739853691",
      date: "1 өдрийн өмнө",
      description: "Samsung tablet a9+",
      price: "1,050,000 ₮",
    },
    {
      imageUrl:
        "https://cdnp.cody.mn/spree/images/2332866/zoom/2.jpg?1714888981",
      date: "4 өдрийн өмнө",
      description: "Гар утастай холбогддог мини проектор | tuul electronics",
      price: "99,000 ₮",
    },
  ];
  return (
    <div className="flex gap-5 p-sm items-center justify-center">
      {products.map((product, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg p-4 relative w-64"
        >
          <img
            className="w-full h-40 object-cover rounded-xl"
            src={product.imageUrl}
            alt={product.description}
          />
          <div className="text-gray-500 text-xs mt-2">{product.date}</div>
          <div className="text-sm font-semibold mt-1">
            {product.description}
          </div>
          <div className="text-lg font-bold text-red-500 mt-1">
            {product.price}
          </div>
          <button className="mt-2">
            <Heart />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card;
