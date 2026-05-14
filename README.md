src/app/
├── core/
│   ├── models/        # tipos/interfaces: Usuario, Resultado, MensajeChat, etc.
│   ├── services/      # conexión con Supabase, GitHub, auth, juegos, chat
│   └── guards/        # más adelante, protección de rutas
│
├── layout/
│   └── navbar/        # navegación general de la app
│
├── pages/
│   ├── home/          # bienvenida
│   ├── login/         # iniciar sesión
│   ├── registro/      # registrarse
│   ├── quien-soy/     # datos GitHub + explicación juego propio
│   ├── ahorcado/      # Sprint 3
│   ├── mayor-menor/   # Sprint 3
│   ├── preguntados/   # Sprint 4
│   ├── juego-propio/  # Sprint 4
│   ├── chat/          # Sprint 3
│   └── resultados/    # Sprint 4
│
└── components/
    ├── boton/         # botón reutilizable
    ├── spinner/       # carga
    ├── modal/         # reemplaza alert()
    └── card/          # tarjetas reutilizables
