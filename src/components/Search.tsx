import { useState } from "react";

const hotKeywords = [
  "에어컨",
  "에어컨청소",
  "노트북",
  "원룸",
  "현대 중고차",
  "이사짐 알바",
  "근처 맛집",
  "투표",
  "동네친구",
  "배달",
];

// 전역 상태로 관리해야할 값 : region, category
export default function SearchBar() {
  const [region, setRegion] = useState("중앙동");
  const [category, setCategory] = useState("중고거래");
  const [input, setInput] = useState("");

  return (
    <div className="flex justify-center">
      <div className="space-y-2 w-1/2">
        {/* 검색창 */}
        <div className="flex items-center space-x-2">
          {/* 지역 버튼 */}
          <button className="flex items-center px-4 py-2 bg-neutral-900 text-white rounded-full text-sm">
            <span className="mr-1">📍</span>
            {region}
          </button>

          {/* 검색 바 */}
          <div className="flex flex-1 items-center bg-white border border-gray-300 rounded-full px-4 py-2">
            <select
              className="text-sm mr-2 focus:outline-none bg-transparent"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>중고거래</option>
              <option>알바</option>
              <option>부동산</option>
            </select>

            {/* 입력창 */}
            <input
              className="flex-1 text-sm focus:outline-none placeholder-gray-400"
              placeholder="검색어를 입력해주세요"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            {/* 검색 아이콘 */}
            <button className="text-gray-600">&rarr;</button>
          </div>
        </div>

        <div className="text-sm text-gray-500 space-x-2">
          <span className="text-black">인기 검색어</span>
          {hotKeywords.map((word) => (
            <button
              key={word}
              className="hover:underline hover:text-gray-700 transition"
            >
              {word}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
