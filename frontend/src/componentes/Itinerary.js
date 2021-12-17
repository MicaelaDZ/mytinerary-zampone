import {useState} from "react"
import Modal from 'react-bootstrap/Modal'
import itinerariesAction from '../redux/actions/itinerariesAction'
import {connect} from 'react-redux'

function Itinerary(props){
  
  const [display, setDisplay] = useState(false)
  const handleClick = () => setDisplay(!display)


  function price(price) {
    return Array.from({length: price})
  }
  // const [show, setShow] = useState(false);

  return (
    
    // <Modal
    //   {...props}
    //   size="lg"
    //   aria-labelledby="contained-modal-title-vcenter"
    //   centered
    // >
     
    //   <Modal.Footer>
    //     <Button onClick={props.onHide}>Close</Button>
    //   </Modal.Footer>
    // </Modal>
    <>
          <div className="d-flex justify-content-center">
          <div className="itinerarioCard">
            <h2>{props.itinerary.itineraryName}</h2>
            <img className="singleCard" variant="top" src={props.itinerary.userImg} alt="." />
            {/* onClick={()=> setModalShow(true)} onHide={()=> setModalShow(false)}  */}
            <h4>{props.itinerary.userName}</h4>
            
            <div className="div">
                <div className="minidiv">
             
                  <p onClick={()=> props.likes(props.user._id, props.itinerary._id, props.city)} >❤{props.itinerary.likes.length}</p>
                  
                  </div>                
                <div className="minidiv">
                    <div>Duration: {props.itinerary.duration}Hs</div>
                </div>
                <div className="minidiv">
                  {price(props.itinerary.price).map(() => (
                    <div key={props.itinerary.price}>💵</div>
                  ))}
                </div>
              </div>
              <div className="hashtag">
              {props.itinerary.hashtags.map((hash) => (
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

const mapDispatchToProps = {
  likes: itinerariesAction.likes
  
}

const mapStateToProps = (state) => { 
  return {
   
    token: state.authReducer.token
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary)