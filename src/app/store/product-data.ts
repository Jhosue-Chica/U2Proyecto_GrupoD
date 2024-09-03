// src/app/store/product-data.ts

export interface Product {
    name: string;
    description: string;
    price: string;
    image: string;
}

export const PRODUCTS: Product[] = [
    {
        name: 'Guitarra Acústica Yamaha FG800',
        description: 'La Yamaha FG800 es una guitarra acústica ideal para principiantes y músicos intermedios.',
        price: '$200',
        image: '../../img_store/Guitarra Acústica.webp'
    },
    {
        name: 'Teclado Electrónico Casio CT-S300',
        description: 'Un teclado portátil de 61 teclas con sensibilidad al tacto. Ofrece 400 tonos, 77 ritmos.',
        price: '$150',
        image: '../../img_store/Teclado.png'
    },
    {
        name: 'Saxofón Alto Yamaha YAS-280',
        description: 'Este saxofón alto es conocido por su calidad de construcción y sonido.',
        price: '$1200',
        image: '../../img_store/Saxofon.webp'
    },
    {
        name: 'Batería Electrónica Roland TD-1KV',
        description: 'Este set de batería electrónica es compacto y ​ofrece una experiencia de batería realista. Incluye ​almohadillas de malla para un toque natural y ​conectividad para práctica silenciosa con ​auriculares.',
        price: '$600',
        image: '../../img_store/bateria.webp'
    },
    {
        name: 'Violin Stentor Student I',
        description: 'El Stentor Student I es un violín para principiantes, ​hecho a mano con madera maciza. Incluye un ​estuche, arco y resina, y es conocido por su buena ​calidad y durabilidad para estudiantes.',
        price: '$130',
        image: '../../img_store/violin.webp'
    },
    {
        name: 'Trompeta Bach TR300H2',
        description: 'Esta trompeta es adecuada para estudiantes ​avanzados y músicos intermedios. Tiene un diseño ​robusto y ofrece un sonido brillante y claro. Incluye ​estuche y boquilla.',
        price: '$1000',
        image: '../../img_store/trompeta.webp'
    },
    {
        name: 'Bajo Eléctrico Fender Player Jazz Bass',
        description: 'Un bajo eléctrico con un diseño clásico y un sonido ​versátil. Cuenta con dos pastillas de bobina simple ​y un mástil cómodo, ideal para una variedad de ​estilos musicales.',
        price: '$850',
        image: '../../img_store/bajo.webp'
    },
    {
        name: 'Flauta Yamaha YFL-222',
        description: 'La flauta Yamaha YFL-222 es perfecta para ​estudiantes, con un diseño duradero y una ​excelente entonación. Su construcción de níquel ​plateado ofrece un sonido cálido y resonante.',
        price: '$500',
        image: '../../img_store/flauta.webp'
    },
    {
        name: 'Piano Digital Yamaha P-125',
        description: 'Un piano digital portátil con 88 teclas con acción de ​martillo graduada. Ofrece una experiencia de piano ​auténtica y múltiples voces y ritmos para una ​amplia gama de estilos musicales.',
        price: '$700',
        image: '../../img_store/piano_dig.webp'
    }
];
