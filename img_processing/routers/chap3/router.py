import shutil
from fastapi import APIRouter, File, UploadFile, Form
from fastapi.responses import JSONResponse
from .service import Chap3Service

router = APIRouter()

image_processors = {
    "negative": "process_negative_image",
    "threshold": "process_threshold_image",
    "logarithm": "process_logarithm_image",
    "inverse_logarithm": "process_inverse_logarithm_image",
}

chap3_service = Chap3Service()


def process_image(file, image_processor, value):
    file_location = f"static/images/{file.filename}"
    with open(file_location, "wb") as image:
        shutil.copyfileobj(file.file, image)
    result = getattr(chap3_service, image_processor)(file_location, value)
    return result


@router.get("/")
async def hello_chapter3():
    return {"message": "Hello Chapter 3"}


@router.post("/")
async def process_image_endpoint(
    processor_name: str = Form(...),
    file: UploadFile = File(...),
    extra_value: float = Form(None),
):
    if processor_name not in image_processors:
        return JSONResponse(
            status_code=400, content={"message": "Invalid image processor"}
        )

    result: dict = await process_image(
        file, image_processors[processor_name], extra_value
    )

    return JSONResponse(
        status_code=200,
        content={
            "original_image": result["original_image"],
            "processed_image": result["processed_image"],
        },
    )
