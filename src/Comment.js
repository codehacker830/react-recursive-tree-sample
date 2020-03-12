import React from 'react';

class Comment extends React.Component {

  render() {
    let replies = null;
    if(this.props.replies){
      replies = this.props.replies.map((reply) => {
        return (
          <div style={{marginLeft: "50px"}}> 
            <p>author : {reply.author}</p>
            <p>reply: {reply.body}</p>
            <hr/>
            <Comment {...reply}/>
          </div>
        )
      })
    }
    return (
      <div>
        <div>{ replies }</div>
      </div>
    );
  }
}

export default Comment;
