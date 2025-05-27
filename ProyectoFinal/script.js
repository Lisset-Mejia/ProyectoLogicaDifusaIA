// DATOS
const enfermedades = {
    "Gripe": {
        sintomas: {"Tos": 0.8, "Fiebre": 1, "Disnea": 0.6, "Congestión nasal": 0.9, "Dolor de garganta": 0.8,
        "Estornudos": 0.7, "Fatiga": 0.9, "Dolor en el pecho": 0.3, "Sibilancias": 0.2, "Escalofríos": 0.8,
        "Mucosidad": 0.7, "Pérdida olfato": 0.9, "Pérdida gusto": 0.4, "Dolores musculares": 0.95, "Ronquera": 0.7,
        "Respiración rápida": 0.6},
        origen: "Viral (Influenza)",
        tratamiento: "Reposo, hidratación y antivirales si es necesario",
        enlace: "https://www.who.int/es/news-room/fact-sheets/detail/influenza-(seasonal)"
    },

    "Neumonía": {
        sintomas: { "Tos": 0.9, "Fiebre": 0.95, "Disnea": 1, "Congestión nasal": 0.1, "Dolor de garganta": 0.2,
        "Estornudos": 0, "Fatiga": 0.9, "Dolor en el pecho": 1, "Sibilancias": 0.7, "Escalofríos": 1, "Mucosidad": 0.8,
        "Pérdida olfato": 0.1, "Pérdida gusto": 0.1, "Dolores musculares": 0.8, "Ronquera": 0.2, "Respiración rápida": 1},
        origen: "Bacteriano/ Viral",
        tratamiento: "Antibióticos, oxigenoterapia y hospitalización en casos graves",
        enlace: "https://medlineplus.gov/spanish/pneumonia.html"
    },

    "Asma": {
        sintomas: { "Tos": 0.9, "Fiebre": 0, "Disnea": 1, "Congestión nasal": 0.1, "Dolor de garganta": 0.1,
        "Estornudos": 0, "Fatiga": 0.7, "Dolor en el pecho": 0.8, "Sibilancias": 1, "Escalofríos": 0, "Mucosidad": 0.8,
        "Pérdida olfato": 0, "Pérdida gusto": 0, "Dolores musculares": 0.2, "Ronquera": 0.2, "Respiración rápida": 1},
        origen: "Crónico/ Alérgico",
        tratamiento: "Broncodilatadores, corticosteroides inhalados y control de desencadenantes",
        enlace: "https://www.who.int/es/news-room/fact-sheets/detail/asthma"
    },

    "Bronquitis": {
        sintomas: { "Tos": 1, "Fiebre": 0.8, "Disnea": 0.7, "Congestión nasal": 0.6, "Dolor de garganta": 0.7,
        "Estornudos": 0.2, "Fatiga": 0.8, "Dolor en el pecho": 0.9, "Sibilancias": 0.8, "Escalofríos": 0.7,
        "Mucosidad": 1, "Pérdida olfato": 0.2, "Pérdida gusto": 0.1, "Dolores musculares": 0.85, "Ronquera": 0.6,
        "Respiración rápida": 0.9},
        origen: "Viral/ Inflamatorio",
        tratamiento: "Descongestionantes, hidratación y medicamentos para la tos",
        enlace: "https://www.nhlbi.nih.gov/es/salud/bronquitis"
    },

    "COVID-19": {
        sintomas: { "Tos": 0.8, "Fiebre": 1, "Disnea": 0.8, "Congestión nasal": 0.8, "Dolor de garganta": 0.8,
        "Estornudos": 0.6, "Fatiga": 1, "Dolor en el pecho": 0.7, "Sibilancias": 0.6, "Escalofríos": 0.9, "Mucosidad": 0.9,
        "Pérdida olfato": 1, "Pérdida gusto": 1, "Dolores musculares": 0.9, "Ronquera": 0.7, "Respiración rápida": 0.9},
        origen: "Viral (SARS-CoV-2)",
        tratamiento: "Aislamiento, medicación sintomática y monitorización de saturación de oxígeno",
        enlace: "https://www.who.int/es/health-topics/coronavirus#tab=tab_1"
    },

    "Enfisema": {
        sintomas: { "Tos": 0.7, "Fiebre": 0.1, "Disnea": 1, "Congestión nasal": 0, "Dolor de garganta": 0,
        "Estornudos": 0, "Fatiga": 0.6, "Dolor en el pecho": 1, "Sibilancias": 1, "Escalofríos": 0, "Mucosidad": 0.6,
        "Pérdida olfato": 0, "Pérdida gusto": 0, "Dolores musculares": 0.1, "Ronquera": 0.1, "Respiración rápida": 1 },
        origen: "Crónico (Tabaco)",
        tratamiento: "Oxigenoterapia, rehabilitación pulmonar y broncodilatadores",
        enlace: "https://medlineplus.gov/spanish/emphysema.html"
    },

    "Tuberculosis": {
        sintomas: { "Tos": 1,  "Fiebre": 0.9, "Disnea": 0.9, "Congestión nasal": 0.2,"Dolor de garganta": 0.3,
        "Estornudos": 0, "Fatiga": 0.9, "Dolor en el pecho": 0.8, "Sibilancias": 0.2, "Escalofríos": 1,
        "Mucosidad": 0.7, "Pérdida olfato": 0, "Pérdida gusto": 0, "Dolores musculares": 0.85, "Ronquera": 0.3,
        "Respiración rápida": 0.9 },
        origen: "Bacteriano (Mycobacterium)",
        tratamiento: "Tratamiento antibiótico prolongado (6-9 meses)",
        enlace: "https://www.who.int/es/news-room/fact-sheets/detail/tuberculosis"
    },

    "EPOC": {
        sintomas: { "Tos": 1, "Fiebre": 0.1, "Disnea": 1, "Congestión nasal": 0, "Dolor de garganta": 0,
        "Estornudos": 0, "Fatiga": 0.7, "Dolor en el pecho": 1, "Sibilancias": 1, "Escalofríos": 0,
        "Mucosidad": 0.7, "Pérdida olfato": 0, "Pérdida gusto": 0, "Dolores musculares": 0.2, "Ronquera": 0.1,
        "Respiración rápida": 1 },
        origen: "Crónico (Tabaco)",
        tratamiento: "Broncodilatadores de larga duración y oxigenoterapia",
        enlace: "https://www.who.int/es/news-room/fact-sheets/detail/chronic-obstructive-pulmonary-disease-(copd)"
    },

    "Rinitis alérgica": {
        sintomas: { "Tos": 0.2, "Fiebre": 0, "Disnea": 0, "Congestión nasal": 1, "Dolor de garganta": 0.9,
        "Estornudos": 1, "Fatiga": 0.5, "Dolor en el pecho": 0, "Sibilancias": 0.7, "Escalofríos": 0,
        "Mucosidad": 0.9, "Pérdida olfato": 0, "Pérdida gusto": 0, "Dolores musculares": 0, "Ronquera": 1,
        "Respiración rápida": 0 },
        origen: "Alérgico",
        tratamiento: "Antihistamínicos, descongestionantes y evitar alérgenos",
        enlace: "https://medlineplus.gov/spanish/ency/article/000813.htm"
    },

    "Sinusitis": {
        sintomas: { "Tos": 0.5, "Fiebre": 0.7, "Disnea": 0.1, "Congestión nasal": 1, "Dolor de garganta": 0.9,
        "Estornudos": 0.8, "Fatiga": 0.6, "Dolor en el pecho": 0.2, "Sibilancias": 0.2, "Escalofríos": 0.7,
        "Mucosidad": 1, "Pérdida olfato": 0, "Pérdida gusto": 0, "Dolores musculares": 0.7, "Ronquera": 0.8,
        "Respiración rápida": 0.1 },
        origen: "Infeccioso/ Alérgico",
        tratamiento: "Irrigación nasal, corticosteroides y antibióticos si es bacteriana",
        enlace: "https://medlineplus.gov/spanish/sinusitis.html"
    },

    "Faringitis": {
        sintomas: { "Tos": 0.6, "Fiebre": 0.9, "Disnea": 0.2, "Congestión nasal": 0.8, "Dolor de garganta": 1,
        "Estornudos": 0.1, "Fatiga": 0.7, "Dolor en el pecho": 0.1, "Sibilancias": 0.1, "Escalofríos": 0.9,
        "Mucosidad": 0.2, "Pérdida olfato": 0, "Pérdida gusto": 0, "Dolores musculares": 0.6, "Ronquera": 1,
        "Respiración rápida": 0.2 },
        origen: "Viral/ Bacteriano",
        tratamiento: "Gárgaras con agua salada, analgésicos y antibióticos si es estreptocócica",
        enlace: "https://medlineplus.gov/spanish/ency/article/001392.htm"
    }
};


const TOTAL_SINTOMAS = 16;

function calcularDiagnostico() {
    const paciente = {};
    let puntajeUsuario = 0;

    document.querySelectorAll('.sintoma-input').forEach(input => {
        const sintoma = input.dataset.sintoma;
        const valor = parseFloat(input.value);
        paciente[sintoma] = valor;
        puntajeUsuario += valor;
    });

    const porcentajeUsuario = (puntajeUsuario / TOTAL_SINTOMAS) * 100;

    const resultados = [];
    for (const [nombre, datos] of Object.entries(enfermedades)) {
        let puntaje = 0;
        for (const [sintoma, valor] of Object.entries(paciente)) {
            puntaje += Math.min(valor, datos.sintomas[sintoma] || 0);
        }
        const porcentaje = (puntaje / TOTAL_SINTOMAS) * 100;
        resultados.push({ nombre, porcentaje, ...datos });
    }

    resultados.sort((a, b) => b.porcentaje - a.porcentaje);

    const resultadosFiltrados = [resultados[0]]; // Mostrar solo la enfermedad más probable

    let html = `<h3>Tu porcentaje de síntomas reportados es de ${porcentajeUsuario.toFixed(1)}%</h3>`;

    if (resultadosFiltrados[0].porcentaje > 0) {
        const r = resultadosFiltrados[0];
        html += `
            <div class="resultado">
                <h3>${r.nombre} (Coincidencia: ${r.porcentaje.toFixed(1)}%)</h3>
                <p><strong>Origen:</strong> ${r.origen}</p>
                <p><strong>Tratamiento:</strong> ${r.tratamiento}</p>
                <p><strong>Más información:</strong> <a href="${r.enlace}" target="_blank">${r.enlace}</a></p>
            </div>
        `;
    } else {
        html += "<p>De acuerdo a tus síntomas no hay coincidencias.</p>";
    }

    document.getElementById('resultados').innerHTML = html;
}

function calcularDiagnosticoEspecifico() {
    const checkboxes = document.querySelectorAll('#lista-enfermedades input[type="checkbox"]:checked');
    if (checkboxes.length < 2) {
        alert("¡Seleccione al menos 2 enfermedades!");
        return;
    }

    const enfermedadesSeleccionadas = Array.from(checkboxes).map(cb => cb.value);
    const paciente = obtenerSintomasPaciente();
    let puntajeUsuario = 0;

    for (const sintoma in paciente) {
        puntajeUsuario += paciente[sintoma];
    }

    const porcentajeUsuario = (puntajeUsuario / TOTAL_SINTOMAS) * 100;

    const resultados = enfermedadesSeleccionadas.map(nombre => {
        const enfermedad = enfermedades[nombre];
        let puntaje = 0;
        for (const sintoma in paciente) {
            puntaje += Math.min(paciente[sintoma], enfermedad.sintomas[sintoma] || 0);
        }
        const porcentaje = (puntaje / TOTAL_SINTOMAS) * 100;
        return { ...enfermedad, nombre, porcentaje };
    });

    resultados.sort((a, b) => b.porcentaje - a.porcentaje);
    const resultadosFiltrados = [resultados[0]];

    let html = `<h3>Tu porcentaje de síntomas reportados es de ${porcentajeUsuario.toFixed(1)}%</h3>`;

    if (resultadosFiltrados[0].porcentaje > 0) {
        const r = resultadosFiltrados[0];
        html += `
            <div class="resultado-especifico">
                <h3>${r.nombre} (Coincidencia: ${r.porcentaje.toFixed(1)}%)</h3>
                <p><strong>Origen:</strong> ${r.origen}</p>
                <p><strong>Tratamiento:</strong> ${r.tratamiento}</p>
                <p><strong>Más información:</strong> <a href="${r.enlace}" target="_blank">${r.enlace}</a></p>
            </div>
        `;
    } else {
        html += "<p>De acuerdo a tus síntomas no hay coincidencias con las enfermedades seleccionadas.</p>";
    }

    document.getElementById('resultados-especificos').innerHTML = html;
}

function obtenerSintomasPaciente() {
    const paciente = {};
    document.querySelectorAll('.sintoma-input').forEach(input => {
        paciente[input.dataset.sintoma] = parseFloat(input.value);
    });
    return paciente;
}