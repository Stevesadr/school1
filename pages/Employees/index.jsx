import { GET } from "@/API/getRepository";
import Card from "@/components/ficher/Card";

import React from "react";

const index = (props) => {
  return (
    <div className="min-h-screen  p-4">
      <h1 className="text-2xl font-bold mb-6 text-center"> کادر اجرایی</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {props.resEmployeesAPI.map((item) => {
          return <Card key={item.name} teacher={item} />;
        })}
      </div>
    </div>
  );
};

export default index;

export async function getServerSideProps(context) {
  try {
    const urlEmployeesAPI = await GET("adv/employeeinformation/");
    const resEmployeesAPI = await urlEmployeesAPI.json();

    return {
      props: { resEmployeesAPI },
      revalidate: 86400,
    };
  } catch (error) {
    console.error("خطا در دریافت داده‌ها:", error);
    return {
      props: { resEmployeesAPI: [] },
      revalidate: 86400,
    };
  }
}
