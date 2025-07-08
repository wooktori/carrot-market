import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const isMain = location.pathname === "/";
  return (
    <>
      <div className="flex items-center justify-between">
        <img
          src="https://i.namu.wiki/i/0USV9nUU5fEhlvT5ViKqwQe-uy46DVnu1YiSZYnKwgkt_8tVaRewInwz7A_CoRrsgCxfwTlBqbLo_z_tb3xZ6gmheKDSlY3jdbwhJzKSvsZcQY9D27mIRjAvMdkHeGsLYvXVTYHsNsnxey5ybmxDbQ.svg"
          width="64"
          onClick={() => navigate("/")}
        />
        {isMain ? null : (
          <nav className="flex gap-3 font-bold">
            <Link to="">중고거래</Link>
            <Link to="">부동산</Link>
            <Link to="">중고차</Link>
            <Link to="">알바</Link>
            <Link to="">동네업체</Link>
            <Link to="">동네생활</Link>
            <Link to="">모임</Link>
          </nav>
        )}
        <button className="cursor-pointer p-2 rounded-sm text-sm text-white bg-brand hover:bg-brand-hover">
          앱 다운로드
        </button>
      </div>
    </>
  );
}
