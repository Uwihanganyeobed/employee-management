export interface Employee{
    _id: string;
    first_name: string;
    last_name: string;
    email: string;
    role: 'admin'| 'staff';
    department: string;
    created_by: string;
    created_at: string;
    updated_at: string;
}