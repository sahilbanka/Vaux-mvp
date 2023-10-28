import { useRoutes } from 'react-router';
import { useState } from 'react';
import './App.css';
import Dashboard from 'components/Dashboard';
import Login from 'components/Login';
import { ProtectedRoute } from 'components/ProtectedRoute';
import ExploreAI from 'components/exploreAI/ExploreAI';

import GlobalModal from 'components/common/GlobalModal';


function App() {
  const [openExploreAIsModal, setOpenExploreAIsModal] = useState(false);
	const handleOpenExploreAIsModal = () => setOpenExploreAIsModal(true);
	const handleCloseExploreAIsModal = () => setOpenExploreAIsModal(false);
  // const routes = useRoutes([
  //   {
  //     path: "/",
  //     element: 
  //       <ExploreAI />
     
  //   },
  //   {
  //     path: "/login",
  //     element: <Login />
  //   }
  // ]);
  // return routes;
  return (
		<>
			<button onClick={handleOpenExploreAIsModal}>click me</button>
			<GlobalModal
				openState={openExploreAIsModal}
				onCloseHandler={handleCloseExploreAIsModal}
				MinWidth={"700px"}
				iskeepMounted={true}
			>
				<ExploreAI
					handleCloseModal={handleCloseExploreAIsModal}
					isSelectionRequired={true}
				/>
			</GlobalModal>
		</>
	);
}

export default App;