import { CssBaseline } from '@mui/material';
import React from 'react';

import AppPageProvider from './Contexts/AppPageContext';
import UxWrapper from './Pages/UxWrapper';

function App() {
  return (
    <div>
      <CssBaseline />
      <AppPageProvider>
        <UxWrapper />
      </AppPageProvider>
    </div>
  );
}

export default App;
