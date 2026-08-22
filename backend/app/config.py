# Get your env variables here

from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    unreal_host: str
    unreal_port: int
    frontend_host: str
    frontend_port: int
    backend_host: str
    backend_port: int

    class Config:
        env_file = "../.env"



settings = Settings()