import { Heart } from "lucide-react";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center pt-4">
        <div className="flex-row">
          <div className=" pt-10 flex justify-center font-mono font-semibold">
            Төлбөрийн сонголтууд
          </div>
          <div className=" flex justify-center gap-4 pt-4">
            <img
              width={148}
              height={52}
              src="https://cdn.cody.mn/img/312195/400x0xwebp/storepay_buttonweb-afterpay.png?h=d636ca11e190c8f5e16a0856159642c24658d8a2"
            />
            <img
              width={148}
              height={52}
              src="https://cdn.cody.mn/img/267676/400x0xwebp/storepay_button-active.png?h=d636ca11e190c8f5e16a0856159642c24658d8a2"
            />
            <img
              width={148}
              height={52}
              src="https://cdn.cody.mn/img/267677/400x0xwebp/storepay_button-active-1.png?h=d636ca11e190c8f5e16a0856159642c24658d8a2"
            />
            <img
              width={148}
              height={52}
              src="https://cdn.cody.mn/img/281818/400x0xwebp/storepay_button-active-sono.png?h=d636ca11e190c8f5e16a0856159642c24658d8a2"
            />
            <img
              width={148}
              height={52}
              src="https://cdn.cody.mn/img/293280/400x0xwebp/ard_buttonweb-afterpay1.png?h=d636ca11e190c8f5e16a0856159642c24658d8a2"
            />
            <img
              width={148}
              height={52}
              src="https://cdn.cody.mn/img/301493/400x0xwebp/storepay_buttonweb-afterpay.png?h=d636ca11e190c8f5e16a0856159642c24658d8a2"
            />
            <img
              width={148}
              height={52}
              src="https://cdn.cody.mn/img/314053/400x0xwebp/toki_buttonweb-afterpay.png?h=d636ca11e190c8f5e16a0856159642c24658d8a2"
            />
          </div>

          <div className="pt-20">
            <div className="font-sans text-xl font-bold ">
              Шинээр нэмэгдсэн бараа
            </div>
            <div className="pt-15 border rounded-md w-[200px]">
              <img
                width={182}
                height={182}
                src="https://cdnp.cody.mn/spree/images/2850013/zoom/IMG_4248.jpeg?1739639373"
              />
              <div>
                <div className="flex justify-between pt-4">
                  <div className="text-gray-500">2 өдрийн өмнө</div>
                  <Heart />
                </div>

                <div className="font-mono text-sm">
                  Эрэгтэй ноолууран оруулгатай цамц
                </div>
                <div className="pt-4 font-mono ">65,000 ₮</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}