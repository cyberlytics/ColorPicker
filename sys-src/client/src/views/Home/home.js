import { Button } from "../../components/Button"
import "./home.css"
import SliderContainer from "../../components/SliderContainer/index.jsx"

function Home() {
    return (
      <div>
        <h2 className="home">Home</h2>

        <Button title="Test Button" colors={["123","234","567"]} />

      </div>
    );
  }
  export default Home;

  