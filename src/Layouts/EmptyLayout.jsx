import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
const EmptyLayout = () => {

    return (
        <>
            <Header />
            <div className="empty-layout">
                <Outlet />
            </div>
        </>    
    );
};
export default EmptyLayout;