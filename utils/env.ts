export function getEnvVariable(name: string) {

    const value = process.env[name];

    if (!value) {
        throw new Error(`Environment variable ${value} does not exists.`);
    }

    return process.env[name];
};