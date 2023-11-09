import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';
// import logo from './logo.svg';
import './App.css';

function App() {
  const position = {lat: 53.54992, lng: 10.00678};

  return (
    <APIProvider apiKey={'API_KEY'}>
      <Map center={position} zoom={10}>
        <Marker position={position} />
      </Map>
    </APIProvider>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// export default App;
