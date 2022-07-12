import useFetch from "../../hooks/useFetch";
import "./featured.css";
import img1 from "../../assets/images/nairobi.jpg";
import img2 from "../../assets/images/mombasa.jpg";
import img3 from "../../assets/images/kiambu.jpg";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/venues/countByCity?cities=nairobi,mombasa,nakuru,kutus"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img src={img1} alt="" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Nairobi</h1>
              <h2>
                <span>{data[0]}</span> properties
              </h2>
            </div>
          </div>

          <div className="featuredItem">
            <img src={img2} alt="" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Mombasa</h1>
              <h2>
                <span>{data[1]}</span> properties
              </h2>
            </div>
          </div>
          <div className="featuredItem">
            <img src={img3} alt="" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Nakuru</h1>
              <h2>
                <span>{data[2]}</span> properties
              </h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
