import {RouterProvider} from "react-router-dom";
import "./style.scss";
import router from "./router";
import AuthProvider from "./hooks/useAuth";

function App() {
    return (
        <div className="app">
            <div className="container">
                <AuthProvider>
                    <RouterProvider router={router}/>
                </AuthProvider>
            </div>
        </div>
    );
}

export default App;
