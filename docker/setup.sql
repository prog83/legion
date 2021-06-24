-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Хост: db
-- Время создания: Июн 23 2021 г., 07:41
-- Версия сервера: 8.0.25
-- Версия PHP: 7.4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `legionua`
--

-- --------------------------------------------------------

--
-- Структура таблицы `webcash_detail`
--

CREATE TABLE `webcash_detail` (
  `session_start_date` datetime NOT NULL,
  `session_end_date` datetime NOT NULL,
  `office_name` varchar(24) NOT NULL,
  `cashdesk` varchar(24) NOT NULL,
  `cashier_login` varchar(24) NOT NULL,
  `checks` int NOT NULL,
  `income` int NOT NULL,
  `outcome` int NOT NULL,
  `goods` int NOT NULL,
  `services` int NOT NULL,
  `returned` int NOT NULL,
  `canceled` int NOT NULL,
  `total_amount` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `webcash_detail`
--
ALTER TABLE `webcash_detail`
  ADD KEY `session_start_date` (`session_start_date`),
  ADD KEY `session_end_date` (`session_end_date`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
