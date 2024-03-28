import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Home() {
  const history = useHistory();
  return (
    <div style={{ backgroundColor: "#e9ecef", width: "100%", height: "100vh" }}>
      <div style={{ display: "flex", boxShadow: "3px 3px 20px 3px gray", backgroundColor: "white", maxWidth: "90%", height: "90vh", margin: "auto" }}>
      <div>  
    </div>
        <div style={{ width: "50%", paddingLeft: "50px", paddingTop: "180px", fontSize: "60px", fontFamily: "serif" }}>
          Documents that <br />
          get results.
          <div><p style={{ fontSize: "12px" }}>Qwilr helps teams create better business documents: easy, fast and beautiful.</p></div>
          <div>
          <FontAwesomeIcon icon="fa-kit fa-my-icon" />
            <button style={{ display:"flex",alignItems:"center", border: "none", background: "#00ba47",marginTop:"35px", padding: "16px", color: "white", borderRadius: "4px", }} onClick={()=> history.push("/demo")}>
              GET STARTED <FaLongArrowAltRight style={{ display:"flex",alignItems:"center", marginLeft:"8px"}} />

            </button>
          </div>
        </div>
        <div style={{display:"100%",marginTop:"90px"}}><img src={require('../assets/logo.png')}alt="" /></div>
      </div>
    </div>
  );
}