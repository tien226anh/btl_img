import subprocess
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from contextlib import asynccontextmanager
from core.config import settings
from load_route import ROUTE_LIST

import uvicorn
import datetime

app = FastAPI(title=settings.APP_TITLE, root_path=settings.ROOT_PATH)

if settings.APP_ORIGINS:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )


@app.on_event("startup")
async def startup_event():
    print("Server starting...")


@app.on_event("shutdown")
async def shutdown_event():
    print("Server stopping...")


app.mount("/static", StaticFiles(directory=settings.APP_STATIC_DIR), name="static")


for route in ROUTE_LIST:
    app.include_router(route["route"], prefix=route["prefix"], tags=route["tags"])

if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host=settings.APP_HOST,
        port=settings.APP_PORT,
        reload=True,
        workers=1,
    )
