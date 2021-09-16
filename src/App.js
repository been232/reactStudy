import Header from "./component/Header";
import DayList from "./component/DayList";
import Day from "./component/Day";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EmptyPage from "./component/EmptyPage";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path="/" component = {DayList}/>
                    <Route path="/day/:day" component = {Day}/>
                    <Route component = {EmptyPage}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
