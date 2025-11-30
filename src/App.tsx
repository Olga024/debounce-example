import './App.css'
import { SearchInput } from './SearchInput'

const App = () => {
  const handleSearchChange = (value: string) => {
    console.log(`Запрос: ${value}`);
  };

  return (
    <div className="app-container">
      <h1>Поисковая строка с задержкой ввода</h1>
      <SearchInput onChange={handleSearchChange} />
    </div>
  );
};

export default App;
