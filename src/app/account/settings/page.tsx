import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Settings } from "lucide-react";
import { WalletMinimal } from "lucide-react";
import { RefreshCw } from "lucide-react";
import { Megaphone } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { LogOut } from "lucide-react";

const Page = async () => {
  return (
    <div>
      <div>
        <Card className="w-80 ">
          <CardHeader className="flex items-center flex-row gap-5 ">
            <Avatar className="h-14 w-14">
              <AvatarFallback> {user.profileImg} </AvatarFallback>
              <AvatarImage src="https://cdn-icons-png.flaticon.com/128/14363/14363721.png" />
            </Avatar>
            <div>
              <CardTitle>{user.name}</CardTitle>
              <CardDescription>{user.createdAt} - аас хойш</CardDescription>
            </div>
          </CardHeader>
          <hr className="mb-5" />
          <CardContent className="flex font-[550] flex-col text-sm  gap-5">
            <div className="flex flex-row gap-3">
              <Settings color="rgb(255, 52, 103)" />
              <p>Хувийн мэдээлэл</p>
            </div>
            <div className="flex flex-row gap-3">
              <Megaphone color="rgb(255, 52, 103)" />
              <p>Миний зар</p>
            </div>
            <div className="flex flex-row gap-3">
              <ShoppingBag color="rgb(255, 52, 103)" />
              <p>Миний захиалгууд</p>
            </div>
            <div className="flex flex-row gap-3">
              <WalletMinimal color="rgb(255, 52, 103)" />
              <p>Хэтэвч</p>
            </div>
            <div className="flex flex-row gap-3">
              <RefreshCw color="rgb(255, 52, 103)" />
              <p>Хуваан төлөлт /хүсэлт/</p>
            </div>
          </CardContent>
          <CardFooter className="flex font-[550] mt-3 text-sm flex-row gap-3">
            <LogOut color="rgb(255, 52, 103)" />
            <p>Системэээс гарах</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
export default Page;
