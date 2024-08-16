import logo15 from "../../assets/logo15.jpg";
import Kvadrat from "../../assets/kvadrat.jpg";
import Ikat from "../../assets/ikat.jpg";
import Davralar from "../../assets/davralar.jpg";
import kecchkibog from "../../assets/kechki-bog.jpg";
import Zumrad from "../../assets/zumrad.jpg";
import Tropik from "../../assets/tropik.jpg";
import Safari from "../../assets/safari.jpg";
import Markiz from "../../assets/markiz.jpg";
import Geometriya from "../../assets/geometriya.jpg";
import Bambi from "../../assets/bambi.jpg";
import Ametist from "../../assets/ametist.jpg";
import Shivali from "../../assets/shivali.jpg";
import Malxit from "../../assets/malxit.jpg";
import Bahorhid from "../../assets/bahor-hid.jpg";
import Zaytun from "../../assets/Zaytun.jpg";
import Yashil from "../../assets/yashil.jpg";
import Sakura from "../../assets/Sakura.jpg";
import Qoydolli from "../../assets/qoy-dolli.jpg";
import Moviyshab from "../../assets/moviy-shab.jpg";
import Moviysuv from "../../assets/moviy-suv.jpg";
import Makka from "../../assets/makka.jpg";
import Kuzgi from "../../assets/Kuzgi.jpg";
import Ilhomlantiruvchi from "../../assets/ilhomlantiruvchi.jpg";
import Hilpiragan from "../../assets/hilpiragan.jpg";
import Fransuz from "../../assets/fransuz.jpg";
import Alptog from "../../assets/alp-tog.jpg";
import Vintage from "../../assets/vintage.jpg";
import Plaid from "../../assets/plaid.jpg";
import Vizant from "../../assets/vizant.jpg";
const product = {
    Qish: [
      {
        id: 1,
        img: Kvadrat,
        name: {
          en: "Squares",
          uz: "Kvadratchalar",
          ru: "Квадраты"
        },
        alt: {
          en: "First product image",
          uz: "Birinci mahsulot tasviri",
          ru: "Изображение первого продукта"
        },
        material: {
          en: "Cotton",
          uz: "Paxta",
          ru: "Хлопок"
        },
        size: "200x220 cm",
        category: {
          en: "Bedding",
          uz: "Kurpa-tushak",
          ru: "Постельные принадлежности"
        },
        manufacturer: {
          en: "Uzbekistan Textile",
          uz: "O'zbekiston Tekstil",
          ru: "Узбекистан Текстиль"
        },
        description: {
          en: "This product is made of high-quality cotton material, making your sleep more comfortable. The product is environmentally friendly and hypoallergenic.",
          uz: "Bu mahsulot yuqori sifatli paxta materialidan tayyorlangan va uyqungizni yanada qulay qiladi. Mahsulot ekologik toza va hipoallergenik xususiyatlarga ega.",
          ru: "Этот продукт изготовлен из высококачественного хлопка, что делает ваш сон более комфортным. Продукт экологически чистый и гипоаллергенный."
        },
      },
      {
        id: 2,
        img: Ikat,
        name: {
          en: "Ikat",
          uz: "Ikat",
          ru: "Икат"
        },
        alt: {
          en: "Second product image",
          uz: "Ikkinchi mahsulot tasviri",
          ru: "Изображение второго продукта"
        },
        material: {
          en: "Polyester",
          uz: "Polyester",
          ru: "Полиэстер"
        },
        size: "180x200 cm",
        category: {
          en: "Coverlet",
          uz: "Yopinchik",
          ru: "Покрывало"
        },
        manufacturer: {
          en: "Uzbekistan Textile",
          uz: "O'zbekiston Tekstil",
          ru: "Узбекистан Текстиль"
        },
        description: {
          en: "This product is made of polyester material, soft and comfortable. The product is durable and easy to care for.",
          uz: "Bu mahsulot polyester materialidan tayyorlangan bo'lib, yumshoq va qulay. Mahsulot uzoq muddatli va oson parvarishlanadi.",
          ru: "Этот продукт изготовлен из полиэстера, мягкий и удобный. Продукт долговечный и прост в уходе."
        },
      },
      {
        id: 3,
        img: Davralar,
        name: {
          en: "Circles",
          uz: "Davralar",
          ru: "Круги"
        },
        alt: {
          en: "Third product image",
          uz: "Uchinchi mahsulot tasviri",
          ru: "Изображение третьего продукта"
        },
        material: {
          en: "Wool",
          uz: "Yung",
          ru: "Шерсть"
        },
        size: "220x240 cm",
        category: {
          en: "Pillow",
          uz: "Yostiq",
          ru: "Подушка"
        },
        manufacturer: {
          en: "Uzbekistan Textile",
          uz: "O'zbekiston Tekstil",
          ru: "Узбекистан Текстиль"
        },
        description: {
          en: "This product is made of high-quality wool material. It is hypoallergenic and keeps warm during winter.",
          uz: "Bu mahsulot yuqori sifatli yung materialidan tayyorlangan. U hipoallergenik va qish oylarida issiq saqlaydi.",
          ru: "Этот продукт изготовлен из высококачественной шерсти. Он гипоаллергенный и сохраняет тепло зимой."
        },
      },
      {
        id: 4,
        img: Geometriya,
        name: {
          en: "Geometry Blue",
          uz: "Geometriya ko`k",
          ru: "Геометрия синий"
        },
        alt: {
          en: "Fourth product image",
          uz: "To‘rtinchi mahsulot tasviri",
          ru: "Изображение четвертого продукта"
        },
        material: {
          en: "Wool",
          uz: "Yung",
          ru: "Шерсть"
        },
        size: "220x240 cm",
        category: {
          en: "Pillow",
          uz: "Yostiq",
          ru: "Подушка"
        },
        manufacturer: {
          en: "Uzbekistan Textile",
          uz: "O'zbekiston Tekstil",
          ru: "Узбекистан Текстиль"
        },
        description: {
          en: "This product is made of high-quality wool material. It is hypoallergenic and keeps warm during winter.",
          uz: "Bu mahsulot yuqori sifatli yung materialidan tayyorlangan. U hipoallergenik va qish oylarida issiq saqlaydi.",
          ru: "Этот продукт изготовлен из высококачественной шерсти. Он гипоаллергенный и сохраняет тепло зимой."
        },
      },
      {
        id: 5,
        img: Tropik,
        name: {
          en: "Tropical Leaves",
          uz: "Tropik Barglar",
          ru: "Тропические листья"
        },
        alt: {
          en: "Fifth product image",
          uz: "Beshinchi mahsulot tasviri",
          ru: "Изображение пятого продукта"
        },
        material: {
          en: "Wool",
          uz: "Yung",
          ru: "Шерсть"
        },
        size: "220x240 cm",
        category: {
          en: "Pillow",
          uz: "Yostiq",
          ru: "Подушка"
        },
        manufacturer: {
          en: "Uzbekistan Textile",
          uz: "O'zbekiston Tekstil",
          ru: "Узбекистан Текстиль"
        },
        description: {
          en: "This product is made of high-quality wool material. It is hypoallergenic and keeps warm during winter.",
          uz: "Bu mahsulot yuqori sifatli yung materialidan tayyorlangan. U hipoallergenik va qish oylarida issiq saqlaydi.",
          ru: "Этот продукт изготовлен из высококачественной шерсти. Он гипоаллергенный и сохраняет тепло зимой."
        },
      },
      {
        id: 6,
        img: Bambi,
        name: {
          en: "Bambi",
          uz: "Bambi",
          ru: "Бамби"
        },
        alt: {
          en: "Sixth product image",
          uz: "Oltiinchi mahsulot tasviri",
          ru: "Изображение шестого продукта"
        },
        material: {
          en: "Wool",
          uz: "Yung",
          ru: "Шерсть"
        },
        size: "220x240 cm",
        category: {
          en: "Pillow",
          uz: "Yostiq",
          ru: "Подушка"
        },
        manufacturer: {
          en: "Uzbekistan Textile",
          uz: "O'zbekiston Tekstil",
          ru: "Узбекистан Текстиль"
        },
        description: {
          en: "This product is made of high-quality wool material. It is hypoallergenic and keeps warm during winter.",
          uz: "Bu mahsulot yuqori sifatli yung materialidan tayyorlangan. U hipoallergenik va qish oylarida issiq saqlaydi.",
          ru: "Этот продукт изготовлен из высококачественной шерсти. Он гипоаллергенный и сохраняет тепло зимой."
        },
      },
      {
        id: 7,
        img: Vizant,
        name: {
          en: "Byzantium",
          uz: "Vizantiya",
          ru: "Византия"
        },
        alt: {
          en: "Seventh product image",
          uz: "Yettinchi mahsulot tasviri",
          ru: "Изображение седьмого продукта"
        },
        material: {
          en: "Wool",
          uz: "Yung",
          ru: "Шерсть"
        },
        size: "220x240 cm",
        category: {
          en: "Pillow",
          uz: "Yostiq",
          ru: "Подушка"
        },
        manufacturer: {
          en: "Uzbekistan Textile",
          uz: "O'zbekiston Tekstil",
          ru: "Узбекистан Текстиль"
        },
        description: {
          en: "This product is made of high-quality wool material. It is hypoallergenic and keeps warm during winter.",
          uz: "Bu mahsulot yuqori sifatli yung materialidan tayyorlangan. U hipoallergenik va qish oylarida issiq saqlaydi.",
          ru: "Этот продукт изготовлен из высококачественной шерсти. Он гипоаллергенный и сохраняет тепло зимой."
        },
      },
      {
        id: 8,
        img: kecchkibog,
        name: {
          en: "Evening Garden",
          uz: "Kechki Bog`",
          ru: "Вечерний сад"
        },
        alt: {
          en: "Eighth product image",
          uz: "Sakkizinchi mahsulot tasviri",
          ru: "Изображение восьмого продукта"
        },
        material: {
          en: "Wool",
          uz: "Yung",
          ru: "Шерсть"
        },
        size: "220x240 cm",
        category: {
          en: "Pillow",
          uz: "Yostiq",
          ru: "Подушка"
        },
        manufacturer: {
          en: "Uzbekistan Textile",
          uz: "O'zbekiston Tekstil",
          ru: "Узбекистан Текстиль"
        },
        description: {
          en: "This product is made of high-quality wool material. It is hypoallergenic and keeps warm during winter.",
          uz: "Bu mahsulot yuqori sifatli yung materialidan tayyorlangan. U hipoallergenik va qish oylarida issiq saqlaydi.",
          ru: "Этот продукт изготовлен из высококачественной шерсти. Он гипоаллергенный и сохраняет тепло зимой."
        },
      },
      {
        id: 9,
        img: Markiz,
        name: {
          en: "Pat Marquis",
          uz: "Pat Markiz",
          ru: "Пат Маркиз"
        },
        alt: {
          en: "Ninth product image",
          uz: "To‘qqizinchi mahsulot tasviri",
          ru: "Изображение девятого продукта"
        },
        material: {
          en: "Wool",
          uz: "Yung",
          ru: "Шерсть"
        },
        size: "220x240 cm",
        category: {
          en: "Pillow",
          uz: "Yostiq",
          ru: "Подушка"
        },
        manufacturer: {
          en: "Uzbekistan Textile",
          uz: "O'zbekiston Tekstil",
          ru: "Узбекистан Текстиль"
        },
        description: {
          en: "This product is made of high-quality wool material. It is hypoallergenic and keeps warm during winter.",
          uz: "Bu mahsulot yuqori sifatli yung materialidan tayyorlangan. U hipoallergenik va qish oylarida issiq saqlaydi.",
          ru: "Этот продукт изготовлен из высококачественной шерсти. Он гипоаллергенный и сохраняет тепло зимой."
        },
      },
      {
        id: 10,
        img: logo15,
        name: {
          en: "Lavender Roses",
          uz: "Lavanda atirgullari",
          ru: "Лаванда и розы"
        },
        alt: {
          en: "Tenth product image",
          uz: "O‘ninchi mahsulot tasviri",
          ru: "Изображение десятого продукта"
        },
        material: {
          en: "Wool",
          uz: "Yung",
          ru: "Шерсть"
        },
        size: "220x240 cm",
        category: {
          en: "Pillow",
          uz: "Yostiq",
          ru: "Подушка"
        },
        manufacturer: {
          en: "Uzbekistan Textile",
          uz: "O'zbekiston Tekstil",
          ru: "Узбекистан Текстиль"
        },
        description: {
          en: "This product is made of high-quality wool material. It is hypoallergenic and keeps warm during winter.",
          uz: "Bu mahsulot yuqori sifatli yung materialidan tayyorlangan. U hipoallergenik va qish oylarida issiq saqlaydi.",
          ru: "Этот продукт изготовлен из высококачественной шерсти. Он гипоаллергенный и сохраняет тепло зимой."
        },
      },
    ],
    Kuz: [
      {
        id: 1,
        img: Vintage,
        name: {
          en: "Vintage Style",
          uz: "Vintage uslubi",
          ru: "Винтажный стиль"
        },
        alt: {
          en: "First product image",
          uz: "Birinci mahsulot tasviri",
          ru: "Изображение первого продукта"
        },
        material: {
          en: "Cotton",
          uz: "Paxta",
          ru: "Хлопок"
        },
        size: "200x220 cm",
        category: {
          en: "Bedding",
          uz: "Kurpa-tushak",
          ru: "Постельные принадлежности"
        },
        manufacturer: {
          en: "Uzbekistan Textile",
          uz: "O'zbekiston Tekstil",
          ru: "Узбекистан Текстиль"
        },
        description: {
          en: "This product is made of high-quality cotton material, making your sleep more comfortable. The product is environmentally friendly and hypoallergenic.",
          uz: "Bu mahsulot yuqori sifatli paxta materialidan tayyorlangan va uyqungizni yanada qulay qiladi. Mahsulot ekologik toza va hipoallergenik xususiyatlarga ega.",
          ru: "Этот продукт изготовлен из высококачественного хлопка, что делает ваш сон более комфортным. Продукт экологически чистый и гипоаллергенный."
        },
      },
      {
        id: 2,
        img: Ametist,
        name: {
          en: "Ametist",
          uz: "Ko‘prangli ametist",
          ru: "Аметист"
        },
        alt: {
          en: "Second product image",
          uz: "Ikkinchi mahsulot tasviri",
          ru: "Изображение второго продукта"
        },
        material: {
          en: "Polyester",
          uz: "Polyester",
          ru: "Полиэстер"
        },
        size: "180x200 cm",
        category: {
          en: "Coverlet",
          uz: "Yopinchik",
          ru: "Покрывало"
        },
        manufacturer: {
          en: "Uzbekistan Textile",
          uz: "O'zbekiston Tekstil",
          ru: "Узбекистан Текстиль"
        },
        description: {
          en: "This product is made of polyester material, soft and comfortable. The product is durable and easy to care for.",
          uz: "Bu mahsulot polyester materialidan tayyorlangan bo'lib, yumshoq va qulay. Mahsulot uzoq muddatli va oson parvarishlanadi.",
          ru: "Этот продукт изготовлен из полиэстера, мягкий и удобный. Продукт долговечный и прост в уходе."
        },
      },
      {
        id: 3,
        img: Shivali,
        name: {
          en: "Shivali Decor",
          uz: "Shivali bezak",
          ru: "Шивали декор"
        },
        alt: {
          en: "Third product image",
          uz: "Uchinchi mahsulot tasviri",
          ru: "Изображение третьего продукта"
        },
        material: {
          en: "Wool",
          uz: "Yung",
          ru: "Шерсть"
        },
        size: "220x240 cm",
        category: {
          en: "Pillow",
          uz: "Yostiq",
          ru: "Подушка"
        },
        manufacturer: {
          en: "Uzbekistan Textile",
          uz: "O'zbekiston Tekstil",
          ru: "Узбекистан Текстиль"
        },
        description: {
          en: "This product is made of high-quality wool material. It is hypoallergenic and keeps warm during winter.",
          uz: "Bu mahsulot yuqori sifatli yung materialidan tayyorlangan. U hipoallergenik va qish oylarida issiq saqlaydi.",
          ru: "Этот продукт изготовлен из высококачественной шерсти. Он гипоаллергенный и сохраняет тепло зимой."
        },
      },
      {
        id: 4,
        img: Zumrad,
        name: {
          en: "Emerald",
          uz: "Zumrad",
          ru: "Изумруд"
        },
        alt: {
          en: "Fourth product image",
          uz: "To‘rtinchi mahsulot tasviri",
          ru: "Изображение четвертого продукта"
        },
        material: {
          en: "Wool",
          uz: "Yung",
          ru: "Шерсть"
        },
        size: "220x240 cm",
        category: {
          en: "Pillow",
          uz: "Yostiq",
          ru: "Подушка"
        },
        manufacturer: {
          en: "Uzbekistan Textile",
          uz: "O'zbekiston Tekstil",
          ru: "Узбекистан Текстиль"
        },
        description: {
          en: "This product is made of high-quality wool material. It is hypoallergenic and keeps warm during winter.",
          uz: "Bu mahsulot yuqori sifatli yung materialidan tayyorlangan. U hipoallergenik va qish oylarida issiq saqlaydi.",
          ru: "Этот продукт изготовлен из высококачественной шерсти. Он гипоаллергенный и сохраняет тепло зимой."
        },
      },
      {
        id: 5,
        img: Malxit,
        name: {
          en: "Malachite Box",
          uz: "Malaxit qutisi",
          ru: "Коробка из малахита"
        },
        alt: {
          en: "Fifth product image",
          uz: "Beshinchi mahsulot tasviri",
          ru: "Изображение пятого продукта"
        },
        material: {
          en: "Wool",
          uz: "Yung",
          ru: "Шерсть"
        },
        size: "220x240 cm",
        category: {
          en: "Pillow",
          uz: "Yostiq",
          ru: "Подушка"
        },
        manufacturer: {
          en: "Uzbekistan Textile",
          uz: "O'zbekiston Tekstil",
          ru: "Узбекистан Текстиль"
        },
        description: {
          en: "This product is made of high-quality wool material. It is hypoallergenic and keeps warm during winter.",
          uz: "Bu mahsulot yuqori sifatli yung materialidan tayyorlangan. U hipoallergenik va qish oylarida issiq saqlaydi.",
          ru: "Этот продукт изготовлен из высококачественной шерсти. Он гипоаллергенный и сохраняет тепло зимой."
        },
      },
      {
        id: 6,
        img: Bahorhid,
        name: {
          en: "Spring Scents",
          uz: "Bahorning hidlari",
          ru: "Ароматы весны"
        },
        alt: {
          en: "Sixth product image",
          uz: "Oltinchi mahsulot tasviri",
          ru: "Изображение шестого продукта"
        },
        material: {
          en: "Wool",
          uz: "Yung",
          ru: "Шерсть"
        },
        size: "220x240 cm",
        category: {
          en: "Pillow",
          uz: "Yostiq",
          ru: "Подушка"
        },
        manufacturer: {
          en: "Uzbekistan Textile",
          uz: "O'zbekiston Tekstil",
          ru: "Узбекистан Текстиль"
        },
        description: {
          en: "This product is made of high-quality wool material. It is hypoallergenic and keeps warm during winter.",
          uz: "Bu mahsulot yuqori sifatli yung materialidan tayyorlangan. U hipoallergenik va qish oylarida issiq saqlaydi.",
          ru: "Этот продукт изготовлен из высококачественной шерсти. Он гипоаллергенный и сохраняет тепло зимой."
        },
      },
      {
        id: 7,
        img: Kuzgi,
        name: {
          en: "Autumn Leaf Fall",
          uz: "Kuzgi barglar tushishi",
          ru: "Опадение осенних листьев"
        },
        alt: {
          en: "Seventh product image",
          uz: "Yettinchi mahsulot tasviri",
          ru: "Изображение седьмого продукта"
        },
        material: {
          en: "Wool",
          uz: "Yung",
          ru: "Шерсть"
        },
        size: "220x240 cm",
        category: {
          en: "Pillow",
          uz: "Yostiq",
          ru: "Подушка"
        },
        manufacturer: {
          en: "Uzbekistan Textile",
          uz: "O'zbekiston Tekstil",
          ru: "Узбекистан Текстиль"
        },
        description: {
          en: "This product is made of high-quality wool material. It is hypoallergenic and keeps warm during winter.",
          uz: "Bu mahsulot yuqori sifatli yung materialidan tayyorlangan. U hipoallergenik va qish oylarida issiq saqlaydi.",
          ru: "Этот продукт изготовлен из высококачественной шерсти. Он гипоаллергенный и сохраняет тепло зимой."
        },
      },
      {
        id: 8,
        img: Moviyshab,
        name: {
          en: "Blue Twilight (AB)",
          uz: "Moviy Shabada (AB)",
          ru: "Синяя сумерка (AB)"
        },
        alt: {
          en: "Eighth product image",
          uz: "Sakkizinchi mahsulot tasviri",
          ru: "Изображение восьмого продукта"
        },
        material: {
          en: "Wool",
          uz: "Yung",
          ru: "Шерсть"
        },
        size: "220x240 cm",
        category: {
          en: "Pillow",
          uz: "Yostiq",
          ru: "Подушка"
        },
        manufacturer: {
          en: "Uzbekistan Textile",
          uz: "O'zbekiston Tekstil",
          ru: "Узбекистан Текстиль"
        },
        description: {
          en: "This product is made of high-quality wool material. It is hypoallergenic and keeps warm during winter.",
          uz: "Bu mahsulot yuqori sifatli yung materialidan tayyorlangan. U hipoallergenik va qish oylarida issiq saqlaydi.",
          ru: "Этот продукт изготовлен из высококачественной шерсти. Он гипоаллергенный и сохраняет тепло зимой."
        },
      },
      {
        id: 9,
        img: Moviysuv,
        name: {
          en: "Blue Water (AB)",
          uz: "Moviy suv (AB)",
          ru: "Синяя вода (AB)"
        },
        alt: {
          en: "Ninth product image",
          uz: "To‘qqizinchi mahsulot tasviri",
          ru: "Изображение девятого продукта"
        },
        material: {
          en: "Wool",
          uz: "Yung",
          ru: "Шерсть"
        },
        size: "220x240 cm",
        category: {
          en: "Pillow",
          uz: "Yostiq",
          ru: "Подушка"
        },
        manufacturer: {
          en: "Uzbekistan Textile",
          uz: "O'zbekiston Tekstil",
          ru: "Узбекистан Текстиль"
        },
        description: {
          en: "This product is made of high-quality wool material. It is hypoallergenic and keeps warm during winter.",
          uz: "Bu mahsulot yuqori sifatli yung materialidan tayyorlangan. U hipoallergenik va qish oylarida issiq saqlaydi.",
          ru: "Этот продукт изготовлен из высококачественной шерсти. Он гипоаллергенный и сохраняет тепло зимой."
        },
      },
      {
        id: 10,
        img: Plaid,
        name: {
          en: "Plaid",
          uz: "Plaid",
          ru: "Плед"
        },
        alt: {
          en: "Tenth product image",
          uz: "O‘ninchi mahsulot tasviri",
          ru: "Изображение десятого продукта"
        },
        material: {
          en: "Wool",
          uz: "Yung",
          ru: "Шерсть"
        },
        size: "220x240 cm",
        category: {
          en: "Pillow",
          uz: "Yostiq",
          ru: "Подушка"
        },
        manufacturer: {
          en: "Uzbekistan Textile",
          uz: "O'zbekiston Tekstil",
          ru: "Узбекистан Текстиль"
        },
        description: {
          en: "This product is made of high-quality wool material. It is hypoallergenic and keeps warm during winter.",
          uz: "Bu mahsulot yuqori sifatli yung materialidan tayyorlangan. U hipoallergenik va qish oylarida issiq saqlaydi.",
          ru: "Этот продукт изготовлен из высококачественной шерсти. Он гипоаллергенный и сохраняет тепло зимой."
        },
      },
    ],
    Yozgi: [
      {
        id: 1,
        img: Vintage,
        name: {
          en: "Vintage Style",
          uz: "Vintage uslubi",
          ru: "Винтажный стиль"
        },
        alt: {
          en: "First product image",
          uz: "Birinchi mahsulot tasviri",
          ru: "Изображение первого продукта"
        },
        material: {
          en: "Cotton",
          uz: "Paxta",
          ru: "Хлопок"
        },
        size: "200x220 cm",
        category: {
          en: "Bedspread",
          uz: "Kurpa-tushak",
          ru: "Покрывало"
        },
        manufacturer: {
          en: "Uzbekistan Textile",
          uz: "O'zbekiston Tekstil",
          ru: "Узбекистан Текстиль"
        },
        description: {
          en: "This product is made from high-quality cotton material and provides extra comfort for your sleep. The product is eco-friendly and has hypoallergenic properties.",
          uz: "Bu mahsulot yuqori sifatli paxta materialidan tayyorlangan va uyqungizni yanada qulay qiladi. Mahsulot ekologik toza va hipoallergenik xususiyatlarga ega.",
          ru: "Этот продукт изготовлен из высококачественного хлопка и обеспечивает дополнительный комфорт для вашего сна. Продукт экологически чистый и обладает гипоаллергенными свойствами."
        },
      },
      {
        id: 2,
        img: Ametist,
        name: {
          en: "Purple Amethyst",
          uz: "Ko`prangli ametist",
          ru: "Фиолетовый аметист"
        },
        alt: {
          en: "Second product image",
          uz: "Ikkinchi mahsulot tasviri",
          ru: "Изображение второго продукта"
        },
        material: {
          en: "Polyester",
          uz: "Polyester",
          ru: "Полиэстер"
        },
        size: "180x200 cm",
        category: {
          en: "Blanket",
          uz: "Yopinchik",
          ru: "Одеяло"
        },
        manufacturer: {
          en: "Uzbekistan Textile",
          uz: "O'zbekiston Tekstil",
          ru: "Узбекистан Текстиль"
        },
        description: {
          en: "This product is made from polyester material, offering softness and comfort. It is durable and easy to maintain.",
          uz: "Bu mahsulot polyester materialidan tayyorlangan bo'lib, yumshoq va qulay. Mahsulot uzoq muddatli va oson parvarishlanadi.",
          ru: "Этот продукт изготовлен из полиэстера, обеспечивая мягкость и комфорт. Он долговечен и легко ухаживается."
        },
      },
      {
        id: 3,
        img: Fransuz,
        name: {
          en: "French Riviera",
          uz: "Fransuz Riviera",
          ru: "Французская Ривьера"
        },
        alt: {
          en: "Third product image",
          uz: "Uchinchi mahsulot tasviri",
          ru: "Изображение третьего продукта"
        },
        material: {
          en: "Wool",
          uz: "Yung",
          ru: "Шерсть"
        },
        size: "220x240 cm",
        category: {
          en: "Pillow",
          uz: "Yostiq",
          ru: "Подушка"
        },
        manufacturer: {
          en: "Uzbekistan Textile",
          uz: "O'zbekiston Tekstil",
          ru: "Узбекистан Текстиль"
        },
        description: {
          en: "This product is made from high-quality wool material. It is hypoallergenic and keeps warm during winter.",
          uz: "Bu mahsulot yuqori sifatli yung materialidan tayyorlangan. U hipoallergenik va qish oylarida issiq saqlaydi.",
          ru: "Этот продукт изготовлен из высококачественной шерсти. Он гипоаллергенный и сохраняет тепло зимой."
        },
      },
      {
        id: 4,
        img: Qoydolli,
        name: {
          en: "Sheep Wool",
          uz: "Qoy Dolli",
          ru: "Овечья шерсть"
        },
        alt: {
          en: "Fourth product image",
          uz: "To‘rtinchi mahsulot tasviri",
          ru: "Изображение четвертого продукта"
        },
        material: {
          en: "Wool",
          uz: "Yung",
          ru: "Шерсть"
        },
        size: "220x240 cm",
        category: {
          en: "Pillow",
          uz: "Yostiq",
          ru: "Подушка"
        },
        manufacturer: {
          en: "Uzbekistan Textile",
          uz: "O'zbekiston Tekstil",
          ru: "Узбекистан Текстиль"
        },
        description: {
          en: "This product is made from high-quality wool material. It is hypoallergenic and keeps warm during winter.",
          uz: "Bu mahsulot yuqori sifatli yung materialidan tayyorlangan. U hipoallergenik va qish oylarida issiq saqlaydi.",
          ru: "Этот продукт изготовлен из высококачественной шерсти. Он гипоаллергенный и сохраняет тепло зимой."
        },
      },
      {
        id: 5,
        img: Alptog,
        name: {
          en: "Alpine Plants",
          uz: "Alp tog`lari o`simliklari",
          ru: "Растения Альп"
        },
        alt: {
          en: "Fifth product image",
          uz: "Beshinchi mahsulot tasviri",
          ru: "Изображение пятого продукта"
        },
        material: {
          en: "Wool",
          uz: "Yung",
          ru: "Шерсть"
        },
        size: "220x240 cm",
        category: {
          en: "Pillow",
          uz: "Yostiq",
          ru: "Подушка"
        },
        manufacturer: {
          en: "Uzbekistan Textile",
          uz: "O'zbekiston Tekstil",
          ru: "Узбекистан Текстиль"
        },
        description: {
          en: "This product is made from high-quality wool material. It is hypoallergenic and keeps warm during winter.",
          uz: "Bu mahsulot yuqori sifatli yung materialidan tayyorlangan. U hipoallergenik va qish oylarida issiq saqlaydi.",
          ru: "Этот продукт изготовлен из высококачественной шерсти. Он гипоаллергенный и сохраняет тепло зимой."
        },
      },
      {
        id: 6,
        img: Ilhomlantiruvchi,
        name: {
          en: "Inspiring",
          uz: "Ilhomlantiruvchi",
          ru: "Вдохновляющий"
        },
        alt: {
          en: "Sixth product image",
          uz: "Oltinchi mahsulot tasviri",
          ru: "Изображение шестого продукта"
        },
        material: {
          en: "Wool",
          uz: "Yung",
          ru: "Шерсть"
        },
        size: "220x240 cm",
        category: {
          en: "Pillow",
          uz: "Yostiq",
          ru: "Подушка"
        },
        manufacturer: {
          en: "Uzbekistan Textile",
          uz: "O'zbekiston Tekstil",
          ru: "Узбекистан Текстиль"
        },
        description: {
          en: "This product is made from high-quality wool material. It is hypoallergenic and keeps warm during winter.",
          uz: "Bu mahsulot yuqori sifatli yung materialidan tayyorlangan. U hipoallergenik va qish oylarida issiq saqlaydi.",
          ru: "Этот продукт изготовлен из высококачественной шерсти. Он гипоаллергенный и сохраняет тепло зимой."
        },
      },
      {
        id: 7,
        img: Yashil,
        name: {
          en: "Green Lotus",
          uz: "Yashil lotus",
          ru: "Зеленый лотос"
        },
        alt: {
          en: "Seventh product image",
          uz: "Yettinchi mahsulot tasviri",
          ru: "Изображение седьмого продукта"
        },
        material: {
          en: "Wool",
          uz: "Yung",
          ru: "Шерсть"
        },
        size: "220x240 cm",
        category: {
          en: "Pillow",
          uz: "Yostiq",
          ru: "Подушка"
        },
        manufacturer: {
          en: "Uzbekistan Textile",
          uz: "O'zbekiston Tekstil",
          ru: "Узбекистан Текстиль"
        },
        description: {
          en: "This product is made from high-quality wool material. It is hypoallergenic and keeps warm during winter.",
          uz: "Bu mahsulot yuqori sifatli yung materialidan tayyorlangan. U hipoallergenik va qish oylarida issiq saqlaydi.",
          ru: "Этот продукт изготовлен из высококачественной шерсти. Он гипоаллергенный и сохраняет тепло зимой."
        },
      },
      {
        id: 8,
        img: Makka,
        name: {
          en: "Mountain Corn",
          uz: "Tog`li makkajo`xori",
          ru: "Горная кукуруза"
        },
        alt: {
          en: "Eighth product image",
          uz: "Sakkizinchi mahsulot tasviri",
          ru: "Изображение восьмого продукта"
        },
        material: {
          en: "Wool",
          uz: "Yung",
          ru: "Шерсть"
        },
        size: "220x240 cm",
        category: {
          en: "Pillow",
          uz: "Yostiq",
          ru: "Подушка"
        },
        manufacturer: {
          en: "Uzbekistan Textile",
          uz: "O'zbekiston Tekstil",
          ru: "Узбекистан Текстиль"
        },
        description: {
          en: "This product is made from high-quality wool material. It is hypoallergenic and keeps warm during winter.",
          uz: "Bu mahsulot yuqori sifatli yung materialidan tayyorlangan. U hipoallergenik va qish oylarida issiq saqlaydi.",
          ru: "Этот продукт изготовлен из высококачественной шерсти. Он гипоаллергенный и сохраняет тепло зимой."
        },
      },
      {
        id: 9,
        img: Sakura,
        name: {
          en: "Sakura Blossom",
          uz: "Sakura filiali",
          ru: "Цветение сакуры"
        },
        alt: {
          en: "Ninth product image",
          uz: "To‘qqizinchi mahsulot tasviri",
          ru: "Изображение девятого продукта"
        },
        material: {
          en: "Wool",
          uz: "Yung",
          ru: "Шерсть"
        },
        size: "220x240 cm",
        category: {
          en: "Pillow",
          uz: "Yostiq",
          ru: "Подушка"
        },
        manufacturer: {
          en: "Uzbekistan Textile",
          uz: "O'zbekiston Tekstil",
          ru: "Узбекистан Текстиль"
        },
        description: {
          en: "This product is made from high-quality wool material. It is hypoallergenic and keeps warm during winter.",
          uz: "Bu mahsulot yuqori sifatli yung materialidan tayyorlangan. U hipoallergenik va qish oylarida issiq saqlaydi.",
          ru: "Этот продукт изготовлен из высококачественной шерсти. Он гипоаллергенный и сохраняет тепло зимой."
        },
      },
      {
        id: 10,
        img: Zaytun,
        name: {
          en: "Olive Branch",
          uz: "Zaytun novdasi",
          ru: "Оливковая ветвь"
        },
        alt: {
          en: "Tenth product image",
          uz: "O‘ninchi mahsulot tasviri",
          ru: "Изображение десятого продукта"
        },
        material: {
          en: "Wool",
          uz: "Yung",
          ru: "Шерсть"
        },
        size: "220x240 cm",
        category: {
          en: "Pillow",
          uz: "Yostiq",
          ru: "Подушка"
        },
        manufacturer: {
          en: "Uzbekistan Textile",
          uz: "O'zbekiston Tekstil",
          ru: "Узбекистан Текстиль"
        },
        description: {
          en: "This product is made from high-quality wool material. It is hypoallergenic and keeps warm during winter.",
          uz: "Bu mahsulot yuqori sifatli yung materialidan tayyorlangan. U hipoallergenik va qish oylarida issiq saqlaydi.",
          ru: "Этот продукт изготовлен из высококачественной шерсти. Он гипоаллергенный и сохраняет тепло зимой."
        },
      },
    ],
  };
 
  
  
export default product;