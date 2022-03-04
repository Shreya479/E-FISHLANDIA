import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";

export default function Home() {
  return (
    <div className="home">      
      <div className="main__title">
          <img src="http://avatars.design/wp-content/uploads/2016/09/28_GIF.gif" alt="hello" />
          <div className="main__greeting">
            <h1>Welcome to FISH LANDIA..</h1>
          </div>
        </div>
      <FeaturedInfo /> 
    </div>
  );
}