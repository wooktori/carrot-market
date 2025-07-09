import { useEffect, useState } from "react";
import Search from "../components/Search";

export default function Home() {
  const title_list = [
    "맛집",
    "자전거",
    "카페",
    "알바",
    "원룸",
    "러닝 모임",
    "동네친구",
    "아이폰",
    "중고차",
  ];
  const region_list = [
    "태전동",
    "역동",
    "경안동",
    "오포읍",
    "탄벌동",
    "쌍령동",
    "매산리",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % title_list.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [title_list.length]);

  return (
    <div className="flex flex-col gap-10 mt-20">
      <div className="flex items-center justify-center">
        <img
          src="https://img.icons8.com/?size=100&id=7880&format=png&color=000000"
          className="w-10"
        />
        <span className="font-bold text-3xl">
          태전동에서 {title_list[index]} 찾고 계신가요?
        </span>
      </div>
      <Search />
      <div className="flex gap-4 items-center justify-center">
        <div className="w-32 h-32 bg-gray-100 rounded-md flex flex-col justify-between p-3 hover:bg-gray-200">
          <img
            src="https://img.icons8.com/?size=100&id=otmekfRTbat2&format=png&color=ff6600"
            className="w-8"
          />
          중고거래
        </div>
        <div className="w-32 h-32 bg-gray-100 rounded-md flex flex-col justify-between p-3 hover:bg-gray-200">
          <img
            src="https://img.icons8.com/?size=100&id=Y652b9zUFUkl&format=png&color=ff9364"
            className="w-8"
          />
          알바
        </div>
        <div className="w-32 h-32 bg-gray-100 rounded-md flex flex-col justify-between p-3 hover:bg-gray-200">
          <img
            src="https://img.icons8.com/?size=100&id=19986&format=png&color=ed4aff"
            className="w-8"
          />
          부동산
        </div>
        <div className="w-32 h-32 bg-gray-100 rounded-md flex flex-col justify-between p-3 hover:bg-gray-200">
          <img
            src="https://img.icons8.com/?size=100&id=12684&format=png&color=1b9ae3"
            className="w-8"
          />
          중고차
        </div>
        <div className="w-32 h-32 bg-gray-100 rounded-md flex flex-col justify-between p-3 hover:bg-gray-200">
          <img
            src="https://img.icons8.com/?size=100&id=53373&format=png&color=d1c113"
            className="w-8"
          />
          동네업체
        </div>
        <div className="w-32 h-32 bg-gray-100 rounded-md flex flex-col justify-between p-3 hover:bg-gray-200">
          <img
            src="https://img.icons8.com/?size=100&id=12581&format=png&color=ff6600"
            className="w-8"
          />
          동네생활
        </div>
        <div className="w-32 h-32 bg-gray-100 rounded-md flex flex-col justify-between p-3 hover:bg-gray-200">
          <img
            src="https://img.icons8.com/?size=100&id=3734&format=png&color=ff9364"
            className="w-8"
          />
          모임
        </div>
      </div>
      <div className="flex gap-4 items-center justify-center">
        {region_list.map((region, index) => (
          <span
            key={index}
            className="bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-2xl"
          >
            {region}
          </span>
        ))}
      </div>
    </div>
  );
}
