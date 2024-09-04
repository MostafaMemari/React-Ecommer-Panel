import TopBar from '../layouts/TopBar';
import Dashboard from './dashboard/Dashboard';

function Content() {
  return (
    <div className="content ">
      <TopBar />
      <div className="grid grid-cols-12 gap-6">
        <Dashboard />
      </div>
    </div>
  );
}

export default Content;
