import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import AuthProvider from './Providers/AuthProviders'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient(); 
ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='bg-gray-300 mx-auto dark:bg-gray-900'>
    <React.StrictMode>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </AuthProvider>
    </React.StrictMode>
  </div>
)
