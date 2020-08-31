export interface BizInfo {
    id: number;
    shopName: string;
    logo: string;
    color: string;
    shopImg?: string;
}

export interface User {
    id: number;
    userName: string;
}

export interface Category {
    id: number;
    name: string;
    subCategory?: Category [];
}

export interface Group {
    id: number;
    name: string;
}

export interface Item {
    id: number;
    image: string;
    name: string;
    price: number;
}
