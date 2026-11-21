// ============================================
// DATOS DEL NEGOCIO
// Oficio y Piedra · Estudio de arquitectura
// ============================================

export const negocio = {
    negocio: {
        nombre: "Oficio y Piedra",
        tipo: "Estudio de arquitectura especializado en rehabilitación de vivienda tradicional",
        eslogan: "Casas que ya contaban algo. Nosotros solo las escuchamos.",
        descripcionCorta: "Estudio de arquitectura en Briones (La Rioja) especializado en rehabilitar casas de adobe, piedra y madera. Sin obra nueva. Sin demoliciones. Solo oficio.",
        descripcionLarga: "Oficio y Piedra es un estudio de arquitectura fundado en 2018 por Clara Mendieta y Andrés Sáenz, en una casa de piedra del casco antiguo de Briones. Trabajamos exclusivamente en rehabilitación de vivienda tradicional: casas de adobe, muros de mampostería, entramados de madera y cubiertas de teja árabe. No hacemos obra nueva. No demolernos para construir desde cero. Creemos que una casa antigua tiene más que decir que cualquier plano sobre un solar vacío. Nuestro trabajo es escuchar lo que ya está, entender cómo se construyó, y devolverle la vida sin borrar su historia. Cada proyecto es una conversación con el edificio, con el pueblo y con la familia que lo va a habitar. Trabajamos en toda La Rioja, Álava y Navarra, y en proyectos puntuales en el resto de España.",
        añoFundacion: 2018,
        ciudad: "Briones",
        provincia: "La Rioja"
    },
    contacto: {
        direccion: "Calle Mayor, 14, 26330 Briones, La Rioja",
        telefono: "+34 941 32 17 08",
        email: "hola@oficioypiedra.es",
        redesSociales: {
            instagram: "@oficioypiedra",
            facebook: "",
            tiktok: ""
        },
        horario: {
            lunes: "9:00 - 14:00 / 16:00 - 19:00",
            martes: "9:00 - 14:00 / 16:00 - 19:00",
            miercoles: "9:00 - 14:00 / 16:00 - 19:00",
            jueves: "9:00 - 14:00 / 16:00 - 19:00",
            viernes: "9:00 - 14:00",
            sabado: "Cerrado",
            domingo: "Cerrado"
        },
        googleMaps: {
            latitud: 42.5889,
            longitud: -2.7831,
            enlace: "https://maps.google.com/?q=Calle+Mayor+14+Briones+La+Rioja"
        }
    },
    diseno: {
        colores: {
            primario: "#B85C38",
            secundario: "#6B7A5A",
            fondo: "#F4EFE8",
            texto: "#2A2620"
        },
        tipografia: {
            titulos: "Fraunces",
            cuerpo: "Inter"
        },
        estiloVisual: "Editorial y artesanal. Paleta terracota, piedra y oliva. Tipografía serif con carácter (Fraunces) para titulares, sans neutra (Inter) para cuerpo. Mucho espacio en blanco, fotografías de gran formato de casas de piedra y madera, y un aire de revista de arquitectura de pueblo. Sin bordes redondeados, líneas finas, textura de papel.",
        referencias: [
            "Revistas de arquitectura tradicional y rehabilitación",
            "Estudios de arquitectura pequeños con web editorial",
            "Fotografía de interiores con luz natural y materiales nobles"
        ]
    },
    contenido: {
        hero: {
            titulo: "Casas que ya contaban algo. Nosotros solo las escuchamos.",
            subtitulo: "Estudio de arquitectura especializado en rehabilitar casas de adobe, piedra y madera en La Rioja. Sin obra nueva. Sin demoliciones. Solo oficio.",
            textoBoton: "Ver proyectos",
            imagenDescripcion: "Fachada de una casa de piedra del siglo XVIII en un pueblo de La Rioja, con portón de madera, balcón de forja y tejado de teja árabe. Luz de tarde, cielo limpio, sin coches, ambiente de pueblo vacío."
        },
        proyectos: [
            {
                nombre: "Casa de los Arcos",
                ubicacion: "Briones, La Rioja",
                año: "2023",
                descripcion: "Rehabilitación integral de una casa de 1740 en el casco antiguo. Muros de mampostería, entramado de madera de roble y cubierta de teja árabe. Se recuperaron los suelos originales de baldosa hidráulica y se abrió un patio interior que estaba cegado.",
                superficie: "180 m²",
                estadoOriginal: "Ruina parcial",
                materiales: "Piedra, roble, teja árabe, baldosa hidráulica",
                imagenDescripcion: "Interior de una casa rehabilitada con vigas de madera vistas, suelo de baldosa hidráulica original y un patio interior con olivo. Luz natural, paredes de piedra, muebles de madera oscura."
            },
            {
                nombre: "Casa del Horno",
                ubicacion: "San Vicente de la Sonsierra, La Rioja",
                año: "2022",
                descripcion: "Rehabilitación de una casa de adobe de 1890 con horno de pan original. Se conservó el horno como elemento central de la cocina y se restauraron los muros de adobe con técnicas tradicionales.",
                superficie: "140 m²",
                estadoOriginal: "Abandono desde 1985",
                materiales: "Adobe, ladrillo refractario, madera de pino",
                imagenDescripcion: "Cocina de una casa rehabilitada con horno de pan original de ladrillo refractario, paredes de adobe encaladas, vigas de madera y una mesa larga de comedor. Luz cálida, ambiente rústico."
            },
            {
                nombre: "Casa de la Fuente",
                ubicacion: "Labastida, Álava",
                año: "2024",
                descripcion: "Rehabilitación de una casa de 1920 junto a la fuente del pueblo. Se recuperó la fachada original de sillería, se sustituyeron las carpinterías por madera de castaño y se rehabilitó el desván como estudio.",
                superficie: "210 m²",
                estadoOriginal: "Buen estado estructural, mal estado de acabados",
                materiales: "Sillería de piedra, madera de castaño, teja árabe",
                imagenDescripcion: "Fachada de sillería de una casa rehabilitada, con ventanas de madera de castaño, balcón de forja y la fuente del pueblo al lado. Luz de mañana, calle empedrada."
            },
            {
                nombre: "Casa del Río",
                ubicacion: "Briñas, La Rioja",
                año: "2021",
                descripcion: "Rehabilitación de una casa de 1950 junto al río Ebro. Se sustituyó la cubierta de uralita por teja árabe tradicional, se restauró el entramado de madera y se recuperó la escalera original de piedra.",
                superficie: "160 m²",
                estadoOriginal: "Cubierta derruida, estructura sana",
                materiales: "Piedra, madera, teja árabe, uralita (sustituida)",
                imagenDescripcion: "Interior de una casa rehabilitada con escalera de piedra original, barandilla de madera, paredes encaladas y una ventana grande con vistas al río Ebro. Luz natural, ambiente luminoso."
            }
        ],
        proceso: [
            {
                numero: "01",
                nombre: "Escuchar la casa",
                descripcion: "Antes de dibujar nada, pasamos tiempo en la casa. Entendemos cómo se construyó, qué materiales tiene, qué se puede conservar y qué hay que sustituir. Hablamos con los vecinos, con los antiguos propietarios, con quien haya vivido allí. La casa tiene memoria, y nosotros la escuchamos."
            },
            {
                numero: "02",
                nombre: "Entender el pueblo",
                descripcion: "Una casa no está sola. Está en una calle, en un pueblo, en un paisaje. Entendemos la orientación, el clima, las costumbres, los materiales disponibles en la zona. La rehabilitación tiene que encajar con el entorno, no imponerse."
            },
            {
                numero: "03",
                nombre: "Proyecto y oficio",
                descripcion: "Trabajamos con planos, pero también con las manos. Visitamos la obra cada semana, hablamos con los albañiles, con los carpinteros, con los herreros. El proyecto se ajusta a lo que la casa va pidiendo. No hay dos rehabilitaciones iguales."
            },
            {
                numero: "04",
                nombre: "Devolver la casa",
                descripcion: "Al final, la casa vuelve a estar viva. No hemos hecho una casa nueva. Hemos devuelto la que ya estaba. Y eso se nota en los materiales, en la luz, en la manera de habitarla. La casa sigue contando su historia, pero ahora con una familia dentro."
            }
        ],
        servicios: [
            {
                nombre: "Rehabilitación integral",
                descripcion: "Proyecto y dirección de obra de rehabilitación completa de casas tradicionales: estructura, cubierta, fachada, instalaciones y acabados. Trabajamos con técnicas y materiales tradicionales siempre que sea posible.",
                precio: "Desde 12.000 € (proyecto y dirección)"
            },
            {
                nombre: "Restauración de elementos originales",
                descripcion: "Recuperación de suelos hidráulicos, vigas de madera, entramados, escaleras de piedra, hornos, chimeneas y carpinterías originales. Trabajamos con artesanos especializados de la zona.",
                precio: "Presupuesto según elemento"
            },
            {
                nombre: "Consultoría y diagnosis",
                descripcion: "Antes de comprar una casa antigua, te decimos qué se puede conservar, qué hay que sustituir y cuánto puede costar la rehabilitación. Visitamos la casa contigo y te damos un informe honesto.",
                precio: "450 € (visita + informe)"
            },
            {
                nombre: "Dirección de obra",
                descripcion: "Si ya tienes proyecto pero necesitas alguien que dirija la obra, lo hacemos. Coordinamos a los oficios, controlamos plazos y calidades, y nos aseguramos de que lo que se construye es lo que se dibujó.",
                precio: "Desde 6.000 €"
            }
        ],
        sobreEstudio: {
            titulo: "Dos personas, una casa de piedra y una obsesión",
            texto: "Oficio y Piedra nació en 2018 en una casa de piedra del casco antiguo de Briones. Clara Mendieta (arquitecta) y Andrés Sáenz (aparejador) llevaban años trabajando en estudios grandes de Madrid y Pamplona, rehabilitando edificios históricos para clientes con mucho presupuesto. Un día decidieron volver al pueblo y montar algo pequeño, honesto y centrado en la rehabilitación de verdad: casas de pueblo, de familias que quieren volver a vivir en ellas, no de inversores. Desde entonces han rehabilitado 14 casas en La Rioja, Álava y Navarra. No han hecho ni una sola obra nueva. No quieren.",
            imagenDescripcion: "Clara y Andrés en el despacho del estudio, una casa de piedra con mesa grande de madera, planos desplegados, maquetas de casas y luz natural entrando por un ventanal. Ambiente de estudio pequeño, artesanal, con muchos libros y muestras de materiales."
        },
        testimonios: [
            {
                nombre: "Marta y José Luis",
                texto: "Compramos una casa de 1890 en San Vicente sin saber por dónde empezar. Clara y Andrés nos acompañaron en todo el proceso: desde la diagnosis inicial hasta el último detalle de la obra. Recuperaron el horno de pan original, que ahora es el centro de la cocina. No podríamos estar más contentos.",
                valoracion: 5
            },
            {
                nombre: "Elena Ruiz",
                texto: "Lo que más me gustó fue que nunca me vendieron humo. Me dijeron lo que se podía conservar y lo que no, sin prometer milagros. El resultado es una casa que sigue siendo la casa de mi abuela, pero ahora con calefacción y sin goteras.",
                valoracion: 5
            },
            {
                nombre: "Familia Ibáñez",
                texto: "Trabajaron con artesanos de la zona para restaurar las vigas y el entramado de madera. Se nota que les importa el oficio. La casa ha quedado como estaba, pero mejor. Y el proceso fue tranquilo, sin sorpresas.",
                valoracion: 5
            }
        ],
        preguntasFrecuentes: [
            {
                pregunta: "¿Trabajáis fuera de La Rioja?",
                respuesta: "Sí, trabajamos en toda La Rioja, Álava y Navarra de manera habitual. En proyectos puntuales, también en el resto de España. Si la casa merece la pena, vamos."
            },
            {
                pregunta: "¿Hacéis obra nueva?",
                respuesta: "No. Solo rehabilitación de vivienda tradicional. Creemos que hay suficientes casas antiguas esperando una segunda vida como para dedicarnos a construir desde cero."
            },
            {
                pregunta: "¿Cuánto cuesta rehabilitar una casa de pueblo?",
                respuesta: "Depende mucho del estado de la casa y del alcance de la rehabilitación. Una rehabilitación integral puede estar entre 800 y 1.500 €/m². En la diagnosis inicial te damos una horquilla realista antes de empezar."
            },
            {
                pregunta: "¿Puedo comprar una casa antigua y rehabilitarla por partes?",
                respuesta: "Sí, es lo más habitual. Podemos empezar por lo urgente (cubierta, estructura) y dejar el resto para más adelante. Te ayudamos a priorizar según presupuesto."
            },
            {
                pregunta: "¿Trabajáis con subvenciones?",
                respuesta: "Sí, conocemos las subvenciones de rehabilitación de vivienda de La Rioja, Álava y Navarra, y ayudamos a tramitarlas. También las ayudas europeas de eficiencia energética."
            }
        ]
    },
    equipo: [
        {
            nombre: "Clara Mendieta",
            rol: "Arquitecta y cofundadora",
            descripcion: "Arquitecta por la ETSA de Navarra, con 15 años de experiencia en rehabilitación de patrimonio. Especialista en estructuras de madera y muros de mampostería. Le gusta pasar tiempo en la casa antes de dibujar nada.",
            imagenDescripcion: "Retrato de una mujer de unos 40 años, pelo corto, ropa de trabajo cómoda, con planos enrollados bajo el brazo, delante de una casa de piedra en un pueblo de La Rioja. Luz natural, ambiente tranquilo."
        },
        {
            nombre: "Andrés Sáenz",
            rol: "Aparejador y cofundador",
            descripcion: "Aparejador técnico con 18 años de experiencia en dirección de obra. Conoce a todos los albañiles, carpinteros y herreros de la comarca. Es el que se asegura de que lo que se dibuja se construye bien.",
            imagenDescripcion: "Retrato de un hombre de unos 45 años, con casco de obra en la mano, ropa de trabajo, delante de una obra de rehabilitación. Luz natural, ambiente de obra."
        }
    ],
    legal: {
        avisoLegal: "Titular: Oficio y Piedra S.L.P. — CIF: B-26487103 — Domicilio: Calle Mayor, 14, 26330 Briones, La Rioja — Teléfono: +34 941 32 17 08 — Email: hola@oficioypiedra.es — Colegiada en el Colegio Oficial de Arquitectos de La Rioja. El acceso y uso de este sitio web atribuye la condición de usuario e implica la aceptación de las presentes condiciones. Los contenidos son propiedad de Oficio y Piedra S.L.P. o de terceros con licencia. Queda prohibida su reproducción sin autorización expresa.",
        politicaPrivacidad: "Responsable del tratamiento: Oficio y Piedra S.L.P. — Finalidad: gestión de consultas, presupuestos y proyectos de rehabilitación — Base jurídica: consentimiento del interesado y ejecución de la relación contractual — Destinatarios: no se ceden datos a terceros salvo obligación legal — Derechos: acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a hola@oficioypiedra.es — Conservación: los datos de proyectos se conservan durante 5 años; los de consultas, 12 meses. Puede presentar reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).",
        politicaCookies: "Este sitio utiliza cookies técnicas necesarias para el funcionamiento de la web y cookies analíticas anónimas para medir el tráfico. No se utilizan cookies de publicidad ni de perfilado. Puede configurar o rechazar las cookies analíticas en el banner de configuración o desde su navegador. El uso continuado del sitio implica la aceptación de las cookies técnicas. Para más información, escriba a hola@oficioypiedra.es."
    },
    extras: {
        logoDescripcion: "Logotipo tipográfico en Fraunces, con las palabras 'OFICIO Y PIEDRA' en mayúsculas espaciadas, en terracota sobre fondo crema. Un pequeño detalle de silueta de casa de piedra entre las dos palabras.",
        faviconDescripcion: "Cuadrado terracota con una silueta blanca de casa de tejado a dos aguas, legible a tamaño pequeño.",
        imagenesNecesarias: [
            "Hero: fachada de casa de piedra del siglo XVIII en pueblo de La Rioja",
            "Proyecto 1: interior de casa rehabilitada con vigas y patio interior",
            "Proyecto 2: cocina con horno de pan original y paredes de adobe",
            "Proyecto 3: fachada de sillería con ventanas de castaño",
            "Proyecto 4: interior con escalera de piedra y ventana al río",
            "Sobre el estudio: Clara y Andrés en el despacho con planos",
            "Equipo: retrato de Clara Mendieta",
            "Equipo: retrato de Andrés Sáenz"
        ]
    }
};