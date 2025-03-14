# Electron Boilerplate

---

## Drizzle

See db in studio in dev:

```sh
npm run drizzle:studio
```

Generate migration files (based on `schema.ts`):

```sh
npm run drizzle:generate
```

Migrate the database:

```sh
npm run drizzle:migrate
```

If you need to delete the database, run:

```sh
rm -rf database # danger
```

---

This is a boilerplate for creating desktop applications with [Electron](https://electronjs.org/).

Uses:

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [react-router](https://reactrouter.com/en/main)
- [better-sqlite3](https://github.com/WiseLibs/better-sqlite3)
- [Drizzle](https://orm.drizzle.team/)
- [shadcn/ui](https://ui.shadcn.com/)

Most of this code is generously borrowed from [Electron forge template with Vite + TypeScript](https://www.electronforge.io/templates/vite-+-typescript).

## Notes

When upgrading Electron or better-sqlite3, ensure version compatibility between them. Refer to [better-sqlite3's release page]((https://github.com/WiseLibs/better-sqlite3/releases)) for supported Electron versions.
