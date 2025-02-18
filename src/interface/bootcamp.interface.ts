export interface Location {
    type: 'Point';
    coordinates: [number, number];
    formattedAddress?: string;
    street?: string;
    city?: string;
    state?: string;
    zipcode?: string;
    country?: string;
  }

export interface BootcampsType {
    name: string;
    slug: string;
    description: string;
    website: string;
    phone: number | string;
    email: string;
    address: string;
    location?: Location;
    careers: (
        | "Web Development"
        | "Mobile Development"
        | "UI/UX"
        | "Data Science"
        | "Business"
        | "Other"
    )[];
    averageRating: number;
    averageCost: number;
    photo: string;
    housing: boolean;
    jobAssistance: boolean;
    jobGuarantee: boolean;
    acceptGi?: boolean;
    createdAt?: Date;
}
