import { DepartmentsStats, Department } from '../models/DepartmentsStats';

export const normalizeData = (data: any): any => {
  const departments = data['wydzialy'];
  const departmentsStats = data['stats_wydzial'];
  const allDepartments = data['wszystko_wydzialy'];

  const formattedDepartments: Department[] = [];
  const formattedDepartmentsStats = [];
  const formattedAllDepartments = [];

  for (let [key, value] of Object.entries(departments)) {
    const department: Department = {
      id: key,
      name: value as string
    };
    formattedDepartments.push(department);
  }

  for (let [key, value] of Object.entries(allDepartments)) {
    const departmentData: {
      departmentId: Department['id'];
      value: number;
    } = {
      departmentId: key,
      value: value as number
    };

    formattedAllDepartments.push(departmentData);
  }

  for (let [key, value] of Object.entries(departmentsStats)) {

  }

  return {
    departments: formattedDepartments,
    departmentsStats,
    allDepartments: formattedAllDepartments
  };
};
