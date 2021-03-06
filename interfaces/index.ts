export interface PostInterface {
    id: number;
    title: string;
    body: string;
    price: number;
    tgId: number;
    preview: string;
    images: string;
    slug: string;
    categoryId: number;
    telegram: string;
    createdAt: string;
    updatedAt: string;
    vector?: any;
}

export interface HTMLInputEvent extends Event {
    target: HTMLInputElement & EventTarget;
}