import { useState } from 'react';
import ExploreAI from 'components/exploreAI/ExploreAI';
import GlobalModal from 'components/common/GlobalModal';

function ProjectsList() {
    const [openExploreAIsModal, setOpenExploreAIsModal] = useState(false);
    const handleOpenExploreAIsModal = () => setOpenExploreAIsModal(true);
    const handleCloseExploreAIsModal = () => setOpenExploreAIsModal(false);

    return (
        <div className='p-4 ml-[90px]'>
            <button onClick={handleOpenExploreAIsModal}>click me</button>
                <GlobalModal
                    openState={openExploreAIsModal}
                    onCloseHandler={handleCloseExploreAIsModal}
                    MinWidth={"700px"}
                    iskeepMounted={true}
                >
                {openExploreAIsModal && <ExploreAI
                    handleCloseModal={handleCloseExploreAIsModal}
                    isSelectionRequired={true}
                />}
            </GlobalModal>
        </div>
    )
}

export default ProjectsList