import Expenses from "./components/Expenses";

function App() {
  const data = [
    { id: 1, title: 'Car Insurance', amount: 294.67, date: new Date(2022, 3, 30)},
    { id: 2, title: 'Car Insurance', amount: 67, date: new Date(2022, 3, 30)},
    { id: 3, title: 'Car Insurance', amount: 294.67, date: new Date(2022, 3, 30)},
  ]

  return (
    <div>      
      <h2>Let's get started!</h2>
      <Expenses expenses={data}/>
    </div>
  );
}

export default App;
