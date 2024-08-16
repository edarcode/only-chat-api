#!/bin/bash

# Elimina la carpeta de migraciones
rm -rf src/db/migrations

# Elimina la db
rm -rf src/db/user-hub.db

# Genera una nueva migración
npx drizzle-kit generate

# Sincroniza la migración con la db
npx drizzle-kit migrate

# 
npx drizzle-kit studio

# Envia los cambios del schema directo a la db
# npx drizzle-kit push
