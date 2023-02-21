export interface DepartmentsStats {
  wydzialy: Department[];
  stats_wydzial: DepartmentStats[];
  wszystko_wydzialy: {
    departmentId: Department['id'];
    value: number;
  }[];
}

export interface Department {
  id: string | number;
  name: string;
}

export interface DepartmentStats {
  [key: string]: {
    departmentId: Department['id'];
    value: number;
  }[];
}
