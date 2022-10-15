import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Marketplace from '../components/Marketplace/Marketplace';

const client = new QueryClient();

const Task3 = () => {
    return (
        <div>
            <h2 className='text-center'>Список товаров</h2>
            <QueryClientProvider client={client} >
                <Marketplace />
            </QueryClientProvider>
        </div>
    );
};

export default Task3;