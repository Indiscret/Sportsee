import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import User from './pages/User/User';

function Router() {
    return (
        <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/user/:id' element={<User/>} />
        </Routes>
    )
}
export default Router