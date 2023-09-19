import { useState } from "react";
import "./css/index.css";
import { UserLogin } from "../../config/firebasemethods";
import { MyInput } from "./../../components/index";

export default function Login() {
  const [model, Setmodel] = useState<any>({});
  const fillmodel = (key: string, value: any) => {
    Setmodel({ ...model, [key]: value });
  };
  let Login = () => {
    console.log(model);
    UserLogin(model);
  };
  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="flex flex-col items-center custom_bg_color py-28 px-5">
        <h1 className="text-3xl mb-10 font-semibold">Login</h1>
        <MyInput
          value={model.email}
          onChange={(e: any) => {
            fillmodel("email", e.target.value);
          }}
          label="Enter Email"
        />
        <MyInput
          value={model.password}
          onChange={(e: any) => {
            fillmodel("password", e.target.value);
          }}
          label="Enter Password"
        />
        <button
          onClick={Login}
          className="w-48 mt-10 cutom_color py-3 bg-black"
        >
          Login
        </button>
      </div>
    </div>
  );
}
