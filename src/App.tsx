import React, { useState } from 'react';
import { Header } from './components/Header';
import { ContentWrapper } from './components/ContentWrapper';
import { ChartHeader } from './components/Chart/ChartHeader';
import { VerticalBarChart } from './components/Chart/VerticalBarChart';
import { SimpleHeaderSection } from './components/SimpleHeaderSection';
import { Table } from './components/Table';

export const App = () => {
  const [ currentView, setCurrentView ] = useState('chart');

  const handleChangeView = (viewName: string) => {
    setCurrentView(viewName);
  };

  return (
    <>
      <Header/>
      <ContentWrapper>
        <SimpleHeaderSection handleChangeView={handleChangeView} currentViewName={currentView} />
        { (currentView === 'chart') && (
          <>
            <ChartHeader/>
            <VerticalBarChart/>
          </>
        ) }
        { (currentView === 'table') && <Table/> }
      </ContentWrapper>
    </>
  );
}
