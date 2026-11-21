// ============================================
// UI - PANTALLA DE INICIO
// Oficio y Piedra
// ============================================

export function montarInicio(contenedor, negocio) {
    const n = negocio.negocio;
    const c = negocio.contacto;
    const hero = negocio.contenido.hero;
    const proyectos = negocio.contenido.proyectos;
    const proceso = negocio.contenido.proceso;
    const servicios = negocio.contenido.servicios;
    const sobreEstudio = negocio.contenido.sobreEstudio;
    const testimonios = negocio.contenido.testimonios;
    const faq = negocio.contenido.preguntasFrecuentes;
    const equipo = negocio.equipo;

    contenedor.innerHTML = `
        <header class="header">
            <div class="contenedor header-contenido">
                <a href="#" class="header-logo">
                    <span class="header-logo-texto">OFICIO <span class="header-logo-amp">Y</span> PIEDRA</span>
                </a>
                <nav class="header-nav">
                    <a href="#proyectos" class="header-nav-link">Proyectos</a>
                    <a href="#proceso" class="header-nav-link">Proceso</a>
                    <a href="#servicios" class="header-nav-link">Servicios</a>
                    <a href="#estudio" class="header-nav-link">Estudio</a>
                    <a href="#contacto" class="header-nav-link">Contacto</a>
                </nav>
                <a href="#contacto" class="header-cta">Hablemos</a>
                <button class="header-menu-btn" id="menuBtn" aria-label="Abrir menú">
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div class="header-menu-movil oculto" id="menuMovil">
                <a href="#proyectos" class="header-menu-movil-link">Proyectos</a>
                <a href="#proceso" class="header-menu-movil-link">Proceso</a>
                <a href="#servicios" class="header-menu-movil-link">Servicios</a>
                <a href="#estudio" class="header-menu-movil-link">Estudio</a>
                <a href="#contacto" class="header-menu-movil-link">Contacto</a>
                <a href="#contacto" class="header-menu-movil-cta">Hablemos</a>
            </div>
        </header>

        <section class="hero">
            <div class="hero-imagen-fondo">
                <img src="assets/imagenes/hero.jpg" alt="Fachada de casa de piedra en La Rioja" class="hero-imagen">
            </div>
            <div class="hero-overlay"></div>
            <div class="contenedor hero-contenido">
                <div class="hero-texto">
                    <p class="hero-eyebrow">${n.ciudad} · ${n.provincia} · Desde ${n.añoFundacion}</p>
                    <h1 class="hero-titulo">
                        <span class="hero-titulo-linea">Casas que ya</span>
                        <span class="hero-titulo-linea hero-titulo-linea--desplazada">contaban algo.</span>
                        <span class="hero-titulo-linea hero-titulo-linea--pequena">Nosotros solo las escuchamos.</span>
                    </h1>
                    <p class="hero-subtitulo">${hero.subtitulo}</p>
                    <div class="hero-acciones">
                        <a href="#proyectos" class="btn btn-primario">${hero.textoBoton}</a>
                        <a href="#estudio" class="btn btn-secundario">Conócenos</a>
                    </div>
                </div>
            </div>
        </section>

        <section class="proyectos" id="proyectos">
            <div class="contenedor">
                <div class="seccion-header">
                    <p class="seccion-eyebrow">Proyectos</p>
                    <h2 class="seccion-titulo">Casas que hemos devuelto a la vida</h2>
                    <p class="seccion-descripcion">Cada proyecto es una conversación con una casa. Aquí puedes ver cómo escuchamos, qué encontramos y qué devolvimos.</p>
                </div>

                <div class="proyectos-lista">
                    ${proyectos.map((proyecto, i) => {
                        const imagenesProyecto = [
                            'assets/imagenes/proyecto-casa-arcos.jpg',
                            'assets/imagenes/proyecto-casa-horno.jpg',
                            'assets/imagenes/proyecto-casa-fuente.jpg',
                            'assets/imagenes/proyecto-casa-rio.jpg'
                        ];
                        return `
                        <article class="proyecto-ficha" data-indice="${i}">
                            <button class="proyecto-ficha-header" aria-expanded="false">
                                <div class="proyecto-ficha-info">
                                    <span class="proyecto-ficha-numero">${String(i + 1).padStart(2, '0')}</span>
                                    <div class="proyecto-ficha-texto">
                                        <h3 class="proyecto-ficha-nombre">${proyecto.nombre}</h3>
                                        <p class="proyecto-ficha-meta">${proyecto.ubicacion} · ${proyecto.año}</p>
                                    </div>
                                </div>
                                <span class="proyecto-ficha-icono">+</span>
                            </button>
                            <div class="proyecto-ficha-contenido oculto">
                                <div class="proyecto-ficha-descripcion">
                                    <p>${proyecto.descripcion}</p>
                                </div>
                                <div class="proyecto-ficha-visual">
                                    <img src="${imagenesProyecto[i]}" alt="${proyecto.nombre}" class="proyecto-ficha-imagen">
                                </div>
                                <dl class="proyecto-ficha-datos">
                                    <div class="proyecto-ficha-dato">
                                        <dt>Superficie</dt>
                                        <dd>${proyecto.superficie}</dd>
                                    </div>
                                    <div class="proyecto-ficha-dato">
                                        <dt>Estado original</dt>
                                        <dd>${proyecto.estadoOriginal}</dd>
                                    </div>
                                    <div class="proyecto-ficha-dato">
                                        <dt>Materiales</dt>
                                        <dd>${proyecto.materiales}</dd>
                                    </div>
                                </dl>
                            </div>
                        </article>
                    `}).join('')}
                </div>
            </div>
        </section>

        <section class="proceso" id="proceso">
            <div class="contenedor">
                <div class="seccion-header">
                    <p class="seccion-eyebrow">Proceso</p>
                    <h2 class="seccion-titulo">Cómo trabajamos</h2>
                    <p class="seccion-descripcion">No hay dos rehabilitaciones iguales, pero todas pasan por las mismas cuatro fases. Así escuchamos una casa.</p>
                </div>

                <div class="proceso-linea" id="procesoLinea">
                    <div class="proceso-linea-trazo" id="procesoTrazo"></div>

                    ${proceso.map((paso, i) => `
                        <div class="proceso-paso" data-paso="${i}">
                            <div class="proceso-paso-numero">${paso.numero}</div>
                            <div class="proceso-paso-contenido">
                                <h3 class="proceso-paso-nombre">${paso.nombre}</h3>
                                <p class="proceso-paso-descripcion">${paso.descripcion}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <section class="servicios" id="servicios">
            <div class="contenedor">
                <div class="seccion-header">
                    <p class="seccion-eyebrow">Servicios</p>
                    <h2 class="seccion-titulo">Qué podemos hacer por tu casa</h2>
                    <p class="seccion-descripcion">Cuatro formas de trabajar con nosotros. Desde la diagnosis inicial hasta la dirección de obra.</p>
                </div>

                <div class="servicios-lista">
                    ${servicios.map((servicio, i) => `
                        <article class="servicio-item" data-servicio="${i}">
                            <div class="servicio-item-fondo">
                                <div class="servicio-item-imagen-placeholder">
                                    <span class="servicio-item-imagen-icono">🏛️</span>
                                </div>
                            </div>
                            <div class="servicio-item-contenido">
                                <div class="servicio-item-header">
                                    <span class="servicio-item-numero">${String(i + 1).padStart(2, '0')}</span>
                                    <span class="servicio-item-precio">${servicio.precio}</span>
                                </div>
                                <h3 class="servicio-item-nombre">${servicio.nombre}</h3>
                                <p class="servicio-item-descripcion">${servicio.descripcion}</p>
                            </div>
                        </article>
                    `).join('')}
                </div>
            </div>
        </section>

        <section class="estudio" id="estudio">
            <div class="contenedor estudio-contenido">
                <div class="estudio-texto">
                    <p class="seccion-eyebrow">El estudio</p>
                    <h2 class="seccion-titulo">${sobreEstudio.titulo}</h2>
                    <p class="estudio-descripcion">${sobreEstudio.texto}</p>
                </div>
                <div class="estudio-visual">
                    <img src="assets/imagenes/estudio-equipo.jpg" alt="Clara y Andrés en el estudio" class="estudio-imagen">
                </div>
            </div>
        </section>

        <section class="testimonios" id="testimonios">
            <div class="contenedor">
                <div class="seccion-header">
                    <p class="seccion-eyebrow">Testimonios</p>
                    <h2 class="seccion-titulo">Lo que dicen quienes ya viven en su casa</h2>
                    <p class="seccion-descripcion">Familias que compraron una casa antigua y nos dejaron escucharla con ellos.</p>
                </div>

                <div class="testimonios-carrusel">
                    <div class="testimonios-track" id="testimoniosTrack">
                        ${testimonios.length > 0 ? `
                            <article class="testimonio-card clon" data-real="${testimonios.length - 1}">
                                <div class="testimonio-estrellas">
                                    ${'★'.repeat(testimonios[testimonios.length - 1].valoracion)}${'☆'.repeat(5 - testimonios[testimonios.length - 1].valoracion)}
                                </div>
                                <p class="testimonio-texto">"${testimonios[testimonios.length - 1].texto}"</p>
                                <p class="testimonio-nombre">— ${testimonios[testimonios.length - 1].nombre}</p>
                            </article>
                        ` : ''}

                        ${testimonios.map((testimonio, i) => `
                            <article class="testimonio-card" data-real="${i}">
                                <div class="testimonio-estrellas">
                                    ${'★'.repeat(testimonio.valoracion)}${'☆'.repeat(5 - testimonio.valoracion)}
                                </div>
                                <p class="testimonio-texto">"${testimonio.texto}"</p>
                                <p class="testimonio-nombre">— ${testimonio.nombre}</p>
                            </article>
                        `).join('')}

                        ${testimonios.length > 0 ? `
                            <article class="testimonio-card clon" data-real="0">
                                <div class="testimonio-estrellas">
                                    ${'★'.repeat(testimonios[0].valoracion)}${'☆'.repeat(5 - testimonios[0].valoracion)}
                                </div>
                                <p class="testimonio-texto">"${testimonios[0].texto}"</p>
                                <p class="testimonio-nombre">— ${testimonios[0].nombre}</p>
                            </article>
                        ` : ''}
                    </div>
                </div>

                <div class="testimonios-controles">
                    <button class="testimonios-btn" id="testimoniosPrev" aria-label="Testimonio anterior">←</button>
                    <div class="testimonios-puntos" id="testimoniosPuntos"></div>
                    <button class="testimonios-btn" id="testimoniosNext" aria-label="Testimonio siguiente">→</button>
                </div>
            </div>
        </section>

        <section class="faq" id="faq">
            <div class="contenedor">
                <div class="seccion-header">
                    <p class="seccion-eyebrow">Preguntas frecuentes</p>
                    <h2 class="seccion-titulo">Antes de empezar</h2>
                    <p class="seccion-descripcion">Las dudas que más nos plantean antes de comprar una casa o empezar una rehabilitación.</p>
                </div>
                <div class="faq-lista">
                    ${faq.map(item => `
                        <details class="faq-item">
                            <summary class="faq-pregunta">${item.pregunta}</summary>
                            <p class="faq-respuesta">${item.respuesta}</p>
                        </details>
                    `).join('')}
                </div>
            </div>
        </section>

        <section class="equipo" id="equipo">
            <div class="contenedor">
                <div class="seccion-header">
                    <p class="seccion-eyebrow">Equipo</p>
                    <h2 class="seccion-titulo">Quién te va a acompañar</h2>
                    <p class="seccion-descripcion">Dos personas, una obsesión y muchos años de obra a las espaldas.</p>
                </div>
                <div class="equipo-grid">
                    ${equipo.map((persona, i) => {
                        const imagenesEquipo = [
                            'assets/imagenes/equipo-clara.jpg',
                            'assets/imagenes/equipo-andres.jpg'
                        ];
                        return `
                        <article class="equipo-card">
                            <img src="${imagenesEquipo[i]}" alt="${persona.nombre}" class="equipo-imagen">
                            <div class="equipo-info">
                                <h3 class="equipo-nombre">${persona.nombre}</h3>
                                <p class="equipo-rol">${persona.rol}</p>
                                <p class="equipo-descripcion">${persona.descripcion}</p>
                            </div>
                        </article>
                    `}).join('')}
                </div>
            </div>
        </section>

        <section class="contacto" id="contacto">
            <div class="contenedor contacto-contenido">
                <div class="contacto-info">
                    <p class="seccion-eyebrow">Contacto</p>
                    <h2 class="seccion-titulo">Cuéntanos qué casa tienes en mente</h2>
                    <p class="contacto-intro">Escríbenos con lo que sepas: la casa, el pueblo, el estado, lo que te gustaría hacer. Si no lo tienes claro, también vale. Te responderemos en 48 horas.</p>
                    <ul class="contacto-lista">
                        <li class="contacto-item">
                            <span class="contacto-icono">📍</span>
                            <div>
                                <span class="contacto-label">Estudio</span>
                                <span class="contacto-valor">${c.direccion}</span>
                            </div>
                        </li>
                        <li class="contacto-item">
                            <span class="contacto-icono">📞</span>
                            <div>
                                <span class="contacto-label">Teléfono</span>
                                <a href="tel:${c.telefono.replace(/\s/g, '')}" class="contacto-valor">${c.telefono}</a>
                            </div>
                        </li>
                        <li class="contacto-item">
                            <span class="contacto-icono">✉️</span>
                            <div>
                                <span class="contacto-label">Email</span>
                                <a href="mailto:${c.email}" class="contacto-valor">${c.email}</a>
                            </div>
                        </li>
                        <li class="contacto-item">
                            <span class="contacto-icono">📸</span>
                            <div>
                                <span class="contacto-label">Instagram</span>
                                <a href="https://instagram.com/${c.redesSociales.instagram.replace('@', '')}" target="_blank" rel="noopener" class="contacto-valor">${c.redesSociales.instagram}</a>
                            </div>
                        </li>
                    </ul>
                    <div class="contacto-horario">
                        <h3 class="contacto-horario-titulo">Horario</h3>
                        <ul class="contacto-horario-lista">
                            <li class="contacto-horario-item"><span class="contacto-horario-dia">Lunes a jueves</span><span class="contacto-horario-hora">${c.horario.lunes}</span></li>
                            <li class="contacto-horario-item"><span class="contacto-horario-dia">Viernes</span><span class="contacto-horario-hora">${c.horario.viernes}</span></li>
                            <li class="contacto-horario-item"><span class="contacto-horario-dia">Sábado y domingo</span><span class="contacto-horario-hora">${c.horario.sabado}</span></li>
                        </ul>
                    </div>
                </div>
                <div class="contacto-formulario">
                    <form id="contactoForm" novalidate>
                        <div class="campo">
                            <label for="nombre" class="campo-label">Nombre <span class="campo-obligatorio">*</span></label>
                            <input type="text" id="nombre" name="nombre" class="campo-input" required placeholder="Tu nombre">
                        </div>
                        <div class="campo">
                            <label for="email" class="campo-label">Email <span class="campo-obligatorio">*</span></label>
                            <input type="email" id="email" name="email" class="campo-input" required placeholder="tu@email.com">
                        </div>
                        <div class="campo">
                            <label for="pueblo" class="campo-label">Pueblo o ciudad de la casa</label>
                            <input type="text" id="pueblo" name="pueblo" class="campo-input" placeholder="Ej: Briones, La Rioja">
                        </div>
                        <div class="campo">
                            <label for="mensaje" class="campo-label">Cuéntanos <span class="campo-obligatorio">*</span></label>
                            <textarea id="mensaje" name="mensaje" class="campo-input campo-textarea" required placeholder="¿Qué casa tienes en mente? ¿Qué te gustaría hacer?" rows="6"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primario contacto-btn">Enviar mensaje</button>
                        <p class="contacto-aviso" id="contactoAviso"></p>
                    </form>
                </div>
            </div>
        </section>

        <footer class="footer">
            <div class="contenedor footer-contenido">
                <div class="footer-col">
                    <p class="footer-logo">OFICIO <span class="header-logo-amp">Y</span> PIEDRA</p>
                    <p class="footer-eslogan">${n.eslogan}</p>
                </div>
                <div class="footer-col">
                    <p class="footer-titulo">Estudio</p>
                    <p class="footer-texto">${c.direccion}</p>
                    <p class="footer-texto">${c.telefono}</p>
                    <p class="footer-texto">${c.email}</p>
                </div>
                <div class="footer-col">
                    <p class="footer-titulo">Legal</p>
                    <a href="aviso-legal.html" class="footer-link">Aviso legal</a>
                    <a href="privacidad.html" class="footer-link">Política de privacidad</a>
                    <a href="cookies.html" class="footer-link">Política de cookies</a>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="contenedor">
                    <p class="footer-copyright">© ${new Date().getFullYear()} ${n.nombre}. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    `;

    // Menú móvil
    const menuBtn = document.getElementById('menuBtn');
    const menuMovil = document.getElementById('menuMovil');

    menuBtn.addEventListener('click', () => {
        menuMovil.classList.toggle('oculto');
        menuBtn.classList.toggle('activo');
    });

    menuMovil.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuMovil.classList.add('oculto');
            menuBtn.classList.remove('activo');
        });
    });

    // Header con sombra al hacer scroll
    const header = contenedor.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }, { passive: true });
    }

    // Proyectos expandibles
    const fichas = contenedor.querySelectorAll('.proyecto-ficha');

    fichas.forEach(ficha => {
        const headerBtn = ficha.querySelector('.proyecto-ficha-header');
        const contenido = ficha.querySelector('.proyecto-ficha-contenido');
        const icono = ficha.querySelector('.proyecto-ficha-icono');

        headerBtn.addEventListener('click', () => {
            const estaAbierta = ficha.classList.contains('abierta');

            fichas.forEach(f => {
                if (f !== ficha) {
                    f.classList.remove('abierta');
                    f.querySelector('.proyecto-ficha-contenido').classList.add('oculto');
                    f.querySelector('.proyecto-ficha-header').setAttribute('aria-expanded', 'false');
                    f.querySelector('.proyecto-ficha-icono').textContent = '+';
                }
            });

            if (estaAbierta) {
                ficha.classList.remove('abierta');
                contenido.classList.add('oculto');
                headerBtn.setAttribute('aria-expanded', 'false');
                icono.textContent = '+';
            } else {
                ficha.classList.add('abierta');
                contenido.classList.remove('oculto');
                headerBtn.setAttribute('aria-expanded', 'true');
                icono.textContent = '−';
            }
        });
    });

    // Proceso: animación de línea de tiempo al hacer scroll
    const procesoLinea = document.getElementById('procesoLinea');
    const procesoTrazo = document.getElementById('procesoTrazo');
    const pasosProceso = contenedor.querySelectorAll('.proceso-paso');

    if (procesoLinea && procesoTrazo) {
        pasosProceso.forEach(paso => {
            paso.classList.add('proceso-paso-oculto');
        });

        const observerProceso = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const alturaLinea = procesoLinea.offsetHeight;
                    procesoTrazo.style.height = alturaLinea + 'px';

                    pasosProceso.forEach((paso, i) => {
                        setTimeout(() => {
                            paso.classList.remove('proceso-paso-oculto');
                            paso.classList.add('proceso-paso-visible');
                        }, 300 + (i * 250));
                    });

                    observerProceso.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2
        });

        observerProceso.observe(procesoLinea);
    }

    // Testimonios: carrusel infinito
    const testimoniosTrack = document.getElementById('testimoniosTrack');
    const testimoniosPuntos = document.getElementById('testimoniosPuntos');
    const btnPrev = document.getElementById('testimoniosPrev');
    const btnNext = document.getElementById('testimoniosNext');

    if (testimoniosTrack && btnPrev && btnNext && testimonios.length > 0) {
        testimonios.forEach((_, i) => {
            const punto = document.createElement('button');
            punto.className = 'testimonios-punto' + (i === 0 ? ' activo' : '');
            punto.setAttribute('aria-label', `Ir al testimonio ${i + 1}`);
            punto.addEventListener('click', () => irATestimonio(i));
            testimoniosPuntos.appendChild(punto);
        });

        const puntos = testimoniosPuntos.querySelectorAll('.testimonios-punto');

        let indiceReal = 0;
        let posicionTrack = 1;

        testimoniosTrack.style.transform = `translateX(-${posicionTrack * 100}%)`;

        function actualizarPuntos() {
            puntos.forEach((p, i) => {
                p.classList.toggle('activo', i === indiceReal);
            });
        }

        function irATestimonio(indice) {
            indiceReal = indice;
            posicionTrack = indice + 1;
            testimoniosTrack.style.transition = 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
            testimoniosTrack.style.transform = `translateX(-${posicionTrack * 100}%)`;
            actualizarPuntos();
        }

        function siguiente() {
            if (posicionTrack >= testimonios.length + 1) return;
            posicionTrack++;
            testimoniosTrack.style.transition = 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
            testimoniosTrack.style.transform = `translateX(-${posicionTrack * 100}%)`;

            if (posicionTrack === testimonios.length + 1) {
                indiceReal = 0;
                actualizarPuntos();
                setTimeout(() => {
                    testimoniosTrack.style.transition = 'none';
                    posicionTrack = 1;
                    testimoniosTrack.style.transform = `translateX(-${posicionTrack * 100}%)`;
                }, 800);
            } else {
                indiceReal = posicionTrack - 1;
                actualizarPuntos();
            }
        }

        function anterior() {
            if (posicionTrack <= 0) return;
            posicionTrack--;
            testimoniosTrack.style.transition = 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
            testimoniosTrack.style.transform = `translateX(-${posicionTrack * 100}%)`;

            if (posicionTrack === 0) {
                indiceReal = testimonios.length - 1;
                actualizarPuntos();
                setTimeout(() => {
                    testimoniosTrack.style.transition = 'none';
                    posicionTrack = testimonios.length;
                    testimoniosTrack.style.transform = `translateX(-${posicionTrack * 100}%)`;
                }, 800);
            } else {
                indiceReal = posicionTrack - 1;
                actualizarPuntos();
            }
        }

        btnNext.addEventListener('click', siguiente);
        btnPrev.addEventListener('click', anterior);

        document.addEventListener('keydown', (e) => {
            const rect = testimoniosTrack.getBoundingClientRect();
            const visible = rect.top < window.innerHeight && rect.bottom > 0;
            if (!visible) return;
            if (e.key === 'ArrowRight') siguiente();
            if (e.key === 'ArrowLeft') anterior();
        });
    }

    // Formulario de contacto
    const form = document.getElementById('contactoForm');
    const aviso = document.getElementById('contactoAviso');

    if (form && aviso) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            form.querySelectorAll('.campo-input').forEach(input => {
                input.classList.remove('campo-error');
            });
            aviso.textContent = '';
            aviso.className = 'contacto-aviso';

            const nombre = form.nombre.value.trim();
            const email = form.email.value.trim();
            const mensaje = form.mensaje.value.trim();

            let hayError = false;

            if (!nombre) {
                form.nombre.classList.add('campo-error');
                hayError = true;
            }

            if (!email) {
                form.email.classList.add('campo-error');
                hayError = true;
            } else {
                const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
                if (!emailValido) {
                    form.email.classList.add('campo-error');
                    hayError = true;
                }
            }

            if (!mensaje) {
                form.mensaje.classList.add('campo-error');
                hayError = true;
            }

            if (hayError) {
                aviso.textContent = 'Por favor, rellena los campos obligatorios marcados con *.';
                aviso.classList.add('contacto-aviso-error');
                return;
            }

            aviso.textContent = 'Gracias, ' + nombre + '. Hemos recibido tu mensaje. Te responderemos en 48 horas.';
            aviso.classList.add('contacto-aviso-exito');
            form.reset();
        });
    }
}