
import Nav from '../components/Nav';
import { Outlet } from 'react-router-dom';

const MainLayouts = () => {
    return (
        <div>
            <div className="h-16">
                <Nav></Nav>      
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayouts;