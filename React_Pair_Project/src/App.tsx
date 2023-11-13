import styles from "src/styles/App.module.css";
import Footer from "./layout/footer/Footer";
import { Route, Routes } from "react-router-dom";
import TodoList from "./page/List/TodoList";
import TodoRegist from "./page/Regist/TodoRegist";
import TodoInfo from "./page/Info/TodoInfo";
import TodoUpdate from "./page/Update/TodoUpdate";

function App(): JSX.Element {
    return (
        <div className={styles.page}>
            <Routes>
                <Route path="/" element={<TodoList />} />
                <Route path="/regist" element={<TodoRegist />} />
                <Route path="detail/:id" element={<TodoInfo />} />
                <Route path="/detail/update/:id" element={<TodoUpdate />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
