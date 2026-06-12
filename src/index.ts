import * as readline from 'readline';
import { 
    procesarIncidentePredefinido, 
    procesarIncidentePersonalizado, 
    mostrarTicket 
} from './incidents';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function pregunta(prompt: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(prompt, resolve);
    });
}

async function main() {
    console.clear();
    console.log("=".repeat(50));
    console.log("   SISTEMA DE GESTION DE INCIDENTES");
    console.log("=".repeat(50));
    
    // Solicitar nombre
    const nombre = await pregunta("\nIngrese su nombre: ");
    
    console.log(`\nHola ${nombre}, bienvenido al sistema de incidentes.`);
    
    let continuar = true;
    
    while (continuar) {
        // Mostrar menu principal
        console.log("\n" + "-".repeat(40));
        console.log("MENU PRINCIPAL:");
        console.log("-".repeat(40));
        console.log("\n1. Reportar nuevo incidente");
        console.log("2. Salir");
        
        const opcionMenu = await pregunta("\nSeleccione una opcion (1-2): ");
        
        if (opcionMenu === "2") {
            console.log("\n¡Hasta luego!");
            continuar = false;
            break;
        }
        
        if (opcionMenu !== "1") {
            console.log("\nOpcion no valida");
            continue;
        }
        
        // Mostrar tipos de incidentes
        console.log("\n" + "-".repeat(40));
        console.log("TIPO DE INCIDENTE:");
        console.log("-".repeat(40));
        console.log("\n1. Computadora no funciona");
        console.log("2. Internet lento");
        console.log("3. Periferico no funciona");
        console.log("4. Otro (describir problema)");
        
        const opcion = await pregunta("\nSeleccione el tipo de incidente (1-4): ");
        
        let ticket;
        
        // Procesar segun la opcion
        if (opcion === "1" || opcion === "2" || opcion === "3") {
            ticket = procesarIncidentePredefinido(parseInt(opcion), nombre);
        } 
        else if (opcion === "4") {
            const descripcion = await pregunta("\nDescriba su problema detalladamente: ");
            ticket = procesarIncidentePersonalizado(descripcion, nombre);
        } 
        else {
            console.log("\nOpcion no valida");
            continue;
        }
        
        // Mostrar el ticket generado
        mostrarTicket(ticket);
        
        // Preguntar si quiere reportar otro incidente
        const otro = await pregunta("\n¿Desea reportar otro incidente? (s/n): ");
        if (otro.toLowerCase() !== "s") {
            console.log("\n¡Gracias por usar el sistema!");
            continuar = false;
        }
    }
    
    rl.close();
}

main().catch(console.error);