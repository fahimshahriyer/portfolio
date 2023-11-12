import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen p-8 md:p-8 lg:p-16 container mx-auto">
      <div className="hero-section mt-16">
        <p className="greetings uppercase text-center font-bold text-[120px] md:text-[160px] lg:text-[220px] xl:text-[320px]">
          Hello
        </p>
      </div>
      <div className="text-center -mt-20 md:-mt-28 lg:-mt-40 xl:-mt-64">
        <p className="uppercase m-2 text-sm md:text-xl lg:text-2xl xl:text-3xl">
          I am
        </p>
        <p className="uppercase text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-sky-400 font-semibold">
          Fahim Shahriyer
        </p>
      </div>
      <div className="mt-40 xl:mt-56 grid gap-4 grid-cols-1 md:grid-cols-3 pr-4 md:pr-24 pl-4 md:pl-24">
        <div className="col-span-3 md:col-span-2">
          <p className="uppercase text-center md:text-right text-sky-400">
            Software Development Leadership
          </p>
        </div>
        <div className="col-span-3 md:col-span-1 mt-4 md:mt-0">
          <p className="uppercase text-center md:text-left">
            Expert with a passion for excellence and innovation
          </p>
        </div>
      </div>
      <div className="mt-8 grid gap-4 grid-cols-1 md:grid-cols-3 pr-4 md:pr-24 pl-4 md:pl-24">
        <div className="col-span-3 md:col-span-2">
          <p className="text-center md:text-right text-sky-500 text-sm">
            contact
          </p>
        </div>
        <div className="col-span-3 md:col-span-1 mt-4 md:mt-0">
          <p className="text-center md:text-left text-sm mb-2">
            <a href="mailto:shahriyers@gmail.com">shahriyers@gmail.com</a>
          </p>
          <p className="text-center md:text-left text-sm">
            <a
              target="_blank"
              href="https://linkedin.com/in/fahim-shahriyer/"
              className="text-blue-500"
            >
              linkedin.com/in/fahim-shahriyer/
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
