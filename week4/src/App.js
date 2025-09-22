import logo from './logo.svg';
import './App.css';
import { ThemeProvider,ThemeSwitcher } from './components/theme';


function App() {
  return (
    <div className="App">
     <ThemeProvider>
      <ThemeSwitcher/>
     </ThemeProvider>
    </div>
  );
}

export default App;
