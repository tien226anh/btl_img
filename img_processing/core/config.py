from typing import List
from pydantic import AnyHttpUrl
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    APP_TITLE: str = "BTL IMG_PROCESSING"
    APP_ORIGINS: List[AnyHttpUrl] = ["http://localhost:3000", "http://localhost:5173"]
    APP_HOST: str = "localhost"
    APP_PORT: int = 8000
    APP_STATIC_DIR: str = "static"

    ROOT_PATH: str = ""

    class Config:
        env_file = ".env"
        env_file_encoding = "urf-8"
        case_sensitive = True


settings = Settings()
