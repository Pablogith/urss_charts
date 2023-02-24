export interface DepartmentsData {
  allDepartments: DepartmentValue[];
  departments: Department[];
  departmentsStats: any;
}

export interface DepartmentValue {
  departmentId: string;
  value: number;
}

export interface Department {
  id: string;
  name: string;
}

export interface DepartmentStats {
  [key: string]: DepartmentStatsValue;
}

export interface DepartmentStatsValue {
  [key: number]: number;
}
