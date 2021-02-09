import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MountainData implements InMemoryDbService {

  createDb() {
    let mountains = [
      {
        "id": 0,
        "nombre": "Oroel",
        "descripcion": "La Peña Oroel es un monte de 1769 m de altura situado en Huesca (España), junto a la ciudad de Jaca. No es muy elevada, pero tiene mucha personalidad y resulta muy familiar en Jaca por ser muy visible desde cualquier punto de la ciudad.",
        "altura": 1769,
        "desnivel": 569,
        "tiempo": "1 hora",
        "imagen": "../../assets/images/oroel.jpg"
      },
      {
        "id": 1,
        "nombre": "Collarada",
        "descripcion": "Collarada es un pico del Pirineo aragonés de 2886 msnm de altitud, enclavado en el municipio de Villanúa (Huesca, España). Es la máxima altura de la Comarca de la Jacetania y una de las cumbres más impactantes del Pirineo por su amplia visibilidad. Se encuentra en el circo de Ip.",
        "altura": 2886,
        "desnivel": 2100,
        "tiempo": "4 horas",
        "imagen": "../../assets/images/collarada.jpeg"
      },
      {
        "id": 2,
        "nombre": "Aneto",
        "descripcion": "El Aneto es el pico más elevado de los Pirineos, con una altitud de 3404 metros sobre el nivel del mar. Se encuentra situado en el Parque natural Posets-Maladeta, en el municipio español de Benasque, provincia de Huesca, comunidad autónoma de Aragón.",
        "altura": 3404,
        "desnivel": 1454 ,
        "tiempo": "3 horas",
        "imagen": "../../assets/images/aneto.jpg"
      },
      {
        "id": 3,
        "nombre": "Lecherin",
        "descripcion": "Pico Lecherin se encuentra entre Aisa y Canfranc.",
        "altura": 2567,
        "desnivel": 1220,
        "tiempo": "2 horas y media",
        "imagen": "../../assets/images/lecherin.jpg"
      },
      {
        "id": 4,
        "nombre": "Anayet",
        "descripcion": "El Anayet es un volcán que pertenece a los Pirineos. Se sitúa al norte de Aragón (España), casi en la frontera con Francia, y no lejos del volcán de Ossau.",
        "altura": 2545,
        "desnivel": 1023,
        "tiempo": "2 horas y media",
        "imagen": "../../assets/images/vertice.jpg"
      }
    ];
    return { mountains: mountains };
  }
}
