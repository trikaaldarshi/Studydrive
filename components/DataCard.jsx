import Link from "next/link";
import Image from "next/image";

import img from "public/icons/test.png";

const DataCard = ({ data, route }) => {
  //https://daisyui.com/components/card/
  return (
    <div className="rounded-lg bg-[#1c1c24] hover:bg-[#2c2f32] py-2 shadow-sm shadow-gray-500">
      <Link
        href={{
          pathname: `/${route}/`,
          query: { name: data.link,  number: 1
          },
        }}
      >
        <div className="card cursor-pointer items-center">
          <figure className="w-16 h-16 md:w-20 md:h-20 bg-gray-300 rounded-full overflow-hidden">
            <Image src={img} alt={data.description} />
          </figure>
          <div className="items-center text-center">
            <h2 className="text-base font-medium md:font-semibold font-sans md:font-mono tracking-tighter mt-2 text-[#808191]">
              {data.name}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DataCard;
