import "./App.css";
import Header from "./components/Header";
import PageDescription from "./components/PageDescription";
import UserActivity from "./components/UserActivity";
import Pagination from "./components/Pagination";
import ActivityList from "./components/ActivityList";

import { useSelector } from "react-redux/es/hooks/useSelector";
import { useEffect, useState } from "react";

function App() {
  const allData = useSelector((state) => state.userActivity.userData);
  const buyingData = useSelector((state) => state.userActivity.buyingData);
  const sellingData = useSelector((state) => state.userActivity.sellingData);

  const [userData, setUserData] = useState(allData);

  const [page, setPage] = useState(0);
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    setPageData(userData[page]);
  }, [userData, page]);

  const handlePage = (index) => {
    setPage(index);
  };

  const previousPage = () => {
    setPage((oldPage) => {
      let previousPage = oldPage - 1;
      if (previousPage < 0) {
        previousPage = userData.length - 1;
      }
      return previousPage;
    });
  };
  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > userData.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };

  return (
    <>
      <Header />
      <PageDescription />
      <UserActivity
        buying={buyingData}
        selling={sellingData}
        pageData={pageData}
        onSetData={setUserData}
        userData={allData}
      />
      <ActivityList pageData={pageData} />
      <Pagination
        previousPage={previousPage}
        userData={userData}
        page={page}
        handlePage={handlePage}
        nextPage={nextPage}
      />
    </>
  );
}

export default App;
