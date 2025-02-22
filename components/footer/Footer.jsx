import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute z-[-1]"
      >
        <path
          fill="#e7008a"
          fillOpacity="1"
          d="M0,160L60,160C120,160,240,160,360,181.3C480,203,600,245,720,261.3C840,277,960,267,1080,250.7C1200,235,1320,213,1380,202.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#273036"
          fillOpacity="1"
          d="M0,256L60,250.7C120,245,240,235,360,229.3C480,224,600,224,720,240C840,256,960,288,1080,293.3C1200,299,1320,277,1380,266.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <div className="bg-[#273036] p-4 md:p-10">
        <h1 className=" text-lg md:text-2xl md:m-4">
          درباره هنرستان هوانوردی آسمان
        </h1>
        <p className="text-base md:text-xl p-2  md:p-4">
          این رشته در سال 1382 باهمت و تلاش سرکار خانم معصومه حیدری فر برای
          اولین بار در ایران تاسیس شد .
        </p>
        <p className="text-sm md:text-lg p-2 md:p-4">
          درسال1383 باکسب مجوزهای لازم و با کمک و یاری جناب اقای مهندس حسین
          اریائی پور(رئیس مرکز آموزش فنون و خدمات هوایی کشور) و جناب آقای
          چهاربند(مدیرکل محترم دفتر کارشناسی کاردانش وزارت اموزش و پرورش)و جناب
          اقای حافظی(مدیرکل مدارس غیر دولتی وزارت اموزش و پرورش)راه اندازی و
          فعالیت خود را اغاز کرد. این مجموعه به عنوان یک پیشرو در امر اموزش
          هوانوردی دختران بوده و تاکنون هفت دوره فارغ التحصیل داشته که صد در صد
          انها در دانشگاه پذیرفته و در رشته های خلبانی،مهمانداری،مهندسی تعمیر و
          نگهداری هواپیما،برق و مخابرات هواپیما،تامقطع کارشناسی ادامه تحصیل داده
          وتاکنون برخی در رشته های مرتبط جذب بازار کار شده اند.
        </p>
        <p className="flex text-sm md:text-base md:items-center md:p-4">
          <FaLocationDot />
          <span className="px-3 md:px-4">
            {" "}
            تهران، خیابان استاد مطهری، بعد از مفتح، پلاک151
          </span>
        </p>
        <p className="flex text-sm md:text-base md:items-center md:p-4">
          <IoPhonePortraitOutline />
          <span className="px-3 md:px-4">02188501642</span>
        </p>
        <p className="flex text-sm md:text-base md:items-center md:p-4">
          <MdEmail />
          <span className="px-3 md:px-4">info@asemanavitec.com</span>
        </p>
        <p className="flex text-sm md:text-base md:items-center md:p-4">
          <FaInstagram />
          <span className="px-3 md:px-4">Instagram Addrees</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
