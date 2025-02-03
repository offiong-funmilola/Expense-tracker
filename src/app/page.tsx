import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[80vh] flex items-center justify-center">
      <div className="w-1/2 h-1/2 flex flex-col items-center justify-center">
        <h1 className="text-purple-600 text-4xl font-bold font-sans">Manage your finance</h1>
        <p className="text-xl text-black font-sans">Be in control of your expenses</p>
      </div>
    </div>
  );
}
