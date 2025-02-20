"use client";
import { Input } from "@/components/ui/input";
import { Heart, Search, ShoppingBasket, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
const Header = () => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const router = useRouter();
  return (
    <div className="flex flex-col">
      <div className="bg-[#ff3467] h-fit w-full flex justify-center">
        <div className="text-white w-4/5">Хүссэнээ зар, Хайснаа ол</div>
      </div>
      <div className="w-full flex justify-center ">
        <div className="flex h-fit w-4/5 my-6 justify-between items-center">
          <img
            src={"https://zary.mn/27a395c08037dc4652ee51434e509bb1.png"}
            className="w-[150px] h-[80px]"
            onClick={() => router.push("")}
          />
          <div className="w-2/4 flex items-center">
            {" "}
            <Input
              placeholder="Барааны нэр"
              onChange={(e) => {
                setSearchInputValue(e.target.value);
              }}
            />
            <Search color={"#ff3467"} />
          </div>

          <div className="flex gap-6">
            <div className=" w-[30px] h-[30px] bg-slate-100 rounded-[15px] flex justify-center items-center">
              {" "}
              <Heart color={"#ff3467"} fill={"#ff3467"} />
            </div>
            <div className=" w-[30px] h-[30px] bg-slate-100 rounded-[15px] flex justify-center items-center">
              {" "}
              <ShoppingBasket color={"#ff3467"} fill={"#ff3467"} />
            </div>
            <div className=" w-[30px] h-[30px] bg-slate-100 rounded-[15px] flex justify-center items-center">
              {" "}
              <User color={"#ff3467"} fill={"#ff3467"} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-4/5 flex justify-between">
          <div>
            {" "}
            <div
              onClick={() => {
                router.push("/product");
              }}
            >
              Бараа бүтээгдэхүүнүүд
            </div>
          </div>
          <div>
            <div>Шинэ бараа</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
