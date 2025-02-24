import { GETWiTHTOKEN } from "@/API/getWithToken";
import React, { useContext, useEffect, useState } from "react";
import { toPng } from "html-to-image";
import { PDFDocument, StandardFonts, error, rgb } from "pdf-lib";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Cookies from "js-cookie";
import { POSTWITHTOKEN } from "@/API/postWithToken";
import { Toast, ToastBody, ToastContainer } from "react-bootstrap";
import * as Yup from "yup";
import { BeatLoader } from "react-spinners";
import { NavContext } from "@/Context/Store";

const StudentProfile = (props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [toastMassage, setToastMassage] = useState("");
  const initialValues = {
    image: undefined,
  };
  const validationSchema = Yup.object().shape({
    image: Yup.mixed().required("لطفا عکس را قرار دهید"),
  });
  const handleSubmit = async (values) => {
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("image", values.image);
    const token = Cookies.get("token");
    try {
      const response = await fetch(
        "https://schoolm.liara.run/students/student/",
        {
          method: "PUT",
          headers: {
            Authorization: `token ${token}`,
          },
          body: formData,
        }
      );
      if (response.ok) {
        console.log("ok");
        setToastMassage("عکس با موفقیت ذخیره شد");
      }
    } catch {
      setToastMassage("مشکلی در ارسال عکس به وجود آمده");
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };
  setStudentCalss(props.studentInfoRespons.grade);

  const handleDownloadPDF = async () => {
    const node = document.getElementById("student-info");
    const dataUrl = await toPng(node);
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    const image = await pdfDoc.embedPng(dataUrl);
    const { width, height } = image.scale(0.4);
    page.drawImage(image, {
      x: 50,
      y: page.getHeight() - height - 50,
      width,
      height,
    });
    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "student-info.pdf";
    link.click();
  };
  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      {isSubmitting && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <BeatLoader color="#ffffff" size={20} />
        </div>
      )}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl relative">
        <h1 className="text-2xl font-bold mb-6 text-center">اطلاعات شما</h1>
        <ToastContainer
          position="top-center"
          className="p-3"
          style={{ zIndex: 100 }}
        >
          <Toast
            show={isSubmitted}
            onClose={() => setIsSubmitted(false)}
            delay={5000}
            autohide={true}
          >
            <ToastBody>{toastMassage}</ToastBody>
          </Toast>
        </ToastContainer>

        <div id="student-info" className="space-y-4">
          {props.studentInfoRespons.image !== null ? (
            <div className="flex justify-center">
              <img
                src={props.studentInfoRespons.image}
                alt="عکس پروفایل"
                className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500"
              />{" "}
            </div>
          ) : (
            <div className="flex justify-start">
              <div className="flex justify-end">
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ setFieldValue, isSubmitting }) => (
                    <Form className="space-y-4">
                      <div>
                        <label
                          htmlFor="image"
                          className="block text-sm font-medium text-gray-700"
                        >
                          عکس پروفایل
                        </label>
                        <input
                          id="image"
                          name="image"
                          type="file"
                          accept="image/jpeg, image/png"
                          onChange={(event) => {
                            const file = event.currentTarget.files[0];
                            if (file) {
                              setFieldValue("image", file);
                            }
                          }}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        <ErrorMessage
                          name="image"
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>

                      <div className="flex justify-start">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-gray-600 px-1 text-sm text-white  rounded-md hover:bg-indigo-700 flex items-center justify-center"
                        >
                          ارسال
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700">
              نام و نام‌خانوادگی
            </label>
            <p className="mt-1 block w-full px-3 py-2 bg-gray-100 rounded-md">
              {props.studentInfoRespons.name_and_last}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              کد ملی
            </label>
            <p className="mt-1 block w-full px-3 py-2 bg-gray-100 rounded-md">
              {props.studentInfoRespons.identity}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              پایه تحصیلی
            </label>
            <p className="mt-1 block w-full px-3 py-2 bg-gray-100 rounded-md">
              {props.studentInfoRespons.grade}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              وضعیت پرداخت شهریه
            </label>
            <p className="mt-1 block w-full px-3 py-2 bg-gray-100 rounded-md">
              {props.studentInfoRespons.tuition_paid
                ? "پرداخت شده"
                : "پرداخت نشده"}
            </p>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            نام کاربری
          </label>
          <p className="mt-1 block w-full px-3 py-2 bg-gray-100 rounded-md">
            {props.studentInfoRespons.user_skyroom !== null
              ? props.studentInfoRespons.user_skyroom
              : "نام کاربری تنظیم نشده"}
          </p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            رمز عبور
          </label>
          <p className="mt-1 block w-full px-3 py-2 bg-gray-100 rounded-md">
            {props.studentInfoRespons.password_skyroom !== null
              ? props.studentInfoRespons.password_skyroom
              : "رمز عبور تنظیم نشده"}
          </p>
        </div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={
              props.examRespons.hasOwnProperty("error")
                ? null
                : handleDownloadPDF
            }
            className={` text-white px-4 py-2 rounded-md hover:bg-indigo-700 ${
              props.examRespons.hasOwnProperty("error")
                ? "bg-gray-400 pointer-events-none"
                : "bg-indigo-600"
            }`}
          >
            {props.studentInfoRespons.tuition_paid
              ? "دریافت کارت ورود به جلسه"
              : " دریافت کارت ورود به جلسه (غیرفعال)"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;

export async function getServerSideProps(context) {
  try {
    const token = context.req.cookies.token;
    const studentInfoURL = await GETWiTHTOKEN("students/student/", token);
    const studentInfoRespons = await studentInfoURL.json();

    const examURl = await GETWiTHTOKEN("students/examcard/", token);
    const examRespons = await examURl.json();
    return {
      props: {
        studentInfoRespons,
        examRespons,
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
}
