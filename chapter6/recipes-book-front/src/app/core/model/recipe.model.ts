export interface Recipe {

    id?: number;
    title?: string;
    ingredients?: string;
    tags?: string;
    imageUrl?: number;
    cookingTime?: number;
    prepTime?: number;
    yield?: number;
    steps?: string;
    rating?:number;
    category?:string;

}
