import { Ticket, solucionesPorCategoria, palabrasClave, incidentesPredefinidos } from './types';

function obtenerAleatorio<T>(lista: T[]): T {
    return lista[Math.floor(Math.random() * lista.length)];
}

function generarNumeroTicket(): number {
    return Math.floor(Math.random() * 10000);
}

// Detectar categoria del problema basado en palabras clave
function detectarCategoria(descripcion: string): string {
    const texto = descripcion.toLowerCase();
    
    for (const categoria of Object.keys(palabrasClave)) {
        const palabras = palabrasClave[categoria as keyof typeof palabrasClave];
        for (const palabra of palabras) {
            if (texto.includes(palabra)) {
                return categoria;
            }
        }
    }
    return "software"; // Categoria por defecto
}

// Generar solucion realista segun el problema
function generarSolucionRealista(descripcion: string): string {
    const categoria = detectarCategoria(descripcion);
    const soluciones = solucionesPorCategoria[categoria as keyof typeof solucionesPorCategoria];
    return obtenerAleatorio(soluciones);
}

function procesarIncidentePredefinido(opcion: number, nombreCliente: string): Ticket {
    const incidente = incidentesPredefinidos[opcion - 1];
    
    const ticket: Ticket = {
        numero: generarNumeroTicket(),
        fecha: new Date().toLocaleString(),
        cliente: nombreCliente,
        problema: incidente.nombre,
        prioridad: incidente.prioridad,
        solucion: incidente.solucion,
        tiempo: incidente.tiempo
    };
    
    return ticket;
}

function procesarIncidentePersonalizado(descripcion: string, nombreCliente: string): Ticket {
    const prioridades = ["ALTA", "MEDIA", "BAJA"];
    let prioridadAleatoria = obtenerAleatorio(prioridades);
    const tiempoAleatorio = Math.floor(Math.random() * 60) + 5;
    
    // Detectar si es caso grave para prioridad alta
    const categoria = detectarCategoria(descripcion);
    if (categoria === "grave") {
        prioridadAleatoria = "ALTA";
    }
    
    const solucionRealista = generarSolucionRealista(descripcion);
    
    const ticket: Ticket = {
        numero: generarNumeroTicket(),
        fecha: new Date().toLocaleString(),
        cliente: nombreCliente,
        problema: descripcion,
        prioridad: prioridadAleatoria,
        solucion: solucionRealista,
        tiempo: `${tiempoAleatorio} minutos`
    };
    
    return ticket;
}

function mostrarTicket(ticket: Ticket): void {
    console.log("\n" + "=".repeat(50));
    console.log("                 TICKET DE INCIDENTE");
    console.log("=".repeat(50));
    console.log(`\nTicket Nro: #${ticket.numero}`);
    console.log(`Fecha: ${ticket.fecha}`);
    console.log(`Cliente: ${ticket.cliente}`);
    console.log(`\n--- DETALLES DEL INCIDENTE ---`);
    console.log(`Problema: ${ticket.problema}`);
    console.log(`Prioridad: ${ticket.prioridad}`);
    console.log(`\n--- SOLUCION APLICADA ---`);
    console.log(`${ticket.solucion}`);
    console.log(`\n--- TIEMPO DE RESOLUCION ---`);
    console.log(`${ticket.tiempo}`);
    console.log("\n" + "=".repeat(50));
    console.log("        INCIDENTE RESUELTO");
    console.log("=".repeat(50));
}

export {
    procesarIncidentePredefinido,
    procesarIncidentePersonalizado,
    mostrarTicket
};