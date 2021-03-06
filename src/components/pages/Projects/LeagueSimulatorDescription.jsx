import "./Style.css";
import Project from "./ProjectSample";
import { LeagueSimulatorFirst, LeagueSimulatorSecond, LeagueSimulatorThird, LeagueSimulatorFourth } from '../../../assets';

const images = [
  LeagueSimulatorFirst, 
  LeagueSimulatorSecond, 
  LeagueSimulatorThird, 
  LeagueSimulatorFourth
];

const LeagueSimDes = () => {
    const leaguesim = {
        title: "Soccer League Simulator",
        date: "Dec 2021",
        skills: "Python",
        img: images,
        link: {
            availability: false,
        }, 
        github: {
            availability: true,
            url: "https://github.com/skim1601/LeagueSimulator",
        }, 
    }

    return (
        <Project project={leaguesim}>
            A python program that simulates the entire season (total 38 games per team) 
            of Top 4 European Soccer (Football) Leagues. This project started of
            from my predictions when I was watching Premier League. I built the 
            league as an object, allowing the user to add and remove teams and change 
            the rating of each team. This means that any soccer league can be simulated through 
            this program, of course with a little manipulation.
            Update: 22/23 leagues are now available. 
        </Project>
    );
}

export default LeagueSimDes;