
export type ProductType = {
    id: number;
    name: string;
    price: number;
    poster_path: string;
    image_about_1: string;
    image_about_2: string;
    image_about_3?: string;
    image_about_4?: string;
    size_info?: string;
    description: (string | {
        espessura?: string;
        comprimento?: string;
        pingente?: string;
        tamanho?: string
    })[];
    sizes: {
        size: string;
        price: number;
    }[];
};
