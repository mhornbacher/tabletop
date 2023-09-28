# 🐉 TableTop

The one and only TableTop RPG manager for people who play around the table. Specifically designed for Dungeons and Dragons 5th Edition. However it can and will be adapted to other game systems as necessary.

It is designed to be used on a Desktop/Tablet environment due to the complexity of the feature set and is not mobile phone friendly.

## 👩‍💻 Development

Use the following command to start the development environment:

```bash
npx lerna run dev
```

Use the following command to run the unit tests:

```bash
npx lerna run test
```

Use the following command to run a prodocution build:

```bash
npx lerna run build
```

<!-- Use the following command to run the end-to-end tests:

```bash
npx lerna run test:e2e
``` -->

## 📦 Technologies / Dependencies

This app is built as a monolith application using a monorepo structure. [Docker](https://www.docker.com/) is used for service dependencies and [Lerna](https://lerna.js.org/) is used to start all the services for local development.

This program is built with Typescript, React, and uses the following libraries/tools:

- Component Libraries:
  - [BlueprintJS](https://blueprintjs.com/)
  - [React Router](https://reactrouter.com/)
- Testing
  - [Jest](https://jestjs.io/)
  - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
  - [Cypress](https://www.cypress.io/)
- Misc
  - [ESLint](https://eslint.org/)
  - [Storybook](https://storybook.js.org/)
  - [Vite](https://vitejs.dev/)
  - [Lerna](https://lerna.js.org/) Monorepo Management

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

### 📚 Resources

- <a href="https://www.flaticon.com/free-icons/dice" title="dice icons">Dice icons created by Smashicons - Flaticon</a>
