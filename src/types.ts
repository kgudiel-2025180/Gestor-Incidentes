export interface IncidentePredefinido {
    nombre: string;
    solucion: string;
    tiempo: string;
    prioridad: string;
}

export interface Ticket {
    numero: number;
    fecha: string;
    cliente: string;
    problema: string;
    prioridad: string;
    solucion: string;
    tiempo: string;
}

// Soluciones por categoria de problema
export const solucionesPorCategoria = {
    hardware: [
        "Revisar conexiones internas del equipo",
        "Probar el componente en otro equipo",
        "Reemplazar pieza dañada",
        "Limpiar componentes con aire comprimido",
        "Verificar fuente de poder",
        "Revisar temperatura del procesador",
        "Cambiar pasta termica",
        "Revisar memoria RAM (resitarlos o cambiarlos)"
    ],
    red: [
        "Reiniciar router y modem",
        "Verificar cables de red",
        "Renovar IP (ipconfig /renew)",
        "Revisar configuracion del firewall",
        "Cambiar DNS por 8.8.8.8",
        "Revisar si hay caida del ISP"
    ],
    software: [
        "Reinstalar el programa",
        "Actualizar a ultima version",
        "Ejecutar como administrador",
        "Limpiar cache y archivos temporales",
        "Revisar compatibilidad con Windows",
        "Desactivar antivirus temporalmente"
    ],
    perifericos: [
        "Cambiar puerto USB",
        "Reinstalar drivers del dispositivo",
        "Probar en otra computadora",
        "Actualizar firmware",
        "Revisar si windows reconoce el dispositivo",
        "Limpiar conectores del periferico"
    ],
    grave: [
        "⚠️ APAGAR EL EQUIPO INMEDIATAMENTE ⚠️",
        "Desconectar de la corriente electrica",
        "Revisar si hay olor a quemado",
        "Llevar a servicio tecnico especializado",
        "No volver a encender hasta revisión profesional",
        "Verificar voltaje de la fuente de poder"
    ]
};

// Palabras clave para detectar categoria
export const palabrasClave = {
    hardware: ["cpu", "procesador", "ram", "disco", "fuente", "placa", "tarjeta", "quemado", "humo", "olor"],
    red: ["internet", "wifi", "red", "conexion", "navegador", "google", "pagina", "web"],
    software: ["programa", "aplicacion", "software", "windows", "error", "crash", "congelado", "lento"],
    perifericos: ["mouse", "teclado", "usb", "impresora", "monitor", "pantalla", "parlante", "camara"],
    grave: ["fuego", "humo", "quemado", "exploto", "incendio", "chispas", "olor a quemado"]
};

export const incidentesPredefinidos: IncidentePredefinido[] = [
    {
        nombre: "Una computadora no funciona",
        solucion: "Revisar cables de poder y encendido",
        tiempo: "10 minutos",
        prioridad: "ALTA"
    },
    {
        nombre: "El internet es lento",
        solucion: "Reiniciar router y verificar velocidad",
        tiempo: "15 minutos",
        prioridad: "MEDIA"
    },
    {
        nombre: "Uno de los perifericos no funciona",
        solucion: "Reinstalar drivers y probar otro puerto USB",
        tiempo: "20 minutos",
        prioridad: "BAJA"
    }
];