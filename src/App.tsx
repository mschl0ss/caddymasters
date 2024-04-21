import React from 'react';
import AppPageProvider from "./Contexts/AppPageContext";
import UxWrapper from "./Pages/UxWrapper";
import {CssBaseline} from "@mui/material";

function App() {

    return (
        <div>
            <CssBaseline/>
            <AppPageProvider>
                <UxWrapper/>
            </AppPageProvider>
        </div>
    );
}

export default App;
