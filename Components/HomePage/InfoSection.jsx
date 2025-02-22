import Image from "next/image";
import ParagraphText from "@/Components/Ficher/ParagraphText";
import PinkBtn from "@/Components/Ficher/PinkBtn";
import Tea from "@/public/photo_6008189962253615437_y.jpg";
import { useContext } from "react";
import { NavContext } from "@/Context/Store";

export default function InfoSection() {
  const { isOpen } = useContext(NavContext);
  return (
    <>
      <div className="z-[-100]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#273036"
            fillOpacity="0.9"
            d="M0,96L16,122.7C32,149,64,203,96,229.3C128,256,160,256,192,240C224,224,256,192,288,176C320,160,352,160,384,154.7C416,149,448,139,480,138.7C512,139,544,149,576,138.7C608,128,640,96,672,117.3C704,139,736,213,768,224C800,235,832,181,864,154.7C896,128,928,128,960,117.3C992,107,1024,85,1056,106.7C1088,128,1120,192,1152,213.3C1184,235,1216,213,1248,170.7C1280,128,1312,64,1344,53.3C1376,43,1408,85,1424,106.7L1440,128L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"
          ></path>
        </svg>

        <h4
          className={`bg-[#273036] m-0 opacity-90 text-white z-[-1] text-center lg:text-5xl ${
            isOpen ? "hidden" : ""
          }`}
        >
          مطالب ما را در شبکه اجتماعی دنبال کنید{" "}
        </h4>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#273036"
            fillOpacity="0.9"
            d="M0,96L16,122.7C32,149,64,203,96,229.3C128,256,160,256,192,240C224,224,256,192,288,176C320,160,352,160,384,154.7C416,149,448,139,480,138.7C512,139,544,149,576,138.7C608,128,640,96,672,117.3C704,139,736,213,768,224C800,235,832,181,864,154.7C896,128,928,128,960,117.3C992,107,1024,85,1056,106.7C1088,128,1120,192,1152,213.3C1184,235,1216,213,1248,170.7C1280,128,1312,64,1344,53.3C1376,43,1408,85,1424,106.7L1440,128L1440,0L1424,0C1408,0,1376,0,1344,0C1312,0,1280,0,1248,0C1216,0,1184,0,1152,0C1120,0,1088,0,1056,0C1024,0,992,0,960,0C928,0,896,0,864,0C832,0,800,0,768,0C736,0,704,0,672,0C640,0,608,0,576,0C544,0,512,0,480,0C448,0,416,0,384,0C352,0,320,0,288,0C256,0,224,0,192,0C160,0,128,0,96,0C64,0,32,0,16,0L0,0Z"
          ></path>
        </svg>
      </div>
      <section className="bg-gray-100 p-8 text-center flex flex-col items-center justify-center m-11">
        <ParagraphText>
          پرواز کن، چون آسمان منتظر لمس رویاهای توست
        </ParagraphText>
      </section>

      <section className="relative bg-gray-100 h-96 p-8 text-center flex flex-col items-center justify-center m-11">
        <h2 className="text-xl font-bold text-gray-800">
          درس خلبانی فقط یادگیری پرواز نیست، بلکه کشف بی‌نهایت‌های آسمان است.
        </h2>
        <ParagraphText>
          مطالب ما را در شبکه‌های اجتماعی و وبلاگ دنبال کنید
        </ParagraphText>
        <div className="w-full flex items-center justify-end m-10 md:ml-36">
          <PinkBtn>آرشیو مقالات</PinkBtn>
        </div>
      </section>

      <div className="w-full md:flex md:items-center md:justify-center">
        <div className="md:flex lg:items-center lg:justify-center lg:max-w-[65%]">
          <div className="p-3 w-full">
            <h4 className="font-thin md:text-xl">دو فنجان داغ</h4>
            <p className="text-3xl p-5">
              آن سو میزی کسی نشسته و فنجان داغش را فوت می‌کند، این سو اما ما
              نشسته‌ایم با کلی سؤال. ما اینجا گوش‌هایی هستیم برای شنیدن و
              دانستن، در حد فاصله نوشیدن دو فنجان چای داغ.
            </p>
          </div>
          <Image
            src={Tea}
            className="p-6 md:m-1"
            alt="tea-picture"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
}
