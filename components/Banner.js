import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[410px] xl:h-[450px] 2xl:h-[550px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="sm:h-[400px] absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">You won't know yet or go ? perfect</p>

        <button className="text-red-400 bg-white font-bold px-10 py-4 rounded-full shadow-md my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
