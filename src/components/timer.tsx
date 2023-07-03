import { useEffect, useState } from "react";
import { timeToRequest } from "../utils/cache";
import { Link } from "react-router-dom";

export function Timer(){
    const targetDate = new Date(timeToRequest());

  const calculateTimeRemaining = () => {
    const currentDate = new Date();
    const timeRemaining = targetDate.getTime() - currentDate.getTime();

    if (timeRemaining <= 0) {
      return 0;
    }

    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return `${minutes}m ${seconds}s`;
  };

  const [countdown, setCountdown] = useState(calculateTimeRemaining());
  const [timerRunning,setTimerRunning] = useState<boolean>(true);
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  useEffect(()=>{
    if(!countdown){
        setTimerRunning(false)
    }
  },[countdown,calculateTimeRemaining])
    return (
        <Link to={"/"} className="flex justify-center">
            <button disabled={timerRunning} className="mt-6 hover:shadow-xl duration-300 bg-white p-2 rounded-lg disabled:bg-gray-900/50 disabled:text-gray-800/90">
                {timerRunning && "Wait " + countdown
                }
                {!timerRunning && 
                "Make Another request"}
            </button>
        </Link>
    )
}