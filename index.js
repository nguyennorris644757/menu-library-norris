// menuLibrary.js
const _ = require('lodash');

// data example
const menuData = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Products',
        link: '/products',
        children: [
            {
                name: 'Laptops',
                link: '/products/laptops'
            },
            {
                name: 'Smartphones',
                link: '/products/smartphones',
                children: [
                    {
                        name: 'iPhone',
                        link: '/products/smartphones/iphone'
                    },
                    {
                        name: 'Samsung',
                        link: '/products/smartphones/samsung'
                    }
                ]
            },
            {
                name: 'Accessories',
                link: '/products/accessories'
            }
        ]
    },
    {
        name: 'About',
        link: '/about'
    },
    {
        name: 'Contact',
        link: '/contact'
    }
];

//Recursive function to create HTML menu from menu data
function generateMenuHTML(menuItems) {
    let menuHTML = '<ul>';
    _.forEach(menuItems, item => {
        menuHTML += '<li>';
        menuHTML += `<a href="${item.link}">${item.name}</a>`;
        if (item.children) {
            menuHTML += generateMenuHTML(item.children);
        }
        menuHTML += '</li>';
    });
    menuHTML += '</ul>';
    return menuHTML;
}

//Export function for use
module.exports = {
    generateMenuHTML: function () {
        return generateMenuHTML(menuData);
    }
};