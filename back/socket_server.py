import websockets
import asyncio
from data import vendas


async def socket(websocket):

    while True:

        data_json = vendas()

        await websocket.send(data_json)  

        await asyncio.sleep(3) 

async def main():
    
    async with websockets.serve(socket, "localhost", 8000):
        print("Servidor rodando em ws://localhost:8000")
        await asyncio.Future() 

asyncio.run(main())