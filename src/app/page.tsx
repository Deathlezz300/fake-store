import Link from "next/link";


export default function Home() {
  return (
    <section className="w-full">
      <div className="w-full flex justify-center items-center gap-4 py-4">
          <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold">The best Fake store in the world</h2>
          <Link href="/products" className="p-2 px-4 rounded-lg bg-black text-white w-fit">See our products</Link>
          </div>
          <img className="bg-no-repeat object-contain max-h-96" alt="home_image" src=""/>
      </div>

    </section>
  );
}
