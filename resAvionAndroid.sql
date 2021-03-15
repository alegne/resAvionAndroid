-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 15, 2021 at 05:18 PM
-- Server version: 10.5.8-MariaDB-3
-- PHP Version: 7.4.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `resAvionAndroid`
--

-- --------------------------------------------------------

--
-- Table structure for table `avion`
--

CREATE TABLE `avion` (
  `id` int(10) UNSIGNED NOT NULL,
  `numAvion` varchar(10) COLLATE utf8mb4_bin NOT NULL,
  `design` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `depart` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `arrivee` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `created_at` date NOT NULL,
  `update_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `avion`
--

INSERT INTO `avion` (`id`, `numAvion`, `design`, `depart`, `arrivee`, `created_at`, `update_at`) VALUES
(1, '00089AV', 'pas de design', 'Antananarivo', 'Toamasina', '2021-03-06', '2021-03-06'),
(3, '0001AV', 'gros corps', 'Morondava', 'Tana', '2021-03-07', '2021-03-07'),
(5, '0003av', 'vitre fumee', 'Morondava', 'Tana', '2021-03-07', '2021-03-07'),
(6, '0005AV', 'vitre clair', 'Morondava', 'Tana', '2021-03-07', '2021-03-07');

-- --------------------------------------------------------

--
-- Table structure for table `reservation`
--

CREATE TABLE `reservation` (
  `id` int(10) UNSIGNED NOT NULL,
  `frais` float NOT NULL,
  `dateDepart` date NOT NULL,
  `idVoyageur` int(10) UNSIGNED NOT NULL,
  `idAvion` int(10) UNSIGNED NOT NULL,
  `created_at` date NOT NULL,
  `update_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `reservation`
--

INSERT INTO `reservation` (`id`, `frais`, `dateDepart`, `idVoyageur`, `idAvion`, `created_at`, `update_at`) VALUES
(1, 200000, '2021-03-31', 2, 1, '2021-03-11', '2021-03-11');

-- --------------------------------------------------------

--
-- Table structure for table `voyageur`
--

CREATE TABLE `voyageur` (
  `id` int(11) UNSIGNED NOT NULL,
  `nom` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `cin` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `numPhone` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `created_at` date NOT NULL,
  `update_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `voyageur`
--

INSERT INTO `voyageur` (`id`, `nom`, `cin`, `numPhone`, `created_at`, `update_at`) VALUES
(2, 'TOTO', '501258458965', '+261326860252', '2021-03-08', '2021-03-08');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `avion`
--
ALTER TABLE `avion`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `numAvion` (`numAvion`);

--
-- Indexes for table `reservation`
--
ALTER TABLE `reservation`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `voyageur`
--
ALTER TABLE `voyageur`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `avion`
--
ALTER TABLE `avion`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `reservation`
--
ALTER TABLE `reservation`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `voyageur`
--
ALTER TABLE `voyageur`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
