import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useRouter } from "next/router";
import { format } from 'date-fns'
import { InfoCard } from "../components/InfoCard";

const Search = ({ searchResults }) =>{
    const router = useRouter();
    console.log(searchResults);
    const {location, startDate, endDate, numberGuest} = router.query;

    const formattedStartDate = format(new Date(startDate), "dd MMM yy")
    const formattedEndDate = format(new Date(endDate), "dd MMM yy")

    const range = `${formattedStartDate} - ${formattedEndDate}`;
    

return(
<div>
<Header placeholder={`${location} | ${range} | ${numberGuest}` }/>

    <main className="flex">
    <section className="flex-grow pt-14 px-6">
        <p className="text-xs">300+ Stays - {range} for {numberGuest} guests</p>

        <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

        <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">
            Cancellation Flexibility</p>
            <p className="button">
            Type of Place</p>
            <p className="button">
            Price</p>
            <p className="button">
            Rooms and Beds</p>
            <p className="button">
            More filters</p>
        </div>
       

    <div className="flex flex-col">
    {searchResults.map(({img, location, title, description, star, price, total}) => (
        <InfoCard 
            key={img}
            img={img}
            location={location}
            title={title}
            description={description}
            star = {star}
            price = {price}
            total={total}
        />
    ))}
    </div>

    </section>
    </main>
    <Footer />
</div>


);
}


export default Search;

export async function getServerSideProps() {
    const searchResults = await fetch("https://api.npoint.io/65e3ba07ff24fd4e9d99").then(res => res.json());

    return{
        props: {
            searchResults,
        }
    }
}
