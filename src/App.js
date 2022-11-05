import Intro from './components/Intro';
import Looker from './components/Looker';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <div className="container mx-auto py-20 md:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Intro />
          <Looker />
        </div>
      </div>
    </>
  );
}

export default App;
