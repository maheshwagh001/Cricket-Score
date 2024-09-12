import React, { useContext, useState, useEffect } from 'react';
import UserContext from '../context/UserContext';
import './SecondInnings.css'; // Import CSS file

function SecondInnings() {
    const { user, target } = useContext(UserContext);
    const [score, setScore] = useState(0);
    const [over, setOver] = useState(0.0);
    const [wicket, setWicket] = useState(0);
    const [thisOver, setThisOver] = useState([]);
    const [noball, setNoball] = useState(false);
    const [isShown, setIsShown] = useState(false);
    const [isDeclear, setIsDeclear] = useState(false);

    useEffect(() => {
      const handleBeforeUnload = (event) => {
        event.preventDefault();
        // Custom logic to handle the refresh
        // Display a confirmation message or perform necessary actions
      };
      window.addEventListener('beforeunload', handleBeforeUnload);
      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }, []);

    function incBalls(num) {
        let nextBall = over + 1;
        if (nextBall % 10 === 6) {
            nextBall += 4;
            setThisOver((thisOver) => [...thisOver, `|--->> ${nextBall / 10}|`]);
        }
        setOver(nextBall);
        setThisOver((thisOver) => [...thisOver, ...num, " , "]);
        setNoball(false);
    }

    function AddZero() {
        setScore(score);
        incBalls("0");
    }

    function AddOne() {
        setScore(score + 1);
        incBalls("1");
    }

    function AddTwo() {
        setScore(score + 2);
        incBalls("2");
    }

    function AddThree() {
        setScore(score + 3);
        incBalls("3");
    }

    function AddFour() {
        setScore(score + 4);
        incBalls("4");
    }

    function AddFive() {
        setScore(score + 5);
        incBalls("5");
    }

    function AddSix() {
        setScore(score + 6);
        incBalls("6");
    }

    function AddWicket() {
        setWicket(wicket + 1);
        incBalls("W");
    }

    function AddWide() {
        setScore(score + 1);
        setThisOver([...thisOver, "wd"]);
    }

    function AddNoball() {
        setNoball(true);
        setScore(score + 1);
        setThisOver([...thisOver, "Nb"]);
    }

    function ShowScoreCard() {
        setIsShown(!isShown);
    }

    if (target.score === score && (user.Over * 6 - (Math.floor(over / 10) * 6 + over % 10) === 0 || user.wickets === wicket)) {
        return (
            <div className="second-innings-container">
                <h2>Match Tied !!!</h2>
            </div>
        );
    }

    if (target.score + 1 <= score && user.Over * 6 - (Math.floor(over / 10) * 6 + over % 10) >= 0 && user.wickets > wicket) {
        return (
            <div className="second-innings-container">
               <h2> Hurray Team {user.team2} won...</h2>
               <h2>By {user.wickets - wicket} Wickets</h2>
            </div>
        );
    } else if (target.score >= score && (user.Over * 6 - (Math.floor(over / 10) * 6 + over % 10) === 0 || user.wickets === wicket || isDeclear)) {
        return (
            <div className="second-innings-container">
                <h2>Hurray Team {user.team1} Won...</h2> <br />
                <h2>By {target.score - score} Runs</h2>

            </div>
        );
    } else {
        return (
            <div className="second-innings-container">
                <div>
                <h4>
                Team Batting : {user.team2} <br />
                Overs : {user.Over} <br/>
                Wickets : {user.wickets}
                </h4>
                <h3>
                Required {target.score + 1 - score} runs of {user.Over * 6 - (Math.floor(over / 10) * 6 + over % 10)} balls
                </h3>
                   
                </div>
                <div className="stats-container">
                    <div className="stats">
                        <h2>Score</h2>
                        <h1 className="score">{score}</h1>
                    </div>
                    <div className="stats2">
                        <div>
                            <h2>Over</h2>
                            <h1 className="overs">{over / 10}</h1>
                        </div>
                        <div>
                            <h2>Wicket</h2>
                            <h1 className="wickets">{wicket}</h1>
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <button onClick={AddOne}>1</button>
                    <button onClick={AddTwo}>2</button>
                    <button onClick={AddThree}>3</button>
                    <button onClick={AddFour}>4</button>
                    <button onClick={AddFive}>5</button>
                    <button onClick={AddSix}>6</button>
                    <button onClick={AddZero}>Dot</button>
                    <button onClick={AddWicket} disabled={noball} className="wicket">Wicket</button>
                    <button onClick={AddWide}>Wide</button>
                    <button onClick={AddNoball}>No Ball</button>
                </div>
                <div className="show-scorecard">
                    <button onClick={ShowScoreCard}>
                        <h3>Score Card</h3>
                        {isShown && (
                            <div className="over-info">
                                <h4>{thisOver}</h4>
                            </div>
                        )}
                    </button>
                </div>
                <div className='declear-innings'>
            <button onClick={() => setIsDeclear(true)}>Declare Innings</button>
            </div>
            </div>
        );
    }
}

export default SecondInnings;
