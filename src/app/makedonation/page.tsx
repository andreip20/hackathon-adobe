"use client";

import React from "react";

import { useSearchParams } from "next/navigation";

import { useForm, SubmitHandler } from "react-hook-form";

import { toast, Toaster } from "react-hot-toast";

import { redirect, useRouter } from "next/navigation";

import { useEffect } from "react";

interface Values {
  address: String;
  city: String;
  state: String;
  zip: String;
  name: String;
}

function MakeDonationPage() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<Values>();
  const onSubmit: SubmitHandler<Values> = (data) => {
    if (
      data.address.length > 0 &&
      data.city.length > 0 &&
      data.state.length > 0 &&
      data.zip.length > 0
    ) {
      // axios
      //   .post("/api/makedonation", {
      //     address: data.address,
      //     city: data.city,
      //     state: data.state,
      //     zip: data.zip,
      //     name: data.name,
      //   })
      //   .then((res: { data: any }) => {
      //     console.log(res);
      //     if (res.data) {
      //       toast.success("Thank you for your donation!");
      //       router.push("/");
      //     }
      //   })
      //   .catch((err: Error) => {
      //     console.log(err);
      //     toast.error("Error");
      //   });
      toast.success("Thank you for your donation!");

      setTimeout(() => {
        router.push("/");
      }, 2000);
    } else {
      toast.error("Please fill in all fields!");
    }
  };

  const searchParams = useSearchParams();

  return (
    <div className="makedonation-container">
      <div>
        <Toaster></Toaster>
      </div>
      <div className="flex flex-col gap-10 info-container">
        <p className="p-for-makedonation">Name: {searchParams.get("name")}</p>
        <p className="p-for-makedonation">
          Clothing: {searchParams.get("clothing")}
        </p>
        <p className="p-for-makedonation">Size: {searchParams.get("size")}</p>
        <p className="p-for-makedonation">Age: {searchParams.get("age")}</p>
        <p className="p-for-makedonation">
          Centre: {searchParams.get("centre")}
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <div className="label-container">
          <label>Address</label>
          <label>City</label>
          <label>State</label>
          <label>Zip</label>
          <label>Name (Optional)</label>
        </div>

        <div className="input-container">
          <input {...register("address")} />
          <input {...register("city")} />
          <input {...register("state")} />
          <input {...register("zip")} />
          <input {...register("name")} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MakeDonationPage;
