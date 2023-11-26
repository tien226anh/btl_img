from routers.index.router import router as IndexRouter
from routers.chap3.router import router as Chap3Router

ROUTE_LIST = [
    {
        "route": IndexRouter,
        "tags": ["Index"],
        "prefix": "/api",
    },
    {
        "route": Chap3Router,
        "tags": ["Chapter3"],
        "prefix": "/api/chap3",
    }
]
