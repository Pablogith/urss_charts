import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Header } from '../components/Header';
import { ContentWrapper } from '../components/ContentWrapper';
import { SimpleHeaderSection } from '../components/SimpleHeaderSection';
import { ChartView } from '../components/Chart/ChartView';
import { TableView } from '../components/TableView';
import { PieChart } from '../components/PieChart';
import { Footer } from '../components/Footer';
import { normalizeData } from '../helpers/normalizeData';
import { LoadingCircle } from '../components/LoadingCircle';
import { departmentsData } from '../exampleData/data';
import { DepartmentsDataStore } from '../context/DepartmentsDataStore';

export const UrssCharts = () => {
  const [currentView, setCurrentView] = useState('chart');
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
//        const response = await axios.get('https://urss:eidai5Vah0Phoh7ubo0eagh9choQuahphe1taBohT7giezisieneihe0eisomu3i@api.jakosc.agh.edu.pl/api.php');
         const exampleData = JSON.parse(departmentsData);
        const normalizedData = normalizeData(exampleData);
        setData(normalizedData);
      } catch (error) {
        console.error(error);
        setIsError(true);
        setError(error as any);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChangeView = (viewName: string) => setCurrentView(viewName);

  const content = (
    <>
      <SimpleHeaderSection handleChangeView={handleChangeView} currentViewName={currentView} />
      {currentView === 'chart' && <ChartView data={data} />}
      {currentView === 'table' && <TableView />}
      {currentView === 'pie-chart' && <PieChart />}
    </>
  );

  const errorMessage = <h1>Wystąpił problem...</h1>;

  return (
    <DepartmentsDataStore>
      <Header />
      <ContentWrapper>
        {isError && errorMessage}
        {!isError && (
          <>
            {isLoading && <LoadingCircle />}
            {!isLoading && content}
          </>
        )}
      </ContentWrapper>
      <Footer />
    </DepartmentsDataStore>
  );
};
