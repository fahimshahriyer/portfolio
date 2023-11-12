import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen md:p-24 container mx-auto">
      <div className="hero-section mt-16">
        <p className="greetings uppercase text-center font-bold">Hello</p>
      </div>
      <div className="text-center -mt-72">
        <p className="uppercase m-8 text-xl">I am</p>
        <p className="uppercase text-5xl text-sky-400 font-semibold">
          Fahim Shahriyer
        </p>
      </div>
      <div className="mt-56 grid gap-4 grid-cols-3 pr-24 pl-24">
        <div className="col-span-2">
          <p className="uppercase text-right text-sky-400">
            Software Development Leadership
          </p>
        </div>
        <div className="col-span-1">
          <p className="uppercase">
            Expert with a passion for excellence and innovation
          </p>
        </div>
      </div>
      <div className="mt-8 grid gap-4 grid-cols-3 pr-24 pl-24">
        <div className="col-span-2">
          <p className="text-right text-sky-500 text-sm">contact</p>
        </div>
        <div className="col-span-1">
          <p className="text-sm mb-2">shahriyers@gmail.com</p>
          <p className="text-sm">
            <a target="_blank" href="https://linkedin.com/in/fahim-shahriyer/">
              linkedin.com/in/fahim-shahriyer/
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
