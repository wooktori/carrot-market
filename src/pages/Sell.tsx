import { useEffect, useState } from "react";
import Search from "../components/Search";

interface Item {
  category: string;
  description: string;
  image: string;
  id: number;
  price: string;
  title: string;
}

export default function Sell() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setItems(data);
      console.log(data);
    };
    fetchItems();
  }, []);
  return (
    <div className="mt-10">
      <Search />
      <div className="flex flex-col mt-10 w-full">
        <div>
          <div className="text-sm font-bold text-gray-600">
            홈 &gt; 중고거래
          </div>
          <div className="font-bold text-2xl">
            경기도 광주시 태전동 중고거래
          </div>
        </div>
        <div className="flex">
          <div>필터</div>
          <div className="grid grid-cols-4 place-items-center gap-4">
            {items.map((item: Item) => (
              <div key={item.id}>
                <img
                  src={item.image}
                  className="w-52 h-52 outline-1 outline-gray-300 rounded-xl p-5 hover:bg-gray-200 transition"
                />
                <div>
                  {item.title.length > 10
                    ? item.title.slice(0, 20) + "..."
                    : item.title}
                </div>
                <div>{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
