import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">Video Game Accessibility Checker</h1>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <p>
            this is a chrome extension that checks the accessibility of video games
          </p>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>This is video game accessibility chrome extension</p>

      </footer>
    </div>
  );
}
