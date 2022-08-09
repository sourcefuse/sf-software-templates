import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AuthProvider from 'Providers/AuthProvider';
import ErrorBoundary from 'Providers/ErrorBoundary';
import NotificationProvider from 'Providers/NotificationProvider';
import ThemeProvider from 'Providers/theme/ThemeProvider';
import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import {BrowserRouter} from 'react-router-dom';
import AppRoutes from 'Routes/Routes';

const queryClient = new QueryClient();

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <BrowserRouter>
          <ThemeProvider>
            <ErrorBoundary>
              <AuthProvider>
                <NotificationProvider>
                  <AppRoutes />
                </NotificationProvider>
              </AuthProvider>
            </ErrorBoundary>
          </ThemeProvider>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </LocalizationProvider>
  );
}

export default App;
