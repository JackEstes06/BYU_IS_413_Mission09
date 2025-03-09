import './App.css';
import teamsData from './data/CollegeBasketballTeams.json';

function Welcome() {
  return <h1>NCAA Basketball</h1>;
}

function TeamCard({
  school,
  name,
  city,
  state,
}: {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}) {
  return (
    <div className="team-card">
      <h2>{school}</h2>
      <h3>Mascot: {name}</h3>
      <h3>
        Location: {city}, {state}
      </h3>
      <br />
    </div>
  );
}

function TeamCardList() {
  return (
    <div className="team-card-container">
      {teamsData.teams.map((team) => (
        <TeamCard key={team.tid} {...team} />
      ))}
    </div>
  );
}

function App() {
  return (
    <>
      <Welcome />
      <TeamCardList />
    </>
  );
}

export default App;
