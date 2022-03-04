import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Form from "./Form";
import Hook from "./Hook";
import LifecycleComponents from "./LifecycleComponents";
import Styling from "./Styling";
import Navigation from "./Navigation";


const Routing = () => {
    return (
        <div>
            <Router>
                <Navigation />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/form" element={<Form />} />
                    <Route path="/hook" element={<Hook />} />
                    <Route path="/lifecycle" element={<LifecycleComponents />} />
                    <Route path="/styling" element={<Styling />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Routing;