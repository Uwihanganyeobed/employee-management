export interface Employee{
    _id: string;
    first_name: string;
    last_name: string;
    email: string;
    role: 'admin'| 'staff';
    created_by: string;
    created_at: string;
    updated_at: string;
}
export interface CreateEmployeeData{
    first_name: string;
    last_name: string;
    email: string
    role: 'admin'|'staff'
}