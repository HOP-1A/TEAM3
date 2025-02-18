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
import { useRouter } from "next/navigation";

const Page = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();

  const handleInputValue = (e: { target: { value: string } }) => {
    setEmail(e.target.value);
  };

  const secondHandleInputValue = (e: { target: { value: string } }) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="h-[400px] w-[400px]">
        <CardHeader className="text-center text-[50px]">
          <CardTitle>Нэвтрэх</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <div>
            <p className="font-xs">Утасны дугаар</p>
            <Input
              placeholder="880123**"
              value={email}
              onChange={handleInputValue} 
              type="number"
            />
          </div>
          <Button className="bg-red-400 w-[350px]">Нэвтрэх</Button>
          <div className="flex justify-center items-center space-x-2">
            <div className=" w-[107px] h-[1px] bg-gray-400"></div>
            <p>эсвэл</p>
            <div className=" w-[107px] h-[1px] bg-gray-400"></div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button className="bg-red-400 w-[350px] h-[">Бүртгүүлэх</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Page;
