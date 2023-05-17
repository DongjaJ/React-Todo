import './App.css';
// import Footer from './components/Footer';
import Header from './components/Header';
import Todos from './components/Todos';

function App() {
	return (
		<div className="App">
			<Header></Header>
			<Todos></Todos>
			{/* <Footer></Footer> */}
		</div>
	);
}

export default App;
