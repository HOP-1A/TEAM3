const ProductInfo = () =>{
    return(
      <div className="flex justify-center items-center flex-col">
        <div>Эмэгтэй</div>
        <div>2025.02.15 10:33</div>
        <div className="flex">
        <img className="h-[480px] w-[700px]" src="https://cdnp.cody.mn/spree/images/2770724/zoom/IMG_7791.jpeg?1734536155"/>
        <div className="flex flex-col">
        <div className="mb-5">Шинэ</div>
        <div className="text-3xl mb-5">Versace absolu 90ml edp</div>
        <div className="text-4xl ">295,000 ₮</div>
        <div className="mb-5">Боломжит үлдэгдэл: 4</div>
        <div>Too shirheg</div>
        <div className="flex items-center">
        <button className="h-[30px] w-[30px]  rounded-md bg-slate-500 flex items-center justify-center">-</button>
        <div className="ml-5 mr-5">1</div>
        <button className="h-[30px] w-[30px]  rounded-md bg-slate-500 flex items-center justify-center">+</button>
        </div>
        <div className="m-5">
        <button className="bg-indigo-500 h-[40px] w-[180px] rounded-md text-white">sagslah </button>
        <button className="bg-[#ff3467] h-[40px] w-[180px] br-15px rounded-md text-white">hudaldan avah</button>
        </div>
        </div>
        </div>
      </div>
    )
}
export default ProductInfo;
//    product.map(
//     return(
//         <div>
//             <div>{productinfo.baraaniiAngilal}</div>
//             <div>{productInfo.baraaniiOnsar}</div>
//             <img src={productInfo.barraaniiZurag} />  
//             <div>{productInfo.shineHuujin}</div> 
//             <h1>{productInfo.name}</h1>
//             <div>{productInfo.Price}</div>
//             <div>{productInfo.productLefth}</div>
//         </div>
//     )
//    )