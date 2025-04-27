
export interface Balance {
    startDate: Date;
    endDate: Date;
    lastUpdate: Date;
    data: EnergyBalanceExternal;
}

export interface Value {
    value: number;
    percentage: number;
    datetime: string;
}

export interface RenewableContent {
    type: string;
    id: string;
    groupId: string;
    attributes: {
        title: string;
        description: string | null;
        color: string;
        icon: string | null;
        type: string;
        magnitude: string | null;
        composite: boolean;
        lastUpdate: string;
        values: Value[];
        total: number;
        totalPercentage: number;
    };
}

export interface NonRenewableContent {
    type: string;
    id: string;
    groupId: string;
    attributes: {
        title: string;
        description: string | null;
        color: string;
        icon: string | null;
        type: string;
        magnitude: string | null;
        composite: boolean;
        lastUpdate: string;
        values: Value[];
        total: number;
        totalPercentage: number;
    };
}

export interface StorageContent {
    type: string;
    id: string;
    groupId: string;
    attributes: {
        title: string;
        description: string | null;
        color: string;
        icon: string | null;
        type: string;
        magnitude: string | null;
        composite: boolean;
        lastUpdate: string;
        values: Value[];
        total: number;
        totalPercentage: number;
    };
}

export interface DemandContent {
    type: string;
    id: string;
    groupId: string;
    attributes: {
        title: string;
        description: string | null;
        color: string;
        icon: string | null;
        type: string | null;
        magnitude: string | null;
        composite: boolean;
        lastUpdate: string;
        values: Value[];
        total: number;
        totalPercentage: number;
    };
}

export interface Included {
    type: 'Renovable' | 'No-Renovable' | 'Almacenamiento' | 'Demanda';
    id: string;
    attributes: {
        title: string;
        lastUpdate: string;
        description: string | null;
        magnitude: string | null;
        content: (RenewableContent | NonRenewableContent | StorageContent | DemandContent)[];
    };
}

export interface EnergyBalanceExternal {
    data: {
        type: string;
        id: string;
        attributes: {
            title: string;
            lastUpdate: string;
            description: string;
        };
        meta: {
            cacheControl: {
                cache: string;
            };
        };
    };
    included: Included[];
}
