import VenuesList from "./venues";


function Locations() {
    return (
      <div className="p-6 flex justify-center items-center">  
        <div className="w-full max-w-[1600px]">
          <h1 className="text-3xl font-semibold text-center mb-8">Our Locations</h1>
          <VenuesList />
        </div>
      </div>
    );
  }
  
  export default Locations;