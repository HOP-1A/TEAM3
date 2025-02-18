import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient(); 

const Card = async () => {
  const users = await prisma.user.findMany(); 
  console.log(users);

  return (
    <div>
        <div >
      <img className="w-206 h-206 "
        src="https://cdnp.cody.mn/spree/images/2844457/zoom/DX2092_1.JPG?1739234302"
        alt="Image 1"
      />
            </div>
     
            <div >
      <img className="w-206 h-206"
        src="https://cdnp.cody.mn/spree/images/2844457/zoom/DX2092_1.JPG?1739234302"
        alt="Image 1"
      />
            </div> <div >
      <img className="w-206 h-206"
        src="https://cdnp.cody.mn/spree/images/2844457/zoom/DX2092_1.JPG?1739234302"
        alt="Image 1"
      />
            </div> <div >
      <img className="w-206 h-206"
        src="https://cdnp.cody.mn/spree/images/2844457/zoom/DX2092_1.JPG?1739234302"
        alt="Image 1"
      />
            </div> <div >
      <img className="w-206 h-206"
        src="https://cdnp.cody.mn/spree/images/2844457/zoom/DX2092_1.JPG?1739234302"
        alt="Image 1"
      />
            </div>
            <div >
      <img className="w-206 h-206"
        src="https://cdnp.cody.mn/spree/images/2844457/zoom/DX2092_1.JPG?1739234302"
        alt="Image 1"
      />
            </div>
                  </div>

  );
};

export default Card;
