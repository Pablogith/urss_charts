import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Header } from '../components/urssCharts/Header';
import { ContentWrapper } from '../components/urssCharts/ContentWrapper';
import { SimpleHeaderSection } from '../components/urssCharts/SimpleHeaderSection';
import { ChartView } from '../components/urssCharts/Chart/ChartView';
import { Footer } from '../components/urssCharts/Footer';
import { normalizeData } from '../helpers/normalizeData';
import { LoadingCircle } from '../components/urssCharts/LoadingCircle';
import { departmentsData } from '../exampleData/data';
import { DepartmentsDataStore } from '../context/DepartmentsDataStore';
import { DepartmentsData } from '../models/DepartmentsData';

export const UrssCharts = () => {
  const [currentView, setCurrentView] = useState('chart');
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://urss:eidai5Vah0Phoh7ubo0eagh9choQuahphe1taBohT7giezisieneihe0eisomu3i@api.jakosc.agh.edu.pl/api.php');
        const normalizedData: DepartmentsData = normalizeData(response.data);
        setData(normalizedData);
        console.log(normalizedData);
      } catch (error) {
        if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
          const exampleData = JSON.parse(departmentsData);
          const normalizedData: DepartmentsData = normalizeData(exampleData);
          setData(normalizedData);
        } else {
          console.error(error);
          setIsError(true);
          setError(error as any);
        }
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
    </>
  );

  const errorMessage = (
    <div className="w-full text-center mt-10">
      <h1>Wystąpił problem...</h1>
    </div>
  );

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
