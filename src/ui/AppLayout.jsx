import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="relative flex flex-col min-h-screen bg-[url('../src/assets/images/bg.png')] bg-cover bg-center">
      <div className="absolute inset-0 backdrop-blur-[150px] z-0"></div>
      <div className="relative z-10 flex flex-col items-center justify-start flex-1">
        <header className="w-[500px]">
          <Header />
        </header>
        <main className="w-[350px] text-center">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
