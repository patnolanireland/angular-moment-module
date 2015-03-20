/*global describe, it, beforeEach, module, inject, expect */
(function () {
    'use strict';

    describe('angular-moment-module', function () {

        var moment;

        beforeEach(function() {
            module('angular-moment-module');

            inject(function($injector) {
                moment = $injector.get('moment');
            });

        });

        it('should return a reference to the moment object', function() {
            expect(moment).to.exist;
        });
    });
})();
