export interface DataBaseEnvironmentVariables {
  DB_HOST: string;
  DB_PORT: number;
  DB_USERNAME: string;
  DB_PASSWORD: string;
  DB_NAME: string;
}

export interface EnvironmentVariables extends DataBaseEnvironmentVariables {
  DEV: boolean;
}
