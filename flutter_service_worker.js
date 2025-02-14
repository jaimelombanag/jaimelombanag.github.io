'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "95049dda9d576ed3b6d7c1f9e1f5ede2",
"version.json": "dfa0c5869d98ac240ec8984c026f2839",
"logo_bg.png": "4ae6d1e888232e499e117be46ab6f522",
"index.html": "813dfb0f6c8c3d4e5a5fc2e79ab94d29",
"/": "813dfb0f6c8c3d4e5a5fc2e79ab94d29",
"main.dart.js": "10102e918fb3e15177ed3a65f38ec2c2",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "22f1526abb6700a22714f9fcd8382dc6",
"icons/Icon-192.png": "f7bec1297db804f9294417e47947ce0c",
"icons/Icon-maskable-192.png": "f7bec1297db804f9294417e47947ce0c",
"icons/Icon-maskable-512.png": "3efbd382ae01a5084d16fa9d058d3072",
"icons/Icon-512.png": "3efbd382ae01a5084d16fa9d058d3072",
"manifest.json": "7ba12387377b7687229a7dceb7a8ac12",
"assets/AssetManifest.json": "6725c17dcd9e648af6b207cf5a7e34a3",
"assets/NOTICES": "20a423e2df0f9af8b6b00ffb8dd6fed3",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "5ecaa66611ffaf6bfccfbecdb43e70c2",
"assets/packages/quickalert/assets/confirm.gif": "bdc3e511c73e97fbc5cfb0c2b5f78e00",
"assets/packages/quickalert/assets/error.gif": "c307db003cf53e131f1c704bb16fb9bf",
"assets/packages/quickalert/assets/success.gif": "dcede9f3064fe66b69f7bbe7b6e3849f",
"assets/packages/quickalert/assets/loading.gif": "ac70f280e4a1b90065fe981eafe8ae13",
"assets/packages/quickalert/assets/info.gif": "90d7fface6e2d52554f8614a1f5deb6b",
"assets/packages/quickalert/assets/warning.gif": "f45dfa3b5857b812e0c8227211635cc4",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "3498ee37e3d33866cee96958c5c6dcfb",
"assets/fonts/MaterialIcons-Regular.otf": "f5fba80ac22e46d2d7a88b0dc3e3b963",
"assets/assets/images/sistemas.jpg": "fddbf9a092e103afe456129181bfb09f",
"assets/assets/images/bg3.jpeg": "be161b94c5c9e209273ff5edc4eeced0",
"assets/assets/images/logo_bg.png": "4ae6d1e888232e499e117be46ab6f522",
"assets/assets/images/bg2.jpeg": "a1113491eb55674bfe142fea2ddf27ee",
"assets/assets/images/services.png": "e36367fc63777e0758d89f68cd6755d5",
"assets/assets/images/bg5.jpeg": "196dd14ba49a702c9dc17e59ff91f598",
"assets/assets/images/bg8.jpeg": "35f290e889d42855e3375426114b2e62",
"assets/assets/images/extrella.svg": "508c939d518d4362b3679c455c6baa2f",
"assets/assets/images/bg7.jpg": "c5d95c4a330109a4bd973f053a5447a4",
"assets/assets/images/avatar.png": "5aad78214cf890564ddc640ba02c561f",
"assets/assets/images/fondo.jpeg": "bc5f5305c1e1993149c615f0109542fc",
"assets/assets/images/bg6.jpeg": "52a374d3da6cbdd7d3a27b54c88a8c74",
"assets/assets/images/cover.jpeg": "f6ea7ef940836385dbcf20d815d96e37",
"assets/assets/images/avatar2.png": "d9687b57eaa8166dca2d22c24da70cba",
"assets/assets/images/bg1.jpeg": "e595b171fe208e49140567ee6d96c43e",
"assets/assets/images/logo.jpeg": "c6adf3ca1b85ac334fb0d5b071a692af",
"assets/assets/images/bg4.webp": "5056ee0e7b4b1f3611d567a029f8bf76",
"assets/assets/images/splash.svg": "ef392da6153869af015cec1e532c12fb",
"assets/assets/json/form_client.json": "3df6130467ae2c8da9165cadaecac9ab",
"assets/assets/icons/pendientes.png": "7bd54d02b24bb4fe86d36f0149b42181",
"assets/assets/icons/rectangulo.png": "49ad840b230af76b894fa0acb6b91ae2",
"assets/assets/icons/extrella.png": "4466ed2896cfc6d537c779a08747aadc",
"assets/assets/icons/ciudades.png": "38f06c8a9e1cde994b43ddec2afebfed",
"assets/assets/icons/productos.png": "540ef2c85f4c9639dba888a2a0b0b0b3",
"assets/assets/icons/Rectangulos.svg": "b4f3adf894c03944a72db049884f7885",
"assets/assets/icons/usuario.svg": "be05a039eb83b5541d99caac1cf346b5",
"assets/assets/icons/steps.png": "3c0a0084eb6bf70752bae7545cc694ce",
"assets/assets/icons/unknown.svg": "b2f3cdc507252d75dea079282f14614f",
"assets/assets/icons/sleep.png": "6196f7d5ca8c361bce775098b428c4bf",
"assets/assets/icons/usuario.png": "89a1d16ddaa3e4fc5175f977be272a2c",
"assets/assets/icons/productos.svg": "32c0b19f970d42770c8e3f42180f1c1c",
"assets/assets/icons/pendientes.svg": "31bc959f66ee316dc64b1b2c2b17cac5",
"assets/assets/icons/extrella.svg": "508c939d518d4362b3679c455c6baa2f",
"assets/assets/icons/pedidos.png": "178b44bae3c0443104d29ce34893abea",
"assets/assets/icons/media.svg": "059dfe46bd2d92e30bf361c2f7055c3b",
"assets/assets/icons/rutas.svg": "7986f3c566986553d88c59e667b896f2",
"assets/assets/icons/rutas.png": "9f486a8b404789141245de7f8d43f6d5",
"assets/assets/icons/pedidos.svg": "9ef0490db6055bf2e5594287d0078df5",
"assets/assets/icons/folder.svg": "40a82e74e930ac73aa6ccb85d8c5a29c",
"assets/assets/icons/burn.png": "51a00d14b99445134c8a11128b008510",
"assets/assets/icons/Documents.svg": "51896b51d35e28711cf4bd218bde185d",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
