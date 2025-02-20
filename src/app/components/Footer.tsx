import { Facebook } from 'lucide-react';
import { Youtube } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Instagram } from 'lucide-react';
const Footer = ()=>{
return(
    <div className="flex justify-center items-end h-screen">
        <div className=" flex flex-col items-center pt-14 bg-[#ff3467] w-screen h-[396px] space-x-24">
            <div className='flex space-x-11'>
                <div className='flex flex-col'>
                <img src="https://zary.mn/d1bbe99a59718a190b84bd47d0787533.png" width={160} height={80}/>
                <div className='flex text-pink-700 pt-4 space-x-2 text-sm' >
                <Facebook className='bg-white rounded-full w-[30px] h-[30px]'></Facebook>
                <Youtube className='bg-white rounded-full w-[30px] h-[30px]'></Youtube>
                <Twitter className='bg-white rounded-full w-[30px] h-[30px]'></Twitter>
                <Instagram className='bg-white rounded-full w-[30px] h-[30px]'></Instagram> 
                </div>
               
            </div>
           <div  className='text-white flex space-x-24'>
             <div className='text-white space-y-2 font-sans'>
                <div className='font-extrabold'>zary.mn</div>
                <div>Бидний тухай</div>
                <div>Бүтээгдэхүүн үйлчилгээ</div>
                <div>Хамтын ажиллагаа</div>
                <div>Ажлын байр</div>
                <div>Артиклууд</div>
            </div>

            <div className='text-white  space-y-2 font-sans'>
            <div className='font-extrabold' >Тусламж</div>
            <div>Сэтгэгдэл үлдээх</div>
            <div>Түгээмэл асуулт, хариулт</div>
            <div>Үйлчилгээний нөхцөл</div>
            <div>Нууцлалын бодлого</div>
            <div>Аюулгүй ажиллагаа</div>
            </div>
              
            <div  className='text-white  space-y-2 font-sans'>
                <div className='font-extrabold' >Холбоо барих</div>
                <div>Улаанбаатар хот, Сүхбаатар дүүрэг, 1-р</div>
                <div> хороо, Парисын гудамж 42, IC Tower,</div>
                <div>10 давхар</div>
                <div>Утас:  7777-8984</div>
                <div>Имэйл: info@zary.mn</div>
            </div>

           </div> 
            </div>
            <div className='pt-16 text-white'>
             <div>Developed by TEAM3</div>  
            </div>
        
        </div>
    </div>
)
}

export default Footer