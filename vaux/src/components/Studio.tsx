import React, { useState } from 'react';
import ExploreAI from 'components/exploreAI/ExploreAI';
import GlobalModal from 'components/common/GlobalModal';

function Studio() {
    const [openExploreAIsModal, setOpenExploreAIsModal] = useState(false);
    const handleOpenExploreAIsModal = () => setOpenExploreAIsModal(true);
    const handleCloseExploreAIsModal = () => setOpenExploreAIsModal(false);
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
    )
}

export default Studio;