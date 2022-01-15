import AppRouter from "./app-router/AppRouter";
import "./App.css";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./contexts/AuthContext";
import BlogContextProvider from "./contexts/BlogContext";

function App() {
  return (
    <div>
      <Navbar />
    </div>

    // <AuthContextProvider>
    //   <BlogContextProvider>
    //     <AppRouter />
    //   </BlogContextProvider>
    // </AuthContextProvider>
  );
}

export default App;
