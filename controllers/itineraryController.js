const Itinerary = require("../models/Itinerary");
const Comment = require("../models/Comment")

const itineraryController = {
  returnItineraries: (req, res) => {
    Itinerary.find()
      .populate("city")
      .then((response) => res.json({ response }));
  },
  returnItinerary: (req, res) => {
    Itinerary.findOne({ _id: req.params.id }).then((response) => {
      res.json({ response });
    });
  },
  returnItinerariesByCity: (req, res) => {
    Itinerary.find({ city: { _id: req.params.city } })
      .populate("city")
      .then((response) => {
        res.json({ response });
      })
      .catch((err) => console.log(err));
  },
  createItinerary: (req, res) => {
    const {
      itineraryName,
      userName,
      userImg,
      price,
      likes,
      duration,
      hashtags,
      comments,
      city,
    } = req.body;
    const itinerary = new Itinerary({ ...req.body })
      .save()
      .then((response) => res.json({ response: { itinerary } }))
      .catch((err) => console.log(err));
  },

  modifyItinerary: (req, res) => {
    Itinerary.findOneAndUpdate({ _id: req.params.id }, { ...req.body })
      .then((response) => res.json({ response }))
      .catch((err) => console.log(err));
  },
  deleteItinerary: async (req, res) => {
    const id = req.params;
    try {
      await Itinerary.findOneAndDelete({ _id: id });
    } catch (error) {
      console.log(error);
    }
    res.json({ success: true });
  },
  getComments: async (req, res) => {
    try {
      let commentList = await Comment.find({
        itinerary: req.body.itinerary,
      }).populate({ path: "user", select: ["name", "email", "photo"] });
      res.json({ success: true, error: null, response: commentList });
    } catch (e) {
      res.json({ success: false, error: e, response: null });
    }
  },
  getAllComments:async (req, res) => {
    Comment.find()
    .populate({ path: "user", select: ["name", "email", "photo"]})
    .then(response => {res.json({success: true, response: response})})
    
},
postComment: async (req, res) => {
  const itinerary = req.body.itinerary
  const { user, message } = req.body;
  try {
      await new Comment({itinerary, user, message }).save();
      res.json({
          success: true,
          response: "Uploaded comment with message: " + message,
          error: null,
      });
  } catch (e) {
      res.json({ success: false, error: e, response: null });
      console.error(e);
  }
},
editComment: async (req, res) => {
    try {
      let commentEdit = await Comment.findOneAndUpdate({ _id: req.body.comment , user:req.user._id}, {message:req.body.message});
      res.json({
        success: true,
        response:commentEdit
      });
    } catch (e) {
      res.json({ success: false, error: e });
      console.error(e);
    }
  },
  deleteComment: async (req, res) => {
    try {
        let comment = await Comment.findOneAndDelete({ _id: req.params.commentId});
        res.json({
            success: true,
            response: comment,
        });
    } catch (e) {
        res.json({ success: false, error: e });
        console.error(e);
    }
}

};

module.exports = itineraryController;
