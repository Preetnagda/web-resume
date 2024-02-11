import './App.css';
import { UserContextProvider } from './context/UserContext.js';
import Resume  from "./pages/Resume/Resume.js";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Resume></Resume>
      </UserContextProvider>
    </div>
  );
}

export default App;
