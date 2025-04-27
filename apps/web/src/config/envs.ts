
interface EnvVariables {
    VITE_API_URL: string;
}

export const ENVS: EnvVariables = {
    VITE_API_URL: import.meta.env.VITE_API_URL
};
