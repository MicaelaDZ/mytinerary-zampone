import {useState} from "react"

export default function Itinerary({itinerary}) {
  
//como funciona este boton?
  const [display, setDisplay] = useState(false)
  const handleClick = () => setDisplay(!display)


  function price(price) {
    return Array.from({length: price})
  }

  return (
    <> 
          <div className="d-flex justify-content-center">
          <div className="itinerarioCard">
            <h2>{itinerary.itineraryName}</h2>
            <img className="singleCard" variant="top" src={itinerary.userImg}  alt="." />
            <h4>{itinerary.userName}</h4>
            
            <div className="div">
                <div className="minidiv">
                  <div>Likes: {itinerary.likes}</div>
                </div>                
                <div className="minidiv">
                    <div>Duration: {itinerary.duration}Hs</div>
                </div>
                <div className="minidiv">
                  {price(itinerary.price).map(() => (
                    <div key={itinerary.price}>💵</div>
                  ))}
                </div>
              </div>
              <div className="hashtag">
              {itinerary.hashtags.map((hash) => (
                <div key={hash._id}className="tag"> #{hash}</div>
                ))}
            </div>
           
            <div className="viewmoree">
              {display && (
                <h4>Under Construction...</h4>
              )}
             <button className="viewmore" onClick={handleClick}>
              {" "}
              {display ? "View less" : "View more"}
             </button>
             
            </div>
          </div>
          </div>
        
    </>
  )
}