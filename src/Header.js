import './Header.css';

export default function Header () {
    return (
        <div className="header">
            <h1 style={{textAlign: "center"}}>Bingo</h1>
            <p>Bingo is a game of chance in which each player matches numbers printed in different arrangements on screen with the random number generated from pressing the <span id="span">Generate Number</span> button. If the number on the player's screen matches with the number generated, the player will tick that number on their screen.</p>
            <p>In this game, the player will play against a machine. Whoever gets the selected numbers arranged on the screen in a row horizontally, vertically, or diagonally, will win the game.</p>
        </div>
    )
}