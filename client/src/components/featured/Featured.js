/* This component fetches data about the number of properties in three cities 
using the useFetch hook. The data is displayed in three div elements with images, 
titles, and the number of properties. If the data is still loading, a loading message 
is displayed. Otherwise, the div elements with the data are rendered. */

import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch("hotels/countByCity?cities=berlin,ghent,london");

  

  return (
    <div className="featured">
      {loading ? (
        "loading please wait"
         ) : (
         <>
         <div className="featuredItem">
        <img
          src="https://velvetescape.com/wp-content/uploads/2015/06/IMG_4081-1280x920.jpeg"
          alt="Berlin"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Berlin</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://www.telegraph.co.uk/content/dam/Travel/2019/October/iStock-935366046.jpg"
          alt="Ghent"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Ghent</h1>
          <h2>{data[1]} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://www.travelandleisure.com/thmb/9PKMMxIL9W7tzjJiyIrFJY5rwNI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/london-uk-townhomes-lead-LONDONTG0521-81fb4f991a1e4d0d9153d89444838094.jpg"
          alt="London"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>London</h1>
          <h2>{data[2]} properties</h2>
        </div>
      </div>
      </>
      )}
    </div>
  );
};

export default Featured;