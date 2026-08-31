# Get your env variables here

from pydantic_settings import BaseSettings


class Settings(BaseSettings):

    FRONTEND_HOST: str
    FRONTEND_PORT: int
    VITE_BACKEND_HOST: str
    VITE_BACKEND_PORT: int
    VITE_UE_IP: str
    VITE_UE_PORT: int



    class Config:
        env_file = "./.env"



settings = Settings()