import '../App.css'
import CalenderImage from "../assets/weeklycalender.png"

function Calender() {

  return (
      <div className="w-[90%] h-[30%] bg-gray-50 rounded-lg shadow-lg flex items-center justify-center mt-6 border-gray border-2">
        <img src={CalenderImage} alt="" />
      </div>
  )
}

export default Calender
