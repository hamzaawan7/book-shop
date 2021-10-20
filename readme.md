# Book Shop

## Install dependencies

```
composer install

npm install
```

## Setup (Important)
```
mv .env.example .env

Update the following environment variables:

APP_URL=  // It should be the base URL of your application.
SHOPIFY_APIKEY= // Your shopify custom application API key
SHOPIFY_SECRET= // Your shopify custom application API secret
REDIRECT_URL=// APP_URL appends /process_oauth_result e.g http://localhost:8000/process_oauth_result
SHOP_URL= // Your Shopify Store URL e.g bookstore.myshopify.com
```

## Migrations
```
Setup the DB in .env file and then run:
php artisan migrate
```

## Start & Play
```
Run: npm run watch

Goto your base-url, you should be redirected to your shopify partners portal,
then you would be granted access token and afterwards all the products can be accessed
and displayed on the react application. Enjoy!!!
```
