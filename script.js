// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Código para el carrusel
    const carouselSlides = document.querySelector('.carousel-slides');
    if (carouselSlides) { // Asegura que el carrusel existe en la página actual (index.html)
        const slides = document.querySelectorAll('.carousel-slide');
        let currentSlide = 0;

        function showSlide(index) {
            carouselSlides.style.transform = `translateX(${-index * 100}%)`;
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        // Auto-avanzar el carrusel cada 5 segundos
        setInterval(nextSlide, 5000);

        // Mostrar la primera slide al cargar
        showSlide(currentSlide);
    }

    // --- Definición de los "roasts" de marcas ---
    const brandAnalyses = {
        "zara": `Análisis para la marca "Zara": Esta marca opera bajo un modelo de moda rápida, lo que implica una producción masiva, uso intensivo de recursos, generación de residuos textiles y, a menudo, condiciones laborales cuestionables. Si bien algunas colecciones están empezando a implementar iniciativas 'verdes', la base de su negocio es inherentemente insostenible a largo plazo. Invierte a fondo en marketing de sostenibilidad, pero ¿realmente el consumo excesivo puede ser 'verde'? Investiga a fondo sus certificaciones y transparencia real.`,
        "rotunda": `Análisis para la marca "Rotunda": Marca de diseño uruguayo que se posiciona en un segmento de mayor calidad y durabilidad. Utilizan materiales de origen natural y buscan procesos más artesanales, lo que en teoría reduce el impacto ambiental en comparación con la moda rápida. Sin embargo, como toda producción, genera residuos y consume recursos. Su escala de producción es menor, lo que puede implicar un menor impacto unitario, pero la verificación de sus cadenas de suministro y el origen exacto de todos sus materiales es clave para una evaluación completa.`,
        "don baez": `Análisis para la marca "Don Báez": Conocida por sus prendas de lana, especialmente abrigos y ponchos. La lana es una fibra natural y renovable, lo cual es un punto a favor. Si la lana es de origen local y se procesa con métodos de bajo impacto (menos químicos, gestión responsable del agua), su huella puede ser relativamente baja. Sin embargo, es importante considerar el bienestar animal en la producción de lana y los tintes utilizados. Su enfoque en productos duraderos contradice la obsolescencia programada de la moda rápida.`,
        "la vestiduria": `Análisis para la marca "La Vestidura": Una marca con un fuerte enfoque en el diseño de autor y la producción local en Uruguay. Esto suele implicar un control más directo sobre las condiciones laborales y la cadena de suministro. Al ser producciones a menor escala, el impacto en volumen es menor. Es probable que utilicen materiales variados, algunos sostenibles y otros no. El desafío para estas marcas es la escalabilidad sostenible y la divulgación transparente de sus procesos y materiales para que los consumidores puedan tomar decisiones informadas.`,
        "h&m": `Análisis para la marca "H&M": Gigante de la moda rápida con vastas cadenas de suministro globales. Aunque H&M ha lanzado colecciones "Conscious" y ha invertido en programas de reciclaje y recolección de ropa, su modelo de negocio fundamental se basa en la rotación rápida de tendencias y el consumo masivo, lo cual es inherentemente insostenible. Sus iniciativas "verdes" a menudo son criticadas como "greenwashing" debido al volumen total de producción y el impacto de su modelo de negocio central. La transparencia sobre sus fábricas y condiciones laborales ha mejorado, pero queda mucho por hacer.`,
        "ejemplo_sostenible": `Análisis para "Ejemplo Marca Sostenible": Esta marca se destaca por su compromiso genuino con la sostenibilidad. Utiliza exclusivamente materiales orgánicos certificados (GOTS, OCS) y reciclados (GRS). Toda su producción se realiza en fábricas con salarios justos y condiciones laborales seguras, verificadas por auditorías independientes (Fair Trade Certified). Tienen una política de cero residuos en sus operaciones y utilizan energías renovables en sus instalaciones. Su huella de carbono es monitoreada y compensada, y ofrecen programas de reparación y reciclaje para extender la vida útil de sus productos. Un verdadero referente en moda ética y sostenible.`,
        "default": `Análisis genérico: Esta marca no figura en nuestra base de datos detallada de sostenibilidad. Te recomendamos investigar directamente en su sitio web o buscar certificaciones de terceros como GOTS, OCS, Fair Trade, OEKO-TEX, etc. Presta atención a la transparencia sobre sus materiales, procesos de producción, condiciones laborales y políticas de gestión de residuos. Un buen indicador es la claridad y la profundidad de la información que proporcionan.`
    };

    // Lógica para la barra de búsqueda en index.html
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');

    if (searchForm) { // Asegura que el formulario de búsqueda existe en la página actual (index.html)
        searchForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Evita que el formulario se envíe de la forma tradicional

            const brandQuery = searchInput.value.trim().toLowerCase(); // Obtiene el valor del input y lo normaliza a minúsculas

            let analysisText = brandAnalyses[brandQuery] || brandAnalyses["default"];

            // Guarda el análisis directamente como texto en localStorage
            localStorage.setItem('analysisResult', analysisText);
            window.location.href = 'greenwashing.html'; // Redirige a la página de resultados
        });
    }

    // Lógica para mostrar resultados en greenwashing.html
    const analysisTextElement = document.getElementById('analysis-text'); // Selecciona el párrafo por su ID
    if (analysisTextElement) { // Asegura que el elemento existe en la página actual (greenwashing.html)
        const storedResult = localStorage.getItem('analysisResult');
        if (storedResult) {
            // Muestra el resultado directamente, ya que se guardó como texto
            analysisTextElement.innerText = storedResult;
            localStorage.removeItem('analysisResult'); // Limpia el storage para futuras búsquedas
        } else {
            // Si no hay nada en localStorage (ej. se accedió a la página directamente)
            analysisTextElement.innerText = brandAnalyses["default"];
        }
    }
});