import "./App.css";
import Header from "./myComponents/Header";
import Card from "./myComponents/Card";
function App() {
  return (
    <div>
      <Header
       text="Faiz Mahmood"
       link1 ="ABout"
       link2 ="Contact"
       link3 = "About US"
       link4= "Help"
       btnText = "This funny tag syntax is neither a string nor HTML is called JSX"
       clr = "white"
       bg ="black"

      />
      <Card
        image1="https://images.unsplash.com/photo-1720048169707-a32d6dfca0b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D"
        image2="https://images.unsplash.com/photo-1719937050679-c3a2c9c67b0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D"
        image3="https://images.unsplash.com/photo-1719937050679-c3a2c9c67b0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D"

      />
    </div>
  );
}
export default App;
