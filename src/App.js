import "./App.css";
import Header from "./components/Header";
import PageDescription from "./components/PageDescription";
import UserActivity from "./components/UserActivity";
import Pagination from "./components/Pagination";
import ActivityList from "./components/ActivityList";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useState, useMemo } from "react";

let itemsPerPage = 3;

function App() {
  const buyingData = useSelector((state) => state.userActivity.buyingData);
  const sellingData = useSelector((state) => state.userActivity.sellingData);
  const dataBase = useSelector((state) => state.userActivity.allData);

  const [data, setData] = useState(dataBase);

  const [currentPage, setCurrentPage] = useState(1);

  const currentPageData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage;
    const lastPageIndex = firstPageIndex + itemsPerPage;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [data, currentPage]);

  return (
    <>
      <Header />
      <PageDescription />
      <UserActivity
        buying={buyingData}
        selling={sellingData}
        setData={setData}
        dataBase={dataBase}
        setCurrentPage={setCurrentPage}
      />
      <ActivityList pageData={currentPageData} />
      <Pagination
        currentPage={currentPage}
        totalItemAmount={data.length}
        itemsPerPage={itemsPerPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
}

export default App;
