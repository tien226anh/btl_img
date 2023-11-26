from fastapi import File, UploadFile, Form
from pydantic import BaseModel


class Chap3Model(BaseModel):
    processor_name: str = Form(...)
    file: UploadFile = File(...)
    extra_value: float = Form(None)

    class Config:
        json_schema_extra = {
            "example": {
                "processor_name": "negative",
                "file": "image.jpg",
                "extra_value": 255,
            }
        }
