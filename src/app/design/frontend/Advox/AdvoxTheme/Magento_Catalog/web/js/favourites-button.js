define([
    'jquery',
], function ($) {
    'use strict';

    $('.mark-favourite-btn').on('click', function() {
        const button = $(this);
        const itemId = button.data('product-id');

        const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
        const isInFavourites = favourites.some( item => item.id === itemId);

        if (!isInFavourites) {
            updateButton(button, true);
            favourites.push({ id: itemId});
            localStorage.setItem('favourites', JSON.stringify(favourites));
        } else {
            updateButton(button, false);
            const newFavourites = favourites.filter(item => item.id !== itemId);
            localStorage.setItem('favourites', JSON.stringify(newFavourites));
        }
    });

    function updateButton(button, isFavourite) {
        if(isFavourite) {
            button.text('Already in Favourites').addClass('active');
        } else {
            button.text('Mark as Favourite').removeClass('active');
        }
    }
});
