import Balance from "./components/Balance";
import Header from "./components/Header";
import NewTransaction from "./components/NewTransaction";
import TransactionActivity from "./components/TransactionActivity";
import TransactionsContainer from "./components/TransactionsContainer";
import { GlobalProvider } from "./context/GlobalState";
import "./index.css";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div id="container">
        <Balance />
        <TransactionsContainer />
        <TransactionActivity />
        <NewTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
