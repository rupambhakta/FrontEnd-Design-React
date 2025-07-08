
import "./App.css";
import Part from "./components/Part";
import PricingCard from "./components/PricingCard";
import FirstPart from "./components/FirstPart";

function App() {

  return (
    <>
        <FirstPart />
        <Part />
        {/* Portion 3 */}
        <div className="w-[360px] h-[67px] bg-[#F8C4004F] border-2 border-dotted text-lg  rounded-full flex justify-center items-center mt-10 mx-auto">
          Membership Flexible Plan
        </div>
        <h2 className="text-[60px] font-bold text-center">Pricing Made Simple</h2>
        <div className="w-4/5 m-auto flex justify-center gap-4 mt-8 mb-8">
          <PricingCard />
          <PricingCard />
          <PricingCard />
        </div>
    </>
  );
}

export default App;
