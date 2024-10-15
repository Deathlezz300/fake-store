import { categories } from "@/constants";
import Link from "next/link";

export default function Home() {
  return (
    <section className="w-full">
      <div className="w-full flex justify-center items-center gap-4 py-4">
        <div className="flex flex-col gap-2 py-28">
          <h2 className="text-3xl font-bold">
            The best Fake store in the world
          </h2>
          <Link
            href="/products"
            className="p-2 px-4 rounded-lg bg-black text-white w-fit"
          >
            See our products
          </Link>
        </div>
      </div>
      <div className="w-full bg-slate-100 flex flex-col py-10 gap-3 justify-center items-center">
        <h2 className="text-xl font-bold text-black" >Our categories</h2>
        <div className="flex gap-3 flex-wrap">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/products?category=${category}`}
            className="capitalize p-6 rounded-lg text-white text-sm bg-black hover:scale-105 cursor-pointer"
          >
            {category}
          </Link>
        ))}
        </div>
      </div>
    </section>
  );
}
