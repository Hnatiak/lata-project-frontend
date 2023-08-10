const boxs = [
    {
      "id": 1,
      "title": "Упаковка для бургера",
      "category": "",
      "link": "/box1",
      "price": 5,
      "url": "https://lata.net.ua/upload/iblock/e30/e3004b9e853c5349de02cff019800a9d.jpg",
      "description" : "ПРИЗНАЧЕННЯ: коробка підходить для фасування гамбургерів, чизбургерів, фішбургери і інших бутербродів, кришка-дно. Ця коробка зроблена з картону, покритого всередині  ламінацією. У неї можна класти жирні бургери з соусами, так як цей матеріал стійкий до харчових кислот і масел.",
      "details": "Довжина / Ширина / Висота: 125*125*110 мм"
      // "price": 5 грн",
    },
    {
      "id": 2,
      "title": "Паперовий пакет",
      "category": "",
      "link": "/box2",
      "price": 2,
      "url": "https://lata.net.ua/upload/iblock/4f4/4f475122ed54c716e0118fc8405fdfe9.jpg",
      "description" : "",
      "details": ""
    },
    {
      "id": 3,
      "title": "Нанесеня одноколірного флексодруку",
      "category": "CorrugatedCardboard",
      "link": "/example",
      "price": 10,
      "url": "https://lata.net.ua/upload/iblock/087/0876dc1fb8e50b9e213c56fc6f902a9d.jpg",
      "description" : "Гофротара - це пакувальний одноразовий виріб з гофрованого картону, призначений для забезпечення захисту побутових предметів від механічного та атмосферного впливу під час транспортування у вантажному транспорті. Картонні коробки з гофрокартону мають досить великі габаритні розміри і призначені як для перевезення дорогоцінних предметів, так і великої кількості дрібних виробів, зібраних в одному місці, для запобігання їх втрати під час переїзду. Коробки з гофрокартону повинні мати невисоку вартість, так як вони призначені для захисту виробів при транспортуванні на великі відстані, але уберегти і захистити продукцію, яку перевозять. Дані картонні коробки зазвичай мають конструкцію чотирьохклапанної коробки.",
      "details": "Коплектуючі: \n-    гофропрокладка; \n-    гофрорешітка;\n-    вкладки."
    },
    {
      "id": 4,
      "title": "Гофрокоробки з білим або бурим покриттям",
      "category": "CorrugatedCardboard",
      "link": "/example",
      "price": 6,
      "url": "https://lata.net.ua/upload/iblock/4e3/4e32ce41d984baecc2e328feadba8b06.jpg",
      "description" : "Гофротара - це пакувальний одноразовий виріб з гофрованого картону, призначений для забезпечення захисту побутових предметів від механічного та атмосферного впливу під час транспортування у вантажному транспорті. Картонні коробки з гофрокартону мають досить великі габаритні розміри і призначені як для перевезення дорогоцінних предметів, так і великої кількості дрібних виробів, зібраних в одному місці, для запобігання їх втрати під час переїзду. Коробки з гофрокартону повинні мати невисоку вартість, так як вони призначені для захисту виробів при транспортуванні на великі відстані, але уберегти і захистити продукцію, яку перевозять. Дані картонні коробки зазвичай мають конструкцію чотирьохклапанної коробки.",
      "details": "Коплектуючі: \n-    гофропрокладка; \n-    гофрорешітка;\n-    вкладки."
    },
    {
      "id": 5,
      "title": "Коробки під торти",
      "category": "FullColorPackaging",
      "link": "/example",
      "price": 1,
      "url": "https://lata.net.ua/upload/iblock/e1b/e1bb5363ac4845835de0b05c606198f4.jpg",
      "description" : "Картонна упаковка для тортів, як і будь-яка інша харчова упаковка, виготовляється з пакувальних картонів, з  відповідними вимогами ГОСТ-ів. Картонна харчова упаковка володіє вищими властивостями водо- і жиронепроникності.",
      "details": "Картонна упаковка для тортів, як і будь-яка інша харчова упаковка, виготовляється з пакувальних картонів, з  відповідними вимогами ГОСТ-ів. Картонна харчова упаковка володіє вищими властивостями водо- і жиронепроникності. При виготовленні картонної упаковки для тортів використовуються друк, що додає неповторний вид кожного виробу. Різноманітність конструкцій упаковки залежить від фантазії конструктора, який може на замовлення спроектувати коробку незвичайної форми, що приверне увагу споживача і підкреслить унікальність пропонованого продукту ."
    },
    {
      "id": 6,
      "title": "Коробки під цукерки (Миколай)",
      "category": "FullColorPackaging",
      "link": "/example",
      "price": 0.50,
      "url": "https://lata.net.ua/upload/iblock/71c/71c7e18cf02850d6c1c5bff9086068bc.JPG",
      "description" : "Свято на котре чекають багато діточок. У нашому пакуванні подарунки приноситимуть ше більше радості для малечі. Цікавий та яскравий дизайн, ручка для зручності, легко розпакувати та доволі вмістима середина.",
      "details": "Вельми зручна у застосуванні упаковка тому, що вона зберігає цілісність продукції та захищаює її від розломів і пошкоджень. Товщина такої упаковки часто складає 0,3-1,5 мм., в деяких випадках вона може бути овстішою або навпаки в залежності від специфіки товару. На подарункову картонну упаковку може бути нанесена одноколірний або багатофарбовий надрук. Вдалий дизайн дозволить надати упаковці потрібний настрій. Розміри коробок можуть бути різними, від найменших до великих. Крім того, контроль дотримання технологічних параметрів на всіх стадіях виробничого процесу дозволяє гарантувати повну відповідність виготовленої продукції критеріям якості і вимогам замовника."
    },
    {
      "id": 7,
      "title": "Плакати, весільні номери",
      "category": "FullColorPackaging",
      "link": "/example",
      "price": 10,
      "url": "https://lata.net.ua/upload/iblock/3bf/3bfab81050f3b9d4beeb2d6d4afab5e6.jpg",
      "description" : "Весільні плакати завжди стануть окрасою Вашої події. Розвеселять гостей та додадуть ізюминку до Вашого святкування. Друкуємо плакати для весіль різного формату. Ви можете замовити друк з готового макету чи замовити унікальний дизайн.",
      "details": "Щоб весілля було цікаве та помітне ще з далеку є традиція подавати автомобільний сигнал, а щоб впізнавати його ще й візуально потрібно номерні знаки. Такий знак гарно виглядатиме на автомобілях молодого та молодої, а  також п'яних гостей. Завжди виділятиме авто серед інших і зробить Вашу забаву ще цікавішою."
    },
    {
      "id": 8,
      "title": "Коробки для квітів",
      "category": "FullColorPackaging",
      "link": "/example",
      "price": 80,
      "url": "https://lata.net.ua/upload/iblock/abb/abbb05b2879c1c9247d51d3a91dd3ae7.jpg",
      "description" : "Коробки для квітів",
      "details": ""
    },
    {
      "id": 9,
      "title": "Коробки під солодке",
      "category": "FullColorPackaging",
      "link": "/example",
      "price": 2,
      "url": "https://lata.net.ua/upload/iblock/20d/20d2fdb81fe4c85f2d6bf5f98f7bac62.jpg",
      "description" : "Подарункова упаковка для солодощів виготовляється з гофрованого або дуже щільного картону хром-ерзац, який забезпечує надійний захист продукції від різних зовнішніх впливів.",
      "details": "Картонна упаковка вельми зручна у застосуванні , оскільки зберігає цілісність продукції, захищаючи від розломів і пошкоджень. Товщина подарунковій картонної упаковки часто складає 0,3-1,5 мм. Для даного типу упаковки використовується білий картон. На подарункову картонну упаковку може бути нанесена одноколірний або багатофарбовий надрук. Вдалий дизайн дозволить надати упаковці потрібний настрій. Розміри коробок можуть бути різними, від найменших до великих. Крім того, контроль дотримання технологічних параметрів на всіх стадіях виробничого процесу дозволяє гарантувати повну відповідність виготовленої продукції критеріям якості і вимогам замовника."
    },
    {
      "id": 10,
      "title": "Коробки під печиво \"екрани\"",
      "category": "FullColorPackaging",
      "link": "/example",
      "price": 2,
      "url": "https://lata.net.ua/upload/iblock/733/7337fb2ad727930e4e5b6d6a2a585519.jpg",
      "description" : "Цей вид коробок не дарма називається екран. Завдяки такій конструкції він немов на \"екрані телевізору\" демонструє, яка смакота всередині. Добре підходить для транспортування та продажу печива.",
      "details": "Завдяки таким коробкам ваше печиво продаватиметься ще краще, адже пакування само презентуватиме покупцю вміст."
    },
    {
      "id": 11,
      "title": "Коробки під взуття",
      "category": "FullColorPackaging",
      "link": "/example",
      "price": 2,
      "url": "https://lata.net.ua/upload/iblock/e04/e0495bd924fb1ff2158e4dd9137b6062.jpg",
      "description" : "Зважаючи численності взуттєвих фабрик, існує величезна різноманітність конструкцій для коробок під взуття, які виконуються з різних матеріалів.",
      "details": "Коробка «кришка - дно» виготовляється з кашированного картону, товщиною приблизно 1-2 мм, з нанесенням офсетного друку. Такі коробки призначені для дорогого модельного взуття. Коробка конструкції «суцільна» також є упаковкою для модельного взуття, використовується, в основному, під туфлі і черевики. Проводиться вона з кашированного мікрогофрокартону. Дані конструкція самозбірні і не вимагає додаткової склейки. Для повсякденного взуття використовуються коробки з білого гофрокартону, що володіє високими характеристиками міцності.  Також можливе виробництво коробок під взуття відмінної від звичної конструкції, що безсумнівно, приверне увагу покупця. Необов'язково нанесення на упаковку саме повноколірного друку, можна підібрати вдале поєднання всього декількох кольорів."
    },
    {
      "id": 12,
      "title": "Коробки під піцу з картону хром-ерзацу",
      "category": "FullColorPackaging",
      "link": "/example",
      "price": 2,
      "url": "https://lata.net.ua/upload/iblock/de9/de9131776ff0a2d3242d740a8b89e40d.JPG",
      "description" : "Виготовлення під замовлення картонних коробок під піцу з нанесенням фірмового друку в 1-2 кольори,  або повно колірного друку, який допоможе виділити Вашу продукцію серед конкурентів за рахунок оригінальності і впізнаванності упаковки.",
      "details": "Різноманітні розміри, готові коробки зі складу, виготовлення на замовлення. Компанія \"Лата\" пропонує картонні коробки під піцу різних типів і розмірів з мікрогофрокартону, гофрокартону та картону хром-ерзац, з нанесенням друку логотипу замовника."
    },
    {
      "id": 13,
      "title": "Коробки під піцу з мікрогофрокартону",
      "category": "FullColorPackaging",
      "link": "/example",
      "price": 3,
      "url": "https://lata.net.ua/upload/iblock/8cd/8cda98a7a69811aa9e459d5ce846b26d.JPG",
      "description" : "Виготовлення під замовлення картонних коробок під піцу з нанесенням фірмового друку в 1-2 кольори,  або повно колірного друку, який допоможе виділити Вашу продукцію серед конкурентів за рахунок оригінальності і впізнаванності упаковки.",
      "details": "Різноманітні розміри, готові коробки зі складу, виготовлення на замовлення. Компанія \"Лата\" пропонує картонні коробки під піцу різних типів і розмірів з мікрогофрокартону, гофрокартону та картону хром-ерзац, з нанесенням друку логотипу замовника."
    },
    {
      "id": 14,
      "title": "Коробки будь-яких розмірів",
      "category": "CorrugatedCardboard",
      "link": "/example",
      "price": 6,
      "url": "https://lata.net.ua/upload/iblock/dcc/dcccc8748f6dab9d34006a5560a31d13.jpg",
      "description" : "Гофротара - це пакувальний одноразовий виріб з гофрованого картону, призначений для забезпечення захисту побутових предметів від механічного та атмосферного впливу під час транспортування у вантажному транспорті. Картонні коробки з гофрокартону мають досить великі габаритні розміри і призначені як для перевезення дорогоцінних предметів, так і великої кількості дрібних виробів, зібраних в одному місці, для запобігання їх втрати під час переїзду. Коробки з гофрокартону повинні мати невисоку вартість, так як вони призначені для захисту виробів при транспортуванні на великі відстані, але уберегти і захистити продукцію, яку перевозять. Дані картонні коробки зазвичай мають конструкцію чотирьохклапанної коробки.",
      "details": "Коплектуючі: \n-    гофропрокладка; \n-    гофрорешітка;\n-    вкладки."
    },
    {
      "id": 15,
      "title": "Паперові стаканчики",
      "category": "PaperCups",
      "link": "/example",
      "price": 80,
      "url": "https://lata.net.ua/upload/iblock/683/683a0f03f26554fb562ca3f099df53a6.jpg",
      "description" : "Паперові стакани мають меншу теплопровідність в порівнянні з пластиковим , його приємніше тримати в руках , крім того на нього можна нанести гарний малюнок або логотип. Паперовий стакан , зроблений з якісної сировини при використанні харчових фарб для друку дизайну , ніколи не змінить смак і запах напою.",
      "details": "Паперові стакани об’ємом: 110, 175, 185 мл. \n-   білі; \n- стандартний дизайн; \n- індивідуальний дизайн \nЦіна: \n110 мл  = 0,50 грн \n175 мл = 0,60 грн\n185 мл:\nвід 100 шт. = 0,80 грн.\nвід 1500 шт. = 0,78 грн.\nвід 7500 шт. = 0,76 грн.\nвід 15000 шт. = 0,74 грн. \nвід 50000 шт. = 0,72 грн.\nтел. 0673231736 Василь."
    },
    {
      "id": 15,
      "title": "Паперові стаканчики",
      "category": "PaperCups",
      "link": "/projects/papirov_cups/",
      "price": 80,
      "url": "https://lata.net.ua/upload/iblock/683/683a0f03f26554fb562ca3f099df53a6.jpg",
      "description" : "Паперові стакани мають меншу теплопровідність в порівнянні з пластиковим , його приємніше тримати в руках , крім того на нього можна нанести гарний малюнок або логотип. Паперовий стакан , зроблений з якісної сировини при використанні харчових фарб для друку дизайну , ніколи не змінить смак і запах напою.",
      "details": "Паперові стакани об’ємом: 110, 175, 185 мл. \n-   білі; \n- стандартний дизайн; \n- індивідуальний дизайн \nЦіна: \n110 мл  = 0,50 грн \n175 мл = 0,60 грн\n185 мл:\nвід 100 шт. = 0,80 грн.\nвід 1500 шт. = 0,78 грн.\nвід 7500 шт. = 0,76 грн.\nвід 15000 шт. = 0,74 грн. \nвід 50000 шт. = 0,72 грн.\nтел. 0673231736 Василь."
    }
]

export default boxs;