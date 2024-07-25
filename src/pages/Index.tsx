import Header from "../components/Header";
import HighSatisfactionList from "../components/HighSatisfactionList";

const Index = () => {
  return (
    <>
      <Header />
      <div className="px-5">
        <div className="flex flex-col items-center mb-52">
          <h1 className="text-center text-2xl font-semibold leading-9 mt-8 mb-6">
            1분 만에 고르는
            <br />
            당신에게 딱 맞는 선물
          </h1>
          <button className="w-[158px] h-14 bg-black text-white rounded-lg">
            선물 고르러 가기
          </button>
        </div>
        <HighSatisfactionList />
      </div>
    </>
  );
};

export default Index;
