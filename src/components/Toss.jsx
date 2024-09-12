import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import "./Toss.css"; // Import CSS file

function Toss() {
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [Over, setOver] = useState(null);
  const [wickets, setWickets] = useState(null);
  const [click, setClick] = useState(false);

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ team1, team2, Over, wickets });
    if (team1 === "" || team2 === "" || Over === null || wickets === null) {
      setClick(false);
    } else {
      setClick(true);
    }
  };

  return (
    <div className="toss-container">
      <h2>Details</h2>
      {!click || team1 === "" || team2 === "" || Over === null || wickets === null ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Team Batting First"
            value={team1}
            onChange={(e) => setTeam1(e.target.value)}
          />
          <input
            type="text"
            placeholder="Team Batting Second"
            value={team2}
            onChange={(e) => setTeam2(e.target.value)}
          />
          <input
            type="number"
            placeholder="Overs"
            value={Over || ''}
            onChange={(e) => setOver(Number(e.target.value))}
          />
          <input
            type="number"
            placeholder="Wickets"
            value={wickets || ''}
            onChange={(e) => setWickets(Number(e.target.value))}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <h3>
          <p>Batting First : {team1}</p>
          <p>Batting Second : {team2}</p>
          <p>Overs: {Over}</p>
          <p>Wickets: {wickets}</p>
          </h3>
          <Link to="/Cricket-Score/countscore" style={{ textDecoration: 'none' }}><h3>Start First Innings</h3></Link>
        </div>
      )}
    </div>
  );
}

export default Toss;
