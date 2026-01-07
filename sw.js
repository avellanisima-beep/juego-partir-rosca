self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("rosca-v1").then(cache => {
            return cache.addAll([
                "./",
                "./rosca_virtual_configurable.html",
                "./game.js",
                "./sound.js",
                "./ui-editor.js",
                "./rosca_pixel.png",
                "./slice_pixel.png",
                "./cursor.png"
            ]);
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(resp => resp || fetch(e.request))
    );
});
