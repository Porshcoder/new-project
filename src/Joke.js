import React from 'react';

function Joke(props) {
  return (
    <div>
      <p>{props.question}</p>
      <p>{props.punchline}</p>
    </div>
  )

}

export default Joke