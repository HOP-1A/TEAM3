"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Page = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [check, setCheck] = useState<boolean>(true);

  const handleInputValue = (e: { target: { value: string } }) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="h-[500px] w-[450px]">
        <CardHeader className="text-center text-[30px] font-light">
          <CardTitle>Нэвтрэх</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="space-y-1">
            <p className="font-xs">Утасны дугаар</p>
            <Input
              placeholder="880123**"
              value={phoneNumber}
              onChange={handleInputValue}
            />
            {phoneNumber ? null : <div className="text-red-500 text-[15px]">Утасны дугаар заавал бөглөх</div>}
          </div>
          <div className="flex justify-center gap-[130px]">
            <div className="flex gap-2">
              <input type="checkbox" id="remember" value={"remember"} />
              <label htmlFor="remember">Утас сануулах</label>
            </div>
            <div>Нууц үг мартсан?</div>
          </div>

          <div className="flex justify-center">
            <Button className="bg-red-400 w-[390px]">Нэвтрэх</Button>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <div className=" w-[165px] h-[1px] bg-gray-400"></div>
            <p>эсвэл</p>
            <div className=" w-[165px] h-[1px] bg-gray-400"></div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col text-center gap-4">
          <Button className="flex justify-center bg-red-400 w-[390px] h-[">
            Бүртгүүлэх
          </Button>
          <p>
            Утасны дугаараа оруулан нэвтрэх эсвэл бүртгүүлэх товчийг дарж
            zary.mn вебсайтад нэвтэрснээр таныг тус вебсайтынүйлчилгээний
            нөхцөлболоннууцлалын бодлогыгхүлээн зөвшөөрсөнд тооцно.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Page;
