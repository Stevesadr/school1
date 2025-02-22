import { GET } from "@/API/getRepository";
import Card from "@/components/ficher/Card";
import React from "react";

const index = (props) => {
  return (
    <div className="min-h-screen  p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">لیست معلم‌ها</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {props.resTeacherAPI.map((item) => {
          return <Card key={item.id} teacher={item} />;
        })}
      </div>
    </div>
  );
};

export default index;

export async function getStaticProps() {
  try {
    const urlTeacherAPI = await GET("teachers/list/");
    const resTeacherAPI = await urlTeacherAPI.json();
    return {
      props: { resTeacherAPI },
      revalidate: 86400,
    };
  } catch (error) {
    console.error("خطا در دریافت داده‌ها:", error);
    return {
      props: { resTeacherAPI: [] },
      revalidate: 86400,
    };
  }
}
