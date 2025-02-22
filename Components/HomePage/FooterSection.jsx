import Image from "next/image";
import Logo from "@/public/cropped-photo_6005693113080860372_y.png";
import mother from "@/public/IMG_7433-400x400.jpg";

export default function FooterSection() {
  return (
    <div className="w-full md:flex md:items-center md:justify-center">
      <div className="md:flex md:items-center md:justify-center md:max-w-[85%]">
        <Image
          src={Logo}
          className="p-6 md:w-[25%]"
          alt="logo"
          loading="lazy"
        />
        <p className="text-lg p-5 md:w-[50%]">
          هنرستان هوانوردی آسمان یکی از معتبرترین مراکز آموزشی در حوزه هوانوردی
          و علوم پروازی است که با هدف تربیت نیروی متخصص و حرفه‌ای برای صنعت
          هوایی کشور تأسیس شده است. این هنرستان با ارائه آموزش‌های نظری و عملی
          در زمینه‌هایی مانند خلبانی، تعمیر و نگهداری هواپیما، و مدیریت فرودگاه،
          دانش‌آموزان را برای ورود به مشاغل مرتبط با صنعت هوافضا آماده می‌کند.
        </p>
        <div className="flex flex-col items-center justify-center md:w-[25%]">
          <Image
            src={mother}
            className="w-32 md:w-52"
            alt="mother"
            loading="lazy"
          />
          <h3>مادر هوانوردی ایران</h3>
        </div>
      </div>
    </div>
  );
}
