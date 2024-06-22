import React, { useState } from 'react'

function Cricket() {

   let [score, setScore] = useState(0);
   let [wickets,setWickets] = useState(0);
   let[overs,setOvers] = useState(0);
  return (
    <div>

<nav>
    <ul>
        <li>
            <a href="#"><ion-icon name="home-outline"></ion-icon>
            <span class="nav-item">Home</span></a>
        </li>
            <li>
                <a href="#"><ion-icon name="person-outline"></ion-icon>
                <span class="nav-item">Profile</span></a>
            </li>

            <li>
                <a href="#"><ion-icon name="wallet-outline"></ion-icon>
                <span class="nav-item">Wallet</span></a>
            </li>
            <li>
                <a href="#"><ion-icon name="analytics-outline"></ion-icon>
                <span class="nav-item">Analytics</span></a>
            </li>
            <li>
                <a href="#"><ion-icon name="reorder-three-outline"></ion-icon>
                <span class="nav-item">Task</span></a>
            </li>
            <li>
                <a href="#"><ion-icon name="help-outline"></ion-icon>
                <span class="nav-item">Help</span></a>
            </li>
            <li>
                <a href="#" class="logout"><ion-icon name="log-out-outline"></ion-icon>
                <span class="nav-item">Log out</span></a>
            </li>
    </ul>
    </nav>
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    
     <h1>Score:{score}-{wickets}</h1> 
     <button onClick={() =>{
        setScore(score + 1);
     }}>Single</button>

     <button onClick={()=>{
        setScore(score + 4);
     }}>Four</button>

     <button onClick={()=>{
        setScore(score + 6);
     }}>Six</button>

     <button onClick={()=>{
        setWickets(wickets + 1);
     }}>wicket</button>
    
    </div>
  );
}

export default Cricket