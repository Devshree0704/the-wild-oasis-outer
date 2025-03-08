import Image from "next/image";
import story1 from "@/public/story1.jpg";
import story2 from "@/public/story2.jpg";
import story3 from "@/public/story3.jpg";

const Page = () => {
  return (
    <div className=" pb-7 px-16">
      <section className="text-4xl mb-8 text-[#FBFFE4]">Our Journey</section>
      <div className="flex flex-col gap-10">
        <section className="grid grid-cols-[auto_1fr] gap-x-7 ">
          <div className="w-[250px] h-[200px] relative">
            <Image
              src={story2}
              alt="children image"
              fill
              className="object-cover"
              placeholder="blur"
            />
          </div>
          <p className="text-[#B3D8A8]">
            Our journey began with a vision to create a peaceful retreat where
            travelers could escape the fast-paced world and reconnect with
            nature. What started as a small collection of rustic cabins has
            grown into a welcoming destination for adventurers, families, and
            those simply seeking tranquility. <br />
            Nestled among towering trees and scenic landscapes, our cabins offer
            the perfect blend of comfort and wilderness, allowing guests to
            experience the great outdoors without sacrificing modern
            conveniences.
          </p>
        </section>
        <section className="grid grid-cols-[auto_auto] gap-x-7">
          <p className="text-[#B3D8A8]">
            Over the years, we have carefully expanded and refined our
            accommodations, ensuring that each cabin reflects the beauty of its
            surroundings while maintaining a cozy, home-like atmosphere. We take
            pride in offering thoughtfully designed spaces, from traditional log
            cabins to contemporary woodland retreats. Whether guests are looking
            for a quiet place to unwind or an adventurous escape filled with
            hiking, fishing, and outdoor exploration, our cabins provide the
            ideal setting for making lasting memories. <br />
            As we continue to grow, our commitment remains unchanged—delivering
            an authentic cabin experience where relaxation, adventure, and
            nature come together in perfect harmony. We invite you to be a part
            of our story, to experience the warmth of our cabins, and to create
            your own cherished moments in the heart of nature. Whether it&apos;s
            a weekend getaway or an extended stay, we are here to make your time
            in the great outdoors truly unforgettable.
          </p>
          <div className="w-[250px] h-[250px] relative">
            <Image
              src={story1}
              fill
              alt="cabin-bonfire"
              className="object-cover"
              placeholder="blur"
            />
          </div>
        </section>
        {/* <section className="grid grid-cols-[350px_1fr]">
        {/* <Image src={story3} /> */}
        {/* <p>
        As we continue to grow, our commitment remains unchanged—delivering an
        authentic cabin experience where relaxation, adventure, and nature come
        together in perfect harmony. We invite you to be a part of our story, to
        experience the warmth of our cabins, and to create your own cherished
        moments in the heart of nature. Whether it&apos;s a weekend getaway or
        an extended stay, we are here to make your time in the great outdoors
        truly unforgettable.
      </p> */}
        {/* </section> */}
      </div>
    </div>
  );
};

export default Page;
