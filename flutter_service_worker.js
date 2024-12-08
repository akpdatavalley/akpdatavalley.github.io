'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "63ff411b2d0b682b3ea720b9cb43f1ea",
"assets/AssetManifest.bin.json": "e868a758ba8008ab41d4a39dc8bf40e6",
"assets/AssetManifest.json": "c28c5a2185a1310fde124e2c0862925b",
"assets/assets/aboutus_one.jpg": "b897743f168eb72d22ffd74c5bdeb857",
"assets/assets/home.jpg": "3b860365fac178bf37e7296af5ab06dc",
"assets/assets/icons/aboutus.png": "621bad9ae4d440883a46ade037cb3077",
"assets/assets/icons/ai.png": "fb9315093f73d441869f37f376813bf1",
"assets/assets/icons/app-development.png": "80e74d17ec3f29005e01ae2d98461f62",
"assets/assets/icons/best-customer-experience.png": "07def02ae24f0db39774c5490014959e",
"assets/assets/icons/cancel.png": "94b47e3843f8944e5a1e506a8322c060",
"assets/assets/icons/chat.png": "d0d03cdb678859c7b62ef71b8e10f9ee",
"assets/assets/icons/checked.png": "da188ccb78f1017e9645542bb5e52d6b",
"assets/assets/icons/code.png": "ea1529408037497aca0a5bf6141a9f7d",
"assets/assets/icons/datavalleylogo.png": "296b0c1eba2e5b3e410b9b8464f5210e",
"assets/assets/icons/datavalleytextlogo.png": "09edc425692e6ccae0505f974c434d3b",
"assets/assets/icons/dvlogoblue.png": "cc165d23c879a02078ac07739c281d79",
"assets/assets/icons/dvlogodarkblue.png": "4530d9481a293f4c58d834e645c27fe2",
"assets/assets/icons/dvtext.png": "7af94ae3aac3943b881899fd1b4df59a",
"assets/assets/icons/erp.png": "dba9027d9f2baf5ed1dad1e33a407676",
"assets/assets/icons/gmail.png": "2c1a7560c88ea83e6b2593cd07af8ad8",
"assets/assets/icons/graphic-designer.png": "fc995e87cf578b0ca6f34fe07128ad61",
"assets/assets/icons/help-desk.png": "5c3c8ef28b2e5bbe60ecb60392b5c4f6",
"assets/assets/icons/map.png": "819d8881858a9c889482fdd847f86ee7",
"assets/assets/icons/newlogo.png": "43c02cbe65b7d6136b03a4259311c26a",
"assets/assets/icons/odoo.png": "f17e41387a041e4c3e9b5f91f2639c11",
"assets/assets/icons/opportunity.png": "028d7d38b27dc75aae26fcaab71a4b03",
"assets/assets/icons/planning.png": "34e6c673e7648cb285818b73bf5cce8f",
"assets/assets/icons/project-management.png": "db8c7a5e630dde656006c917f23d2c2f",
"assets/assets/icons/remote-access.png": "0c61e582f6a81dd775e540ce0844972c",
"assets/assets/icons/report.png": "576747892893e421554fbfbbd794211f",
"assets/assets/icons/research.png": "57feb294fc10a11b06a30bcb77ddc356",
"assets/assets/icons/robo.png": "4148a31b5cb8ab5ecfb930d16ff50ba3",
"assets/assets/icons/search.png": "01a5965bf040dc0f2241b997786e2eee",
"assets/assets/icons/startup.png": "a372e7ecba48376b5db451689770d293",
"assets/assets/icons/web-apps.png": "afafb09c7e9e032823301447ce07a79f",
"assets/assets/icons/working-hours.png": "9c06f78ade82ae30cb973cacc541ae20",
"assets/assets/images/3173494.jpg": "7a6f134fdd3fd310c825561025614629",
"assets/assets/images/about-us-primary.jpg": "12528993c34a268fde9beb43efd44080",
"assets/assets/images/about-us.jpg": "e74025bcf440bddfcdff97bf87f244f1",
"assets/assets/images/aboutus1.svg": "07b44c9d204e7f529b5e6f18245c83b1",
"assets/assets/images/aboutus_first.svg": "218316bec89817e813ecc12405095f2a",
"assets/assets/images/about_us_process.jpg": "91ff307a75a2021c8fbc6dedf34042f8",
"assets/assets/images/aihand.jpg": "53659d1a7fcee2ff49d993f413015c60",
"assets/assets/images/aineural.jpg": "85638e2f72a974dcd0f775208cb90261",
"assets/assets/images/aipin.jpg": "94495dc88f5f8d23db4a83d92bc85a66",
"assets/assets/images/bg2.jpg": "692c7fa2ef48f086f427f0b1032c4cf8",
"assets/assets/images/bgsvg.svg": "f194ec41390f75c258ca0303c3b9ac27",
"assets/assets/images/careerpage.jpg": "2f62a320a59e858d4e8a943e335ef8b2",
"assets/assets/images/com.png": "f1bd07e320a2cb31c5ba4a775d8433f7",
"assets/assets/images/communication.jpg": "29624e4802785716bd8d3d8c8a4ec73f",
"assets/assets/images/customer.jpg": "c16213d8f6592635dc05801725e7a98f",
"assets/assets/images/dev.png": "b446291110331d51a212949ef6698d3a",
"assets/assets/images/dev2.png": "a5047e986327b469d0bd0f256380b395",
"assets/assets/images/dev3.png": "be85ee50325d46416ca3a4ba8e8bcc4b",
"assets/assets/images/erp2.jpg": "14f587e67394bebe2bc91418f7be1d26",
"assets/assets/images/itteam.jpg": "63d42661b831c36f9520835263c8462d",
"assets/assets/images/lap1.jpg": "bb01098cee45a82ef6ef52b549635e93",
"assets/assets/images/mobileapp.jpg": "c3a8baab9cdd6a64e3c7da82a419dc00",
"assets/assets/images/odoo.jpg": "8b0202ade1123bf373ee9adfeb2b7360",
"assets/assets/images/oops.jpg": "00cfd2c57fe2176db3408c7127f40fd1",
"assets/assets/images/rob.jpg": "95095e47e2e409fe29706a46f94fb3d2",
"assets/assets/images/service.jpg": "6f2cc0b261a09cfd30cb91816a95bf4a",
"assets/assets/images/serviceimage.jpg": "3b4fac4b623ba05524d04e37861d406c",
"assets/assets/images/support.png": "0c4b1e1c620cb2efcc24d3bff533bc9a",
"assets/assets/images/terms.png": "172582e2919e94d00f88faa7059e434a",
"assets/assets/images/testing.png": "73d025cf1d54ce90968ac9747a6267b0",
"assets/assets/images/Tiny%2520people%2520signing%2520legal%2520principles%2520document.jpg": "f6460c95de0a7ce5cb505a189da18521",
"assets/assets/images/webapp.jpg": "0e58d34aca65f93df5a8ebe09225cec5",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "ccb23fbe19c8071147b08a1ef19b28e8",
"assets/NOTICES": "fb4b9769620e6d1bf693c09b0c864998",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "bbc3a2d2265f7ff6bef4ba339a0ba4c9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "dbf0a93d2b23d99b7af4b1a6ab94e122",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "4bc7849a5c7774cfa18e4bc2ef82404a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "2b09276d77110d9237d3c2ae19a75c9f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b325d577308cba727e977279f4f88570",
"/": "b325d577308cba727e977279f4f88570",
"main.dart.js": "d25f19bcac6c41c89f26ee8b5c14e4b2",
"manifest.json": "812a205ea5862f72ee5e327c9e06ad7c",
"version.json": "5bb01afa84d3274f7e191127b8fb09d0"};
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
