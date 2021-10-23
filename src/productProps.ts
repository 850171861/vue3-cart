export interface productsProps {
    id: number;
    price:number;
    title:string;
    url:string;
}

export interface AxiosResponseProps{
    code:number;
    data:productsProps[]
}

export interface cartProductsProps extends productsProps{
    count:number;
    isChecked:boolean;
    totalPrice:number;
}