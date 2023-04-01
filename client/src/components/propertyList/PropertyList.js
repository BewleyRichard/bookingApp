/* This component is responsible for rendering a list of properties with their respective counts.
It uses the useFetch hook to retrieve data from the /hotels/countByType endpoint, 
and an array of images to display alongside the property type and count. 
While the data is being fetched, the component displays the "loading" message. 
Once the data is available, it maps over the array of images to render a pListItem for each one, 
displaying the corresponding property type and count. */

import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/hotels/countByType");

  const images = [
    "https://static.dezeen.com/uploads/2019/03/shinola-hotel-gachot-studios-interiors-detroit-michigan-usa_dezeen_2364_sq-411x411.jpg",
    "http://cdn.home-designing.com/wp-content/uploads/2012/10/Purple-modular-sofa.jpeg",
    "https://www.americanexpress.com/en-us/travel/discover/photos/20765/14979/1200/hacienda_two090-updated.jpg",
    "https://img.freepik.com/premium-photo/villa-tuscany-with-cypress-road-blue-sky-idyllic-seasonal-nature-landscape-vintage-hipster-background_548832-5930.jpg",
    "https://koruarchitects.co.uk/wp-content/uploads/2022/03/final-3-8.jpg",
  ];
  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;