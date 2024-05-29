import Balance from "./components/Balance";
import Header from "./components/Header";
import NewTransaction from "./components/NewTransaction";
import TransactionActivity from "./components/TransactionActivity";
import TransactionsContainer from "./components/TransactionsContainer";
import "./index.css";

function App() {
  return (
    <main>
      <Header />
      <div id="container">
        <Balance />
        <TransactionsContainer />
        <TransactionActivity />
        <NewTransaction />
      </div>
    </main>
  );
}

export default App;
