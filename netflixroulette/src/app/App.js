import './App.css';
import MovieList from '../components/movielist/movielist'
import Navigation from '../components/navigation/navigation'
import MovieSearch from '../components/search/search'
import AddMovie from '../components/addmovie/addmovie'
import Header from '../components/header/header'
import ErrorBoundary from '../components/errorboundary/errorboundary'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ErrorBoundary>
        <AddMovie></AddMovie>
        <MovieSearch></MovieSearch>
        <Navigation></Navigation>
        <MovieList></MovieList>
      </ErrorBoundary>
    </div>
  );
}

export default App;
