import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import MainLayout from "./layouts/mainLayout";

function App() {
  const isLoggedIn = false; // mock for now

  return (
    <div>
      {isLoggedIn ? (
        <MainLayout>
          <Dashboard />
        </MainLayout>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
