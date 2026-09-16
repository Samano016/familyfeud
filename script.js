/* =========================================================
   100 ESTUDIANTES DIJERON
   ========================================================= */


/* =========================================================
   QUESTIONS
========================================================= */

const questions = [

  // ==========================================
// 🏫 ESCUELA — 6
// ==========================================

{
  id: 1,
  category: "Escuela",
  question: "Menciona algo que los estudiantes suelen olvidar antes de ir a la escuela.",
  answers: [
    { text: "Tarea", points: 30 },
    { text: "Mochila", points: 25 },
    { text: "Cargador", points: 20 },
    { text: "Lonche", points: 15 },
    { text: "Llaves", points: 10 }
  ]
},

{
  id: 2,
  category: "Escuela",
  question: "Menciona una razón por la que un estudiante podría llegar tarde a clase.",
  answers: [
    { text: "Se quedó dormido", points: 30 },
    { text: "Tráfico", points: 25 },
    { text: "Perdió el autobús", points: 20 },
    { text: "No encontraba algo", points: 15 },
    { text: "Se tardó en arreglarse", points: 10 }
  ]
},

{
  id: 3,
  category: "Escuela",
  question: "Menciona algo que los estudiantes hacen cuando falta mucho para que termine la clase.",
  answers: [
    { text: "Mirar el reloj", points: 30 },
    { text: "Hablar con amigos", points: 25 },
    { text: "Usar el teléfono", points: 20 },
    { text: "Dibujar", points: 15 },
    { text: "Pensar en qué harán después", points: 10 }
  ]
},

{
  id: 4,
  category: "Escuela",
  question: "Menciona algo que puede hacer que un examen sea más difícil.",
  answers: [
    { text: "No haber estudiado", points: 30 },
    { text: "Preguntas inesperadas", points: 25 },
    { text: "Falta de tiempo", points: 20 },
    { text: "Preguntas confusas", points: 15 },
    { text: "Estar nervioso", points: 10 }
  ]
},

{
  id: 5,
  category: "Escuela",
  question: "Menciona algo que probablemente encuentres dentro de un salón de clases.",
  answers: [
    { text: "Escritorios", points: 30 },
    { text: "Pizarrón", points: 25 },
    { text: "Computadoras", points: 20 },
    { text: "Libros", points: 15 },
    { text: "Mochilas", points: 10 }
  ]
},

{
  id: 6,
  category: "Escuela",
  question: "Menciona algo que un estudiante podría hacer después de recibir una buena calificación.",
  answers: [
    { text: "Celebrar", points: 30 },
    { text: "Decírselo a sus amigos", points: 25 },
    { text: "Enseñársela a su familia", points: 20 },
    { text: "Sentirse orgulloso", points: 15 },
    { text: "Subirla a redes sociales", points: 10 }
  ]
},

// ==========================================
// 🍕 COMIDAS — 6
// ==========================================

{
  id: 7,
  category: "Comidas",
  question: "Menciona una comida que sería difícil comer sin ensuciarte.",
  answers: [
    { text: "Tacos", points: 30 },
    { text: "Espagueti", points: 25 },
    { text: "Hamburguesa", points: 20 },
    { text: "Alitas", points: 15 },
    { text: "Nachos", points: 10 }
  ]
},

{
  id: 8,
  category: "Comidas",
  question: "Menciona algo que probablemente encuentres en una cocina.",
  answers: [
    { text: "Refrigerador", points: 30 },
    { text: "Estufa", points: 25 },
    { text: "Microondas", points: 20 },
    { text: "Platos", points: 15 },
    { text: "Cubiertos", points: 10 }
  ]
},

{
  id: 9,
  category: "Comidas",
  question: "Menciona una comida que mucha gente pediría para compartir con amigos.",
  answers: [
    { text: "Pizza", points: 30 },
    { text: "Nachos", points: 25 },
    { text: "Alitas", points: 20 },
    { text: "Papas fritas", points: 15 },
    { text: "Tacos", points: 10 }
  ]
},

{
  id: 10,
  category: "Comidas",
  question: "Menciona algo que podrías encontrar dentro de una lonchera.",
  answers: [
    { text: "Sándwich", points: 30 },
    { text: "Fruta", points: 25 },
    { text: "Botana", points: 20 },
    { text: "Bebida", points: 15 },
    { text: "Dulces", points: 10 }
  ]
},

{
  id: 11,
  category: "Comidas",
  question: "Menciona una comida que sabe mejor cuando está recién hecha.",
  answers: [
    { text: "Pizza", points: 30 },
    { text: "Papas fritas", points: 25 },
    { text: "Tacos", points: 20 },
    { text: "Hamburguesa", points: 15 },
    { text: "Pollo frito", points: 10 }
  ]
},

{
  id: 12,
  category: "Comidas",
  question: "Menciona algo que una persona podría agregar a una comida para hacerla más picante.",
  answers: [
    { text: "Salsa", points: 30 },
    { text: "Chile", points: 25 },
    { text: "Jalapeño", points: 20 },
    { text: "Chile en polvo", points: 15 },
    { text: "Salsa picante", points: 10 }
  ]
},

// ==========================================
// 😂 DIVERTIDAS — 6
// ==========================================

{
  id: 13,
  category: "Diversión",
  question: "Si pudieras tener cualquier superpoder por un día, ¿cuál escogerías?",
  answers: [
    { text: "Volar", points: 30 },
    { text: "Teletransportarse", points: 25 },
    { text: "Ser invisible", points: 20 },
    { text: "Viajar en el tiempo", points: 15 },
    { text: "Leer mentes", points: 10 }
  ]
},

{
  id: 14,
  category: "Diversión",
  question: "Si pudieras tener un animal como compañero de aventuras, ¿cuál escogerías?",
  answers: [
    { text: "Perro", points: 30 },
    { text: "Gato", points: 25 },
    { text: "Caballo", points: 20 },
    { text: "Delfín", points: 15 },
    { text: "Águila", points: 10 }
  ]
},

{
  id: 15,
  category: "Diversión",
  question: "Si pudieras vivir dentro de una película durante una semana, ¿qué tipo escogerías?",
  answers: [
    { text: "Aventura", points: 30 },
    { text: "Comedia", points: 25 },
    { text: "Ciencia ficción", points: 20 },
    { text: "Fantasía", points: 15 },
    { text: "Acción", points: 10 }
  ]
},

{
  id: 16,
  category: "Diversión",
  question: "Menciona algo que sería muy divertido hacer con tus amigos durante todo un día.",
  answers: [
    { text: "Ir a un parque de diversiones", points: 30 },
    { text: "Ir a la playa", points: 25 },
    { text: "Jugar videojuegos", points: 20 },
    { text: "Ir de compras", points: 15 },
    { text: "Hacer una fiesta", points: 10 }
  ]
},

{
  id: 17,
  category: "Diversión",
  question: "Si pudieras intercambiar vidas con alguien durante un día, ¿con quién sería?",
  answers: [
    { text: "Una persona famosa", points: 30 },
    { text: "Un atleta profesional", points: 25 },
    { text: "Un cantante", points: 20 },
    { text: "Un millonario", points: 15 },
    { text: "Un astronauta", points: 10 }
  ]
},

{
  id: 18,
  category: "Diversión",
  question: "Menciona algo que sería divertido hacer si no tuvieras ninguna obligación mañana.",
  answers: [
    { text: "Dormir hasta tarde", points: 30 },
    { text: "Salir con amigos", points: 25 },
    { text: "Jugar videojuegos", points: 20 },
    { text: "Ver películas", points: 15 },
    { text: "Ir de compras", points: 10 }
  ]
},

// ==========================================
// 🌎 CULTURA — 6
// ==========================================

{
  id: 19,
  category: "Cultura",
  question: "Menciona algo que puede representar la cultura de un país.",
  answers: [
    { text: "Comida", points: 30 },
    { text: "Música", points: 25 },
    { text: "Idioma", points: 20 },
    { text: "Tradiciones", points: 15 },
    { text: "Ropa", points: 10 }
  ]
},

{
  id: 20,
  category: "Cultura",
  question: "Menciona una celebración que muchas familias esperan cada año.",
  answers: [
    { text: "Navidad", points: 30 },
    { text: "Año Nuevo", points: 25 },
    { text: "Día de Muertos", points: 20 },
    { text: "Halloween", points: 15 },
    { text: "Cumpleaños", points: 10 }
  ]
},

{
  id: 21,
  category: "Cultura",
  question: "Menciona algo que podrías probar para conocer mejor otra cultura.",
  answers: [
    { text: "Comida", points: 30 },
    { text: "Música", points: 25 },
    { text: "Idioma", points: 20 },
    { text: "Películas", points: 15 },
    { text: "Tradiciones", points: 10 }
  ]
},

{
  id: 22,
  category: "Cultura",
  question: "Menciona algo que normalmente cambia de un país a otro.",
  answers: [
    { text: "Idioma", points: 30 },
    { text: "Comida", points: 25 },
    { text: "Moneda", points: 20 },
    { text: "Tradiciones", points: 15 },
    { text: "Leyes", points: 10 }
  ]
},

{
  id: 23,
  category: "Cultura",
  question: "Menciona algo que una persona podría coleccionar de diferentes países.",
  answers: [
    { text: "Monedas", points: 30 },
    { text: "Postales", points: 25 },
    { text: "Recuerdos", points: 20 },
    { text: "Imanes", points: 15 },
    { text: "Banderas", points: 10 }
  ]
},

{
  id: 24,
  category: "Cultura",
  question: "Menciona algo que probablemente quieras conocer cuando visitas un país nuevo.",
  answers: [
    { text: "Comida local", points: 30 },
    { text: "Lugares famosos", points: 25 },
    { text: "Historia", points: 20 },
    { text: "Tradiciones", points: 15 },
    { text: "Música", points: 10 }
  ]
},

// ==========================================
// 💻 TECNOLOGÍA — 6
// ==========================================

{
  id: 25,
  category: "Tecnología",
  question: "Menciona algo que haces cuando tu teléfono se queda sin batería.",
  answers: [
    { text: "Buscar un cargador", points: 30 },
    { text: "Pedir prestado uno", points: 25 },
    { text: "Activar ahorro de batería", points: 20 },
    { text: "Usar otro dispositivo", points: 15 },
    { text: "Esperar a llegar a casa", points: 10 }
  ]
},

{
  id: 26,
  category: "Tecnología",
  question: "Menciona una razón por la que alguien podría comprar un teléfono nuevo.",
  answers: [
    { text: "El anterior se rompió", points: 30 },
    { text: "La batería ya no funciona bien", points: 25 },
    { text: "Quiere una mejor cámara", points: 20 },
    { text: "Quiere un modelo más nuevo", points: 15 },
    { text: "Necesita más almacenamiento", points: 10 }
  ]
},

{
  id: 27,
  category: "Tecnología",
  question: "Menciona algo que podría hacer una persona si pierde su teléfono.",
  answers: [
    { text: "Llamarlo", points: 30 },
    { text: "Usar Buscar mi dispositivo", points: 25 },
    { text: "Preguntar a otras personas", points: 20 },
    { text: "Regresar a los lugares donde estuvo", points: 15 },
    { text: "Bloquearlo", points: 10 }
  ]
},

{
  id: 28,
  category: "Tecnología",
  question: "Menciona algo que probablemente uses todos los días gracias a la tecnología.",
  answers: [
    { text: "Teléfono", points: 30 },
    { text: "Internet", points: 25 },
    { text: "Computadora", points: 20 },
    { text: "Televisión", points: 15 },
    { text: "Audífonos", points: 10 }
  ]
},

{
  id: 29,
  category: "Tecnología",
  question: "Menciona algo que puede ser frustrante cuando usas una computadora.",
  answers: [
    { text: "Que se congele", points: 30 },
    { text: "Internet lento", points: 25 },
    { text: "Que se apague", points: 20 },
    { text: "Que no guarde un archivo", points: 15 },
    { text: "Que aparezca un error", points: 10 }
  ]
},

{
  id: 30,
  category: "Tecnología",
  question: "Menciona algo que probablemente tendrás en una casa inteligente del futuro.",
  answers: [
    { text: "Asistentes de voz", points: 30 },
    { text: "Electrodomésticos inteligentes", points: 25 },
    { text: "Cámaras de seguridad", points: 20 },
    { text: "Luces inteligentes", points: 15 },
    { text: "Robots", points: 10 }
  ]
},

// ==========================================
// 📱 REDES SOCIALES — 6
// ==========================================

{
  id: 31,
  category: "Redes Sociales",
  question: "Menciona algo que una persona podría hacer después de publicar una foto.",
  answers: [
    { text: "Revisar los likes", points: 30 },
    { text: "Leer los comentarios", points: 25 },
    { text: "Compartirla", points: 20 },
    { text: "Revisar quién la vio", points: 15 },
    { text: "Borrarla", points: 10 }
  ]
},

{
  id: 32,
  category: "Redes Sociales",
  question: "Menciona algo que puede hacer que un video se vuelva viral.",
  answers: [
    { text: "Ser gracioso", points: 30 },
    { text: "Ser inesperado", points: 25 },
    { text: "Ser impresionante", points: 20 },
    { text: "Tener una canción popular", points: 15 },
    { text: "Que lo comparta alguien famoso", points: 10 }
  ]
},

{
  id: 33,
  category: "Redes Sociales",
  question: "Menciona una razón por la que alguien podría dejar de seguir una cuenta.",
  answers: [
    { text: "Publica demasiado", points: 30 },
    { text: "El contenido ya no interesa", points: 25 },
    { text: "Contenido ofensivo", points: 20 },
    { text: "Muchos anuncios", points: 15 },
    { text: "La persona cambió de intereses", points: 10 }
  ]
},

{
  id: 34,
  category: "Redes Sociales",
  question: "Menciona algo que una persona podría publicar en una historia.",
  answers: [
    { text: "Una foto", points: 30 },
    { text: "Una canción", points: 25 },
    { text: "Un video", points: 20 },
    { text: "Una comida", points: 15 },
    { text: "Una encuesta", points: 10 }
  ]
},

{
  id: 35,
  category: "Redes Sociales",
  question: "Menciona algo que una persona podría hacer cuando ve una publicación con la que está en desacuerdo.",
  answers: [
    { text: "Ignorarla", points: 30 },
    { text: "Comentar", points: 25 },
    { text: "Dar dislike", points: 20 },
    { text: "Dejar de seguir", points: 15 },
    { text: "Compartirla para discutirla", points: 10 }
  ]
},

{
  id: 36,
  category: "Redes Sociales",
  question: "Menciona algo que probablemente revisas cuando conoces a una persona nueva en internet.",
  answers: [
    { text: "Su foto de perfil", points: 30 },
    { text: "Sus publicaciones", points: 25 },
    { text: "Sus amigos/seguidores", points: 20 },
    { text: "Su biografía", points: 15 },
    { text: "Sus intereses", points: 10 }
  ]
},

// ==========================================
// 🎵 MÚSICA — 6
// ==========================================

{
  id: 37,
  category: "Música",
  question: "Menciona una situación en la que probablemente escuchas música.",
  answers: [
    { text: "Mientras manejas", points: 30 },
    { text: "Mientras haces ejercicio", points: 25 },
    { text: "Mientras haces tarea", points: 20 },
    { text: "En una fiesta", points: 15 },
    { text: "Antes de dormir", points: 10 }
  ]
},

{
  id: 38,
  category: "Música",
  question: "Menciona algo que puede hacer que una canción sea difícil de olvidar.",
  answers: [
    { text: "Un coro pegajoso", points: 30 },
    { text: "Un ritmo llamativo", points: 25 },
    { text: "La letra", points: 20 },
    { text: "La voz del cantante", points: 15 },
    { text: "Escucharla muchas veces", points: 10 }
  ]
},

{
  id: 39,
  category: "Música",
  question: "Menciona algo que probablemente encuentres en un concierto.",
  answers: [
    { text: "Cantante", points: 30 },
    { text: "Público", points: 25 },
    { text: "Luces", points: 20 },
    { text: "Bocinas", points: 15 },
    { text: "Merchandise", points: 10 }
  ]
},

{
  id: 40,
  category: "Música",
  question: "Menciona una razón por la que alguien podría escuchar una canción repetidamente.",
  answers: [
    { text: "Le gusta mucho", points: 30 },
    { text: "La canción es pegajosa", points: 25 },
    { text: "Le recuerda a alguien", points: 20 },
    { text: "Le gusta la letra", points: 15 },
    { text: "Está aprendiendo la canción", points: 10 }
  ]
},

{
  id: 41,
  category: "Música",
  question: "Menciona algo que puede hacer que una persona se emocione al escuchar una canción.",
  answers: [
    { text: "Un recuerdo", points: 30 },
    { text: "La letra", points: 25 },
    { text: "El ritmo", points: 20 },
    { text: "El cantante", points: 15 },
    { text: "El momento en que la escucha", points: 10 }
  ]
},

{
  id: 42,
  category: "Música",
  question: "Menciona algo que una persona podría hacer mientras escucha su música favorita.",
  answers: [
    { text: "Cantar", points: 30 },
    { text: "Bailar", points: 25 },
    { text: "Trabajar o estudiar", points: 20 },
    { text: "Manejar", points: 15 },
    { text: "Relajarse", points: 10 }
  ]
},

// ==========================================
// ✈️ VIAJES — 6
// ==========================================

{
  id: 43,
  category: "Viajes",
  question: "Menciona algo que no debería faltar en una maleta.",
  answers: [
    { text: "Ropa", points: 30 },
    { text: "Cargador", points: 25 },
    { text: "Artículos de higiene", points: 20 },
    { text: "Zapatos", points: 15 },
    { text: "Dinero", points: 10 }
  ]
},

{
  id: 44,
  category: "Viajes",
  question: "Menciona algo que puede arruinar unas vacaciones.",
  answers: [
    { text: "Mal clima", points: 30 },
    { text: "Perder el vuelo", points: 25 },
    { text: "Perder el equipaje", points: 20 },
    { text: "Quedarse sin dinero", points: 15 },
    { text: "Enfermarse", points: 10 }
  ]
},

{
  id: 45,
  category: "Viajes",
  question: "Menciona algo que probablemente haces al llegar a un destino nuevo.",
  answers: [
    { text: "Tomar fotos", points: 30 },
    { text: "Buscar comida", points: 25 },
    { text: "Conocer el lugar", points: 20 },
    { text: "Ir al hotel", points: 15 },
    { text: "Comprar recuerdos", points: 10 }
  ]
},

{
  id: 46,
  category: "Viajes",
  question: "Si pudieras viajar a cualquier lugar, ¿qué tipo de destino escogerías?",
  answers: [
    { text: "Una playa", points: 30 },
    { text: "Una ciudad famosa", points: 25 },
    { text: "Un lugar con nieve", points: 20 },
    { text: "Un lugar con mucha naturaleza", points: 15 },
    { text: "Otro país", points: 10 }
  ]
},

{
  id: 47,
  category: "Viajes",
  question: "Menciona algo que probablemente compres como recuerdo durante un viaje.",
  answers: [
    { text: "Imán", points: 30 },
    { text: "Ropa", points: 25 },
    { text: "Postales", points: 20 },
    { text: "Comida local", points: 15 },
    { text: "Algo típico del lugar", points: 10 }
  ]
},

{
  id: 48,
  category: "Viajes",
  question: "Menciona algo que puedes hacer durante un viaje largo en automóvil.",
  answers: [
    { text: "Escuchar música", points: 30 },
    { text: "Dormir", points: 25 },
    { text: "Usar el teléfono", points: 20 },
    { text: "Hablar con los pasajeros", points: 15 },
    { text: "Mirar por la ventana", points: 10 }
  ]
},

// ==========================================
// 💰 DINERO — 6
// ==========================================

{
  id: 49,
  category: "Dinero",
  question: "Menciona algo en lo que un joven podría gastar su primer sueldo.",
  answers: [
    { text: "Ropa", points: 30 },
    { text: "Comida", points: 25 },
    { text: "Tecnología", points: 20 },
    { text: "Salir con amigos", points: 15 },
    { text: "Ahorrarlo", points: 10 }
  ]
},

{
  id: 50,
  category: "Dinero",
  question: "Menciona algo que una persona podría comprar y arrepentirse después.",
  answers: [
    { text: "Ropa", points: 30 },
    { text: "Tecnología", points: 25 },
    { text: "Videojuegos", points: 20 },
    { text: "Comida", points: 15 },
    { text: "Algo que estaba en oferta", points: 10 }
  ]
},

{
  id: 51,
  category: "Dinero",
  question: "Si recibieras $1,000 inesperadamente, ¿qué harías con ellos?",
  answers: [
    { text: "Ahorrarlos", points: 30 },
    { text: "Comprar algo que quiero", points: 25 },
    { text: "Viajar", points: 20 },
    { text: "Ayudar a mi familia", points: 15 },
    { text: "Invertirlos", points: 10 }
  ]
},

{
  id: 52,
  category: "Dinero",
  question: "Menciona algo que puede hacer que una persona gaste más dinero del que pensaba.",
  answers: [
    { text: "Ofertas", points: 30 },
    { text: "Comer fuera", points: 25 },
    { text: "Compras impulsivas", points: 20 },
    { text: "Salir con amigos", points: 15 },
    { text: "Compras en internet", points: 10 }
  ]
},

{
  id: 53,
  category: "Dinero",
  question: "Menciona algo para lo que una persona joven podría empezar a ahorrar.",
  answers: [
    { text: "Un automóvil", points: 30 },
    { text: "Una casa", points: 25 },
    { text: "Universidad", points: 20 },
    { text: "Un viaje", points: 15 },
    { text: "Un teléfono", points: 10 }
  ]
},

{
  id: 54,
  category: "Dinero",
  question: "Menciona algo que probablemente considerarías antes de comprar algo caro.",
  answers: [
    { text: "El precio", points: 30 },
    { text: "Si realmente lo necesito", points: 25 },
    { text: "La calidad", points: 20 },
    { text: "Las reseñas", points: 15 },
    { text: "Si hay algo más barato", points: 10 }
  ]
},

// ==========================================
// 🎭 SITUACIONES — 6
// ==========================================

{
  id: 55,
  category: "Situaciones",
  question: "¿Qué harías si descubrieras que mañana tienes el día completamente libre?",
  answers: [
    { text: "Dormir hasta tarde", points: 30 },
    { text: "Salir con amigos", points: 25 },
    { text: "Jugar videojuegos", points: 20 },
    { text: "Ver películas o series", points: 15 },
    { text: "Ir de compras", points: 10 }
  ]
},

{
  id: 56,
  category: "Situaciones",
  question: "¿Qué harías si encontraras una cartera con dinero en la calle?",
  answers: [
    { text: "Buscar al dueño", points: 30 },
    { text: "Entregarla a la policía", points: 25 },
    { text: "Revisar si tiene identificación", points: 20 },
    { text: "Preguntar cerca si alguien la perdió", points: 15 },
    { text: "No tocarla", points: 10 }
  ]
},

{
  id: 57,
  category: "Situaciones",
  question: "¿Qué harías si pudieras viajar gratis a cualquier lugar mañana?",
  answers: [
    { text: "Ir a la playa", points: 30 },
    { text: "Visitar otro país", points: 25 },
    { text: "Ir a una ciudad famosa", points: 20 },
    { text: "Visitar a familiares", points: 15 },
    { text: "Ir a un lugar con nieve", points: 10 }
  ]
},

{
  id: 58,
  category: "Situaciones",
  question: "¿Qué harías si tu teléfono desapareciera durante una fiesta?",
  answers: [
    { text: "Llamarlo", points: 30 },
    { text: "Buscarlo", points: 25 },
    { text: "Preguntar a mis amigos", points: 20 },
    { text: "Usar la función de ubicación", points: 15 },
    { text: "Bloquearlo", points: 10 }
  ]
},

{
  id: 59,
  category: "Situaciones",
  question: "¿Qué harías si pudieras conocer a cualquier persona famosa?",
  answers: [
    { text: "Tomarme una foto", points: 30 },
    { text: "Hacerle preguntas", points: 25 },
    { text: "Pedirle un autógrafo", points: 20 },
    { text: "Hablar sobre su trabajo", points: 15 },
    { text: "Pedirle un consejo", points: 10 }
  ]
},

{
  id: 60,
  category: "Situaciones",
  question: "¿Qué harías si tuvieras que pasar una semana sin internet?",
  answers: [
    { text: "Pasar más tiempo con amigos", points: 30 },
    { text: "Jugar videojuegos sin internet", points: 25 },
    { text: "Ver televisión", points: 20 },
    { text: "Leer", points: 15 },
    { text: "Hacer actividades al aire libre", points: 10 }
  ]
},

// ==========================================
// 🧠 RAZONAMIENTO — 6
// ==========================================

{
  id: 61,
  category: "Razonamiento",
  question: "Si pudieras aprender instantáneamente una habilidad, ¿cuál escogerías?",
  answers: [
    { text: "Hablar otro idioma", points: 30 },
    { text: "Tocar un instrumento", points: 25 },
    { text: "Programar", points: 20 },
    { text: "Cocinar muy bien", points: 15 },
    { text: "Ser excelente en un deporte", points: 10 }
  ]
},

{
  id: 62,
  category: "Razonamiento",
  question: "Si pudieras recibir $500 ahora o $1,000 dentro de un año, ¿qué escogerías?",
  answers: [
    { text: "$500 ahora", points: 30 },
    { text: "$1,000 dentro de un año", points: 25 },
    { text: "Dependería de la situación", points: 20 },
    { text: "Intentaría invertir los $500", points: 15 },
    { text: "No podría decidir", points: 10 }
  ]
},

{
  id: 63,
  category: "Razonamiento",
  question: "Si pudieras eliminar una pequeña molestia de la vida diaria, ¿cuál escogerías?",
  answers: [
    { text: "Tráfico", points: 30 },
    { text: "Esperar en filas", points: 25 },
    { text: "Batería baja", points: 20 },
    { text: "Perder cosas", points: 15 },
    { text: "Tener que limpiar", points: 10 }
  ]
},

{
  id: 64,
  category: "Razonamiento",
  question: "Si solo pudieras conservar tres aplicaciones en tu teléfono, ¿cuál sería indispensable?",
  answers: [
    { text: "Mensajería", points: 30 },
    { text: "Mapas", points: 25 },
    { text: "Música", points: 20 },
    { text: "Redes sociales", points: 15 },
    { text: "Videos", points: 10 }
  ]
},

{
  id: 65,
  category: "Razonamiento",
  question: "Si pudieras cambiar una cosa de tu rutina para tener más tiempo libre, ¿qué cambiarías?",
  answers: [
    { text: "Usar menos el teléfono", points: 30 },
    { text: "Organizar mejor mi tiempo", points: 25 },
    { text: "Dormir menos", points: 20 },
    { text: "Hacer las cosas más rápido", points: 15 },
    { text: "Eliminar una actividad", points: 10 }
  ]
},

{
  id: 66,
  category: "Razonamiento",
  question: "Si pudieras conocer una sola respuesta sobre tu futuro, ¿qué te gustaría saber?",
  answers: [
    { text: "Qué trabajo tendré", points: 30 },
    { text: "Dónde viviré", points: 25 },
    { text: "Si cumpliré mis metas", points: 20 },
    { text: "Cuánto dinero tendré", points: 15 },
    { text: "Qué lugares conoceré", points: 10 }
  ]
},

// ==========================================
// 🤣 GRACIOSAS — 6
// ==========================================

{
  id: 67,
  category: "Graciosas",
  question: "¿Qué harías si tu mascota pudiera hablar durante 24 horas?",
  answers: [
    { text: "Preguntarle qué piensa de mí", points: 30 },
    { text: "Preguntarle qué hace cuando estoy fuera", points: 25 },
    { text: "Preguntarle qué quiere comer", points: 20 },
    { text: "Grabar todo", points: 15 },
    { text: "Preguntarle si entiende lo que digo", points: 10 }
  ]
},

{
  id: 68,
  category: "Graciosas",
  question: "¿Qué harías si despertaras y descubrieras que todos pueden escuchar tus pensamientos?",
  answers: [
    { text: "Intentar no pensar en nada raro", points: 30 },
    { text: "No salir de casa", points: 25 },
    { text: "Preguntar si pueden escucharme", points: 20 },
    { text: "Actuar como si nada", points: 15 },
    { text: "Intentar leer los pensamientos de otros", points: 10 }
  ]
},

{
  id: 69,
  category: "Graciosas",
  question: "¿Qué harías si accidentalmente enviaras un mensaje sobre alguien a esa misma persona?",
  answers: [
    { text: "Entrar en pánico", points: 30 },
    { text: "Intentar borrarlo", points: 25 },
    { text: "Decir que fue una broma", points: 20 },
    { text: "Explicar la situación", points: 15 },
    { text: "Apagar el teléfono", points: 10 }
  ]
},

{
  id: 70,
  category: "Graciosas",
  question: "¿Qué harías si una canción comenzara a sonar cada vez que entras a un lugar?",
  answers: [
    { text: "Elegir una canción épica", points: 30 },
    { text: "Elegir una canción divertida", points: 25 },
    { text: "Bailar cada vez que suene", points: 20 },
    { text: "Intentar apagarla", points: 15 },
    { text: "Usarla para llamar la atención", points: 10 }
  ]
},

{
  id: 71,
  category: "Graciosas",
  question: "¿Qué harías si durante un día solo pudieras hablar cantando?",
  answers: [
    { text: "Cantar todo lo que digo", points: 30 },
    { text: "Hablar lo menos posible", points: 25 },
    { text: "Convertirlo en un musical", points: 20 },
    { text: "Usar señas", points: 15 },
    { text: "Reírme de la situación", points: 10 }
  ]
},

{
  id: 72,
  category: "Graciosas",
  question: "¿Qué harías si descubrieras que tu vecino es un superhéroe?",
  answers: [
    { text: "Preguntarle si es verdad", points: 30 },
    { text: "Pedirle que me muestre sus poderes", points: 25 },
    { text: "Mantenerlo en secreto", points: 20 },
    { text: "Tomarle una foto", points: 15 },
    { text: "Pedirle que me lleve a volar", points: 10 }
  ]
},

// ==========================================
// 🏠 VIDA COTIDIANA — 6
// ==========================================

{
  id: 73,
  category: "Vida Cotidiana",
  question: "Menciona algo que probablemente haces cuando llegas a casa después de un día largo.",
  answers: [
    { text: "Comer", points: 30 },
    { text: "Usar el teléfono", points: 25 },
    { text: "Cambiarme de ropa", points: 20 },
    { text: "Ver televisión o videos", points: 15 },
    { text: "Dormir", points: 10 }
  ]
},

{
  id: 74,
  category: "Vida Cotidiana",
  question: "Menciona algo que una persona suele hacer antes de salir de casa.",
  answers: [
    { text: "Revisar el teléfono", points: 30 },
    { text: "Arreglarse", points: 25 },
    { text: "Buscar las llaves", points: 20 },
    { text: "Revisar que lleva todo", points: 15 },
    { text: "Comer", points: 10 }
  ]
},

{
  id: 75,
  category: "Vida Cotidiana",
  question: "Menciona algo que probablemente haces cuando estás aburrido.",
  answers: [
    { text: "Usar el teléfono", points: 30 },
    { text: "Ver videos", points: 25 },
    { text: "Escuchar música", points: 20 },
    { text: "Jugar videojuegos", points: 15 },
    { text: "Dormir", points: 10 }
  ]
},

{
  id: 76,
  category: "Vida Cotidiana",
  question: "Menciona algo que puede mejorar rápidamente tu estado de ánimo.",
  answers: [
    { text: "Comer algo que me gusta", points: 30 },
    { text: "Escuchar música", points: 25 },
    { text: "Hablar con un amigo", points: 20 },
    { text: "Ver algo divertido", points: 15 },
    { text: "Salir a caminar", points: 10 }
  ]
},

{
  id: 77,
  category: "Vida Cotidiana",
  question: "Menciona algo que probablemente haces antes de dormir.",
  answers: [
    { text: "Usar el teléfono", points: 30 },
    { text: "Cepillarme los dientes", points: 25 },
    { text: "Ver videos o series", points: 20 },
    { text: "Escuchar música", points: 15 },
    { text: "Preparar la ropa para mañana", points: 10 }
  ]
},

{
  id: 78,
  category: "Vida Cotidiana",
  question: "Menciona algo que probablemente llevas contigo cuando sales de casa.",
  answers: [
    { text: "Teléfono", points: 30 },
    { text: "Llaves", points: 25 },
    { text: "Dinero o tarjeta", points: 20 },
    { text: "Audífonos", points: 15 },
    { text: "Botella de agua", points: 10 }
  ]
}
];




/* =========================================================
   STATE
========================================================= */

let currentQuestion = null;

let currentTeam = "A";
let startingTeam = "A";
let stealingTeam = "B";

let scoreA = 0;
let scoreB = 0;

let roundPoints = 0;

let strikes = 0;
let stealStrikes = 0;

let revealedAnswers = [];

let usedQuestions = new Set();

let selectedCategory = "Todas";

let gameFinished = false;
let stealMode = false;

let timerInterval = null;
let timerValue = 12;

const MAX_TIME = 12;


/* =========================================================
   DOM
========================================================= */

const startScreen = document.getElementById("startScreen");
const questionScreen = document.getElementById("questionScreen");
const gameScreen = document.getElementById("gameScreen");

const startBtn = document.getElementById("startBtn");
const backToStartBtn = document.getElementById("backToStartBtn");

const questionList = document.getElementById("questionList");
const searchInput = document.getElementById("searchInput");

const categoryButtons = document.querySelectorAll(".category-btn");

const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answers");

const scoreAElement = document.getElementById("scoreA");
const scoreBElement = document.getElementById("scoreB");

const roundPointsElement = document.getElementById("roundPoints");
const currentTurnElement = document.getElementById("currentTurn");

const teamABox = document.getElementById("teamABox");
const teamBBox = document.getElementById("teamBBox");

const strike1 = document.getElementById("strike1");
const strike2 = document.getElementById("strike2");
const strike3 = document.getElementById("strike3");

const correctBtn = document.getElementById("correctBtn");
const strikeBtn = document.getElementById("strikeBtn");
const resetRoundBtn = document.getElementById("resetRoundBtn");
const changeQuestionBtn = document.getElementById("changeQuestionBtn");

const timer = document.getElementById("timer");
const timerSeconds = document.getElementById("timer-seconds");

const stealModal = document.getElementById("stealModal");
const roundModal = document.getElementById("roundModal");

const originalTeamName = document.getElementById("originalTeamName");
const stealingTeamName = document.getElementById("stealingTeamName");
const stealPoints = document.getElementById("stealPoints");

const returnToGameBtn = document.getElementById("returnToGameBtn");
const giveStealPointsBtn = document.getElementById("giveStealPointsBtn");
const keepPointsBtn = document.getElementById("keepPointsBtn");

const roundResultIcon = document.getElementById("roundResultIcon");
const roundResultTitle = document.getElementById("roundResultTitle");
const roundResultText = document.getElementById("roundResultText");
const roundFinalPoints = document.getElementById("roundFinalPoints");

const nextQuestionBtn = document.getElementById("nextQuestionBtn");

const switchTeamBtn = document.getElementById("switchTeamBtn");


/* =========================================================
   AUDIO
   Uses Web Audio API.
========================================================= */

let audioContext = null;

function getAudioContext() {

  if (!audioContext) {
    audioContext = new (
      window.AudioContext ||
      window.webkitAudioContext
    )();
  }

  return audioContext;
}


function playTone(
  frequency,
  duration = 0.12,
  type = "sine",
  volume = 0.08
) {

  try {

    const ctx = getAudioContext();

    if (ctx.state === "suspended") {
      ctx.resume();
    }

    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();

    oscillator.type = type;
    oscillator.frequency.value = frequency;

    gain.gain.setValueAtTime(volume, ctx.currentTime);

    gain.gain.exponentialRampToValueAtTime(
      0.001,
      ctx.currentTime + duration
    );

    oscillator.connect(gain);
    gain.connect(ctx.destination);

    oscillator.start();

    oscillator.stop(
      ctx.currentTime + duration
    );

  } catch (error) {
    console.warn("Audio no disponible.");
  }
}


function soundStart() {
  playTone(440, 0.12);
  setTimeout(() => playTone(660, 0.16), 100);
}


function soundButton() {
  playTone(350, 0.07);
}


function soundReveal() {
  playTone(520, 0.1);
  setTimeout(() => playTone(700, 0.12), 90);
}


function soundCorrect() {
  playTone(600, 0.1);
  setTimeout(() => playTone(850, 0.18), 100);
}


function soundStrike() {
  playTone(130, 0.35, "sawtooth", 0.12);
  setTimeout(() => playTone(90, 0.35, "sawtooth", 0.1), 100);
}


function soundThreeStrikes() {
  playTone(150, 0.25, "sawtooth", 0.12);

  setTimeout(() => {
    playTone(120, 0.25, "sawtooth", 0.12);
  }, 250);

  setTimeout(() => {
    playTone(90, 0.45, "sawtooth", 0.12);
  }, 500);
}


function soundCountdown() {
  playTone(700, 0.08);
}


function soundTimeUp() {
  playTone(100, 0.4, "sawtooth", 0.12);
  setTimeout(() => playTone(80, 0.4, "sawtooth", 0.1), 120);
}


function soundSteal() {
  playTone(300, 0.12);
  setTimeout(() => playTone(450, 0.12), 130);
  setTimeout(() => playTone(600, 0.2), 260);
}


function soundWin() {
  playTone(500, 0.12);
  setTimeout(() => playTone(650, 0.12), 120);
  setTimeout(() => playTone(800, 0.2), 240);
}


/* =========================================================
   SCREEN MANAGEMENT
========================================================= */

function showScreen(screen) {

  startScreen.classList.remove("active");
  questionScreen.classList.remove("active");
  gameScreen.classList.remove("active");

  screen.classList.add("active");
}


/* =========================================================
   SWITCH TEAM
   FIX: se quitó el bloque suelto con `event`/`return` fuera
   de una función (causaba SyntaxError y rompía todo el script).
   La tecla "T" ahora se maneja dentro del keydown handler.
========================================================= */

function switchTeam() {

  if (gameFinished) {
    return;
  }

  // No permitir cambiar manualmente durante el robo
  if (stealMode) {
    return;
  }

  currentTeam =
    currentTeam === "A"
      ? "B"
      : "A";

  updateTurnDisplay();

  soundButton();

  restartTimer();

}

switchTeamBtn.addEventListener(
  "click",
  () => {
    switchTeam();
  }
);


/* =========================================================
   MODAL MANAGEMENT
========================================================= */

function closeModal() {

  stealModal.classList.add("hidden");
  roundModal.classList.add("hidden");
}


/* =========================================================
   QUESTION LIST
========================================================= */

function renderQuestionList() {

  const searchTerm =
    searchInput.value
      .trim()
      .toLowerCase();

  questionList.innerHTML = "";

  const filteredQuestions =
    questions.filter(question => {

      const categoryMatch =
        selectedCategory === "Todas" ||
        question.category === selectedCategory;

      const searchMatch =
        question.question
          .toLowerCase()
          .includes(searchTerm);

      return categoryMatch && searchMatch;

    });


  filteredQuestions.forEach(question => {

    const card =
      document.createElement("div");

    card.className = "question-card";

    card.innerHTML = `
      <div class="question-number">
        PREGUNTA ${question.id}
      </div>

      <div class="question-category">
        ${question.category}
      </div>

      <h3>
        ${question.question}
      </h3>

      <button class="play-question-btn">
        JUGAR
      </button>
    `;

    const playButton =
      card.querySelector(".play-question-btn");

    playButton.addEventListener(
      "click",
      () => {

        soundButton();

        startQuestion(question);

      }
    );

    questionList.appendChild(card);

  });

}


categoryButtons.forEach(button => {

  button.addEventListener(
    "click",
    () => {

      soundButton();

      categoryButtons.forEach(btn => {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      selectedCategory =
        button.dataset.category;

      renderQuestionList();

    }
  );

});


searchInput.addEventListener(
  "input",
  renderQuestionList
);


/* =========================================================
   START GAME
========================================================= */

startBtn.addEventListener(
  "click",
  () => {

    soundStart();

    showScreen(questionScreen);

    renderQuestionList();

  }
);


backToStartBtn.addEventListener(
  "click",
  () => {

    soundButton();

    showScreen(startScreen);

  }
);


/* =========================================================
   START QUESTION
========================================================= */

function startQuestion(question) {

  stopTimer();

  currentQuestion = question;

  usedQuestions.add(question.id);

  startingTeam = "A";
  currentTeam = "A";
  stealingTeam = "B";

  gameFinished = false;
  stealMode = false;

  resetRoundState();

  questionText.textContent =
    question.question;

  renderAnswers();

  updateScores();
  updateTurnDisplay();

  showScreen(gameScreen);

  startTimer();

}


/* =========================================================
   RESET ROUND STATE
========================================================= */

function resetRoundState() {

  stopTimer();

  roundPoints = 0;

  strikes = 0;

  stealStrikes = 0;

  revealedAnswers = [];

  currentTeam = startingTeam;

  stealMode = false;

  gameFinished = false;

  closeModal();

  strike1.classList.remove("active");
  strike2.classList.remove("active");
  strike3.classList.remove("active");

  switchTeamBtn.disabled = false;

  timerValue = MAX_TIME;

  // Añade esta línea dentro de function resetRoundState()
currentMultiplier = 1;
multButtons.forEach(b => b.classList.remove("active"));
multButtons[0].classList.add("active");
  
  updateTimerDisplay();
  updateScores();
  updateTurnDisplay();
  

}


/* =========================================================
   RENDER ANSWERS
========================================================= */

function renderAnswers() {

  answersContainer.innerHTML = "";

  currentQuestion.answers.forEach(
    (answer, index) => {

      const card =
        document.createElement("div");

      card.className =
        "answer-card hidden-answer";

      card.dataset.index = index;

      card.innerHTML = `
        <span class="answer-hidden-text">
          ${index + 1}
        </span>
      `;

      card.addEventListener(
        "click",
        () => revealAnswer(index)
      );

      answersContainer.appendChild(card);

    }
  );

}


/* =========================================================
   REVEAL ANSWER
========================================================= */

function revealAnswer(index) {

  if (gameFinished) {
    return;
  }

  if (revealedAnswers.includes(index)) {
    return;
  }

  revealedAnswers.push(index);

  const answer =
    currentQuestion.answers[index];

  const card =
    answersContainer.children[index];

  card.className =
    "answer-card revealed";

  card.innerHTML = `
    <span class="answer-number">
      ${index + 1}
    </span>

    <span class="answer-text">
      ${answer.text}
    </span>

    <span class="answer-points">
      ${answer.points}
    </span>
  `;

  roundPoints += answer.points;

  updateScores();

  soundReveal();

  restartTimer();

}


/* =========================================================
   CORRECT ANSWER BUTTON
   FIX: antes no otorgaba puntos ni terminaba la ronda.
   Ahora suma roundPoints al equipo correspondiente
   (el equipo en turno, o el que roba si stealMode está activo)
   y muestra el modal de fin de ronda.
========================================================= */

function correctAnswer() {
  if (gameFinished) return;

  soundCorrect();
  stopTimer();

  const winningTeam = stealMode ? stealingTeam : currentTeam;
  const finalPoints = roundPoints * currentMultiplier;

  if (winningTeam === "A") {
    scoreA += finalPoints;
  } else {
    scoreB += finalPoints;
  }

  updateScores();
  finishRound(getTeamName(winningTeam), finalPoints);
}


/* =========================================================
   STRIKE
========================================================= */

function addStrike(fromTimer = false) {

  if (gameFinished) {
    return;
  }

  stopTimer();

  soundStrike();


  /* NORMAL PLAY */

  if (!stealMode) {

    strikes++;

    showStrike(strikes);

    if (strikes >= 3) {

      soundThreeStrikes();

      openStealScreen();

      return;

    }

    startTimer();

    return;
  }


  /* STEAL ATTEMPT */

  stealStrikes++;

  showStealStrike();

  openStealDecision();

}


/* =========================================================
   SHOW NORMAL STRIKE
========================================================= */

function showStrike(number) {

  if (number === 1) {
    strike1.classList.add("active");
  }

  if (number === 2) {
    strike2.classList.add("active");
  }

  if (number === 3) {
    strike3.classList.add("active");
  }

}


/* =========================================================
   SHOW STEAL STRIKE
========================================================= */

function showStealStrike() {

  strike1.classList.add("active");

}


/* =========================================================
   STEAL SCREEN
========================================================= */

function openStealScreen() {

  stopTimer();

  gameFinished = true;

  stealMode = false;

  originalTeamName.textContent =
    getTeamName(startingTeam);

  stealingTeamName.textContent =
    getTeamName(stealingTeam);

  stealPoints.textContent =
    roundPoints;

  returnToGameBtn.style.display =
    "block";

  giveStealPointsBtn.style.display =
    "none";

  keepPointsBtn.style.display =
    "none";

  stealModal.classList.remove("hidden");

  soundSteal();

}


/* =========================================================
   RETURN TO GAME FOR STEAL
========================================================= */

returnToGameBtn.addEventListener(
  "click",
  () => {

    soundButton();

    stealModal.classList.add("hidden");

    gameFinished = false;

    stealMode = true;

    currentTeam = stealingTeam;

    stealStrikes = 0;

    switchTeamBtn.disabled = true;

    updateTurnDisplay();

    startTimer();

  }
);


/* =========================================================
   STEAL DECISION
========================================================= */

function openStealDecision() {

  stopTimer();

  gameFinished = true;

  stealPoints.textContent =
    roundPoints;

  returnToGameBtn.style.display =
    "none";

  giveStealPointsBtn.style.display =
    "block";

  keepPointsBtn.style.display =
    "block";

  stealModal.classList.remove("hidden");

}


/* =========================================================
   GIVE STEAL POINTS
========================================================= */

// DAR PUNTOS AL OTRO EQUIPO
giveStealPointsBtn.addEventListener("click", () => {
  soundCorrect();

  const finalPoints = roundPoints * currentMultiplier;

  if (stealingTeam === "A") {
    scoreA += finalPoints;
  } else {
    scoreB += finalPoints;
  }

  updateScores();
  closeModal();
  finishRound(getTeamName(stealingTeam), finalPoints);
});

// MANTENER PUNTOS EN EL EQUIPO ORIGINAL
keepPointsBtn.addEventListener("click", () => {
  soundButton();

  const finalPoints = roundPoints * currentMultiplier;

  if (startingTeam === "A") {
    scoreA += finalPoints;
  } else {
    scoreB += finalPoints;
  }

  updateScores();
  closeModal();
  finishRound(getTeamName(startingTeam), finalPoints);
});


/* =========================================================
   KEEP POINTS WITH ORIGINAL TEAM
========================================================= */

keepPointsBtn.addEventListener(
  "click",
  () => {

    soundButton();

    if (startingTeam === "A") {
      scoreA += roundPoints;
    } else {
      scoreB += roundPoints;
    }

    updateScores();

    closeModal();

    finishRound(
      getTeamName(startingTeam),
      roundPoints
    );

  }
);


/* =========================================================
   FINISH ROUND
========================================================= */

function finishRound(winningTeam, points) {

  stopTimer();

  gameFinished = true;

  stealMode = false;

  switchTeamBtn.disabled = false;

  roundFinalPoints.textContent =
    points;

  roundResultTitle.textContent =
    "RONDA TERMINADA";

  roundResultText.textContent =
    `${winningTeam} recibe ${points} puntos.`;

  roundResultIcon.textContent =
    "✓";

  roundModal.classList.remove("hidden");

  soundWin();

}


/* =========================================================
   NEXT QUESTION
========================================================= */

nextQuestionBtn.addEventListener(
  "click",
  () => {

    soundButton();

    closeModal();

    showScreen(questionScreen);

    renderQuestionList();

  }
);


/* =========================================================
   RESET CURRENT ROUND
========================================================= */

resetRoundBtn.addEventListener(
  "click",
  () => {

    soundButton();

    resetRoundState();

    renderAnswers();

    startTimer();

  }
);


/* =========================================================
   CHANGE QUESTION
========================================================= */

changeQuestionBtn.addEventListener(
  "click",
  () => {

    soundButton();

    stopTimer();

    closeModal();

    showScreen(questionScreen);

    renderQuestionList();

  }
);


/* =========================================================
   STRIKE BUTTON
========================================================= */

strikeBtn.addEventListener(
  "click",
  () => {

    addStrike(false);

  }
);


/* =========================================================
   CORRECT BUTTON
========================================================= */

correctBtn.addEventListener(
  "click",
  () => {

    correctAnswer();

  }
);


/* =========================================================
   TIMER
========================================================= */

function startTimer() {

  stopTimer();

  if (gameFinished) {
    return;
  }

  timerValue = MAX_TIME;

  updateTimerDisplay();

  timerInterval =
    setInterval(
      () => {

        timerValue--;

        updateTimerDisplay();

        if (
          timerValue <= 5 &&
          timerValue > 0
        ) {
          soundCountdown();
        }


        if (timerValue <= 0) {

          stopTimer();

          soundTimeUp();

          addStrike(true);

        }

      },
      1000
    );

}


function restartTimer() {

  if (gameFinished) {
    return;
  }

  startTimer();

}


function stopTimer() {

  if (timerInterval !== null) {

    clearInterval(timerInterval);

    timerInterval = null;

  }

}


function updateTimerDisplay() {

  timerSeconds.textContent =
    timerValue;

  timer.classList.remove(
    "warning",
    "danger"
  );

  if (
    timerValue <= 5 &&
    timerValue > 2
  ) {

    timer.classList.add(
      "warning"
    );

  }

  if (timerValue <= 2) {

    timer.classList.add(
      "danger"
    );

  }

}


/* =========================================================
   SCORES
========================================================= */

function updateScores() {
  scoreAElement.textContent = scoreA;
  scoreBElement.textContent = scoreB;

  const calculatedPoints = roundPoints * currentMultiplier;
  roundPointsElement.textContent = `${calculatedPoints} PUNTOS ${currentMultiplier > 1 ? `(x${currentMultiplier})` : ''}`;
}


/* =========================================================
   TEAM DISPLAY
========================================================= */

function updateTurnDisplay() {

  const teamName =
    getTeamName(currentTeam);

  currentTurnElement.textContent =
    `TURNO: ${teamName}`;

  teamABox.classList.remove(
    "active-team"
  );

  teamBBox.classList.remove(
    "active-team"
  );

  if (currentTeam === "A") {

    teamABox.classList.add(
      "active-team"
    );

  } else {

    teamBBox.classList.add(
      "active-team"
    );

  }

}


function getTeamName(team) {

  if (team === "A") {
    return "ESTUDIANTES";
  }

  return "MAESTROS";

}


/* =========================================================
   KEYBOARD CONTROLS
========================================================= */

document.addEventListener(
  "keydown",
  event => {

    const modalOpen =
      !stealModal.classList.contains("hidden") ||
      !roundModal.classList.contains("hidden");

    if (modalOpen) {
      return;
    }

    if (
      gameScreen.classList.contains("active") === false
    ) {
      return;
    }


    /* 1–5 = REVEAL */

    if (
      event.key >= "1" &&
      event.key <= "5"
    ) {

      const index =
        Number(event.key) - 1;

      if (
        currentQuestion &&
        index < currentQuestion.answers.length
      ) {
        revealAnswer(index);
      }

      return;
    }


    /* SPACE = NEXT HIDDEN ANSWER */

    if (event.code === "Space") {

      event.preventDefault();

      if (!currentQuestion) {
        return;
      }

      const nextIndex =
        currentQuestion.answers.findIndex(
          (_, index) =>
            !revealedAnswers.includes(index)
        );

      if (nextIndex !== -1) {
        revealAnswer(nextIndex);
      }

      return;
    }


    /* X = STRIKE */

    if (
      event.key.toLowerCase() === "x"
    ) {

      addStrike(false);

      return;
    }


    /* A = CORRECT */

    if (
      event.key.toLowerCase() === "a"
    ) {

      correctAnswer();

      return;
    }


    /* T = CAMBIAR EQUIPO
       FIX: movido aquí desde el bloque suelto que rompía el script. */

    if (
      event.key.toLowerCase() === "t"
    ) {

      switchTeam();

      return;
    }


    /* R = RESET */

    if (
      event.key.toLowerCase() === "r"
    ) {

      soundButton();

      resetRoundState();

      if (currentQuestion) {
        renderAnswers();
        startTimer();
      }

      return;
    }


    /* Q = QUESTIONS */

    if (
      event.key.toLowerCase() === "q"
    ) {

      soundButton();

      stopTimer();

      closeModal();

      showScreen(questionScreen);

      renderQuestionList();

    }

  }
);

/* =========================================================
   MULTIPLIER
========================================================= */

let currentMultiplier = 1;

const multButtons = document.querySelectorAll(".mult-btn");

multButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    soundButton();
    currentMultiplier = Number(btn.dataset.mult);

    multButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    updateScores();
  });
});



/* =========================================================
   INITIAL SETUP
========================================================= */

updateScores();
updateTurnDisplay();
updateTimerDisplay();
renderQuestionList();
