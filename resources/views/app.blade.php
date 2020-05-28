<!DOCTYPE html>
<html>
<head>
  <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="{{asset('css/app.css')}}">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
</head>
<body>
  <div id="app">
    <v-app>
      <!-- App Bar -->
      <bpam-app-bar></bpam-app-bar>
      <!-- Navigation Drawer -->
      <navigation-drawer></navigation-drawer>
      <!-- Content -->
      <router-view></router-view>
      <!-- Footer -->
      <bpam-footer></bpam-footer>
    </v-app>
  </div>
  <script src="{{asset('js/app.js')}}"></script>
</body>
</html>