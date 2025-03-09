# Important setup to remember for later

In the project directory

- npm create vite@latest <_foldername_>
- npm create vite@latest frontend
  - React Framework
  - TypeScript Variant

In the created vite <_foldername_>

- npm install
- npm run dev

ESLint setup should already be done to default standard

Create a .prettierrc.json file with the following rules:

```
{
    "semi": true,
    "singleQuote": true,
    "jsxSingleQuote": false,
    "trailingComma": "es5",
    "printWidth": 80,
    "tabWidth": 2,
    "endOfLine": "auto"
}
```

This will work in VS Code if you've set:

- Default Formatter: Prettier - Code Formatter
- Format On Paste: True
- Format On Save: True
