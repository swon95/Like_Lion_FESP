import React, { useState } from "react";
import {
  useNavigate,
  useSearchParams,
} from "react-router-dom";

export default function Home() {
  const [params, setParams] =
    useState("");
  const [
    queryParamsInput,
    setQueryParamsInput,
  ] = useState("");
  const [queryParams, setQueryParams] =
    useSearchParams();
  // 입력한 값을 보내주기 위한 2가지 방법 👇
  // 1 리액트 라우터에서는 Link
  // 2 Navigate
  const navigate = useNavigate();

  const handleParamsChange = (e) => {
    setParams(e.target.value);
  };
  const handleQueryParamsChange = (
    e,
  ) => {
    setQueryParamsInput(e.target.value);
  };

  // 버튼 클릭 시 지정한 경로로 입력한 값을 가지고 navigate
  const handleClick = () => {
    navigate(`/greet/${params}`);
    // key : value
    setQueryParams({
      from: queryParamsInput,
    });
  };

  return (
    <div>
      {/* value 의 params 가 변경될 때마다 handleParamsChange 함수 실행 */}
      <input
        type="text"
        value={params}
        onChange={handleParamsChange}
        placeholder="search params"
      />
      <button onClick={handleClick}>
        환영!
      </button>
      {/* value 의 queryParamsInput 가 변경될 때마다 handleQueryParamsChange 함수 실행 */}
      <input
        type="text"
        value={queryParamsInput}
        onChange={
          handleQueryParamsChange
        }
        placeholder="Query Params"
      />
    </div>
  );
}
