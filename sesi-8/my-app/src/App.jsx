import logo from './logo.svg';
import './App.css';
import InlineCSS from './components/InlineCss';
import ObjectVariableCss from './components/ObjectVariableCss';
import ExternalCss from './components/ExternalCss';
import TestStyleInsideExternalCss from './components/TestStyleInsideExternalCss';
import ExternalModuleCss from './components/ExternalModuleCss/';

function App() {
  return (
    <div className="App">
      {/* <InlineCSS/> */}
      {/* <ObjectVariableCss/> */}
      <ExternalCss/>
      <TestStyleInsideExternalCss/>
      <ExternalModuleCss/>
    </div>
  );
}

export default App;
