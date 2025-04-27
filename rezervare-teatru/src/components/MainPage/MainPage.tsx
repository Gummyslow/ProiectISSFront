import React, {useState} from "react";
import "../Seats/SeatConfig.tsx";
import "../Seats/SeatConfig.css";
// @ts-ignore
import SeatConfig from "../Seats/SeatConfig.tsx";
// @ts-ignore
import AdminLogin from "../Forms/AdminModeLogin/AdminLogin.tsx";
import { FaEdit } from 'react-icons/fa';



function MainPage() {

    const [showAdminForm, setShowForm] = useState(false);
   return (
       <div className={"mainPage"}>
           <button
               onClick={() => setShowForm(prev => !prev)}
               className="icon-button"
               aria-label="Editează"
           >
               {/*{showAdminForm ? 'Ascunde formularul' : 'Arată formularul'}*/}
               <FaEdit size={25}/>
           </button>
           {showAdminForm && <AdminLogin/>}
          <div className={"playPresentation"}>
             <img className="playImg" src={"/img/romeoAndJuliet.png"} alt={"romeoAndJuliet"} width="650px" height={"720px"} />
             <h1 className={"playTitle"}>ROMEO SI JULIETA</h1>
             <p className={"playDescription"}>O poveste de dragoste cutremuratoare, interpretata de una dintre cele mai
             faimoase trupe de teatru ale Europei. O reprezentatie de colectie, menita sa tina publicul cu sufletul la gura!</p>
          </div>

          <div className={"stageConfiguration"}>
             {/* Aici ai integrat componenta SeatConfig */}
             {/*<line className={"horizontalDivider"}/>*/}
              <div className={"dateStructure"}>
                  <p className={"pinkBodyText"}>Data:</p>
                  <p className={"whiteBodyText"}>24 Martie 2025</p>
              </div>
              <div className={"hourStructure"}>
                  <p className={"pinkBodyText"}>Ora:</p>
                  <p className={"whiteBodyText"}>19:00</p>
              </div>
              <hr className={"horizontalDivider"}/>
              <SeatConfig/>
              <p className={"lettersIndexing"}>A B C D E F G H I J K L M N</p>
              <p className={"numbersIndexing"}>
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                  <span>6</span>
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                  <span>10</span>
              </p>
              {/*ca sa cream un bullet de tip cerc*/}
              <div className={"seatColorDescription1"}>
                  <div className={"pinkbullet"}></div>
                  <p style={{color:"#E1114B", font:"Raleway"}}>Selectat</p>
              </div>
              <div className={"seatColorDescription2"}>
                  <div className={"greybullet"}></div>
                  <p style={{color:"#494444", font:"Raleway"}}>Rezervat</p>
              </div>
              <div className={"seatColorDescription3"}>
                  <div className={"whitebullet"}></div>
                  <p style={{color:"aliceblue", font:"Raleway"}}>Disponibil</p>
              </div>
             <button className={"btnMakeReservation"}>Rezerva</button>
          </div>
       </div>
   );
}

export default MainPage;
