import {Button, Collapse} from "react-bootstrap"
import {useState} from "react"

export default function Itinerary(props) {
  const [open, setOpen] = useState(false)

   console.log(props)

  function precio(price) {
    return Array.from({length: price})
  }

  return (
    <>
      {props.itineraries.length > 0 &&
        props.itineraries.map((itinerary, index) => (
          <div className="d-flex justify-content-center">
          <div key={index} className="itinerarioCard">
            <h2>{itinerary.itineraryName}</h2>
            <img className="singleCard" variant="top" src={itinerary.userImg} />
            <h4>{itinerary.userName}</h4>
            
            <div className="div">
                <div className="minidiv">
                  <div>Likes: {itinerary.likes}</div>
                </div>                
                <div className="minidiv">
                    <div>Duration: {itinerary.duration}Hs</div>
                </div>
                <div className="minidiv">
                  {precio(itinerary.price).map(() => (
                    <div>💵</div>
                  ))}
                </div>
              </div>
              <div className="hashtag">
              {itinerary.hashtags.map((hash) => (
                <div className="tag"> #{hash}</div>
                ))}
            </div>
           
            <div className="">
              <Button
                className="btn-warning p-1 fs-6 fw-normal m-1"
                onClick={() => setOpen(!open)}
                aria-controls="example-fade-text"
                aria-expanded={open}>
                {!open ? "View more" : "View less"}
              </Button>
              <Collapse in={open}>
                <div id="example-collapse-text">
                 Under construction...
                </div>
              </Collapse>
             
            </div>
          </div>
          </div>
        ))}
    </>
  )
}