toc.dat                                                                                             0000600 0004000 0002000 00000006043 14560546656 0014463 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        PGDMP                       |            postgres    16.1    16.0                 0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false         !           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false         "           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false         #           1262    5    postgres    DATABASE     �   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = icu LOCALE = 'en_US.UTF-8' ICU_LOCALE = 'en-US';
    DROP DATABASE postgres;
                postgres    false         $           0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    3619         �            1259    16451    Region    TABLE     �  CREATE TABLE public."Region" (
    "RegionID" integer NOT NULL,
    "Title" text,
    "DSID" smallint,
    "CodeGIBDD" character varying,
    "CodeGOST" character varying,
    "Capital" text,
    "Population" bigint,
    "NumberOfSchool" integer,
    "SchoolContingent" bigint,
    "NumberOfSPO" integer,
    "SPOContingent" bigint,
    "RCAddress" text,
    "RCHead" text,
    "RCContact" text,
    "Indicator" smallint
);
    DROP TABLE public."Region";
       public         heap    postgres    false         �            1259    16450    Region_RegionID_seq    SEQUENCE     �   CREATE SEQUENCE public."Region_RegionID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."Region_RegionID_seq";
       public          postgres    false    218         %           0    0    Region_RegionID_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."Region_RegionID_seq" OWNED BY public."Region"."RegionID";
          public          postgres    false    217         �           2604    16454    Region RegionID    DEFAULT     x   ALTER TABLE ONLY public."Region" ALTER COLUMN "RegionID" SET DEFAULT nextval('public."Region_RegionID_seq"'::regclass);
 B   ALTER TABLE public."Region" ALTER COLUMN "RegionID" DROP DEFAULT;
       public          postgres    false    218    217    218                   0    16451    Region 
   TABLE DATA           �   COPY public."Region" ("RegionID", "Title", "DSID", "CodeGIBDD", "CodeGOST", "Capital", "Population", "NumberOfSchool", "SchoolContingent", "NumberOfSPO", "SPOContingent", "RCAddress", "RCHead", "RCContact", "Indicator") FROM stdin;
    public          postgres    false    218       3613.dat &           0    0    Region_RegionID_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public."Region_RegionID_seq"', 1, false);
          public          postgres    false    217                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     3613.dat                                                                                            0000600 0004000 0002000 00000053612 14560546656 0014276 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	Алтайский край	5	22	RU-ALT	г.Барнаул	2130950	1055	285640	54	57157	Алтайский край, г.Барнаул, пр.Социалистический 60, 656049	Николенко Ирина Алексеевна	navigatory.detstva.22@rosdetcentr.ru	5
2	Амурская область	1	28	RU-AMU	г.Благовещенск	756198	333	100068	13	22976	0	Куприенко Екатерина Владимировна	navigatory.detstva.28@rosdetcentr.ru	1
3	Архангельская область	3	29	RU-ARK	г.Архангельск	964304	424	127977	41	26968	0	Корельская Елена Александровна	navigatory.detstva.29@rosdetcentr.ru	2
4	Астраханская область	8	30	RU-AST	г.Астрахань	950557	285	125681	17	29156	Астраханская область, г. Астрахань, ул. Володарского, д. 9, 414000	Прокудина Анна Михайловна	navigatory.detstva.30@rosdetcentr.ru	1
5	Республика Башкортостан	2	02	RU-BA	г.Уфа	4077600	1836	519730	94	110599	450001, г. Уфа, проспект Октября, д. 4	Трегубова Елена Игоревна	navigatory.detstva.02@rosdetcentr.ru	2
6	Белгородская область	7	31	RU-BEL	г.Белгород	1514527	549	170158	34	39324	308007, Белгородская область, г. Белгород, ул. Студенческая, д. 14 корпус 4 кабинет 914.	Белая Татьяна Владимировна	navigatory.detstva.31@rosdetcentr.ru	5
7	Брянская область	7	32	RU-BRY	г.Брянск	1152505	516	131499	26	27688	Брянская область, г. Брянск, ул. Фокина, 29, каб 401	Шишкин Сергей Сергеевич	navigatory.detstva.32@rosdetcentr.ru	2
8	Республика Бурятия	1	03	RU-BU	г.Улан-Удэ	974628	473	152469	26	29181	Улан-Удэг.Улан-Удэ,УлицаШмидта,21,670000	Бардаханова Валентина Анатольевна	navigatory.detstva.03@rosdetcentr.ru	4
9	Владимирская область	7	33	RU-VLA	г.Владимир	1325510	365	150421	34	32348	0	Вихрева Людмила Владимировна	navigatory.detstva.33@rosdetcentr.ru	3
10	Волгоградская область	8	34	RU-VGG	г.Волгоград	2470057	835	263921	52	62539	Волгоградская область, г. Волгоград, ул. Елисеева 7, 400120	Шачнева Анастасия Игоревна	navigatory.detstva.34@rosdetcentr.ru	2
11	Вологодская область	3	35	RU-VLG	г.Вологда	1128782	337	143916	34	31847	Вологодская область, г. Вологда, ул. Казакова 11а	Зятюшкова Наталия Александровна	navigatory.detstva.35@rosdetcentr.ru	1
12	Воронежская область	7	36	RU-VOR	г.Воронеж	2285282	763	251400	54	52285	город Воронеж, улица Березовая Роща, 54 (Воронежский институт развития образования имени Н. Ф. Бунакова - 155 кабинет)	Плотникова Наталья Михайловна	navigatory.detstva.36@rosdetcentr.ru	4
13	Город Байконур	10	94	KZ-BAY	г.Байконур	0	0	0	0	0	0	Шапошникова Татьяна Викторовна	navigatory.detstva.99@rosdetcentr.ru	5
14	Город федерального значения Москва	7	77	RU-MOW	г.Москва	13104177	727	1164149	107	222231	0	Богомолова Елена Альфредовна	navigatory.detstva.77@rosdetcentr.ru	2
15	Республика Дагестан	4	05	RU-DA	г.Махачкала	3209781	1442	469381	58	79252	Республика Дагестан, г. Махачкала, ул. Генерала Магомедтагирова (Казбекова), 159	Гаджиева Зухра Казбековна	navigatory.detstva.05@rosdetcentr.ru	1
16	Донецкая Народная Республика	9	80	RU-DON	г.Донецк	2202440	590	153000	85	0	ДНР, 283001, г. Донецк,  ул. Артема, 46	Суркова Наталья Александровна	navigatory.detstva.93@rosdetcentr.ru	1
17	Еврейская автономная область	1	79	RU-YEV	г.Биробиджан	147458	76	20796	8	2906	0	Файн Татьяна Анатольевна	navigatory.detstva.79@rosdetcentr.ru	4
18	Забайкальский край	1	75	RU-ZAB	г.Чита	992429	600	147163	26	30232	Забайкальский край, г. Чита, ул. Ленина, 65,  672039	Борисова Светлана Николаевна	navigatory.detstva.75@rosdetcentr.ru	3
19	Запорожская область	9	85	RU-ZP	г.Мелитополь	0	0	0	0	0	МБДОУ Запорожской области Детский сад Калинонька, г. Мелитополь, ул.Гризодубовой, 53	Волкова Валентина Леонидовна	navigatory.detstva.96@rosdetcentr.ru	5
20	Ивановская область	7	37	RU-IVA	г.Иваново	914725	265	104881	37	23004	0	Ситнова Анастасия Андреевна	navigatory.detstva.37@rosdetcentr.ru	2
21	Иркутская область	5	38	RU-IRK	г.Иркутск	2344360	993	343270	80	68488	город Иркутск, ул.Чкалова, д. 39а	Бичевина Оксана Валентиновна	navigatory.detstva.38@rosdetcentr.ru	2
22	Кабардино-Балкарская Республика	4	07	RU-KB	г.Нальчик	903266	267	120074	12	17695	0	Кулимова Залина Залимхановна	navigatory.detstva.07@rosdetcentr.ru	3
23	Калининградская область	3	39	RU-KGD	г.Калининград	1032343	184	126482	17	25685	Калининградская область, г. Калининград, ул.Ботаническая, 2	Рябышева Анна Николаевна	navigatory.detstva.39@rosdetcentr.ru	4
24	Калужская область	7	40	RU-KLU	г.Калуга	1070853	348	121259	28	22053	 248003, Калужская область, г. Калуга, ул. Тульская 78А, 1 этаж, каб. 7	Федосенков Владислав Евгеньевич	navigatory.detstva.40@rosdetcentr.ru	2
25	Камчатский край	1	41	RU-KAM	г.Петропавловск-Камчатский	288730	121	37874	11	7426	0	Милостяк Ольга Владимировна	navigatory.detstva.41@rosdetcentr.ru	2
26	Карачаево-Черкесская Республика	4	09	RU-KC	г.Черкесск	468444	176	57799	15	10292	0	Борлакова Людмила Рашидовна	navigatory.detstva.09@rosdetcentr.ru	4
27	Республика Карелия	3	10	RU-KR	г.Петрозаводск	527880	198	71849	13	15785	Республика Карелия, г. Петрозаводск, Древлянская набережная 22А, каб. 16, 185035	Маликина Юлия Сергеевна	navigatory.detstva.10@rosdetcentr.ru	3
28	Кемеровская область — Кузбасс	5	42	RU-KEM	г.Кемерово	2568238	659	322923	64	75609	0	Гапеева Дарья Владимировна	navigatory.detstva.42@rosdetcentr.ru	5
29	Кировская область	2	43	RU-KIR	г.Киров	1138112	474	146516	48	31740	Кировская область, г. Киров, ул. Воровского, 74а	Плосконосова Александра Васильевна	navigatory.detstva.43@rosdetcentr.ru	1
30	Костромская область	7	44	RU-KOS	г.Кострома	571900	264	75153	27	15925	г. Кострома, ул. 1 Мая, 12.	Иноземцева Светлана Павловна	navigatory.detstva.44@rosdetcentr.ru	2
31	Краснодарский край	8	23	RU-KDA	г.Краснодар	5819345	1257	765834	109	149532	350000, г. Краснодар, ул. Красная, 76	Ковалева Вероника Игоревна	navigatory.detstva.23@rosdetcentr.ru	1
32	Красноярский край	5	24	RU-KYA	г.Красноярск	2845545	1054	367595	75	74115	0	Дюкарева Анна Сергеевна	navigatory.detstva.24@rosdetcentr.ru	3
33	Республика Крым	8	82	RU-CR	г.Симферополь	1916805	542	228483	36	41126	295000, Россия, Республика Крым, г. Симферополь, ул. Невского, 15, каб №33,34	Сторожко Елена Сергеевна	navigatory.detstva.91@rosdetcentr.ru	5
34	Курганская область	6	45	RU-KGN	г.Курган	761586	388	102658	20	21147	0	Гольцева Наталья Геннадьевна	navigatory.detstva.45@rosdetcentr.ru	4
35	Курская область	7	46	RU-KRS	г.Курск	1067034	569	121958	25	28545	Курская область, г. Курск, ул. Белгородская, 14Б, 305018	Митусова Марьяш Маратовна	navigatory.detstva.46@rosdetcentr.ru	1
36	Ленинградская область	3	47	RU-LEN	г.Гатчина	2023767	391	194866	24	21381	188686, Ленинградская обл., Разметелево,  ул. ПТУ-56, д. 5	Румянцева Анна Дмитриевна	navigatory.detstva.47@rosdetcentr.ru	2
37	Липецкая область	7	48	RU-LIP	г.Липецк	1126263	383	127772	26	26808	г.Липецк, ул.9 Мая, д.20	Никитенко Диана Петровна	navigatory.detstva.48@rosdetcentr.ru	3
38	Луганская Народная Республика	9	81	RU-LUG	г.Луганск	0	0	0	0	0	ЛНР, г. Луганск, ул. Ватутина, 87	Ермоленко Николай Андреевич	navigatory.detstva.95@rosdetcentr.ru	3
39	Магаданская область	1	49	RU-MAG	г.Магадан	134315	55	16170	9	3911	0	Таченко Елена Леонидовна	navigatory.detstva.49@rosdetcentr.ru	5
40	Республика Мордовия	2	13	RU-MO	г.Саранск	771373	247	73641	27	16979	Республика Мордовия, г. Саранск, ул, Большевистская, д.33, 430005	Губина Инна Николаевна	navigatory.detstva.13@rosdetcentr.ru	2
41	Московская область	7	50	RU-MOS	г.Москва	8591736	1209	1035893	79	120102	Московская область, г. Реутов, ул. Юбилейный проспект, д. 58 стр.3, 143962	Громов Святослав Алексеевич	navigatory.detstva.50@rosdetcentr.ru	1
42	Мурманская область	3	51	RU-MUR	г.Мурманск	658698	164	82603	19	18244	183035, Мурманская область, г. Мурманск, Инженерная ул., д.2а, офис 510	Матях Максим Валентинович	navigatory.detstva.51@rosdetcentr.ru	2
43	Ненецкий автономный округ	3	83	RU-NEN	г.Наряьн-Мар	41383	30	6522	3	1130	0	Ткачева Людмила Вячеславовна	navigatory.detstva.83@rosdetcentr.ru	2
44	Нижегородская область	2	52	RU-NIZ	г.Нижний Новгород	3081817	880	354116	75	75978	603105, город Нижний Новгород, улица Невзоровых, д.29	Тарасов Никита Андреевич	navigatory.detstva.52@rosdetcentr.ru	4
45	Новгородская область	3	53	RU-NGR	г.Великий Новгород	575926	184	67316	18	15300	0	Васильева Юлия Владимировна	navigatory.detstva.53@rosdetcentr.ru	3
46	Новосибирская область	5	54	RU-NVS	г.Новосибирск	2794266	1011	364719	65	71181	0	Саблина Ирина Викторовна	navigatory.detstva.54@rosdetcentr.ru	4
47	Омская область	5	55	RU-OMS	г.Омск	1832064	716	240779	46	58779	Омская область, г. Омск, ул. Всеволода Иванова, 13	Огородникова Александра Дмитриевна	navigatory.detstva.55@rosdetcentr.ru	5
48	Оренбургская область	2	56	RU-ORE	г.Оренбург	1841377	946	249039	41	53402	460000, Оренбургская область, г. Оренбург, ул. Постникова, д. 26	Добровольская Елена Александровна	navigatory.detstva.56@rosdetcentr.ru	5
49	Орловская область	7	57	RU-ORL	г.Орёл	700276	375	78273	18	16833	0	Воротникова Евгения Васильевна	navigatory.detstva.57@rosdetcentr.ru	5
50	Пензенская область	2	58	RU-PNZ	г.Пенза	492376	472	134578	25	30308	Пензенская область, г. Пенза, ул. Ухтомского, 1	Гаврюшина Мария Петровна	navigatory.detstva.58@rosdetcentr.ru	5
51	Пермский край	2	59	RU-PER	г.Пермь	2508352	704	336435	66	90682	614068, г. Пермь, ул. Генкеля, 1б	Чащинова Анна Вадимовна	navigatory.detstva.59@rosdetcentr.ru	5
52	Приморский край	1	25	RU-PRI	г.Владивосток	1820076	547	218277	41	49740	0	Гавриленко Евгения Ивановна	navigatory.detstva.25@rosdetcentr.ru	3
53	Псковская область	3	60	RU-PSK	г.Псков	587786	237	69110	15	13586	0	Колбасова Юлия Олеговна	navigatory.detstva.60@rosdetcentr.ru	5
54	Республика Адыгея	8	01	RU-AD	г.Майкоп	497985	137	60470	8	9513	0	Яцковец Александра Анатольевна	navigatory.detstva.01@rosdetcentr.ru	1
55	Республика Алтай	5	04	RU-AL	г.Горно-Алтайск	210769	179	39698	7	6616	0	Колбина Наталья Валентиновна	navigatory.detstva.04@rosdetcentr.ru	4
56	Республика Ингушетия	4	06	RU-IN	г.Магас	519078	135	84760	14	14993	0	Колоев Исрапил Халитович	navigatory.detstva.06@rosdetcentr.ru	5
57	Республика Калмыкия	8	08	RU-KL	г.Элиста	264483	169	34581	8	7825	0	Саранкаева Екатерина Эрдниевна	navigatory.detstva.08@rosdetcentr.ru	5
58	Республика Коми	3	11	RU-KO	г.Сыктывкар	726434	305	102212	23	20651	0	Залевская Ольга Сергеевна	navigatory.detstva.11@rosdetcentr.ru	4
59	Республика Марий Эл	2	12	RU-ME	г.Йошкар-Ола	672321	253	84956	24	17448	0	Фомичева Наталья Ивановна	navigatory.detstva.12@rosdetcentr.ru	2
60	Республика Северная Осетия — Алания	4	15	RU-SE	г.Владикавказ	680748	205	93221	23	18302	0	Рубаева Лиана Валерьевна	navigatory.detstva.15@rosdetcentr.ru	1
61	Республика Татарстан	2	16	RU-TA	г.Казань	4001625	1595	488670	98	92055	0	Зиновьев Алексей Михайлович	navigatory.detstva.16@rosdetcentr.ru	4
62	Республика Тыва	5	17	RU-TY	г.Кызыл	337271	171	72543	14	10109	0	Лопсан Сергей Михайлович	navigatory.detstva.17@rosdetcentr.ru	3
63	Республика Хакасия	5	19	RU-KK	г.Абакан	530233	238	75690	14	14487	0	Шенкнехт Ирина Алексеевна	navigatory.detstva.19@rosdetcentr.ru	4
64	Ростовская область	8	61	RU-ROS	г.Ростов	4164547	1226	464428	113	112215	344002, Ростовская область, г.Ростов-на-Дону, ул. Большая Садовая, д. 55	Чупров Михаил Георгиевич	navigatory.detstva.61@rosdetcentr.ru	5
65	Рязанская область	7	62	RU-RYA	г.Рязань	1088918	413	117922	29	26316	0	Лубнина Наталия Эдуардовна	navigatory.detstva.62@rosdetcentr.ru	1
66	Самарская область	2	63	RU-SAM	г.Самара	3142683	857	359087	71	87435	0	Краснова Ирина Владимировна	navigatory.detstva.63@rosdetcentr.ru	4
67	Санкт-Петербург	3	78	RU-SPE	г.Санкт-Петербург	5600044	753	578671	77	118281	0	Масленицына Татьяна Алексеевна	navigatory.detstva.78@rosdetcentr.ru	1
68	Саратовская область	2	64	RU-SAR	г.Саратов	2404944	925	255366	47	57965	Саратовская область, г. Саратов, ул. Соборная, 42В, 410031 (а августе планируется переезд)	Рузанова Елена Владимировна	navigatory.detstva.64@rosdetcentr.ru	5
69	Республика Саха (Якутия)	1	14	RU-SA	г.Якутск	997565	634	153195	42	28410	Республика Саха (Якутия), г. Якутск, ул. Орджоникидзе, д. 8, 677000	Макарова Нюргуяна Владимировна	navigatory.detstva.14@rosdetcentr.ru	3
70	Сахалинская область	1	65	RU-SAK	г.Южно-Сахалинск	460535	158	62322	13	11542	Сахалинская область, г. Южно-Сахалинск, ул. Ленина 150, 693009	Шелепов Максим Николаевич	navigatory.detstva.65@rosdetcentr.ru	5
71	Свердловская область	6	66	RU-SVE	г.Екатеринбург	4239161	1126	553760	111	124686	г. Екатеринбург, ул. Куйбышева, д.183, офис 301-302	Рублева Екатерина Владимировна	navigatory.detstva.66@rosdetcentr.ru	1
72	Севастополь	8	92	—	г.Севастополь	558273	68	53749	9	9878	ГБОУ ДО ДДЮТ, г. Севастополь,  Ленинский район,  пр-кт Нахимова, 4	Загородняя Наталья Александровна	navigatory.detstva.92@rosdetcentr.ru	1
73	Смоленская область	7	67	RU-SMO	г.Смоленск	873041	390	96292	29	22186	0	Гончарова Светлана Анатольевна	navigatory.detstva.67@rosdetcentr.ru	2
74	Ставропольский край	4	26	RU-STA	г.Ставрополь	550260	663	319711	76	72543	Ставропольский край, г. Ставрополь, ул. Комсомольская, 65	Дячук Татьяна Леонидовна	navigatory.detstva.26@rosdetcentr.ru	1
75	Тамбовская область	7	68	RU-TAM	г.Тамбов	966250	414	98023	25	25509	392000, Тамбовская область, город Тамбов, ул. Сергея Рахманинова, д.3 б	Лебедева Анастасия Александровна	navigatory.detstva.68@rosdetcentr.ru	3
76	Тверская область	7	69	RU-TVE	г.Тверь	1211183	495	141578	47	28721	0	Радчук Никита Александрович	navigatory.detstva.69@rosdetcentr.ru	1
77	Томская область	5	70	RU-TOM	г.Томск	1052106	323	128334	29	25896	Томская область, г. Томск, площадь Ленина 8, офис 40, 634050	Сухушина Елена Валерьевна	navigatory.detstva.70@rosdetcentr.ru	4
78	Тульская область	7	71	RU-TUL	г.Тула	1481471	471	148487	40	35944	0	Заровский Александр Андреевич	navigatory.detstva.71@rosdetcentr.ru	5
79	Тюменская область	6	72	RU-TYU	г.Тюмень	1608494	464	241645	14	36932	г. Тюмень, ул. Перекопская, 34, ГАУ ДО ТО «Дворец творчества и спорта «Пионер», Центр туризма и краеведения, 2 этаж, каб. 15, 17	Хомякова Анна Николаевна	navigatory.detstva.72@rosdetcentr.ru	1
80	Удмуртская Республика	2	18	RU-UD	г.Ижевск	1442251	553	198326	46	44524	0	Латынина Ксения Анатольевна	navigatory.detstva.18@rosdetcentr.ru	5
81	Ульяновская область	2	73	RU-ULY	г.Ульяновск	1181006	405	129023	37	28795	432042 г. Ульяновск, ул. Доватора, д. 14	Дикова Наталья Владимировна	navigatory.detstva.73@rosdetcentr.ru	3
82	Хабаровский край	1	27	RU-KHA	г.Хабаровск	1284090	387	154781	29	37912	0	Лисица Светлана Витальевна	navigatory.detstva.27@rosdetcentr.ru	2
83	Ханты-Мансийский автономный округ — Югра	6	86	RU-KHM	г.Ханты-Мансийск	1730353	326	237886	23	33692	ХМАО-Югра, г.Сургут, ул. Артема, 9	Шемякина Вера Александровна	navigatory.detstva.86@rosdetcentr.ru	5
84	Херсонская область	9	84	RU-HR	г.Геническ	0	83	15522	13	0	г. Геническ , ул. Вокзальная , 15	Ревко Алла Васильевна	navigatory.detstva.94@rosdetcentr.ru	2
85	Челябинская область	6	74	RU-CHE	г.Челябинск	3407145	950	433935	62	95939	Челябинская область, г. Челябинск, ул. Воровского 36, 454020	Гришин Александр Николаевич	navigatory.detstva.74@rosdetcentr.ru	3
86	Чеченская Республика	4	20	RU-CE	г.Грозный	1533209	554	311305	29	35027	0	Берсанукаева Зара Амировна	navigatory.detstva.20@rosdetcentr.ru	3
87	Чувашская Республика —  Чувашия	2	21	RU-CU	г.Чебоксары	1173177	418	150532	24	30885	428001, Чувашская Республика, г. Чебоксары, пр-т М. Горького, д. 5, 223, 224 каб. (Чувашский республиканский институт образования)	Иванова Наталья Владимировна	navigatory.detstva.21@rosdetcentr.ru	3
88	Чукотский автономный округ	1	87	RU-CHU	г.Анадырь	47840	42	7228	4	828	0	Попова Ольга Анатольевна	navigatory.detstva.87@rosdetcentr.ru	1
89	Ямало-Ненецкий автономный округ	6	89	RU-YAN	г.Салехард	512387	131	80940	8	10490	Улица Совхозная, д. 14, корп. 1, г. Салехард, Ямало-Ненецкий автономный округ, 629007	Алешина Елена Викторовна	navigatory.detstva.89@rosdetcentr.ru	2
90	Ярославская область	7	76	RU-YAR	г.Ярославль	1194605	391	143164	41	36111	0	Шорохова Любовь Вячеславовна	navigatory.detstva.76@rosdetcentr.ru	1
\.


                                                                                                                      restore.sql                                                                                         0000600 0004000 0002000 00000006567 14560546656 0015423 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        --
-- NOTE:
--
-- File paths need to be edited. Search for $$PATH$$ and
-- replace it with the path to the directory containing
-- the extracted data files.
--
--
-- PostgreSQL database dump
--

-- Dumped from database version 16.1
-- Dumped by pg_dump version 16.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE postgres;
--
-- Name: postgres; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = icu LOCALE = 'en_US.UTF-8' ICU_LOCALE = 'en-US';


ALTER DATABASE postgres OWNER TO postgres;

\connect postgres

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE postgres; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE postgres IS 'default administrative connection database';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Region; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Region" (
    "RegionID" integer NOT NULL,
    "Title" text,
    "DSID" smallint,
    "CodeGIBDD" character varying,
    "CodeGOST" character varying,
    "Capital" text,
    "Population" bigint,
    "NumberOfSchool" integer,
    "SchoolContingent" bigint,
    "NumberOfSPO" integer,
    "SPOContingent" bigint,
    "RCAddress" text,
    "RCHead" text,
    "RCContact" text,
    "Indicator" smallint
);


ALTER TABLE public."Region" OWNER TO postgres;

--
-- Name: Region_RegionID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Region_RegionID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Region_RegionID_seq" OWNER TO postgres;

--
-- Name: Region_RegionID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Region_RegionID_seq" OWNED BY public."Region"."RegionID";


--
-- Name: Region RegionID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Region" ALTER COLUMN "RegionID" SET DEFAULT nextval('public."Region_RegionID_seq"'::regclass);


--
-- Data for Name: Region; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Region" ("RegionID", "Title", "DSID", "CodeGIBDD", "CodeGOST", "Capital", "Population", "NumberOfSchool", "SchoolContingent", "NumberOfSPO", "SPOContingent", "RCAddress", "RCHead", "RCContact", "Indicator") FROM stdin;
\.
COPY public."Region" ("RegionID", "Title", "DSID", "CodeGIBDD", "CodeGOST", "Capital", "Population", "NumberOfSchool", "SchoolContingent", "NumberOfSPO", "SPOContingent", "RCAddress", "RCHead", "RCContact", "Indicator") FROM '$$PATH$$/3613.dat';

--
-- Name: Region_RegionID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Region_RegionID_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         