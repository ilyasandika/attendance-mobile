export interface user {
    id: number;
    employeeId: string;
    email: string;
    name: string;
    gender: "male" | "female";
    birthDate: number; // timestamp
    phoneNumber: string;
    role: string;
    roleId: number;
    department: string;
    departmentId: number;
    shift: string;
    shiftId: number;
    location: string;
    locationId: number;
    whatsapp: string | null;
    linkedin: string | null;
    telegram: string | null;
    biography: string | null;
    status: number;
    photo: string | null;
}

export interface CurrentUserResponse {
    statusCode: number;
    message: string;
    payload: user;
}

export interface UserListItem {
    id: number;
    profileId: number;
    employeeId: string;
    email: string;
    name: string;
    role: string;
    department: string;
    dateCreated: number;
    status: number;
}

export interface UserListMeta {
    currentPage: number;
    lastPage: number;
    total: number;
}

export interface UserListLinks {
    first: string;
    last: string;
    next: string | null;
    prev: string | null;
}

export interface UserListResponse {
    statusCode: number;
    message: string;
    payload: {
        users: UserListItem[];
        meta: UserListMeta;
        links: UserListLinks;
    };
}
