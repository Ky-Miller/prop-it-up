import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    
    <>
      <PersonCard firstName={"Jane"} lastName={"Doe"} age = {45} color = {'Black'}/>
      <PersonCard firstName={"John"} lastName={"Smith"} age = {88} color = {'Brown'}/>
      <PersonCard firstName={"Millard"} lastName={"Fillmore"} age = {50} color = {'Brown'}/>
      <PersonCard firstName={"Maria"} lastName={"Smith"} age = {62} color = {'Brown'}/>
    </>
  );
}

export default App;
