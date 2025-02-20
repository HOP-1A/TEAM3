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
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  const handleInputValue = (e: { target: { value: string } }) => {
    setEmail(e.target.value);
  };

  const SecondHandleInputValue = (e: { target: { value: string } }) => {
    setPassword(e.target.value);
  };

  const ThirdHandleInputValue = (e: { target: { value: string } }) => {
    setPhoneNumber(e.target.value);
  };

  const FourthHandleInputValue = (e: { target: { value: string } }) => {
    setUsername(e.target.value);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="h-[800px] w-[450px]">
        <CardHeader className="text-center text-[30px] font-light">
          <CardTitle>Бүртгүүлэх</CardTitle>
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
            {!email.includes("@gmail.com") && email ? (
              <div className="text-red-500 text-[15px]">buru gmail bna</div>
            ) : null}

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

            <p className="font-xs">Phone number</p>
            <Input
              placeholder="991234.."
              value={phoneNumber}
              onChange={ThirdHandleInputValue}
            />
            {phoneNumber ? null : (
              <div className="text-red-500 text-[15px]">
                Phone number заавал бөглөх !!!
              </div>
            )}
            {phoneNumber.length !== 8 && phoneNumber ? (
              <div className="text-red-500 text-[15px]">buru dugaar bna</div>
            ) : null}

            <p className="font-xs">Username</p>
            <Input
              placeholder="example_00"
              value={username}
              onChange={FourthHandleInputValue}
            />
            {username ? null : (
              <div className="text-red-500 text-[15px]">
                Username заавал бөглөх !!!
              </div>
            )}
          </div>
          <div className="flex justify-center flex-col gap-3">
            <div className=" text-gray-400 text-[14px] font-medium text-center">
              Доорх нөхцөлүүдийг зөвшөөрч, бүртгүүлэх товч дээр дарснаар биднээс
              баталгаажуулах код хүлээн авна.
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="remember" value={"remember"} />
              <label
                className="text-[15px] text-center font-medium"
                htmlFor="remember"
              >
                Үйлчилгээний нөхцөл ба нууцлалын бодлого -ыг зөвшөөрч байна
              </label>
            </div>
          </div>

          <div className="flex justify-center">
            <Button className="bg-red-400 w-[390px]">Бүртгүүлэх</Button>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <div className=" w-[165px] h-[1px] bg-gray-400"></div>
            <p>эсвэл</p>
            <div className=" w-[165px] h-[1px] bg-gray-400"></div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col text-center gap-4">
          <Button className="flex justify-center bg-red-400 w-[390px]">
            <a href="/login">Нэвтрэх</a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Page;
