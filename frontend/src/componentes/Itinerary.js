import { useState, useEffect, useRef } from "react";
import itinerariesAction from "../redux/actions/itinerariesAction";
import { connect } from "react-redux";
import activitiesAction from "../redux/actions/activitiesAction";
import { toast } from "react-toastify";
import Comments from "./Comments";

function Itinerary(props) {
  const [display, setDisplay] = useState(false);
 

  function price(price) {
    return Array.from({ length: price });
  }

  useEffect(() => {
    props.activities[0] && 
    !props.activities[0] && props.getActivities(props.itinerary._id);
  }, [props.activities]);

   const comment = useRef();

  function handleComment(e) {
    e.preventDefault();
    props.postComments(
      props.itinerary._id,
      props.user._id,
      comment.current.value
    );
    comment.current.value = "";
  }

  const [liked, setliked] = useState("");//si esta likeado o no
  const [likes, setlikes] = useState(""); 

  if (props.itinerary && liked === "" && likes === "") {
    if (props.user) {
      setliked(props.itinerary.likes.some((id) => id === props.user._id)); // se establece el corazon si hay un like con id de user y de itinerary que coincidan y entonces se suman likes
      
    }
    setlikes(props.itinerary.likes.length);
  }
 

  function handleLike() {
    if (localStorage.getItem("token")) {
       setliked(!liked); // sin esta linea  no seactualiza setliked, el estado del corazon
      liked ? setlikes(likes - 1) : setlikes(likes + 1);
      props.likes(props.user._id, props.itinerary._id);
    } else {
      toast.warning("Please sign in to like this itinerary", {
        position: toast.POSITION.TOP_CENTER,
      });
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
                {liked ? (
                  <img className="heartlike" src="../assets/heart.png"></img>
                ) : (
                  <img className="heartlike" src="../assets/like.png"></img>
                )}
              </p>{" "}
              <p>{likes}</p>
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
          <div>
            <div >
              {display &&
                props.comments &&
                props.comments.map((comment) => {
                  if (comment.itinerary === props.itinerary._id) {
                    return (
                      
                      <Comments
                        comment={comment}
                        itinerary={props.itinerary._id}
                        user={props.user}
                      />
                    );
                  }
                })}
              {display && (
                <form onSubmit={handleComment}>
                  <input
                    ref={comment}
                    type="textarea"
                    className="comentar"
                    placeholder="Leave your message here"
                  />
                  <div className="submit">
                    <input
                      className="btn-submit"
                      type="submit"
                      value="Comment"
                    />
                  </div>
                </form>
              )}
            </div>
          </div>
          <button
            onClick={() => {
              setDisplay(!display);
              props.getActivities(props.itinerary._id);
              props.getAllComments();

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
  getAllComments: itinerariesAction.getAllComments,
  postComments: itinerariesAction.postComments
};

const mapStateToProps = (state) => {
  return {
    comments: state.itinerariesReducer.comments,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary);
