suite('"About" Page Tests', () => {
    test('page should conatin link to contact page', () => {
        assert($('a[href="/contact"]').length);
    });
});