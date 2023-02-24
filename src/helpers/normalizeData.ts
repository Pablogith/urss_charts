import { Department, DepartmentsData, DepartmentStats, DepartmentValue } from '../models/DepartmentsData';

export const normalizeData = (data: any): DepartmentsData => {
  const departments = data['wydzialy'];
  const departmentsStats: DepartmentStats[] = data['stats_wydzial'];
  const allDepartments = data['wszystko_wydzialy'];

  const formattedDepartments: Department[] = [];
  const formattedAllDepartments: DepartmentValue[] = [];

  for (const [key, value] of Object.entries(departments)) {
    const department: Department = {
      id: key,
      name: value as string,
    };
    formattedDepartments.push(department);
  }

  for (const [key, value] of Object.entries(allDepartments)) {
    const departmentData: DepartmentValue = {
      departmentId: key,
      value: value as number,
    };

    formattedAllDepartments.push(departmentData);
  }

  const formattedData: DepartmentsData = {
    departments: formattedDepartments,
    departmentsStats,
    allDepartments: formattedAllDepartments,
  };

  return formattedData;
};
