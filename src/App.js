import "./App.css";
import Header from "./components/Header";
import PageDescription from "./components/PageDescription";
import UserActivity from "./components/UserActivity";
import Pagination from "./components/Pagination";
import ActivityList from "./components/ActivityList";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <PageDescription />
        <UserActivity />
        <ActivityList />
        <Pagination />
      </Provider>
    </>
  );
}

export default App;
