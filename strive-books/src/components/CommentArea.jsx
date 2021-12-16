import { Component } from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

class CommentArea extends Component {
  state = {
    comments: [],
  };
  componentDidMount = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGYxYWFhY2FhMjAwMTU1MmExN2UiLCJpYXQiOjE2Mzk2NTk1NzAsImV4cCI6MTY0MDg2OTE3MH0.UjB_Dd7p-bnuOhiDdn1CW5UH8EGbn-dyKsx4NEpVzcE",
          },
        }
      );

      if (response.ok) {
        let comment = await response.json();
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <AddComment asin={this.props.asin} />
        <CommentList displayComments={this.state.comments} />
      </div>
    );
  }
}

export default CommentArea;
