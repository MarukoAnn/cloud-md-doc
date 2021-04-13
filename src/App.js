import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FileSearch from './components/FileSearch'
import FileList from './components/FileList'
import defautFiles from './utils/defaultFiles'

function App() {
  return (
    <div className="App container-fluid">
        <div className="row">
          <div className="col bg-light left-panel">
            <FileSearch 
            title={'myDocment'}
            onFileSearch={(e) => {console.log(e)}}/>
            <FileList files={defautFiles} />
          </div>
        
          <div className="col bg-primary right-panel">
            <div>
              md输入123
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
