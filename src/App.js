import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faPlus, faFileImport} from '@fortawesome/free-solid-svg-icons'
import FileSearch from './components/FileSearch'
import FileList from './components/FileList'
import defautFiles from './utils/defaultFiles'
import BottomBtn from "./components/BottomBtn";
import TabList from "./components/TabList";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
function App() {
  return (
    <div className="App container-fluid px-0">
        <div className="row no-gutters">
          <div className="col-3 bg-light left-panel">
            <FileSearch 
              title={'myDocment'}
              onFileSearch={(e) => {console.log(e)}}/>
            <FileList 
                files={defautFiles} 
                onFileClick={(id) => {console.log(id)}}
                onFileDelete={(id) => {console.log(id)}}
                onSaveEdit={(id,name) => {console.log(`id：${id},name：${name}`)}}
              />
              <div className="row no-gutters">
	              <div className="col">
		              <BottomBtn
			              text={'新建'}
			              colorClass={'btn-primary'}
			              icon={faPlus}
		               />
	              </div>
	              <div className="col">
		              <BottomBtn
			              text={'导入'}
			              colorClass={'btn-success'}
			              icon={faFileImport}
		              />
	              </div>
              </div>
          </div>
        
          <div className="col-9 right-panel">
	          <TabList
		          files={defautFiles}
		          onTabClick={(e) => {console.log(e);}}
		          onCloseTab={(e) => {console.log('close', e)}}
		          activeId={'1'}
		          unsaveIds={['1','2']}
	          />
            <div>
	            <SimpleMDE
	                value={defautFiles[1].body}
	                onChange={(e) => {console.log(e);}}
	                options={{
	                	minHeight: '475px'
	                }}
	            />
            </div>

          </div>
        </div>
    </div>
  );
}

export default App;
