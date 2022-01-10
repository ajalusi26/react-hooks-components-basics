import React from "react";

const Article = () => <div>Dear Reader: Bjarne Stroustrup has the perfect lecture oration.</div>

const Comment = () => <div>Naturally, I agree with this article.</div>;


function App(){
  return (
    <div>
      <Article />
      <Comment />
    </div>
  )
}

export default App;
