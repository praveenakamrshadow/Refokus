import NavBar from './components/NavBar';
import Stripes from './components/Stripes';
import Work from './components/Work';
function App() {
    return (
        <h1 className='w-full h-screen bg-zinc-900 font-["Satoshi Variable"]  text-white'>
            <NavBar />
            <Work />
            <Stripes />
        </h1>
    );
}

export default App;
