export function getEnvVariable(name: string) {

    const value = process.env[name];

    if (!value) {
        throw new Error(`Environment variable ${name} does not exist.`);
    }

    return value;
};