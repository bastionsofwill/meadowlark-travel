const Browser = require('zombie');
const assert = require('chai').assert;

let browser;

suite('Cross-Page tests', () => {
    setup(() => {
        browser = new Browser();
    });

    test('requesting a group rate from the hood river tour page should ' + 'populate the referrer field', (done) => {
        const referrer = 'http://localhost:3000/tours/hood-river';
        browser.visit(referrer, () => {
            browser.clickLink('.requestGroupRate', () => {
                assert(browser.field('referrer').value === referrer);
                done();
            });
        });
    });
    test('requesting a group rate from the oregon coast tour page should ' + 'populate the referrer field', (done) => {
        const referrer = 'http://localhost:3000/tours/oregon-coast';
        browser.visit(referrer, () => {
            browser.clickLink('.requestGroupRate', () => {
                assert(browser.field('referrer').value === referrer);
                done();
            });
        });
    });
    test('visiting the "request group rate" page directly should ' + 'result in an empty referrer field', (done) => {
        browser.visit('http://localhost:3000/tours/request-group-rate', () => {
            assert(browser.field('[name=referrer]').value);
            done();
        });
    });
});