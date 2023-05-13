import { type NextPage } from "next";
import PredictionImage from "~/components/PredictionImage";
import { createUser } from "~/lib/mongo/auth";

const Home: NextPage = () => {

  return (
    <div>
      <PredictionImage
        modelURL="https://teachablemachine.withgoogle.com/models/XUGeVRxO5/"
      />

      <button onClick={() => {
        void createUser("bhangalepiyush@gmail.com", "test123&we4r");
      }}>
        Test
      </button>
    </div>
  );
};

export default Home;
