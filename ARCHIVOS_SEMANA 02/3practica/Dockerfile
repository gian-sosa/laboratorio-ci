FROM python:3.11-slim

WORKDIR /app

# 1) Copiamos SOLO el requirements correcto y lo renombramos
COPY src/requirements.txt ./requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# 2) Copiamos el código de src/
COPY src/ .

# 3) Comando de arranque
CMD ["python", "main.py"]
