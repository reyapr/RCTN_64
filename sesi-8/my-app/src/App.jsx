import logo from './logo.svg';
import './App.css';
import InlineCSS from './components/InlineCss';
import ObjectVariableCss from './components/ObjectVariableCss';
import ExternalCss from './components/ExternalCss';
import TestStyleInsideExternalCss from './components/TestStyleInsideExternalCss';
import ExternalModuleCss from './components/ExternalModuleCss/';
import StyledComponent from './components/StyledComponent';
import TestBootStrap from './components/TestBootStrap';
import TestMUI from './components/TestMUI';

function App() {
  return (
    <div className="App">
      {/* <InlineCSS/> */}
      {/* <ObjectVariableCss/> */}
      
      <ExternalCss/>
      <TestStyleInsideExternalCss/>
      <ExternalModuleCss/>
      
      <StyledComponent/>
      <br />
      <br />
      <TestBootStrap/>
      <br />
      <TestMUI/>
    </div>
  );
}

export default App;
