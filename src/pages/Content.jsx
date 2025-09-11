import React, { useContext } from 'react';
import Category from './category/Category';
import { AdminContext } from '../context/adminLayoutContext';
import Dashboard from './dashboard/Dashboard';
import Product from './product/Product';
import { Route, Routes } from 'react-router';
import Colors from './colors/Colors';
import Guaranties from './guaranties/Guaranties';
import Brands from './brands/Brands';

const Content = () => {
    const { showSidebar } = useContext(AdminContext);
    return (
        <section id="content_section" className={`bg-light py-2 px-3 ${showSidebar ? "with_sidebar" : null}`}>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/categories' element={<Category />} />
            <Route path='/products' element={<Product />} />
            <Route path='/colors' element={<Colors />} />
            <Route path='/guaranties' element={<Guaranties />} />
            <Route path='/brands' element={<Brands />} />
            <Route path='*' element={<Dashboard />} />
          </Routes>
        </section>
    );
};

export default Content;