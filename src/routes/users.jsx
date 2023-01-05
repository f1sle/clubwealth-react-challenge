import { useEffect, useState, useReducer } from "react";
import UsersTable from '../components/users-table/UsersTable';
import user from '../APIs/user';
import Spinner from "../components/spinner/Spinner";
import Pagination from "../components/pagination/Pagination";

export default function Users() {
  const [state, setState] = useReducer(
    (state, newState) => ({...state, ...newState}), {
      isLoading: true,
      usersData: []
    }
  );

  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageSizeChange = (value) => {
    setPageSize(value);
    setCurrentPage(pageSize * currentPage / value);
  }

  const handlePageChange = (value) => {
    setCurrentPage(value);
  }

  const removeUser = (id) => {
    setState({usersData: state.usersData.filter(el => el.login.uuid !== id)});
  }

  useEffect(() => {
    user.getRandomUserNames().then((res) => setState({usersData: res.data.results, isLoading: false}));
  }, [])
  if (state.isLoading) return <Spinner />;

  return <section className="api-page">
    {state.usersData.length > 0 ? (
      <>
        <div className="sidebar">
          test
        </div>
          <h1>Users</h1>
          <UsersTable data={state.usersData} onUserRemove={removeUser} />
          <Pagination currentPage={currentPage} count={state.usersData.length} pageSize={pageSize} onPageChange={handlePageChange} onPageSizeChange={handlePageSizeChange} />
      </>
    ) : (
      <div className="posCenter">
        <p>No data is found</p>
      </div>
    )}
    </section>
}