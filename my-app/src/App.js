import logo from './logo.svg';
import './App.css';
import Clock from "./components/state";
// import Form from './components/event';
import Page from './components/event';
import Blog from './components/ListAndKeys';
import NameForm from './components/Form';
import Reservation from './components/MultipleInput';
// import Example from './components/Hooks';
import useFriendStatus from './components/Hooks';
import BasicExample from './components/ReactRouter';
function App() {
  const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <BasicExample></BasicExample>
      <Clock></Clock>
      {/* <Form></Form> */}
      {/* <Toggle></Toggle> */}
      <Page></Page>
      <Blog posts={posts}></Blog>
      <NameForm></NameForm>
      <Reservation></Reservation>
      {/* <Example></Example> */}
      <useFriendStatus></useFriendStatus>
      </header>
    </div>
  );
}


export default App;
