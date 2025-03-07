<p align="center">🎈 PJ Blog is an open source blog built with Laravel and Vue.js. <a href="https://pigjian.com">https://pigjian.com</a></p>

<p align="center">
  <b>Special thanks to the generous sponsorship by:</b>
  <br><br>
  <a href="https://www.upyun.com">
    <img src="https://pigjian.com/storage/logo/upyun.png" width=300>
  </a>
</p>

# PJ Blog

This is a powerful blog, I try to build the blog more beautiful, more convenient. 

`Laravel 5.*` and `Vuejs 2.*` combined with the establishment of a good response and quickly dashboard, the dashboard made through the `Vuejs` component development.

I believe it will be better and better. If you are interested in this, you can join and enjoy it.

Here is [documents](https://manual.pigjian.com/)

[Example](http://example.pigjian.com)

## Basic Features

- Manage users, articles, discussions and media
- Statistical tables
- Categorize articles
- Label classification
- Content moderation
- Own comments system
- Multi-language switching
- Markdown Editor
- Roles & Permissions
- and more...

[PJ Blog](https://github.com/Rocco0619/blog) Laravel 7.*

## Server Requirements

- PHP >= 7.2.5
- Node >= 6.x
- OpenSSL PHP Extension
- PDO PHP Extension
- Mbstring PHP Extension
- Tokenizer PHP Extension
- XML PHP Extension

## Install

### 1. Clone the source code or create new project.

```shell
git clone https://github.com/Rocco0619/blog.git
```

OR

```shell
composer create-project Rocco0619/blog
```

### 2. Set the basic config

```shell
cp .env.example .env
```

Edit the `.env` file and set the `database` and other config for the system after you copy the `.env`.example file.

### 2. Install the extended package dependency.

Install the `Laravel` extended repositories: 

```shell
composer install -vvv
```

Install the `Vuejs` extended repositories: 

```shel
npm install
```

Compile the js code: 

```shel
npm run dev

// OR

npm run watch

// OR

npm run production
```

### 3. Run the blog install command, the command will run the `migrate` command and generate test data.

```shell
php artisan blog:install
```

## Contributors

- [Jiajian Chan](http://github.com/Rocco0619)

## Thanks

- [overtrue](https://github.com/overtrue)
- [Laravist](https://www.laravist.com/)
- [Laravel - China](https://laravel-china.org/)

## Donate

Support all ERC20 tokens. My Address:
**0x600dfF1311E5DA3a8697fD86d4Fd9bed257395eb**

## License

The project is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).

QQ Group: 272734386
