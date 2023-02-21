import React, { useEffect, useState } from 'react';
import { departmentsData } from '../exampleData/data';
import { normalizeData } from '../helpers/normalizeData';
import { DepartmentsDataContext } from './DepartmentsDataContext';

interface Props {
  children: React.ReactNode;
}

export const DepartmentsDataStore = (props: Props) => {
  const { children } = props;
  const [departmentData, setDepartmentData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get('https://urss:eidai5Vah0Phoh7ubo0eagh9choQuahphe1taBohT7giezisieneihe0eisomu3i@api.jakosc.agh.edu.pl/api.php');
        const exampleData = JSON.parse(departmentsData);
        const normalizedData = normalizeData(exampleData);
        setDepartmentData(normalizedData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <DepartmentsDataContext.Provider value={departmentData}>
      {children}
    </DepartmentsDataContext.Provider>
  );
};
