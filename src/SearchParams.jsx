import { useState } from "react";
const SearchParams = () => {
//   const location = "Haryana, Punjab";
  const [location, setLocation] = useState("Haryana, Punjab");
  return (
    <div className="search-params">
      <form>
        {/* this rerenderes whole react app whenever any input is passed by user, and actual input is not really taken */}
        <label htmlFor="location">
          Location
          {/* <input id="location" value={location.toUpperCase} placeholder="Location" /> */}
          <input 
          onChange={
            (e)=>setLocation(e.target.value)
          }
          id="location" value={location} placeholder="Location" />
          
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;