import { Button, Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Itinerary(props) {
    
    const [open, setOpen] = useState(false);

  function precio (price) {    
    return Array.from({ length: price });
  }
 
    return(
        <>
    <div className="itinerarioCard">
          <h2>{props.itinerary.itineraryName}</h2>
          <img className="singleCard" variant="top" src="#" ></img>
          <h3>{props.itinerary.userName}</h3>
          <div>
            <span></span>
            <span>{props.itinerary.duration}</span>
            {precio(props.itinerary.price).map(() => (
              <span>💵</span>
            ))}
          </div>
          <div>{props.itinerary.hashtags.map((hash)=> (
            <div className="tag"> #{hash}</div>))}
          <Button
            className="btn-warning p-1 fs-6 fw-normal m-1"
            onClick={() => setOpen(!open)}
            aria-controls="example-fade-text"
            aria-expanded={open}
          >
            {!open ? "View more" : "View less"}
          </Button>
          <Collapse in={open}>
            <div id="example-collapse-text">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </div>
          </Collapse>
          <div className="d-flex">
            <Link to="/cities">
              <Button className="btn-warning p-1 fs-6 fw-normal m-3">
                Back to cities
              </Button>
            </Link>
            <Link to="/">
              <Button className="btn-warning p-1 fs-6 fw-normal m-3">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
      </>
      )

}