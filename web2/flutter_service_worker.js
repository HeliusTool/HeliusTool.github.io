'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "d9f4ec34a8f1f36eb3b7b8c8733e248a",
"assets/assets/fonts/cm_sans_serif_2012.ttf": "b2c533d45ade59514b04062247d96aaa",
"assets/assets/images/0_universities_cropped.png": "56a989c346f6e28f0f384b43aa03de32",
"assets/assets/images/1_recomendacao_tecnicas_cropped.png": "f4fff02e83d7dd62895efeb3e267bad2",
"assets/assets/images/2_projeto_cropped.png": "764274c42512b8c9d94a78f68ad9f313",
"assets/assets/images/3_review_cropped.png": "c0f60e5c299dea6de0efd762eafc1bef",
"assets/assets/images/4_graph_cropped.png": "d4d26ec690ac66692775e075a15db5a4",
"assets/assets/images/5_feedback_cropped.png": "fd80f4cd0e28b6db7f15257e311cbe65",
"assets/assets/images/6_info_cropped.png": "0abaffc592900d4a0b7c53b01ff31058",
"assets/assets/images/arrow.png": "3a6ab44c64a31096be269c56b8be1052",
"assets/assets/images/Brazil.png": "89c8117690506786a7b192427cd5b640",
"assets/assets/images/city.png": "ad5244139548d9d68af19ccaecfed0a4",
"assets/assets/images/design-thinking-1.jpg": "6b0fe6a9bc3272b357706d325c47c5e0",
"assets/assets/images/faq.png": "7dba160b80745b3201ce08d9a4cb366b",
"assets/assets/images/faq.svg": "5678c30b41cd11b37de75173a1ab15db",
"assets/assets/images/happy.png": "961a8aeda70cd511efa01e9cb4be1902",
"assets/assets/images/helius_2.png": "6e156ba2008455931a06fc0f89d7fdab",
"assets/assets/images/helius_logo.png": "17414e4edf851b2d4dc930823ac6fcfe",
"assets/assets/images/icons8-plus-64.png": "f8d7c92943420b67a18241be6591f3f6",
"assets/assets/images/ico_all_techniques.png": "638cdb2724940095ca4e4df8cdde5b85",
"assets/assets/images/ico_avaliacao_media.png": "b7efe25f4c08f0634eed7e6e4f00d4fa",
"assets/assets/images/ico_baixo_custo.png": "00aa4405e02c2e2ca6db693a0f61a514",
"assets/assets/images/ico_best_rated.png": "ab61b92a292605c99d7bbbcab1096ebc",
"assets/assets/images/ico_best_rated_experts.png": "cdc34ceb07bb448d80e21ba595f9b90d",
"assets/assets/images/ico_best_rated_experts_goal.png": "062b64850862e63f1a51a50c389371ae",
"assets/assets/images/ico_best_rated_goal.png": "4bf5d8df85cd2bb9e64f48de9ad75d96",
"assets/assets/images/ico_by_working_space.png": "8866429de099631a959ea07f151a8266",
"assets/assets/images/ico_cost_benefit.png": "7350847e99b24aa5e0546101cfd370e6",
"assets/assets/images/ico_custo_beneficio.png": "f13f5fe8829b9affdc6f13b2c1dae7f5",
"assets/assets/images/ico_low_cost.png": "9917f5e3b90dd58d542d10349f6ce71d",
"assets/assets/images/ico_mais_usadas.png": "e32ba6513a8991598cd5eeaaa8241608",
"assets/assets/images/ico_melhor_avaliadas.png": "d94193511feeec2ef24d8616bd43544a",
"assets/assets/images/ico_melhor_avaliadas_experts.png": "f332459a620821c9d00180ac2a075b98",
"assets/assets/images/ico_melhor_avaliadas_experts_goal.png": "fadc969508cbd8c42668506c6f9e93df",
"assets/assets/images/ico_melhor_avaliadas_objetivo.png": "e723b765bbd167df45b51b4293a75814",
"assets/assets/images/ico_most_used.png": "fc0c77c0fd78f61bad03b39247ed8bf9",
"assets/assets/images/ico_neutral_rates.png": "adce08de6dd68e3f3e051c73fe506b65",
"assets/assets/images/ico_per_all_techniques_similar.png": "9d6c8d2527c183965285f72ca8a0ed2f",
"assets/assets/images/ico_per_all_techniques_similar_goal.png": "adaa361b4ab4981d4a028708c5a36f09",
"assets/assets/images/ico_per_all_techniques_similar_objetivo.png": "4df2297040054c5ed0153d914050a18d",
"assets/assets/images/ico_per_already_used.png": "649f27ec1015b90736a3227b58ea57dd",
"assets/assets/images/ico_per_bem_avaliadas_objetivo.png": "934f33b503f6cc2790b78a212769adce",
"assets/assets/images/ico_per_bem_avaliadas_similar.png": "48be2170d2067794132f7e7c70dc2628",
"assets/assets/images/ico_per_ja_usadas.png": "2f11497f004780609bc1c34b8d841fed",
"assets/assets/images/ico_per_todas_tecnicas_similar.png": "d0e0358f049c4d9073645f4d6cb3c341",
"assets/assets/images/ico_per_usadas_bem_avaliadas.png": "792d35ded90d576dd9db7f1c76aa28e6",
"assets/assets/images/ico_per_used_well_rated.png": "547663d5b93b630ac2b283ca264a2818",
"assets/assets/images/ico_per_well_rated_goal.png": "5a70ea8e33a0ae4345af0537534bdc16",
"assets/assets/images/ico_per_well_rated_similar.png": "750af3e7d968478f1ea377f13a1628f9",
"assets/assets/images/ico_por_espaco_trabalho.png": "5e3b7c5cf593e2b091aaa461259a5ddd",
"assets/assets/images/ico_todas_tecnicas.png": "dbfaa67396118592ddba095755152ff4",
"assets/assets/images/ok.png": "ea9f6a2916ffeea9820a105d3ea6d567",
"assets/assets/images/onboarding0.png": "2df33040c11b48d80e0a8b91716c3f1a",
"assets/assets/images/onboarding1.png": "bbb74d46c7879bd14c809cb917ddb08e",
"assets/assets/images/onboarding2.png": "b2428bfb68d5a758e950c3d8c975739a",
"assets/assets/images/project1-image.jpg": "9db318ab843babbba09e46545782569c",
"assets/assets/images/recommend_button.png": "ae00110592c775b4893a2c3fedb8c2d9",
"assets/assets/images/review_icon.png": "1bcf8122e79eb8553e9b154cdfb10133",
"assets/assets/images/screen_grafo_recomenda.png": "f186c771dec338501119a39d6e23bb0b",
"assets/assets/images/United_States.png": "2822f08635ba028c6928d633a4416951",
"assets/assets/images/voice_presentation.png": "cd5c447f4963813e618cb4b97d2339f7",
"assets/FontManifest.json": "b125848682ac8a4e2ea2a602ccfa5576",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "c42fd091115077a12e781b3353fd72fa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "2b4090d4c4ade7580f29311d87c80824",
"/": "2b4090d4c4ade7580f29311d87c80824",
"main.dart.js": "400d5427ed55a2d1003e980ca8ec9659",
"manifest.json": "4b5df4933d31a559d4d5f22ef45c53b8",
"version.json": "66663c5211306423f9ed23f3d3ca2a6e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
