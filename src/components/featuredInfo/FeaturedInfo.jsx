import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import {useState,useEffect} from 'react'
export default function FeaturedInfo() {
  const [revenue, setRevenueData] = useState([]);

  useEffect(() => {
    fetch("https://8080-acddafabaffddeefcfbeddbecdddbadefcdd.examlyiopb.examly.io/revenue")
      .then((data) => data.json())
      .then((data) => setRevenueData(data))

  }, [])

  const [ordercount, setOCountData] = useState([]);

  useEffect(() => {
    fetch("https://8080-acddafabaffddeefcfbeddbecdddbadefcdd.examlyiopb.examly.io/orderCount")
      .then((data) => data.json())
      .then((data) => setOCountData(data))

  }, [])



  const [usercount, setUCountData] = useState([]);

  useEffect(() => {
    fetch("https://8080-acddafabaffddeefcfbeddbecdddbadefcdd.examlyiopb.examly.io/userCount")
      .then((data) => data.json())
      .then((data) => setUCountData(data))

  }, [])

  const [orderCcount, setOCData] = useState([]);

  useEffect(() => {
    fetch("https://8080-acddafabaffddeefcfbeddbecdddbadefcdd.examlyiopb.examly.io/orderCompleted")
      .then((data) => data.json())
      .then((data) => setOCData(data))

  }, [])


  
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Orders Completed:</span>
        <div className="featuredMoneyContainer"><span className="featuredMoney">{orderCcount}</span></div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Total Revenue Made:</span>
        <div className="featuredMoneyContainer"><span className="featuredMoney">{revenue}</span></div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Total Visits Count:</span>
        <div className="featuredMoneyContainer"><span className="featuredMoney">{usercount}</span></div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Total Sales Made:</span>
        <div className="featuredMoneyContainer"><span className="featuredMoney">{ordercount}</span></div>
      </div>
    </div>
  );
}
