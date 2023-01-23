import React, { useState } from 'react';
import { Header } from './components/Header';
import { ContentWrapper } from './components/ContentWrapper';
import { SimpleHeaderSection } from './components/SimpleHeaderSection';
import { ChartView } from './components/Chart/ChartView';
import { TableView } from './components/TableView';
import { PieChart } from './components/PieChart';
import { QueryClientContext } from './context/QueryClientContext';

export const App = () => {
  const [ currentView, setCurrentView ] = useState('chart');

  const handleChangeView = (viewName: string) => setCurrentView(viewName);

  return (
    <>
      <QueryClientContext>
        <Header/>
        <ContentWrapper>
          <SimpleHeaderSection handleChangeView={ handleChangeView } currentViewName={ currentView }/>
          { (currentView === 'chart') && <ChartView/> }
          { (currentView === 'table') && <TableView/> }
          { (currentView === 'pie-chart') && <PieChart/> }
        </ContentWrapper>
      </QueryClientContext>
    </>
  );
}
