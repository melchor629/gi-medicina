-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema medicina
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `medicina` ;

-- -----------------------------------------------------
-- Schema medicina
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `medicina` DEFAULT CHARACTER SET utf8 ;
USE `medicina` ;

-- -----------------------------------------------------
-- Table `medicina`.`laboratorio`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `medicina`.`laboratorio` ;

CREATE TABLE IF NOT EXISTS `medicina`.`laboratorio` (
  `ID_LABORATORIO` INT NOT NULL AUTO_INCREMENT,
  `NOMBRE_LABORATORIO` VARCHAR(80) NULL,
  PRIMARY KEY (`ID_LABORATORIO`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `medicina`.`medicamento`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `medicina`.`medicamento` ;

CREATE TABLE IF NOT EXISTS `medicina`.`medicamento` (
  `ID_MEDICAMENTO` INT NOT NULL,
  `NOMBRE_MEDICAMENTO` VARCHAR(80) NULL,
  `CANTIDAD_DISPONIBLE` INT NOT NULL,
  `LABORATORIO` INT NOT NULL,
  PRIMARY KEY (`ID_MEDICAMENTO`),
  INDEX `fk_tMedicamento_tLaboratorio_idx` (`LABORATORIO` ASC),
  CONSTRAINT `fk_tMedicamento_tLaboratorio`
    FOREIGN KEY (`LABORATORIO`)
    REFERENCES `medicina`.`laboratorio` (`ID_LABORATORIO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `medicina`.`rol`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `medicina`.`rol` ;

CREATE TABLE IF NOT EXISTS `medicina`.`rol` (
  `rolName` VARCHAR(50) NOT NULL,
  `rolDes` VARCHAR(255) NULL,
  `admin` TINYINT(1) NOT NULL,
  PRIMARY KEY (`rolName`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `medicina`.`pantalla`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `medicina`.`pantalla` ;

CREATE TABLE IF NOT EXISTS `medicina`.`pantalla` (
  `pantalla` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`pantalla`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `medicina`.`permiso`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `medicina`.`permiso` ;

CREATE TABLE IF NOT EXISTS `medicina`.`permiso` (
  `rolName` VARCHAR(50) NOT NULL,
  `pantalla` VARCHAR(50) NOT NULL,
  `acceso` TINYINT(1) NOT NULL,
  `modificacion` TINYINT(1) NOT NULL,
  PRIMARY KEY (`rolName`, `pantalla`),
  INDEX `fk_tPermiso_tPantalla_idx` (`pantalla` ASC),
  CONSTRAINT `fk_tPermiso_tRol`
    FOREIGN KEY (`rolName`)
    REFERENCES `medicina`.`rol` (`rolName`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tPermiso_tPantalla`
    FOREIGN KEY (`pantalla`)
    REFERENCES `medicina`.`pantalla` (`pantalla`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `medicina`.`usuario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `medicina`.`usuario` ;

CREATE TABLE IF NOT EXISTS `medicina`.`usuario` (
  `nombre` VARCHAR(50) NOT NULL,
  `password` VARCHAR(50) NOT NULL,
  `rolName` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`nombre`),
  INDEX `fk_tUsuario_tRol_idx` (`rolName` ASC),
  CONSTRAINT `fk_tUsuario_tRol`
    FOREIGN KEY (`rolName`)
    REFERENCES `medicina`.`rol` (`rolName`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
