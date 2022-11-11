import product1 from 'assets/images/products/product_1.png'
import product2 from 'assets/images/products/product_2.png'
import product3 from 'assets/images/products/product_3.png'

export const products = [
    {
        id: '0',
        brand: 'samsung',
        product_name: 'Смартфон Samsung Galaxy A50',
        product_price: 7300000,
        has_exchange: false,
        exchange_percent: 0,
        gift_for_product: 'Lorem Ipsum apple',
        has_gift: true,
        has_discount: false,
        has_imei_discount: false,
        imei_discount_percent: 0,
        desc: 'моноблок (классический) Стандарт: 2G, 3G, 4G(LTE), 5G Операционная система: iOS 14',
        markup_percent: 5,
        markup_months: [
            {
                id: '0',
                month: 3,
                title: '3 мес',
                markup_percent_by: 1,
            },
            {
                id: '1',
                month: 6,
                title: '6 мес',
                markup_percent_by: 2,
            },
            {
                id: '2',
                month: 12,
                title: '12 мес',
                markup_percent_by: 3,
            },
            {
                id: '3',
                month: 24,
                title: '24 мес',
                markup_percent_by: 4,
            },
        ],
        image: product2,
        thumbs: [
            {
                id: '0',
                img: product2
            },
            {
                id: '1',
                img: product2
            },
            {
                id: '2',
                img: product2
            },
        ]
    },
    {
        id: '1',
        brand: 'apple',
        product_name: 'Смартфон Apple iPhone 11 128 Gb Slim Box',
        product_price: 6000000,
        has_exchange: false,
        exchange_percent: 0,
        gift_for_product: '',
        has_gift: false,
        has_discount: false,
        has_imei_discount: true,
        imei_discount_percent: 5,
        desc: 'моноблок (классический) Стандарт: 2G, 3G, 4G(LTE), 5G Операционная система: iOS 14',
        markup_percent: 5,
        markup_months: [
            {
                id: '0',
                month: 3,
                title: '3 мес',
                markup_percent_by: 1,
            },
            {
                id: '1',
                month: 6,
                title: '6 мес',
                markup_percent_by: 2,
            },
            {
                id: '2',
                month: 12,
                title: '12 мес',
                markup_percent_by: 3,
            },
            {
                id: '3',
                month: 24,
                title: '24 мес',
                markup_percent_by: 4,
            },
        ],
        image: product1,
        thumbs: [
            {
                id: '0',
                img: product1
            },
            {
                id: '1',
                img: product1
            },
            {
                id: '2',
                img: product1
            },
        ]
    },
    {
        id: '2',
        brand: 'apple',
        product_name: 'Смартфон Apple iPhone 14 128 Gb Slim Box',
        product_price: 16000000,
        has_exchange: true,
        exchange_percent: 5,
        gift_for_product: '',
        has_gift: false,
        has_discount: false,
        has_imei_discount: false,
        imei_discount_percent: 5,
        desc: 'Плавный FullHD+ экран1 90 Гц 3 камеры, основная 48 МП Ёмкий аккумулятор 5000 мА·ч2 и супербыстрая зарядка Чёткий и плавный экран 90 Гц',
        markup_percent: 5,
        markup_months: [
            {
                id: '0',
                month: 3,
                title: '3 мес',
                markup_percent_by: 1,
            },
            {
                id: '1',
                month: 6,
                title: '6 мес',
                markup_percent_by: 2,
            },
            {
                id: '2',
                month: 12,
                title: '12 мес',
                markup_percent_by: 3,
            },
            {
                id: '3',
                month: 24,
                title: '24 мес',
                markup_percent_by: 4,
            },
        ],
        image: product2,
        thumbs: [
            {
                id: '0',
                img: product2
            },
            {
                id: '1',
                img: product2
            },
            {
                id: '2',
                img: product2
            },
        ]
    },
    {
        id: '3',
        brand: 'apple',
        product_name: 'Наушники Apple Airpods Pro Max 900',
        product_price: 4000000,
        has_exchange: false,
        exchange_percent: 5,
        gift_for_product: 'Lorem impos aler',
        has_gift: true,
        has_discount: false,
        has_imei_discount: true,
        imei_discount_percent: 5,
        desc: 'Плавный FullHD+ экран1 90 Гц 3 камеры, основная 48 МП Ёмкий аккумулятор 5000 мА·ч2 и супербыстрая зарядка Чёткий и плавный экран 90 Гц',
        markup_percent: 5,
        markup_months: [
            {
                id: '0',
                month: 3,
                title: '3 мес',
                markup_percent_by: 1,
            },
            {
                id: '1',
                month: 6,
                title: '6 мес',
                markup_percent_by: 2,
            },
            {
                id: '2',
                month: 12,
                title: '12 мес',
                markup_percent_by: 3,
            },
            {
                id: '3',
                month: 24,
                title: '24 мес',
                markup_percent_by: 4,
            },
        ],
        image: product3,
        thumbs: [
            {
                id: '0',
                img: product3
            },
            {
                id: '1',
                img: product3
            },
            {
                id: '2',
                img: product3
            },
        ]
    },
    {
        id: '4',
        brand: 'apple',
        product_name: 'Наушники Apple Airpods Pro Max 900',
        product_price: 4000000,
        has_exchange: false,
        exchange_percent: 5,
        gift_for_product: '',
        has_gift: false,
        has_discount: false,
        has_imei_discount: false,
        imei_discount_percent: 5,
        desc: 'Плавный FullHD+ экран1 90 Гц 3 камеры, основная 48 МП Ёмкий аккумулятор 5000 мА·ч2 и супербыстрая зарядка Чёткий и плавный экран 90 Гц',
        markup_percent: 5,
        markup_months: [
            {
                id: '0',
                month: 3,
                title: '3 мес',
                markup_percent_by: 1,
            },
            {
                id: '1',
                month: 6,
                title: '6 мес',
                markup_percent_by: 2,
            },
            {
                id: '2',
                month: 12,
                title: '12 мес',
                markup_percent_by: 3,
            },
            {
                id: '3',
                month: 24,
                title: '24 мес',
                markup_percent_by: 4,
            },
        ],
        image: product3,
        thumbs: [
            {
                id: '0',
                img: product3
            },
            {
                id: '1',
                img: product3
            },
            {
                id: '2',
                img: product3
            },
        ]
    },
    {
        id: '5',
        brand: 'apple',
        product_name: 'Наушники Apple Airpods Pro Max 900',
        product_price: 4000000,
        has_exchange: false,
        exchange_percent: 5,
        gift_for_product: '',
        has_gift: false,
        has_discount: false,
        has_imei_discount: false,
        imei_discount_percent: 5,
        desc: 'Плавный FullHD+ экран1 90 Гц 3 камеры, основная 48 МП Ёмкий аккумулятор 5000 мА·ч2 и супербыстрая зарядка Чёткий и плавный экран 90 Гц',
        markup_percent: 5,
        markup_months: [
            {
                id: '0',
                month: 3,
                title: '3 мес',
                markup_percent_by: 1,
            },
            {
                id: '1',
                month: 6,
                title: '6 мес',
                markup_percent_by: 2,
            },
            {
                id: '2',
                month: 12,
                title: '12 мес',
                markup_percent_by: 3,
            },
            {
                id: '3',
                month: 24,
                title: '24 мес',
                markup_percent_by: 4,
            },
        ],
        image: product3,
        thumbs: [
            {
                id: '0',
                img: product3
            },
            {
                id: '1',
                img: product3
            },
            {
                id: '2',
                img: product3
            },
        ]
    },
    {
        id: '6',
        brand: 'apple',
        product_name: 'Наушники Apple Airpods Pro Max 900',
        product_price: 4000000,
        has_exchange: false,
        exchange_percent: 5,
        gift_for_product: 'Lorem Ipsum',
        has_gift: true,
        has_discount: false,
        has_imei_discount: false,
        imei_discount_percent: 5,
        desc: 'Плавный FullHD+ экран1 90 Гц 3 камеры, основная 48 МП Ёмкий аккумулятор 5000 мА·ч2 и супербыстрая зарядка Чёткий и плавный экран 90 Гц',
        markup_percent: 5,
        markup_months: [
            {
                id: '0',
                month: 3,
                title: '3 мес',
                markup_percent_by: 1,
            },
            {
                id: '1',
                month: 6,
                title: '6 мес',
                markup_percent_by: 2,
            },
            {
                id: '2',
                month: 12,
                title: '12 мес',
                markup_percent_by: 3,
            },
            {
                id: '3',
                month: 24,
                title: '24 мес',
                markup_percent_by: 4,
            },
        ],
        image: product3,
        thumbs: [
            {
                id: '0',
                img: product3
            },
            {
                id: '1',
                img: product3
            },
            {
                id: '2',
                img: product3
            },
        ]
    },
    {
        id: '7',
        brand: 'apple',
        product_name: 'Наушники Apple Airpods Pro Max 900',
        product_price: 4000000,
        has_exchange: false,
        exchange_percent: 5,
        gift_for_product: '',
        has_gift: false,
        has_discount: false,
        has_imei_discount: false,
        imei_discount_percent: 5,
        desc: 'Плавный FullHD+ экран1 90 Гц 3 камеры, основная 48 МП Ёмкий аккумулятор 5000 мА·ч2 и супербыстрая зарядка Чёткий и плавный экран 90 Гц',
        markup_percent: 5,
        markup_months: [
            {
                id: '0',
                month: 3,
                title: '3 мес',
                markup_percent_by: 1,
            },
            {
                id: '1',
                month: 6,
                title: '6 мес',
                markup_percent_by: 2,
            },
            {
                id: '2',
                month: 12,
                title: '12 мес',
                markup_percent_by: 3,
            },
            {
                id: '3',
                month: 24,
                title: '24 мес',
                markup_percent_by: 4,
            },
        ],
        image: product3,
        thumbs: [
            {
                id: '0',
                img: product3
            },
            {
                id: '1',
                img: product3
            },
            {
                id: '2',
                img: product3
            },
        ]
    },
    {
        id: '8',
        brand: 'apple',
        product_name: 'Наушники Apple Airpods Pro Max 900',
        product_price: 4000000,
        has_exchange: false,
        exchange_percent: 5,
        gift_for_product: '',
        has_gift: false,
        has_discount: false,
        has_imei_discount: false,
        imei_discount_percent: 5,
        desc: 'Плавный FullHD+ экран1 90 Гц 3 камеры, основная 48 МП Ёмкий аккумулятор 5000 мА·ч2 и супербыстрая зарядка Чёткий и плавный экран 90 Гц',
        markup_percent: 5,
        markup_months: [
            {
                id: '0',
                month: 3,
                title: '3 мес',
                markup_percent_by: 1,
            },
            {
                id: '1',
                month: 6,
                title: '6 мес',
                markup_percent_by: 2,
            },
            {
                id: '2',
                month: 12,
                title: '12 мес',
                markup_percent_by: 3,
            },
            {
                id: '3',
                month: 24,
                title: '24 мес',
                markup_percent_by: 4,
            },
        ],
        image: product3,
        thumbs: [
            {
                id: '0',
                img: product3
            },
            {
                id: '1',
                img: product3
            },
            {
                id: '2',
                img: product3
            },
        ]
    },
    {
        id: '9',
        brand: 'apple',
        product_name: 'Наушники Apple Airpods Pro Max 900',
        product_price: 4000000,
        has_exchange: false,
        exchange_percent: 5,
        gift_for_product: '',
        has_gift: false,
        has_discount: false,
        has_imei_discount: false,
        imei_discount_percent: 5,
        desc: 'Плавный FullHD+ экран1 90 Гц 3 камеры, основная 48 МП Ёмкий аккумулятор 5000 мА·ч2 и супербыстрая зарядка Чёткий и плавный экран 90 Гц',
        markup_percent: 5,
        markup_months: [
            {
                id: '0',
                month: 3,
                title: '3 мес',
                markup_percent_by: 1,
            },
            {
                id: '1',
                month: 6,
                title: '6 мес',
                markup_percent_by: 2,
            },
            {
                id: '2',
                month: 12,
                title: '12 мес',
                markup_percent_by: 3,
            },
            {
                id: '3',
                month: 24,
                title: '24 мес',
                markup_percent_by: 4,
            },
        ],
        image: product3,
        thumbs: [
            {
                id: '0',
                img: product3
            },
            {
                id: '1',
                img: product3
            },
            {
                id: '2',
                img: product3
            },
        ]
    },
    {
        id: '10',
        brand: 'apple',
        product_name: 'Наушники Apple Airpods Pro Max 900',
        product_price: 4000000,
        has_exchange: false,
        exchange_percent: 5,
        gift_for_product: '',
        has_gift: true,
        has_discount: true,
        has_imei_discount: false,
        imei_discount_percent: 5,
        desc: 'Плавный FullHD+ экран1 90 Гц 3 камеры, основная 48 МП Ёмкий аккумулятор 5000 мА·ч2 и супербыстрая зарядка Чёткий и плавный экран 90 Гц',
        markup_percent: 5,
        markup_months: [
            {
                id: '0',
                month: 3,
                title: '3 мес',
                markup_percent_by: 1,
            },
            {
                id: '1',
                month: 6,
                title: '6 мес',
                markup_percent_by: 2,
            },
            {
                id: '2',
                month: 12,
                title: '12 мес',
                markup_percent_by: 3,
            },
            {
                id: '3',
                month: 24,
                title: '24 мес',
                markup_percent_by: 4,
            },
        ],
        image: product3,
        thumbs: [
            {
                id: '0',
                img: product3
            },
            {
                id: '1',
                img: product3
            },
            {
                id: '2',
                img: product3
            },
        ]
    },
    {
        id: '11',
        brand: 'apple',
        product_name: 'Наушники Apple Airpods Pro Max 900',
        product_price: 4000000,
        has_exchange: true,
        exchange_percent: 5,
        gift_for_product: '',
        has_gift: false,
        has_discount: false,
        has_imei_discount: false,
        imei_discount_percent: 5,
        desc: 'Плавный FullHD+ экран1 90 Гц 3 камеры, основная 48 МП Ёмкий аккумулятор 5000 мА·ч2 и супербыстрая зарядка Чёткий и плавный экран 90 Гц',
        markup_percent: 5,
        markup_months: [
            {
                id: '0',
                month: 3,
                title: '3 мес',
                markup_percent_by: 1,
            },
            {
                id: '1',
                month: 6,
                title: '6 мес',
                markup_percent_by: 2,
            },
            {
                id: '2',
                month: 12,
                title: '12 мес',
                markup_percent_by: 3,
            },
            {
                id: '3',
                month: 24,
                title: '24 мес',
                markup_percent_by: 4,
            },
        ],
        image: product3,
        thumbs: [
            {
                id: '0',
                img: product3
            },
            {
                id: '1',
                img: product3
            },
            {
                id: '2',
                img: product3
            },
        ]
    }
]