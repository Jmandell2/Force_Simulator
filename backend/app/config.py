# Get your env variables here

from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    unreal_host: str
    unreal_port: int

    class Config:
        env_file = ".env"


settings = Settings()