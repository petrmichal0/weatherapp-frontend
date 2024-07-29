import { FaCheckCircle } from "react-icons/fa";

function ResetPage() {
  return (
    <div className="flex flex-col items-center justify-center max-h-screen w-full uppercase ">
      <div className="bg-zinc-500 p-6 rounded-lg shadow-md text-center w-[500px]">
        <h2 className="text-base font-bold mb-6 text-white">
          WE’ve SENT A RESET LINK TO YOUR EMAIL!
        </h2>
        <FaCheckCircle className="text-green-500 text-6xl mb-4 inline-block" />
      </div>
    </div>
  );
}

export default ResetPage;
