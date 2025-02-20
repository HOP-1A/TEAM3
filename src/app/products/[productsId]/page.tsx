"use client";
import { Minus } from "lucide-react";
import { Plus } from "lucide-react";
import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { Truck } from "lucide-react";

const ProductInfo = () => {
  const [number, setNumber] = useState<number>(1);

  const addNumber = () => {
    if (number < 4) setNumber(number + 1);
  };
  const minusNumber = () => {
    if (number > 1) setNumber(number - 1);
  };
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex w-[1100px] justify-start mt-5">Эмэгтэй</div>
      <div className="flex w-[1100px] justify-between ">
        <div className="flex">
          <div className="text-slate-500">Нийтэлсэн огноо:</div>
          <div>2025.02.15 10:33</div>
        </div>
        <div className="flex">
          <Heart />
          <div>Хадгалах</div>
        </div>
      </div>
      <hr className="bg-slate-500 w-[1120px] mb-10 mt-7" />
      <div className="flex">
        <img
          className="h-[480px] w-[700px]"
          src="https://cdnp.cody.mn/spree/images/2770724/zoom/IMG_7791.jpeg?1734536155"
        />
        <div className="flex flex-col pl-4 pr-4">
          <div className="flex justify-between">
            <div className="mb-5 bg-[#ff3467] w-[100px] h-[30px] flex items-center justify-center rounded-md">
              Шинэ
            </div>
            <div>Зарын дугаар: 1625093</div>
          </div>
          <div className="text-3xl mb-5">Versace absolu 90ml edp</div>
          <div className="text-4xl ">295,000 ₮</div>
          <div className="mb-5 text-slate-500">Боломжит үлдэгдэл: 4</div>
          <div>Too shirheg</div>
          <div className="flex items-center">
            <Minus className="bg-gray-200 rounded-md" onClick={minusNumber} />
            <div className="ml-5 mr-5">{number}</div>
            <Plus className="bg-gray-200 rounded-md" onClick={addNumber} />
          </div>
          <div className="mb-6 text-gray-500">
            Худалдан авах тоо хэмжээгээ оруулна уу.
          </div>
          <div className="m-5 flex justify-evenly w-[380px]">
            <button className="bg-indigo-500 h-[40px] w-[180px] rounded-md text-white">
              Сагслах
            </button>
            <button className="bg-[#ff3467] h-[40px] w-[180px] br-15px rounded-md mb-5 text-white">
              Худалдан авах
            </button>
          </div>
          <div>Хүргэлт:</div>
          <div className="flex">
            <Truck />
            <div>Хүргэлттэй</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductInfo;
