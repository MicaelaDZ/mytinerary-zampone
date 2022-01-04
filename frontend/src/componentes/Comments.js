import itinerariesAction from "../redux/actions/itinerariesAction"
import {useRef, useState} from "react"
import {connect} from "react-redux"
import {BsFillTrashFill, BsFillPencilFill} from "react-icons/bs"
import swal from 'sweetalert'

function Comments(props) {
 
    const [edit, setEdit] = useState(false)
    const [newComment, setNewComment] = useState("") //cambia el estado y se settea el nuevocoment.

    function deleteComment() {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this comment!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          props.deleteComment(
            props.comment._id,
          )
          swal("Your comment has been deleted!", {
            icon: "success",
          })
        } else {
          swal("Your comment is safe!")
        }
      })
    }

    const editComment = useRef()

    function handleEditComment(e) {
        e.preventDefault()
        setEdit(!edit) //e onClick se settea en true (!false) y se llaman a las props - editCom necesita un comentario&msg como parametros.
        props.editComments(
            props.comment._id, //id del comentario y el msj cambiado
            editComment.current.value
        )
        
    }

  
    return(
        <div className="comentario">
          <div>
            {props.comment.user && 
                (
                <div className="contenedorComments">
                  <h6>User {props.comment.user.name} said:</h6>
                  <div className="d-flex">
                    <img className="imgComment" src={props.comment.user.photo} />
                    <p className="comentarioP">{props.comment.message}</p>    
                    </div>
                </div>
                )
            }
            </div>
            <div className="d-flex flex-end">
            
            {props.comment.user && props.comment.user._id === props.user._id &&
                (<div>
                    <p className="edit"  onClick={() => {setEdit(!edit)}}><BsFillPencilFill/></p>
                    {edit && (
                      <div className="formEdit">
                      <form  onSubmit={handleEditComment}>
                        <input
                          className="edityourcomment"
                          placeholder="Edit your comment"
                          type="text"
                          name="editor"
                          ref={editComment}
                          defaultValue={props.comment.message}
                          onChange={() => setNewComment(editComment.current.value)}
                        />
                      
                      <input className="btn-edit"type="submit" value="Send new message" />
                    </form>
                    </div>
                    )}
                 
                </div>
                )
            }
            {
              props.comment.user && props.comment.user._id === props.user._id &&
              (<p className="edit" onClick={deleteComment}><BsFillTrashFill/></p>)
            }
            
            </div>
             
        </div>
    )
}


const mapDispatchToProps = {
    editComments: itinerariesAction.editComments,
    deleteComment: itinerariesAction.deleteComment,
}

export default connect(null, mapDispatchToProps)(Comments)