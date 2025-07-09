import { useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";

const hotWords = [
  "에어컨",
  "에어컨청소",
  "노트북",
  "원룸",
  "현대 중고차",
  "이사짐 알바",
  "근처 맛집",
  "투표",
  "동네친구",
  "배드민턴 모임",
  "자전거",
  "플스",
  "투룸 빌라",
  "닌텐도",
  "서빙 알바",
  "기아 중고차",
  "전체 매물",
];

interface PostData {
  bname: string;
}

// 전역 상태로 관리해야할 값 : region, category
export default function Search() {
  const [region, setRegion] = useState("태전동");
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(true);
  const handleComplete = (data: PostData) => {
    setRegion(data.bname);
    setIsOpen(false);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center mb-2 w-full justify-center">
        <button
          className="flex items-center px-2 py-3 mr-2 bg-black text-white text-sm rounded-full font-bold gap-0.5 hover:bg-gray-700 transition"
          onClick={handleClick}
        >
          <img
            src="https://img.icons8.com/?size=100&id=7880&format=png&color=FFFFFF"
            className="w-6"
          />
          <span>{region}</span>
          <img
            src="https://img.icons8.com/?size=100&id=60662&format=png&color=FFFFFF"
            className="w-5"
          />
        </button>
        <form className="flex items-center rounded-full border border-gray-300 px-4 py-2 ml-3 w-1/2">
          <select name="list">
            <option value="중고거래">중고거래</option>
            <option value="부동산">부동산</option>
            <option value="중고차">중고차</option>
            <option value="알바">알바</option>
            <option value="동네업체">동네업체</option>
            <option value="동네생활">동네생활</option>
            <option value="모임">모임</option>
          </select>
          <input
            type="text"
            className="flex-1 ml-3 outline-none"
            placeholder="검색어를 입력해주세요."
          />
          <button className="text-white bg-black rounded-full p-2 hover:cursor-pointer hover:bg-gray-700 transition ">
            <img
              src="https://img.icons8.com/?size=100&id=39777&format=png&color=FFFFFF"
              className="w-4"
            />
          </button>
        </form>
        {isOpen && (
          <div className="fixed flex items-center justify-center z-50 inset-0">
            <div
              className=" absolute inset-0 bg-gray-500 opacity-50"
              onClick={() => setIsOpen(false)}
            />
            <div className="relative bg-white p-4 rounded-lg w-full max-w-md h-[440px] z-50">
              <DaumPostcodeEmbed
                onComplete={handleComplete}
                autoClose={false}
              />
            </div>
          </div>
        )}
      </div>
      <div className="overflow-x-auto no-scrollbar w-1/2">
        <div className="flex space-x-4 text-sm text-gray-500 ">
          <span className="text-gray-400 shrink-0">인기 검색어</span>
          {hotWords.map((word) => (
            <button
              key={word}
              className="shrink-0 hover:underline hover:text-gray-700 transition"
            >
              {word}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
