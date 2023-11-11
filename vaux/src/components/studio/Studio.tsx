import AuthHeader from 'components/studio/AuthHeader';
import SideNav from 'components/studio/SideNav';
import AiVoicesProvider from 'context/AiVoicesContext';

function Studio({ content }: any) {
    return (
        <AiVoicesProvider>
            <>
                <AuthHeader />
                <SideNav />
                <main className='p-8 ml-[90px] bg-light-white overflow-y-auto' style={{ height: 'calc(100% - 68px)' }}>{content}</main>
            </>
        </AiVoicesProvider>
    )
}

export default Studio;