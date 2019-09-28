import { ListItem } from 'react-native-elements'
import React from 'react';
import axios from 'axios';
import {View} from 'react-native';

class ItemsList extends React.Component {
    
    state = {
        items:[]
    }

    navigateToDetails(){

    }

 componentDidMount() {
    console.log("mounted");

    var token ="Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZG9uYXRlc3BvdC5kaXBsb21hZHMuY29tIiwiaWF0IjoxNTY5NTcyMzgxLCJuYmYiOjE1Njk1NzIzODEsImV4cCI6MTU3MDE3NzE4MSwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.A40qsm_ltb4UpQVAUJUaOCSChrdZTcr0Ffuz2tFPYFw";
    var config = {headers: {'Authorization': token,'content-type':'application/json; charset=UTF-8' }};
  
    axios.get('https://donatespot.diplomads.com/wp-json/wc/v3/products/',config)
    .then(response => {
       var data = [
        {
            "id": 43,
            "name": "TEST 5 PRODUCT",
            "slug": "test-5-product",
            "permalink": "https://donatespot.diplomads.com/product/test-5-product/",
            "date_created": "2019-09-28T06:10:45",
            "date_created_gmt": "2019-09-28T06:10:45",
            "date_modified": "2019-09-28T11:14:42",
            "date_modified_gmt": "2019-09-28T11:14:42",
            "type": "simple",
            "status": "publish",
            "featured": false,
            "catalog_visibility": "visible",
            "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
            "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>\n",
            "sku": "",
            "price": "20",
            "regular_price": "20",
            "sale_price": "",
            "date_on_sale_from": null,
            "date_on_sale_from_gmt": null,
            "date_on_sale_to": null,
            "date_on_sale_to_gmt": null,
            "price_html": "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>20.00</span>",
            "on_sale": false,
            "purchasable": true,
            "total_sales": 0,
            "virtual": false,
            "downloadable": false,
            "downloads": [],
            "download_limit": -1,
            "download_expiry": -1,
            "external_url": "",
            "button_text": "",
            "tax_status": "taxable",
            "tax_class": "",
            "manage_stock": false,
            "stock_quantity": null,
            "stock_status": "instock",
            "backorders": "no",
            "backorders_allowed": false,
            "backordered": false,
            "sold_individually": false,
            "weight": "",
            "dimensions": {
                "length": "",
                "width": "",
                "height": ""
            },
            "shipping_required": true,
            "shipping_taxable": true,
            "shipping_class": "",
            "shipping_class_id": 0,
            "reviews_allowed": true,
            "average_rating": "0.00",
            "rating_count": 0,
            "related_ids": [
                37,
                39,
                41,
                21
            ],
            "upsell_ids": [],
            "cross_sell_ids": [],
            "parent_id": 0,
            "purchase_note": "",
            "categories": [
                {
                    "id": 45,
                    "name": "Melbourne CBD",
                    "slug": "melborune-cbd"
                }
            ],
            "tags": [],
            "images": [
                {
                    "id": 44,
                    "date_created": "2019-09-28T06:10:46",
                    "date_created_gmt": "2019-09-28T06:10:46",
                    "date_modified": "2019-09-28T06:10:46",
                    "date_modified_gmt": "2019-09-28T06:10:46",
                    "src": "https://donatespot.diplomads.com/wp-content/uploads/2019/09/T_2_front-3.jpg",
                    "name": "T_2_front-3.jpg",
                    "alt": ""
                }
            ],
            "attributes": [],
            "default_attributes": [],
            "variations": [],
            "grouped_products": [],
            "menu_order": 0,
            "meta_data": [
                {
                    "id": 157,
                    "key": "_wcfm_product_author",
                    "value": "0"
                },
                {
                    "id": 178,
                    "key": "_catalog",
                    "value": "no"
                },
                {
                    "id": 179,
                    "key": "disable_add_to_cart",
                    "value": "no"
                },
                {
                    "id": 180,
                    "key": "disable_price",
                    "value": "no"
                },
                {
                    "id": 181,
                    "key": "wcfm_policy_product_options",
                    "value": [
                        ""
                    ]
                }
            ],
            "_links": {
                "self": [
                    {
                        "href": "https://donatespot.diplomads.com/wp-json/wc/v3/products/43"
                    }
                ],
                "collection": [
                    {
                        "href": "https://donatespot.diplomads.com/wp-json/wc/v3/products"
                    }
                ]
            }
        },
        {
            "id": 41,
            "name": "TEST 4 PRODUCT",
            "slug": "test-4-product",
            "permalink": "https://donatespot.diplomads.com/product/test-4-product/",
            "date_created": "2019-09-28T06:09:05",
            "date_created_gmt": "2019-09-28T06:09:05",
            "date_modified": "2019-09-28T11:14:42",
            "date_modified_gmt": "2019-09-28T11:14:42",
            "type": "simple",
            "status": "publish",
            "featured": false,
            "catalog_visibility": "visible",
            "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
            "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>\n",
            "sku": "",
            "price": "20",
            "regular_price": "20",
            "sale_price": "",
            "date_on_sale_from": null,
            "date_on_sale_from_gmt": null,
            "date_on_sale_to": null,
            "date_on_sale_to_gmt": null,
            "price_html": "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>20.00</span>",
            "on_sale": false,
            "purchasable": true,
            "total_sales": 0,
            "virtual": false,
            "downloadable": false,
            "downloads": [],
            "download_limit": -1,
            "download_expiry": -1,
            "external_url": "",
            "button_text": "",
            "tax_status": "taxable",
            "tax_class": "",
            "manage_stock": false,
            "stock_quantity": null,
            "stock_status": "instock",
            "backorders": "no",
            "backorders_allowed": false,
            "backordered": false,
            "sold_individually": false,
            "weight": "",
            "dimensions": {
                "length": "",
                "width": "",
                "height": ""
            },
            "shipping_required": true,
            "shipping_taxable": true,
            "shipping_class": "",
            "shipping_class_id": 0,
            "reviews_allowed": true,
            "average_rating": "0.00",
            "rating_count": 0,
            "related_ids": [
                39,
                43,
                37,
                21
            ],
            "upsell_ids": [],
            "cross_sell_ids": [],
            "parent_id": 0,
            "purchase_note": "",
            "categories": [
                {
                    "id": 45,
                    "name": "Melbourne CBD",
                    "slug": "melborune-cbd"
                },
                {
                    "id": 15,
                    "name": "Uncategorized",
                    "slug": "uncategorized"
                }
            ],
            "tags": [],
            "images": [
                {
                    "id": 42,
                    "date_created": "2019-09-28T06:09:05",
                    "date_created_gmt": "2019-09-28T06:09:05",
                    "date_modified": "2019-09-28T06:09:06",
                    "date_modified_gmt": "2019-09-28T06:09:06",
                    "src": "https://donatespot.diplomads.com/wp-content/uploads/2019/09/T_2_front-2.jpg",
                    "name": "T_2_front-2.jpg",
                    "alt": ""
                }
            ],
            "attributes": [],
            "default_attributes": [],
            "variations": [],
            "grouped_products": [],
            "menu_order": 0,
            "meta_data": [
                {
                    "id": 132,
                    "key": "_wcfm_product_author",
                    "value": "0"
                },
                {
                    "id": 153,
                    "key": "_catalog",
                    "value": "no"
                },
                {
                    "id": 154,
                    "key": "disable_add_to_cart",
                    "value": "no"
                },
                {
                    "id": 155,
                    "key": "disable_price",
                    "value": "no"
                },
                {
                    "id": 156,
                    "key": "wcfm_policy_product_options",
                    "value": [
                        ""
                    ]
                },
                {
                    "id": 184,
                    "key": "_wcfmmp_commission",
                    "value": {
                        "commission_mode": "global",
                        "commission_percent": "90",
                        "commission_fixed": "",
                        "tax_name": "",
                        "tax_percent": ""
                    }
                }
            ],
            "_links": {
                "self": [
                    {
                        "href": "https://donatespot.diplomads.com/wp-json/wc/v3/products/41"
                    }
                ],
                "collection": [
                    {
                        "href": "https://donatespot.diplomads.com/wp-json/wc/v3/products"
                    }
                ]
            }
        },
        {
            "id": 39,
            "name": "TEST 3 PRODUCT",
            "slug": "test-3-product",
            "permalink": "https://donatespot.diplomads.com/product/test-3-product/",
            "date_created": "2019-09-28T06:07:43",
            "date_created_gmt": "2019-09-28T06:07:43",
            "date_modified": "2019-09-28T11:14:43",
            "date_modified_gmt": "2019-09-28T11:14:43",
            "type": "simple",
            "status": "publish",
            "featured": false,
            "catalog_visibility": "visible",
            "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
            "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>\n",
            "sku": "",
            "price": "20",
            "regular_price": "20",
            "sale_price": "",
            "date_on_sale_from": null,
            "date_on_sale_from_gmt": null,
            "date_on_sale_to": null,
            "date_on_sale_to_gmt": null,
            "price_html": "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>20.00</span>",
            "on_sale": false,
            "purchasable": true,
            "total_sales": 0,
            "virtual": false,
            "downloadable": false,
            "downloads": [],
            "download_limit": -1,
            "download_expiry": -1,
            "external_url": "",
            "button_text": "",
            "tax_status": "taxable",
            "tax_class": "",
            "manage_stock": false,
            "stock_quantity": null,
            "stock_status": "instock",
            "backorders": "no",
            "backorders_allowed": false,
            "backordered": false,
            "sold_individually": false,
            "weight": "",
            "dimensions": {
                "length": "",
                "width": "",
                "height": ""
            },
            "shipping_required": true,
            "shipping_taxable": true,
            "shipping_class": "",
            "shipping_class_id": 0,
            "reviews_allowed": true,
            "average_rating": "0.00",
            "rating_count": 0,
            "related_ids": [
                43,
                37,
                41,
                21
            ],
            "upsell_ids": [],
            "cross_sell_ids": [],
            "parent_id": 0,
            "purchase_note": "",
            "categories": [
                {
                    "id": 45,
                    "name": "Melbourne CBD",
                    "slug": "melborune-cbd"
                }
            ],
            "tags": [],
            "images": [
                {
                    "id": 40,
                    "date_created": "2019-09-28T06:07:43",
                    "date_created_gmt": "2019-09-28T06:07:43",
                    "date_modified": "2019-09-28T06:07:43",
                    "date_modified_gmt": "2019-09-28T06:07:43",
                    "src": "https://donatespot.diplomads.com/wp-content/uploads/2019/09/T_2_front-1.jpg",
                    "name": "T_2_front-1.jpg",
                    "alt": ""
                }
            ],
            "attributes": [],
            "default_attributes": [],
            "variations": [],
            "grouped_products": [],
            "menu_order": 0,
            "meta_data": [
                {
                    "id": 107,
                    "key": "_wcfm_product_author",
                    "value": "0"
                },
                {
                    "id": 128,
                    "key": "_catalog",
                    "value": "no"
                },
                {
                    "id": 129,
                    "key": "disable_add_to_cart",
                    "value": "no"
                },
                {
                    "id": 130,
                    "key": "disable_price",
                    "value": "no"
                },
                {
                    "id": 131,
                    "key": "wcfm_policy_product_options",
                    "value": [
                        ""
                    ]
                }
            ],
            "_links": {
                "self": [
                    {
                        "href": "https://donatespot.diplomads.com/wp-json/wc/v3/products/39"
                    }
                ],
                "collection": [
                    {
                        "href": "https://donatespot.diplomads.com/wp-json/wc/v3/products"
                    }
                ]
            }
        },
        {
            "id": 37,
            "name": "TEST 2 PRODUCT",
            "slug": "test-2-product",
            "permalink": "https://donatespot.diplomads.com/product/test-2-product/",
            "date_created": "2019-09-28T06:02:02",
            "date_created_gmt": "2019-09-28T06:02:02",
            "date_modified": "2019-09-28T11:12:19",
            "date_modified_gmt": "2019-09-28T11:12:19",
            "type": "simple",
            "status": "publish",
            "featured": false,
            "catalog_visibility": "visible",
            "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
            "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>\n",
            "sku": "",
            "price": "20",
            "regular_price": "20",
            "sale_price": "",
            "date_on_sale_from": null,
            "date_on_sale_from_gmt": null,
            "date_on_sale_to": null,
            "date_on_sale_to_gmt": null,
            "price_html": "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>20.00</span>",
            "on_sale": false,
            "purchasable": true,
            "total_sales": 0,
            "virtual": false,
            "downloadable": false,
            "downloads": [],
            "download_limit": -1,
            "download_expiry": -1,
            "external_url": "",
            "button_text": "",
            "tax_status": "taxable",
            "tax_class": "",
            "manage_stock": false,
            "stock_quantity": null,
            "stock_status": "instock",
            "backorders": "no",
            "backorders_allowed": false,
            "backordered": false,
            "sold_individually": false,
            "weight": "",
            "dimensions": {
                "length": "",
                "width": "",
                "height": ""
            },
            "shipping_required": true,
            "shipping_taxable": true,
            "shipping_class": "",
            "shipping_class_id": 0,
            "reviews_allowed": true,
            "average_rating": "0.00",
            "rating_count": 0,
            "related_ids": [
                41,
                39,
                43,
                21
            ],
            "upsell_ids": [],
            "cross_sell_ids": [],
            "parent_id": 0,
            "purchase_note": "",
            "categories": [
                {
                    "id": 45,
                    "name": "Melbourne CBD",
                    "slug": "melborune-cbd"
                }
            ],
            "tags": [],
            "images": [
                {
                    "id": 38,
                    "date_created": "2019-09-28T06:02:02",
                    "date_created_gmt": "2019-09-28T06:02:02",
                    "date_modified": "2019-09-28T06:02:03",
                    "date_modified_gmt": "2019-09-28T06:02:03",
                    "src": "https://donatespot.diplomads.com/wp-content/uploads/2019/09/T_2_front.jpg",
                    "name": "T_2_front.jpg",
                    "alt": ""
                }
            ],
            "attributes": [],
            "default_attributes": [],
            "variations": [],
            "grouped_products": [],
            "menu_order": 0,
            "meta_data": [
                {
                    "id": 81,
                    "key": "_wcfm_product_author",
                    "value": "0"
                },
                {
                    "id": 102,
                    "key": "_catalog",
                    "value": "no"
                },
                {
                    "id": 103,
                    "key": "disable_add_to_cart",
                    "value": "no"
                },
                {
                    "id": 104,
                    "key": "disable_price",
                    "value": "no"
                },
                {
                    "id": 105,
                    "key": "wcfm_policy_product_options",
                    "value": [
                        ""
                    ]
                },
                {
                    "id": 106,
                    "key": "_wcfm_product_views",
                    "value": "1"
                },
                {
                    "id": 210,
                    "key": "_wcfmmp_commission",
                    "value": {
                        "commission_mode": "global",
                        "commission_percent": "90",
                        "commission_fixed": "",
                        "tax_name": "",
                        "tax_percent": ""
                    }
                }
            ],
            "_links": {
                "self": [
                    {
                        "href": "https://donatespot.diplomads.com/wp-json/wc/v3/products/37"
                    }
                ],
                "collection": [
                    {
                        "href": "https://donatespot.diplomads.com/wp-json/wc/v3/products"
                    }
                ]
            }
        },
        {
            "id": 21,
            "name": "Test",
            "slug": "test",
            "permalink": "https://donatespot.diplomads.com/product/test/",
            "date_created": "2019-09-27T08:30:00",
            "date_created_gmt": "2019-09-27T08:30:00",
            "date_modified": "2019-09-28T11:14:43",
            "date_modified_gmt": "2019-09-28T11:14:43",
            "type": "simple",
            "status": "publish",
            "featured": false,
            "catalog_visibility": "visible",
            "description": "",
            "short_description": "",
            "sku": "",
            "price": "120",
            "regular_price": "120",
            "sale_price": "",
            "date_on_sale_from": null,
            "date_on_sale_from_gmt": null,
            "date_on_sale_to": null,
            "date_on_sale_to_gmt": null,
            "price_html": "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>120.00</span>",
            "on_sale": false,
            "purchasable": true,
            "total_sales": 0,
            "virtual": false,
            "downloadable": false,
            "downloads": [],
            "download_limit": -1,
            "download_expiry": -1,
            "external_url": "",
            "button_text": "",
            "tax_status": "taxable",
            "tax_class": "",
            "manage_stock": false,
            "stock_quantity": null,
            "stock_status": "instock",
            "backorders": "no",
            "backorders_allowed": false,
            "backordered": false,
            "sold_individually": false,
            "weight": "",
            "dimensions": {
                "length": "",
                "width": "",
                "height": ""
            },
            "shipping_required": true,
            "shipping_taxable": true,
            "shipping_class": "",
            "shipping_class_id": 0,
            "reviews_allowed": true,
            "average_rating": "0.00",
            "rating_count": 0,
            "related_ids": [
                41,
                39,
                37,
                43
            ],
            "upsell_ids": [],
            "cross_sell_ids": [],
            "parent_id": 0,
            "purchase_note": "",
            "categories": [
                {
                    "id": 45,
                    "name": "Melbourne CBD",
                    "slug": "melborune-cbd"
                },
                {
                    "id": 15,
                    "name": "Uncategorized",
                    "slug": "uncategorized"
                }
            ],
            "tags": [],
            "images": [
                {
                    "id": 55,
                    "date_created": "2019-09-28T11:02:41",
                    "date_created_gmt": "2019-09-28T11:02:41",
                    "date_modified": "2019-09-28T11:02:41",
                    "date_modified_gmt": "2019-09-28T11:02:41",
                    "src": "https://donatespot.diplomads.com/wp-content/uploads/2019/09/lorenzo-spoleti-oOUG44qznIk.jpg",
                    "name": "lorenzo-spoleti-oOUG44qznIk",
                    "alt": ""
                }
            ],
            "attributes": [],
            "default_attributes": [],
            "variations": [],
            "grouped_products": [],
            "menu_order": 0,
            "meta_data": [
                {
                    "id": 32,
                    "key": "_wcfmmp_commission",
                    "value": {
                        "commission_mode": "global",
                        "commission_percent": "90",
                        "commission_fixed": "",
                        "tax_name": "",
                        "tax_percent": ""
                    }
                }
            ],
            "_links": {
                "self": [
                    {
                        "href": "https://donatespot.diplomads.com/wp-json/wc/v3/products/21"
                    }
                ],
                "collection": [
                    {
                        "href": "https://donatespot.diplomads.com/wp-json/wc/v3/products"
                    }
                ]
            }
        }
    ]
        //console.log(data);
        this.setState(
            {
            items:data
            }
        );
    });

    }

render() {     
    return (
    <View>
         {
    this.state.items.map((l, i) => (
      <ListItem
        key={i}
        leftAvatar={{ source: { uri: l.images[0].src } }}
        title={l.name}
        subtitle={l.categories[0].name}
        bottomDivider
        onPress={() => this.props.navigation.navigate('Details',{
            product:l
        })}
      />
    ))
    }
    </View>
 )
};
}

export default ItemsList;