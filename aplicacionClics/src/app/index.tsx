
import React, { useState } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

// Estructura de cada registro
interface Registro {
  id: number;
  numero: number;
  hora: string;
}

export default function App() {

  // Estado del contador
  const [contador, setContador] = useState(0);

  // Estado del historial
  const [registros, setRegistros] = useState<Registro[]>([]);

  // Funcion para incrementar los likes
  const incrementarContador = () => {

    const nuevoNumero = contador + 1;

    // Obtener la hora exacta
    const fecha = new Date();

    const hora = fecha.toLocaleTimeString('es-CO', {
      hour12: false,
    });

    // Actualizar el contador
    setContador(nuevoNumero);

    // Crear nuevo registro
    const nuevoRegistro: Registro = {
      id: Date.now(),
      numero: nuevoNumero,
      hora: hora,
    };

    // Agregar registro al historial
    setRegistros((anteriores) => [
      nuevoRegistro,
      ...anteriores,
    ]);
  };

  return (
    <View style={estilos.container}>

      {/* Titulo */}
      <Text style={estilos.titulo}>
        Contador de Likes
      </Text>

      <Text style={estilos.subtitulo}>
        Interactividad con React Native
      </Text>

      {/* Contador */}
      <Text style={estilos.contador}>
        {contador}
      </Text>

      {/* Boton para incrementar */}
      <TouchableOpacity
        style={estilos.boton}
        onPress={incrementarContador}
      >
        <Text style={estilos.textoBoton}>
          ❤️ ¡Haz clic aquí!
        </Text>
      </TouchableOpacity>

      {/* Tabla de registros */}
      <View style={estilos.tablaContainer}>

        <Text style={estilos.tituloTabla}>
          Historial de clics
        </Text>

        {/* Encabezado */}
        <View style={estilos.encabezado}>
          <Text style={estilos.th}>
            Nº Clic
          </Text>

          <Text style={estilos.th}>
            Hora
          </Text>
        </View>

        {/* Registros */}
        <ScrollView style={estilos.cuerpoTabla}>

          {registros.map((item) => (

            <View
              key={item.id}
              style={estilos.fila}
            >
              <Text style={estilos.td}>
                {item.numero}
              </Text>

              <Text style={estilos.td}>
                {item.hora}
              </Text>
            </View>

          ))}

          {registros.length === 0 && (
            <Text style={estilos.mensaje}>
              Todavía no hay registros
            </Text>
          )}

        </ScrollView>

      </View>

    </View>
  );
}

// Estilos de la aplicacion
const estilos = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f4f7f6',
    alignItems: 'center',
    padding: 20,
    paddingTop: 70,
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
  },

  subtitulo: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
  },

  contador: {
    fontSize: 70,
    fontWeight: 'bold',
    color: '#007bff',
    marginVertical: 25,
  },

  boton: {
    backgroundColor: '#28a745',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    elevation: 4,
  },

  textoBoton: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
  },

  tablaContainer: {
    width: '100%',
    marginTop: 40,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
  },

  tituloTabla: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#333',
  },

  encabezado: {
    flexDirection: 'row',
    backgroundColor: '#f8f9fa',
    borderBottomWidth: 1,
    borderBottomColor: '#dedede',
  },

  th: {
    flex: 1,
    color: '#007bff',
    fontWeight: 'bold',
    fontSize: 14,
    padding: 10,
    textAlign: 'center',
  },

  cuerpoTabla: {
    maxHeight: 250,
  },

  fila: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
  },

  td: {
    flex: 1,
    color: '#333333',
    fontSize: 14,
    padding: 10,
    textAlign: 'center',
  },

  mensaje: {
    textAlign: 'center',
    color: '#888888',
    padding: 20,
  },

});
