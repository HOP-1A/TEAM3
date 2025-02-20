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
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleInputValue = (e: { target: { value: string } }) => {
    setEmail(e.target.value);
  };

  const SecondHandleInputValue = (e: { target: { value: string } }) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="h-[620px] w-[450px]">
        <CardHeader className="text-center text-[30px] font-light">
          <CardTitle>Нэвтрэх</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="space-y-1">
            <p className="font-xs">Email</p>
            <Input
              placeholder="example@gmail.com"
              value={email}
              onChange={handleInputValue}
            />
            {email ? null : (
              <div className="text-red-500 text-[15px]">
                Email заавал бөглөх !!!
              </div>
            )}
            <p className="font-xs">Password</p>

            <Input
              placeholder="******"
              value={password}
              onChange={SecondHandleInputValue}
              type="password"
            />
            {password ? null : (
              <div className="text-red-500 text-[15px]">
                Password заавал бөглөх !!!
              </div>
            )}
          </div>
          <div className="flex justify-center gap-[100px]">
            <div className="flex gap-2">
              <input type="checkbox" id="remember" value={"remember"} />
              <label className="text-gray-400 text-[13px]" htmlFor="remember">
                Email Password сануулах
              </label>
            </div>
            <a href="" className="text-gray-400 font-semibold text-[13px]">
              Нууц үг мартсан?
            </a>
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
            Email Password оруулан нэвтрэх эсвэл бүртгүүлэх товчийг дарж zary.mn
            вебсайтад нэвтэрснээр таныг тус вебсайтын үйлчилгээний нөхцөл болон
            нууцлалын бодлогыг хүлээн зөвшөөрсөнд тооцно.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Page;
