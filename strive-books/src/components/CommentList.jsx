import { ListGroup } from 'react-bootstrap'
import SingleComment from './SingleComment'

const CommentList = ({ displayComments }) => (
    <ListGroup style={{ color: 'grey' }}>
        {
            displayComments.map(comment => (
                <SingleComment comment={comment} key={comment._id} />
            ))
        }
    </ListGroup>
)

export default CommentList
