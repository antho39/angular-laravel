# angular-laravel

<p>Ce projet est basé sur angular-cli / Materialize pour le serveur et Laravel 5.3 pour le client.</p>

<p>Il a été créé pour permettre aux micro-entrepreneurs de s'occuper convenablement de la gestion de leur micro entreprise.</p>

<p> Pré-requis : <br/>
angular-cli : >= 1.0.2</p>

<p> Une fois le projet téléchargé </p>
Dans un premier invite de commande :
<pre>cd client
npm install</pre>

Dans un second invite de commande :
<pre>cd server
composer install
composer update
php artisan key:generate
php artisan vendor:publish
php artisan jwt:generate
</pre>

<p>Une fois toutes ces commandes effectuées démarrer les projets dans leur invite de commande respectif.</p>
<p>Serveur : </p>
<pre>ng serve -o</pre>

<p>Client : </p>
<pre>php artisan serve</pre>