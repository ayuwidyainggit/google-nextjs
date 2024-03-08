import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <HomeHeader />
      <div className=" flex flex-col items-center mt-24">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBdKf0xPlVR6aXkz05c-YO58SJZuo66-NqjHeDm8QLyp4Bh2rQU8Rg7on0NEHjx1VLRDk&usqp=CAU"
          alt="google-logo"
          width={300}
          height={100}
          priority={true}
          style={{ width: "auto" }}
        />
        <HomeSearch />
      </div>
    </div>
  );
}
