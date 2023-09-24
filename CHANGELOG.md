# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.6.0] - 2023-09-24

### Changed

- [Backend] Versão 0.5.0
### Added

- [Backend] Endpoint para listar estabelecimentos e filtrar por range de cep atendido

## [0.5.0] - 2023-09-24

### Changed

- [Backend] Versão 0.4.0
- [Backend] Complemento do endereço não é mais obrigatório
- [Backend] Refeita as migrations agora usando "prisma db push" para teste local e criando as migrations apenas antes do commit

### Added

- [Backend] Endpoint para listar cupcakes
- [Backend] Endpoint para listar categorias de cupcakes

## [0.4.0] - 2023-09-24

### Changed

- [Backend] Versão 0.3.0
- [Backend] Endpoint de atualizar cliente permite favoritar endereço

### Added

- [Backend] Endpoint para criar endereço
- [Backend] Endpoint para listar endereços
- [Backend] Endpoint para atualizar dados de um endereço

## [0.3.0] - 2023-09-23

### Changed

- [Backend] Versão 0.2.0
- [Backend] Alterado nome na entidade cliente para ser preenchido em duas partes, primeiro e último

### Added

- [Backend] Endpoint para criar cliente
- [Backend] Endpoint para listar clientes
- [Backend] Endpoint para atualizar dados de um cliente

## [0.2.0] - 2023-09-23

### Changed

- [Backend] Versão 0.1.0

### Added

- [Backend] Entidade de endereço do cliente
- [Backend] Endpoint para buscar cliente pelo id
- [Backend] Timestamps de criação e atualização em todas entidades

## [0.1.0] - 2023-09-20

### Added

- [Backend] Configurações iniciais com NestJS e Prisma
- Docker compose com banco de dados e redis

## [0.0.0] - 2023-09-07

### Added

- Readme inicial com algumas informações do projeto
- Diagrama inicial de entidades do sistema
