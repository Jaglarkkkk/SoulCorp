(function () {
    var heartOverlay = document.getElementById('easter-heart');
    var smileOverlay = document.getElementById('easter-smile');

    if (!heartOverlay || !smileOverlay) {
        return;
    }

    function attachCounter(elements, threshold, onTrigger) {
        if (!elements.length) return;
        var count = 0;
        elements.forEach(function (el) {
            el.style.cursor = 'pointer';
            el.addEventListener('click', function () {
                count++;
                if (count % threshold === 0) {
                    onTrigger();
                }
            });
        });
    }

    function showHeart() {
        heartOverlay.classList.add('is-visible');
        setTimeout(function () {
            heartOverlay.classList.remove('is-visible');
        }, 600);
    }

    function showSmile() {
        smileOverlay.classList.add('is-visible');
        setTimeout(function () {
            smileOverlay.classList.remove('is-visible');
        }, 160);
    }

    var venusTargets = [];
    var pursuerTargets = [];
    var averyTargets = [];

    document.querySelectorAll('.wiki-label').forEach(function (label) {
        var text = label.textContent || '';
        if (text.indexOf('Venus') !== -1) {
            venusTargets.push(label);
        }
        if (text.indexOf('Pursuer') !== -1) {
            pursuerTargets.push(label);
        }
        if (text.indexOf('Avery') !== -1) {
            averyTargets.push(label);
        }
    });

    document.querySelectorAll('h3').forEach(function (heading) {
        var text = (heading.textContent || '').trim();
        if (text === 'Venus') {
            venusTargets.push(heading);
        }
        if (text === 'Pursuer') {
            pursuerTargets.push(heading);
        }
    });

    document.querySelectorAll('.relation strong').forEach(function (strongEl) {
        var text = (strongEl.textContent || '').trim();
        if (text === 'Venus') {
            venusTargets.push(strongEl);
        }
        if (text === 'Pursuer') {
            pursuerTargets.push(strongEl);
        }
    });

    attachCounter(venusTargets, 5, showHeart);
    attachCounter(pursuerTargets, 5, showHeart);
    attachCounter(averyTargets, 20, showSmile);
})();
