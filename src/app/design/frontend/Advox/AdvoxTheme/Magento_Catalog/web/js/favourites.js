define([
    'jquery',
], function ($) {
    'use strict';

    function markFavourites() {
        const favourites = JSON.parse(localStorage.getItem('favourites')) || [];

        $('.mark-favourite-btn').each(function() {
            const button = $(this);
            const itemId = button.data('product-id');
            const isInFavourites = favourites.some( item => item.id === itemId);

            if(isInFavourites) {
                button.text('Already in Favourites').addClass('active');
            }
        });
    }

    markFavourites();
});
