import { useState } from "react";

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

function Homepage() {
  const speakers = ["Alex", "John", "Andrew"];

  const [likes, setLikes] = useState(0);

  function handeClick() {
    setLikes(likes + 1);
  }
  return (
    <>
      <Header title="hello world!" />
      <ul>
        {speakers.map((speaker) => (
          <li key={speaker}>{speaker}</li>
        ))}
      </ul>
      <button onClick={handeClick}>Like {likes}</button>
    </>
  );
}

function App() {
  return <Homepage />;
}

export default App;
