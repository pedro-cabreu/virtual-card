
# Virtual Card Generator

A basci application that generates a virtual card and let the user download an image with a QRCode that links to a page with a simple profile

## Run Locally

Clone the project

```bash
  git clone 
```

Go to the project directory

```bash
  cd virtual-card
```

Install server and client dependencies

```bash
  cd server && composer install && php artisan migrate
```
```bash
  cd ..
```
```bash
  cd client && npm install
```

Start the server

```bash
  cd server && php artisan serve
```

```bash
  cd ..
```
```bash
  cd client && npm run dev
```

## Tech Stack

**Client:** React, Next.js, TailwindCSS

**Server:** PHP, Laravel, MySQL


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Authors

- [@Pedro](https://www.github.com/pedro-cabreu)

