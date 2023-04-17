import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex">
      <Navbar />
      <main className="px-10">
        <h1 className="text-[#011F2B] text-2xl font-bold">Analytics</h1>
        <p className="text-[#011F2B] ml-10 py-10 font-bold">Landing pages</p>
      </main>
    </div>
  );
}

export default App;
