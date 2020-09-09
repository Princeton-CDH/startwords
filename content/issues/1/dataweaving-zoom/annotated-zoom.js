window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    var viewer = OpenSeadragon({
        id:"openseadragon-2",
        prefixUrl:"https://cdn.jsdelivr.net/npm/openseadragon@2.4/build/openseadragon/images/",
        preserveViewport: true,
        visibilityRatio: 1,
        // disallow zoom in/out
        minZoomLevel: 5,
        maxZoomLevel: 5,
        defaultZoomLevel: 5,
        // disable vertical panning
        panVertical: false,
        showNavigationControl: false,
        tileSources:"https:\/\/iiif.princeton.edu\/loris\/iiif\/2\/figgy_prod%2F58%2F51%2Fd4%2F5851d48b225b42699a13181c778a6095%2Fintermediate_file.jp2\/info.json",
        overlays: [
        {
            // page1 label
            id: 'p1',
            px: 2600,
            py: 650,
            width: 50,
            height: 50,
            className: 'pnum'
        },

        {
            id: 'p2',
            px: 3793,
            py: 650,
            width: 50,
            height: 50,
            className: 'pnum'
        },
        {
            id: 'p3',
            px: 4840,
            py: 650,
            width: 50,
            height: 50,
            className: 'pnum'
        },
        {
            id: 'p4',
            px: 5862,
            py: 650,
            width: 50,
            height: 50,
            className: 'pnum'
        },
        {
            id: 'p5',
            px: 6210,
            py: 650,
            width: 50,
            height: 50,
            className: 'pnum'
        },
        {
            id: 'p6',
            px: 6570,
            py: 650,
            width: 50,
            height: 50,
            className: 'pnum'
        },

        {
            // epigram p15
            id: 'fnref:1', // ref15a',
            px: 2560,
            py: 848,
            width: 352,
            height: 1776,
            className: 'highlight'
        },
        {
            // footnote 1 p16
            id: 'ref16a',
            px: 4359,
            py: 810,
            width: 141,
            height: 1794,
            className: 'highlight'
        },
        {
            // footnote 2 p16
            id: 'ref16b',
            px: 4500,
            py: 810,
            width: 141,
            height: 1794,
            className: 'highlight'
        },
        {
            // footnote 3 p16
            id: 'ref16c',
            px: 4642,
            py: 810,
            width: 141,
            height: 1794,
            className: 'highlight'
        },
    ],
    });

    viewer.addHandler("open", function () {
        // start with left part of the weaving showing
        viewer.viewport.panTo(new OpenSeadragon.Point(0.17, 0.09), true)

        // equivalent event for touch?
        const referenceOverlays = document.querySelectorAll(".highlight");

        function showReference() {
            console.log(this.getAttribute('id'));
            location.hash = '#' + this.getAttribute('id').replace('ref', '');
        }

/*        function hidereference() {
            const ref = document.querySelector('.reference');
            ref.innerHTML = '';
            ref.classList.remove('show');
        }*/

        for (const refOverlay of referenceOverlays) {
            refOverlay.addEventListener('touchstart', showReference)
            // refOverlay.addEventListener('touchcancel', hidereference);

           refOverlay.addEventListener('click', showReference)
  //          refOverlay.addEventListener('mouseout', hidereference);

        }

    });

});
