"use client";
// import { useState } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { prisma } from "@/lib/prisma";

// const categories = [
//   {
//     categoryName: "Нүүр будалт",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_aezehgE4Cxm9uvHW0twxUddyCdx-QNhdad7R-JnFZ-u0rOGTKlqwisT5qLaofOEMDIA&usqp=CAU",
//   },
//   {
//     categoryName: "Эрэгтэй",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_kMa_4WDc3WGN45HZR9RLzIqd7d-5qKesoYgWUc4Qg3U8ujF38Or9FAjFKnieL9DHmpw&usqp=CAU",
//   },
//   {
//     categoryName: "Нүүр будалт",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_aezehgE4Cxm9uvHW0twxUddyCdx-QNhdad7R-JnFZ-u0rOGTKlqwisT5qLaofOEMDIA&usqp=CAU",
//   },
//   {
//     categoryName: "Эрэгтэй",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_kMa_4WDc3WGN45HZR9RLzIqd7d-5qKesoYgWUc4Qg3U8ujF38Or9FAjFKnieL9DHmpw&usqp=CAU",
//   },
//   {
//     categoryName: "Нүүр будалт",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_aezehgE4Cxm9uvHW0twxUddyCdx-QNhdad7R-JnFZ-u0rOGTKlqwisT5qLaofOEMDIA&usqp=CAU",
//   },
//   {
//     categoryName: "Эрэгтэй",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_kMa_4WDc3WGN45HZR9RLzIqd7d-5qKesoYgWUc4Qg3U8ujF38Or9FAjFKnieL9DHmpw&usqp=CAU",
//   },
// ];

const Page = async () => {
  const categories = await prisma.categories.findMany();
  console.log(categories);
  // const [categories, setCategories] = useState<category[]>([]);
  return (
    <div className="flex flex-row justify-center items-center gap-10 height-100 snap-x">
      {categories?.map((category, i) => {
        return (
          <div>
            <Avatar className="h-24 w-24 ">
              <AvatarImage src={category.imageUrl} />
            </Avatar>
            <div className="flex items-center justify-center font-black">
              {category.categoryName}
            </div>
            {/* <img src={category.image} /> */}
          </div>
        );
      })}
    </div>
  );
};

export default Page;
