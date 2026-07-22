import Sidebar from './Sidebar';
import MainContent from './MainContent';
import { BrowserRouter } from "react-router-dom";

export default function RoutingActivity(){

	return<>
	<BrowserRouter>
      <div className="app-layout">
        <Sidebar />
        <MainContent />
      </div>
    </BrowserRouter>

	</>

}