import { useState } from "react";
import "./css/index.css";
import { NewUserSignup } from "../../config/firebasemethods";
import { MyInput } from "./../../components/index";

export default function Signup() {
  const [model, Setmodel] = useState<any>({});

  const fillmodel = (key: string, value: any) => {
    Setmodel({ ...model, [key]: value });
  };
  let Signup = () => {
    console.log(model);
    NewUserSignup(model);
  };
  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="flex flex-col items-center custom_bg_color py-28 px-5">
        <h1 className="text-3xl mb-10 font-semibold">New User Signup</h1>
        <MyInput
          value={model.username}
          onChange={(e: any) => {
            fillmodel("username", e.target.value);
          }}
          label="Enter Username"
        />
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
          onClick={Signup}
          className="w-48 mt-10 cutom_color py-3 bg-black"
        >
          Signup
        </button>
      </div>
    </div>
  );
}
