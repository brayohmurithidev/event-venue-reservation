import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/venues/countByType");

  const images = [
    "https://d24l7ypac8dw56.cloudfront.net/MenuImages/0-90973-86779.jpg",
    "https://www.spoorti.in/assets/images/party/party-lawn1.jpg",
    "http://www.hamaraevent.com/uploads/blog/0076802001461325091.jpg",
    "https://www.cataloniahotels.com/en/blog/wp-content/uploads/2018/07/Catalonia-Bavaro-Resort_Baja.jpg",
    "http://www.silversprings-hotel.com/images/photos/meetings_events/meetings_ostrich_640x350.jpg",
  ];
  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div className="pListItem" key={i}>
                <img src={img} alt="" className="pListImg" />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>
                    {data[i]?.count} {data[i]?.type}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
