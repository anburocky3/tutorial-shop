<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Tutorial Shopping cart</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

    <!-- Styles -->
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
</head>
<body class="antialiased">
    <div class="container mx-auto">
        <div id="app">
            <h2 v-text="foo"></h2>
        </div>
    </div>

    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>