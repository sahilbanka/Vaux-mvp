import AuthHeader from 'components/studio/AuthHeader';
import SideNav from 'components/studio/SideNav';
import ProjectsList from 'components/studio/ProjectsList';

function Studio() {
    return (
        <>
            <AuthHeader />
            <SideNav />
            <ProjectsList />
        </>
    )
}

export default Studio;