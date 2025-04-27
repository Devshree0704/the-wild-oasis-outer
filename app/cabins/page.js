import Cabin from "../_components/Cabin";
import { getCabins } from "../_lib/data-service";

const Page = async () => {
  const cabins = await getCabins();
  return (
    <div>
      <section className="text-4xl mb-8 text-[#FBFFE4]">
        Our Luxurious Cabins
      </section>
      <p className="text-[#B3D8A8]">
        Escape to the tranquility of nature with our cozy, handpicked cabins
        nestled in breathtaking locations. Whether you're looking for a romantic
        getaway, a family retreat, or an adventure in the great outdoors, our
        cabins offer the perfect blend of comfort and rustic charm. Enjoy modern
        amenities, stunning views, and the peaceful serenity of nature right at
        your doorstep. From lakeside cottages to secluded mountain lodges, we
        have the ideal stay for every traveler. Book your dream cabin today and
        experience relaxation like never before!
      </p>

      <section className="flex flex-wrap gap-20 justify-evenly my-12">
        {cabins.map((element) => (
          <Cabin element={element} key={element.id} />
        ))}
      </section>
    </div>
  );
};

export default Page;
