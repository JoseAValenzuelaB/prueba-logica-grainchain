# Prueba Lógica GrainChain


## Name
Mínimo número de bombillas.

## Description
En este proeycto se resuelve el ejercicio de lógica de GrainChain utilizando un enfoque de funciones recursivas para realizar las operaciones que dan solución al ejercicio.

## Algoritmo
El algoritmo pensado para resolver este ejercicio consta de buscar en los cuadrantes libres o disponibles recursivamente, el mayor número de espacios que pueden iluminar (score), tamando siempre el mejor score para asegurarnos que cada bombilla ilumine de manera maximizada los espacios, de esta manera nos aseguramos de obtener el menor número de bombillas para iluminar una habitación (room).

## Líbrerias usadas
Las librerías usadas son exclusivamente para la pequeña interfaz de usuario que se presenta.

- Colors -> Esta librería nos ayuda a agregar colores en las impresiones de consola.
- Inquirer -> Nos ayuda con el manejo del menú de acciones.

## Instalación
```
git clone https://gitlab.com/JoseAValenzuelaB/prueba-logica-grainchain.git
npm install
npm run start
```


Antes de iniciar el proeycto es necesario instalar las librerias externas.

```
npm install colors@1.4.0
npm install inquirer@7.3.3
```

## Instrucciones de uso
Para ejecutar esta pequeña aplicación solo basta con correr el siguiente comando en terminal:
```
npm run start
```
Al iniciar la aplicación se muestra un menú en el que se presentan tres opciones:
```
Cargar habitación desde archivo room.txt.
Colocar el mínimo de lamparas en la habitación.
Salir.
```

![Semantic description of image](https://gitlab.com/JoseAValenzuelaB/prueba-logica-grainchain/-/raw/develop/menú_inicial.png)

1. Nos permite cargar la "habitación" desde el archivo room.txt donde se encuentra una matriz que representa la habitación con ceros y unos.

2. Nos presenta la solución donde se mínimiza el número de bombillas para iluminar la habitación seleccionada.

3. La opción cero termina la ejecución de la aplicación.

NOTA: En el resultado las bombillas se representan como asteriscos (*) y las celdas ilumindas con guiones (-)

## Ejemplos de "Habitaciones".
En el archvo ejemplos.txt se encuentran diferentes habitaciones para realizar pruebas.

## IMPORTANTE
El archivo room.txt debe de respetar el formato que se presenta, no agregar ningún caracter que no corresponda como letras o cualquier otro diferente a 0 y 1 (no espacios, no saltos de línea, no letras), las comas se utilizan para delimitar el cuadrante o celda de la habitación. En caso de modificar el formato es posible que la habitación no se cargue de manera adecuada y el resultado podría verse afectado.
