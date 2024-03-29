import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaLongArrowAltRight } from "react-icons/fa";
export default function Home() {
  const history = useHistory();
  return (
    <div style={{backgroundColor: "#E9ECEF", width: "100%", height: "100vh" }}>
      <div style={{display: "flex", boxShadow: "3px 3px 20px 3px gray", backgroundColor: "white", maxWidth: "90%", height: "90vh", margin: "auto" }}>
      <div>
    </div>
        <div style={{width: "50%", paddingLeft: "50px", paddingTop: "180px", fontSize: "60px", fontFamily: "serif" }}>
          Documents that <br />
          get results.
          <div><p style={{ fontSize: "12px", }}>Qwilr helps teams create better business documents: easy,<p style={{marginTop:"-6px"}}><br></br> fast and beautiful.</p></p></div>
          <div>
          <FontAwesomeIcon icon="fa-kit fa-my-icon" />
            <button style={{ display:"flex",alignItems:"center", border: "none", background: "#00BA47",marginTop:"35px", padding: "16px", color: "white", borderRadius: "4px", }} onClick={()=> history.push("/Login")}>
              GET STARTED <FaLongArrowAltRight style={{ display:"flex",alignItems:"center", marginLeft:"8px"}} />
            </button>
          </div>
        </div>
        <div style={{position: "relative",width: "600px",height: "auto",overflow: "hidden"}} ><img style={{position: "absolute", top: "100px",marginLeft:"90px",maxWidth:"100%"}} src={require('../assets/Frame 1171280219.png')} alt="" /></div>
      </div>
    </div>
  );
}