import Person from "./person";
import "./App.css";
import Person2 from "./person2";

const App = () => {
  return (
    <div>
      <Person name="Manolo" surname="Garcia" age="100" />
      <Person name="Juan" surname="Ramirez" age="100" />
      <Person name="Maria" surname="Gonzalez" age="100" />

      <Person2 name="Manolo" surname="Garcia" age="100" />
      <Person2 name="Juan" surname="Ramirez" age="100" />
      <Person2 name="Maria" surname="Gonzalez" age="100" />
    </div>
  );
};

export default App;
