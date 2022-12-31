import './App.css';
import Card from "./components/Card";

function App() {
  return (
      <>
        <Card src={"https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png"}>
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </Card>
        <Card>
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
                With supporting text below as a natural lead-in to additional content.
            </p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </Card>
      </>
  )
}

export default App;
