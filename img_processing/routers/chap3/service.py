import os
import cv2
import numpy as np


class ImageProcessor:
    def __init__(self) -> None:
        self.image = {}

    async def process_image(self, image_path, save_path, process_function) -> dict:
        image_name = os.path.basename(image_path)
        save_img_path = os.path.join(save_path, image_name)
        original_image = cv2.imread(image_path)

        if not os.path.exists(save_path):
            os.makedirs(save_path)

        if not os.path.exists("static/images/"):
            os.makedirs("static/images/")

        processed_image = process_function(original_image)

        cv2.imwrite(save_img_path, processed_image)
        self.image[image_name] = save_img_path

        return {
            "original_image": image_path,
            "processed_image": save_img_path,
        }


class Chap3Service:
    def __init__(self) -> None:
        self.threshold_processor = ImageProcessor()
        self.negative_processor = ImageProcessor()
        self.logarithm_processor = ImageProcessor()
        self.inverse_logarithm_processor = ImageProcessor()

    async def process_logarithm_image(self, image_path, c_value: float) -> dict:
        process_function = lambda img: c_value * np.log(1 + img)

        return await self.logarithm_processor.process_image(
            image_path, "static/chap3/logarithm_image/", process_function
        )

    async def process_inverse_logarithm_image(self, image_path, c_value: float) -> dict:
        process_function = lambda img: c_value * np.exp(img)

        return await self.inverse_logarithm_processor.process_image(
            image_path, "static/chap3/inverse_logarithm_image/", process_function
        )

    async def process_threshold_image(self, image_path, c_value: float) -> dict:
        threshold_value = 120
        max_value = 255

        process_function = lambda img: cv2.threshold(
            img, threshold_value, max_value, cv2.THRESH_BINARY
        )[1]

        return await self.threshold_processor.process_image(
            image_path, "static/chap3/threshold_image/", process_function
        )

    async def process_negative_image(self, image_path, c_value: float) -> dict:
        intensity_levels = 255

        process_function = lambda img: intensity_levels - img

        return await self.negative_processor.process_image(
            image_path, "static/chap3/negative_image/", process_function
        )
