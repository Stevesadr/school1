import ParagraphText from "@/Components/Ficher/ParagraphText";
import PinkBtn from "@/Components/Ficher/PinkBtn";

export default function IntroductionSection({ isNavbarOpen }) {
  return (
    <section className="bg-gray-100 p-8 text-center flex flex-col items-center justify-center m-11">
      <h2 className="text-2xl font-bold text-gray-800">
        {" "}
        دوره متوسطه دوم سلام چطوری
      </h2>
      {!isNavbarOpen && (
        <ParagraphText>اینجا شروع آینده موفق شغلی شماست!</ParagraphText>
      )}
      <PinkBtn>مشاهده همه کلاس‌ها</PinkBtn>
    </section>
  );
}
