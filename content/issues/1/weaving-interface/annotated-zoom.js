/// todos
// - disable scroll when positioning contextual note
// - position contextual note better vertically
// - disable back link in notes? (doesn't work now / not sure how to make work)
// - fix or remove broken images
// - link to books on derrida's margins site?


window.addEventListener('DOMContentLoaded', (event) => {

    // load annotation overlays and then use to initialize viewer
    fetch('annotations.json')
      .then(response => response.json())
      .then(data => initAnnotatedZoom(data));

    function initAnnotatedZoom(data) {
        // create elements with page numbers to be positioned as overlays
        var frag = document.createDocumentFragment();
        data.overlays.filter(el => el.className == 'page_n')
            .forEach(el => {
                const pageSpan = document.createElement('span');
                pageSpan.innerText = el.content;
                pageSpan.setAttribute('id', el.id);
                frag.appendChild(pageSpan);
            });
        // create containers for note references to use as overlays
        // then move note references inside them
        data.overlays.filter(el => el.className.includes('highlight'))
            .forEach(el => {
                const refZone = document.createElement('div');
                refZone.setAttribute('id', el.id);
                refZone.appendChild(document.getElementById('fn' + el.id));
                frag.appendChild(refZone);
            });

        document.getElementById('overlays').appendChild(frag);

        var zoomLevel = 2;

        var viewer = OpenSeadragon({
            id:"dataweaving-zoom",
            prefixUrl:"https://cdn.jsdelivr.net/npm/openseadragon@2.4/build/openseadragon/images/",
            preserveViewport: true,
            visibilityRatio: 1,
            defaultZoomLevel: zoomLevel,
            // disallow zoom in/out — disable zooming by click or scroll
            zoomPerClick: 1.0,
            zoomPerScroll: 1.0,
            // disable vertical panning
            panVertical: false,
            showNavigationControl: false,
            // show nav overview in top left
            showNavigator:  true,
            navigatorPosition:   "TOP_LEFT",
            tileSources:"https:\/\/iiif.princeton.edu\/loris\/iiif\/2\/figgy_prod%2F58%2F51%2Fd4%2F5851d48b225b42699a13181c778a6095%2Fintermediate_file.jp2\/info.json",
            overlays: data.overlays,
            immediateRender: true,
            viewportMargins: {
                top: 25,
                bottom: 25
            }
        });



        function showReference() {
            // trigger contextual note via hash
            location.hash = '#' + this.getAttribute('id').replace('ref', 'fn');
        }

        function adjustZoom() {
            // show the full height of the weaving image,
            // with space for page number above and references below
            // fit the image vertically, then zoom in slightly
            viewer.viewport.fitVertically(true);
            viewer.viewport.zoomBy(1.25);
        }

        viewer.addHandler("open", function () {
            // adjust initial zoom
            adjustZoom();
            // start with left part of the weaving showing
            viewer.viewport.panTo(new OpenSeadragon.Point(0.17, 0.09), true)

            // on touch or click for reference zone, trigger contextual note
            const referenceOverlays = document.querySelectorAll(".highlight");
            for (const refOverlay of referenceOverlays) {
                refOverlay.addEventListener('touchstart', showReference)
               refOverlay.addEventListener('click', showReference)
            }
        });

        // close any open contextual notes when panning through the image
        viewer.addHandler("pan", function () {
            ContextualNotes.closeNote();
        });

        // adjust zoom fit when the window is resized
        window.addEventListener('resize', function() {
            adjustZoom()
        });

    }

});
