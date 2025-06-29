from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests
import cv2
import numpy as np

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api")
async def read_root():
    return {"test":"From API"}

@app.get("/stream")
async def stream():
    response = requests.get("http://192.168.18.102:5000/video", stream=True)
    return Response(content=response.raw, media_type="multipart/x-mixed-replace; boundary=frame")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

