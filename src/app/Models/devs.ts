export interface DevsTs {
    complete: Complete[];
    tiny:     Tiny[];
}

export interface Complete {
complete: any;
    firstName:  string;
    lastName:   string;
    innovation: string;
    year:       number;
}

export interface Tiny {
    name:     string;
    invented: string;
    year:     number;
}
