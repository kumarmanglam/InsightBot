import { Route, Routes } from 'react-router-dom';
import ChatContainer from '../pages/ChatContainer';
import Layout from '../components/Layout';
import ViewDocuments from '../pages/ViewDocuments';
import UploadDocuments from '../pages/UploadDocuments';


const RouterContainer = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />} >
                <Route path='/' element={<ViewDocuments />} />
                <Route path='/insightBot' element={<ChatContainer />} />
                <Route path='/insightBot/:book_id' element={<ChatContainer />} />
                <Route path='/uploadDocument' element={<UploadDocuments />} />
                <Route path='/viewDocuments' element={<ViewDocuments />} />
            </Route>
        </Routes>
    )
}

export default RouterContainer;