toc.dat                                                                                             0000600 0004000 0002000 00000005635 14560546632 0014463 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        PGDMP   6                    |            postgres    16.1    16.0     "           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false         #           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false         $           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false         %           1262    5    postgres    DATABASE     �   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = icu LOCALE = 'en_US.UTF-8' ICU_LOCALE = 'en-US';
    DROP DATABASE postgres;
                postgres    false         &           0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    3621         �            1259    16412    District    TABLE     Y   CREATE TABLE public."District" (
    "DistrictID" smallint NOT NULL,
    "Title" text
);
    DROP TABLE public."District";
       public         heap    postgres    false         �            1259    16411    District_DistrictID_seq    SEQUENCE     �   CREATE SEQUENCE public."District_DistrictID_seq"
    AS smallint
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."District_DistrictID_seq";
       public          postgres    false    216         '           0    0    District_DistrictID_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public."District_DistrictID_seq" OWNED BY public."District"."DistrictID";
          public          postgres    false    215         �           2604    16415    District DistrictID    DEFAULT     �   ALTER TABLE ONLY public."District" ALTER COLUMN "DistrictID" SET DEFAULT nextval('public."District_DistrictID_seq"'::regclass);
 F   ALTER TABLE public."District" ALTER COLUMN "DistrictID" DROP DEFAULT;
       public          postgres    false    215    216    216                   0    16412    District 
   TABLE DATA           ;   COPY public."District" ("DistrictID", "Title") FROM stdin;
    public          postgres    false    216       3615.dat (           0    0    District_DistrictID_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."District_DistrictID_seq"', 1, false);
          public          postgres    false    215         �           2606    16419    District District_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public."District"
    ADD CONSTRAINT "District_pkey" PRIMARY KEY ("DistrictID");
 D   ALTER TABLE ONLY public."District" DROP CONSTRAINT "District_pkey";
       public            postgres    false    216                                                                                                           3615.dat                                                                                            0000600 0004000 0002000 00000000227 14560546632 0014264 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	ДФО
2	ПФО
3	СЗФО
4	СКФО
5	СФО
6	УФО
7	ЦФО
8	ЮФО
9	Новые территории РФ
10	Город Байконур
\.


                                                                                                                                                                                                                                                                                                                                                                         restore.sql                                                                                         0000600 0004000 0002000 00000005677 14560546632 0015416 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        --
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
-- Name: District; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."District" (
    "DistrictID" smallint NOT NULL,
    "Title" text
);


ALTER TABLE public."District" OWNER TO postgres;

--
-- Name: District_DistrictID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."District_DistrictID_seq"
    AS smallint
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."District_DistrictID_seq" OWNER TO postgres;

--
-- Name: District_DistrictID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."District_DistrictID_seq" OWNED BY public."District"."DistrictID";


--
-- Name: District DistrictID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."District" ALTER COLUMN "DistrictID" SET DEFAULT nextval('public."District_DistrictID_seq"'::regclass);


--
-- Data for Name: District; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."District" ("DistrictID", "Title") FROM stdin;
\.
COPY public."District" ("DistrictID", "Title") FROM '$$PATH$$/3615.dat';

--
-- Name: District_DistrictID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."District_DistrictID_seq"', 1, false);


--
-- Name: District District_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."District"
    ADD CONSTRAINT "District_pkey" PRIMARY KEY ("DistrictID");


--
-- PostgreSQL database dump complete
--

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 