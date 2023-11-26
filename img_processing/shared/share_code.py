import shutil


class ShareService:
    def __init__(self) -> None:
        pass

    def process_image(file):
        file_location = f"static/input/{file.filename}"
        with open(file_location, "wb") as image:
            shutil.copyfileobj(file.file, image)
        return file_location
