import { Routes, Route } from "react-router-dom";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Router = ({setLogButton}) => {
    return (
            <Routes>
                <Route index element={<FeedPage />} />

                <Route path="login" element={<LoginPage setLogButton = {setLogButton}/>} />

                <Route path="signup" element={<SignUpPage  setLogButton = {setLogButton} />} />

                <Route path="post/:id" element={<PostPage />} />

                <Route path="*" element={<ErrorPage />} />

            </Routes>
    )
}

export default Router