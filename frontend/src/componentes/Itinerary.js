import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import itinerariesAction from "../redux/actions/itinerariesAction";
import { connect } from "react-redux";
import activitiesAction from "../redux/actions/activitiesAction";
import {toast} from 'react-toastify';



function Itinerary(props) {
 
  const [display, setDisplay] = useState(false);
  const handleClick = () => setDisplay(!display);

  function price(price) {
    return Array.from({ length: price });
  }

  useEffect(() => {
    props.activities[0] && console.log(props.activities);
    !props.activities[0] && props.getActivities(props.itinerary._id);
  }, [props.activities]);


  const [liked, setliked] = useState("")
  const [likes, setlikes] = useState("")

  useEffect(() => {
    !props.user && setliked(false)
    if(props.user){
      setliked(props.itinerary.likes.some((id) => id === props.user._id))
    }
  }, [props.user])
  
  if (props.itinerary && liked === "" && likes === "") {
    if(props.user){
      setliked(props.itinerary.likes.some((id) => id === props.user._id))
    }
    setlikes(props.itinerary.likes.length)
  }

  function handleLike() {
    if (localStorage.getItem("token")) {
      setliked(!liked)
      liked ? setlikes(likes - 1) : setlikes(likes + 1)
      props.likes(props.user._id, props.itinerary._id, props.params)
    } else {
      toast.warning("Please sign in to like this itinerary", {
        position: toast.POSITION.TOP_CENTER,
      })
    }
  }

 

  return (    
    <>  
      <div className="d-flex justify-content-center">
        <div className="itinerarioCard">
          <h2>{props.itinerary.itineraryName}</h2>      
          <img
            className="singleCard"
            variant="top"
            src={props.itinerary.userImg}
            alt="."
          />    
          <h4>{props.itinerary.userName}</h4>

          <div className="div">
            <div className="minidiv">
           <p onClick={() => handleLike()}>   
              {liked ? <img className="heartlike" src="../assets/heart.png"></img> : <img className="heartlike" src="../assets/like.png"></img>}
              
              </p> <p>{likes}</p>
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
              <div key={hash._id} className="tag">
                {" "}
                #{hash}
              </div>
            ))}
          </div>

          <div className="viewmoree">
            {display &&
              props.activities[0] &&
              props.activities.map((activity) => {
                if (activity.itinerary._id === props.itinerary._id) {
                  return (
               
                      <div className="activity">
                      <div
                        className="activityPic"
                        style={{ backgroundImage: `url("${activity.image}")` }}
                      >
                        <h5 className="activityName">{activity.title}</h5>
                      </div>
                    </div>
                    
                  );
                }
              })}
          </div>
            <button
              onClick={() => {
                setDisplay(!display);
                props.getActivities(props.itinerary._id);
              }}
              className="viewmore"
            >
              {" "}
              {display ? "View less" : "View more"}
            </button>
        </div>
      </div>
    </>
  );
}

const mapDispatchToProps = {
  likes: itinerariesAction.likes,
  getActivities: activitiesAction.getActivities,
};

// const mapStateToProps = (state) => {
//   return {

//     activities: state.activitiesReducer.activities
//   }
// }

export default connect(null, mapDispatchToProps)(Itinerary);
