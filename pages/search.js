import { useRouter } from "next/dist/client/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { parseISO } from "date-fns";
import InfoCard from "../components/InfoCard";
import Map from "../components/Mapbox";

const search = ({ searchResults }) => {
  const router = useRouter();

  const { location, startDate, endDate, numOfGuests } = router.query;

  const formattedStartDate = new Date(parseISO(startDate, "dd/MMM/yy"));
  const formattedEndtDate = new Date(parseISO(endDate, "dd/MMM/yy"));

  const rangeStart = formattedStartDate;
  const rangeEnd = formattedEndtDate;
  const start = rangeStart.toString().slice(0, 15);
  const departure = rangeEnd.toString().slice(0, 15);

  return (
    <div>
      <Header
        placeholder={`${location} from ${start} to ${departure} ${numOfGuests} guests`}
      />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays {start} - {departure} for {numOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults?.map(
              ({ img, title, description, location, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  title={title}
                  description={description}
                  location={location}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[600px] xl:max-h-[2100px] overflow-y-hidden overflow-x-hidden">
          <Map searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
