import * as React from 'react';
import './BaseLayout.scss';
import Header from './Header/Header';


const baseLayout = ({ children }: any) =>  (
  <section className="layout">
    <Header />
    {children}
  </section> 
)

export default baseLayout;