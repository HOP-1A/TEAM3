"use client";

import { useState } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export type category = {
  _id: string;
  categoryName: string;
  imageUrl: string;
};

const categories = [
  {
    categoryName: "Нүүр будалт",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_aezehgE4Cxm9uvHW0twxUddyCdx-QNhdad7R-JnFZ-u0rOGTKlqwisT5qLaofOEMDIA&usqp=CAU",
  },
  {
    categoryName: "Эрэгтэй",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_kMa_4WDc3WGN45HZR9RLzIqd7d-5qKesoYgWUc4Qg3U8ujF38Or9FAjFKnieL9DHmpw&usqp=CAU",
  },
  {
    categoryName: "Нүүр будалт",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_aezehgE4Cxm9uvHW0twxUddyCdx-QNhdad7R-JnFZ-u0rOGTKlqwisT5qLaofOEMDIA&usqp=CAU",
  },
  {
    categoryName: "Эрэгтэй",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_kMa_4WDc3WGN45HZR9RLzIqd7d-5qKesoYgWUc4Qg3U8ujF38Or9FAjFKnieL9DHmpw&usqp=CAU",
  },
  {
    categoryName: "Нүүр будалт",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_aezehgE4Cxm9uvHW0twxUddyCdx-QNhdad7R-JnFZ-u0rOGTKlqwisT5qLaofOEMDIA&usqp=CAU",
  },
  {
    categoryName: "Эрэгтэй",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_kMa_4WDc3WGN45HZR9RLzIqd7d-5qKesoYgWUc4Qg3U8ujF38Or9FAjFKnieL9DHmpw&usqp=CAU",
  },
  {
    categoryName: "Нүүр будалт",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_aezehgE4Cxm9uvHW0twxUddyCdx-QNhdad7R-JnFZ-u0rOGTKlqwisT5qLaofOEMDIA&usqp=CAU",
  },
  {
    categoryName: "Эрэгтэй",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_kMa_4WDc3WGN45HZR9RLzIqd7d-5qKesoYgWUc4Qg3U8ujF38Or9FAjFKnieL9DHmpw&usqp=CAU",
  },
  {
    categoryName: "Нүүр будалт",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_aezehgE4Cxm9uvHW0twxUddyCdx-QNhdad7R-JnFZ-u0rOGTKlqwisT5qLaofOEMDIA&usqp=CAU",
  },
  {
    categoryName: "Эрэгтэй",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_kMa_4WDc3WGN45HZR9RLzIqd7d-5qKesoYgWUc4Qg3U8ujF38Or9FAjFKnieL9DHmpw&usqp=CAU",
  },
  {
    categoryName: "Нүүр будалт",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_aezehgE4Cxm9uvHW0twxUddyCdx-QNhdad7R-JnFZ-u0rOGTKlqwisT5qLaofOEMDIA&usqp=CAU",
  },
  {
    categoryName: "Эрэгтэй",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_kMa_4WDc3WGN45HZR9RLzIqd7d-5qKesoYgWUc4Qg3U8ujF38Or9FAjFKnieL9DHmpw&usqp=CAU",
  },
  {
    categoryName: "Нүүр будалт",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_aezehgE4Cxm9uvHW0twxUddyCdx-QNhdad7R-JnFZ-u0rOGTKlqwisT5qLaofOEMDIA&usqp=CAU",
  },
  {
    categoryName: "Эрэгтэй",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_kMa_4WDc3WGN45HZR9RLzIqd7d-5qKesoYgWUc4Qg3U8ujF38Or9FAjFKnieL9DHmpw&usqp=CAU",
  },
  {
    categoryName: "Нүүр будалт",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_aezehgE4Cxm9uvHW0twxUddyCdx-QNhdad7R-JnFZ-u0rOGTKlqwisT5qLaofOEMDIA&usqp=CAU",
  },
  {
    categoryName: "Эрэгтэй",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_kMa_4WDc3WGN45HZR9RLzIqd7d-5qKesoYgWUc4Qg3U8ujF38Or9FAjFKnieL9DHmpw&usqp=CAU",
  },
  {
    categoryName: "Нүүр будалт",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_aezehgE4Cxm9uvHW0twxUddyCdx-QNhdad7R-JnFZ-u0rOGTKlqwisT5qLaofOEMDIA&usqp=CAU",
  },
  {
    categoryName: "Эрэгтэй",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_kMa_4WDc3WGN45HZR9RLzIqd7d-5qKesoYgWUc4Qg3U8ujF38Or9FAjFKnieL9DHmpw&usqp=CAU",
  },
];

const Home = () => {
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

export default Home;

{
  /* <div>
        <div>
          <Avatar>
            <AvatarImage src="https://m.media-amazon.com/images/I/61CzAXsrD9L._AC_SY879_.jpg" />
          </Avatar>
          Эмэгтэй
        </div>
      </div>
      <div>
        <Avatar>
          <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_kMa_4WDc3WGN45HZR9RLzIqd7d-5qKesoYgWUc4Qg3U8ujF38Or9FAjFKnieL9DHmpw&usqp=CAU" />
        </Avatar>
        <div>Эрэгтэй</div>
      </div>
      <div>
        <Avatar>
          <AvatarImage src="https://cdnp.cody.mn/spree/images/2676057/large/image_26.png" />
        </Avatar>
        <div>Гар утас</div>
      </div>
      <div>
        <Avatar>
          <AvatarImage src="https://m.media-amazon.com/images/I/61f4ss3vhAL._AC_.jpg" />
        </Avatar>
        <div>Үнэртэн</div>
      </div>
      <div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
        <div>Гоёл чимэглэл</div>
      </div>
      <div>
        <Avatar>
          <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_aezehgE4Cxm9uvHW0twxUddyCdx-QNhdad7R-JnFZ-u0rOGTKlqwisT5qLaofOEMDIA&usqp=CAU" />
        </Avatar>
        <div>Нүүр будалт</div>
      </div>
      <div>
        <Avatar>
          <AvatarImage src="https://cdn.webshopapp.com/shops/326488/files/467513390/300x300x1/skin1004-madagascar-centella-ampoule.jpg" />
        </Avatar>
        <div>Арьс арчилгаа</div>
      </div>
      <div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
        <div>Цахилгаан бараа</div>
      </div>
      <div>
        <Avatar>
          <AvatarImage src="https://us.moshi.com/cdn/shop/products/variant_image_52ef13aa-bc00-4d00-9663-24605c3bfee5.jpg?v=1668593497" />
        </Avatar>
        <div>Нөүтбүүк</div>
      </div>
      <div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
        <div>Витамин</div>
      </div>
      <div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
        <div>Хүүхдийн ангилал</div>
      </div>
      <div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
        <div>Чихэвч</div>
      </div>
      <div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
        <div>Тавилга</div>
      </div> */
}
