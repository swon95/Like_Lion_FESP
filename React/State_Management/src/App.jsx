import { Provider } from "jotai";
import "./App.css";
import Page from "./components/Page";

function App() {
    return (
        <Provider>
            <Page />
        </Provider>
    );
}

export default App;
