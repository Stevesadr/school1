import { GETWiTHTOKEN } from "@/API/getWithToken";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const index = (props) => {
  const year = ["دهم", "یازدهم", "دوازدهم"];
  const [grade, setGrade] = useState(undefined);
  useEffect(() => {
    year.map((item, index) => {
      if (item === props.studentInfoRespons.grade) {
        setGrade(index + 10);
      }
    });
  }, []);
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4"> کلاس ها </h1>
      <div className="border-b w-full flex items-center justify-around">
        <p className="py-2 px-4 ">درس</p>
        <p className="py-2 px-4 ">لینک ورود</p>
      </div>
      {props.classRespons.map((item) => {
        return item.grade_level === grade ? (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <tbody>
                <tr className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b md:border-l">
                    {item.name}
                  </td>
                  <td className="py-2 px-4 border-b">
                    <a
                      href={`${item.link_url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button>ورود به کلاس</button>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default index;

export async function getServerSideProps(context) {
  try {
    const token = context.req.cookies.token;
    const studentInfoURL = await GETWiTHTOKEN("students/student/", token);
    const studentInfoRespons = await studentInfoURL.json();

    const classURL = await GETWiTHTOKEN("adv/skyroom/", token);
    const classRespons = await classURL.json();
    return {
      props: {
        classRespons,
        studentInfoRespons,
      },
    };
  } catch (e) {
    return {
      props: {
        classRespons: null,
      },
    };
  }
}
