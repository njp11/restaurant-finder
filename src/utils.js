import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers/index';
import { middleware } from './store';

export const mockData = {
  results_found: 17362,
  results_start: 0,
  results_shown: 20,
  restaurants: [
    {
      restaurant: {
        R: {
          res_id: 8904385,
          is_grocery_store: false,
          has_menu_status: {
            delivery: -1,
            takeaway: -1,
          },
        },
        apikey: '83cf762fa28744d19097f1338243c7b7',
        id: '8904385',
        name: 'Pai',
        url:
          'https://www.zomato.com/toronto/pai-entertainment-district?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        location: {
          address: '18 Duncan Street, Toronto',
          locality: 'Duncan Street, Entertainment District',
          city: 'Toronto',
          city_id: 89,
          latitude: '43.6479194444',
          longitude: '-79.3887777778',
          zipcode: '',
          country_id: 37,
          locality_verbose: 'Duncan Street, Entertainment District, Toronto',
        },
        switch_to_order_menu: 0,
        cuisines: 'Thai, Asian',
        timings:
          '11:30 AM to 10 PM (Mon-Thu),11:30 AM to 10:30 PM (Fri-Sat),5 PM to 10 PM (Sun)',
        average_cost_for_two: 50,
        price_range: 2,
        currency: '$',
        highlights: [
          'Credit Card',
          'Delivery',
          'Lunch',
          'Serves Alcohol',
          'Debit Card',
          'Takeaway Available',
          'Dinner',
          'Patio Seating',
          'Wifi',
        ],
        offers: [],
        opentable_support: 0,
        is_zomato_book_res: 0,
        mezzo_provider: 'OTHER',
        is_book_form_web_view: 0,
        book_form_web_view_url: '',
        book_again_url: '',
        thumb:
          'https://b.zmtcdn.com/data/res_imagery/8904385_RESTAURANT_94710bb6ad0f95c3ef9a6af799c5f448_c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        user_rating: {
          aggregate_rating: '4.9',
          rating_text: 'Excellent',
          rating_color: '3F7E00',
          rating_obj: {
            title: {
              text: '4.9',
            },
            bg_color: {
              type: 'lime',
              tint: '800',
            },
          },
          votes: 615,
        },
        all_reviews_count: 268,
        photos_url:
          'https://www.zomato.com/toronto/pai-entertainment-district/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop',
        photo_count: 735,
        menu_url:
          'https://www.zomato.com/toronto/pai-entertainment-district/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop',
        featured_image:
          'https://b.zmtcdn.com/data/res_imagery/8904385_RESTAURANT_94710bb6ad0f95c3ef9a6af799c5f448_c.jpg',
        medio_provider: false,
        has_online_delivery: 0,
        is_delivering_now: 0,
        store_type: '',
        include_bogo_offers: true,
        deeplink: 'zomato://restaurant/8904385',
        is_table_reservation_supported: 0,
        has_table_booking: 0,
        events_url:
          'https://www.zomato.com/toronto/pai-entertainment-district/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        phone_numbers: '+1 (416) 901-4724',
        all_reviews: {
          reviews: [
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
          ],
        },
        establishment: ['Casual Dining'],
        establishment_types: [],
      },
    },
    {
      restaurant: {
        R: {
          res_id: 8910403,
          is_grocery_store: false,
          has_menu_status: {
            delivery: -1,
            takeaway: -1,
          },
        },
        apikey: '83cf762fa28744d19097f1338243c7b7',
        id: '8910403',
        name: 'KINKA IZAKAYA',
        url:
          'https://www.zomato.com/toronto/kinka-izakaya-church-and-wellesley?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        location: {
          address: '398 Church Street, Toronto M5B 2A2 2A2',
          locality: 'Church Street, Church And Wellesley',
          city: 'Toronto',
          city_id: 89,
          latitude: '43.6605260000',
          longitude: '-79.3789290000',
          zipcode: 'M5B 2A2 2A2',
          country_id: 37,
          locality_verbose: 'Church Street, Church And Wellesley, Toronto',
        },
        switch_to_order_menu: 0,
        cuisines: 'Japanese, Asian',
        timings:
          '11:30 AM to 2 PM, 5 PM to 11:30 PM (Mon-Thu), 11:30 AM to 2 PM, 5 PM to 11:30 PM, 12 Midnight to 1 AM (Fri), 11:30 AM to 2 PM, 4:30 PM to 11:30 PM, 12 Midnight to 1 AM (Sat), 11:30 AM to 2 PM, 4:30 PM to 11:30 PM (Sun)',
        average_cost_for_two: 55,
        price_range: 2,
        currency: '$',
        highlights: [
          'Credit Card',
          'Takeaway Available',
          'Lunch',
          'Serves Alcohol',
          'Debit Card',
          'Dinner',
          'Indoor Seating',
          'Fullbar',
        ],
        offers: [],
        opentable_support: 0,
        is_zomato_book_res: 0,
        mezzo_provider: 'OTHER',
        is_book_form_web_view: 0,
        book_form_web_view_url: '',
        book_again_url: '',
        thumb:
          'https://b.zmtcdn.com/data/res_imagery/8910403_CHAIN_698832ec8254d154281ae6a1c77e612e.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        user_rating: {
          aggregate_rating: '4.6',
          rating_text: 'Excellent',
          rating_color: '3F7E00',
          rating_obj: {
            title: {
              text: '4.6',
            },
            bg_color: {
              type: 'lime',
              tint: '800',
            },
          },
          votes: 1165,
        },
        all_reviews_count: 259,
        photos_url:
          'https://www.zomato.com/toronto/kinka-izakaya-church-and-wellesley/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop',
        photo_count: 395,
        menu_url:
          'https://www.zomato.com/toronto/kinka-izakaya-church-and-wellesley/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop',
        featured_image:
          'https://b.zmtcdn.com/data/res_imagery/8910403_CHAIN_698832ec8254d154281ae6a1c77e612e.jpg',
        medio_provider: false,
        has_online_delivery: 0,
        is_delivering_now: 0,
        store_type: '',
        include_bogo_offers: true,
        deeplink: 'zomato://restaurant/8910403',
        is_table_reservation_supported: 0,
        has_table_booking: 0,
        events_url:
          'https://www.zomato.com/toronto/kinka-izakaya-church-and-wellesley/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        phone_numbers: '+1 (416) 977-0999',
        all_reviews: {
          reviews: [
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
          ],
        },
        establishment: ['Casual Dining'],
        establishment_types: [],
      },
    },
    {
      restaurant: {
        R: {
          res_id: 8905563,
          is_grocery_store: false,
          has_menu_status: {
            delivery: -1,
            takeaway: -1,
          },
        },
        apikey: '83cf762fa28744d19097f1338243c7b7',
        id: '8905563',
        name: 'Banh Mi Boys',
        url:
          'https://www.zomato.com/toronto/banh-mi-boys-fashion-district?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        location: {
          address: '392 Queen Street West, Toronto',
          locality: 'Queen Street West, Fashion District',
          city: 'Toronto',
          city_id: 89,
          latitude: '43.6487360000',
          longitude: '-79.3969520000',
          zipcode: '',
          country_id: 37,
          locality_verbose: 'Queen Street West, Fashion District, Toronto',
        },
        switch_to_order_menu: 0,
        cuisines: 'Sandwich',
        timings:
          '11 AM to 10 PM (Mon-Fri),11 AM to 9 PM (Sat),12 Noon to 7 PM (Sun)',
        average_cost_for_two: 25,
        price_range: 1,
        currency: '$',
        highlights: [
          'Credit Card',
          'Takeaway Available',
          'Lunch',
          'Debit Card',
          'No Alcohol Available',
          'Dinner',
          'Indoor Seating',
        ],
        offers: [],
        opentable_support: 0,
        is_zomato_book_res: 0,
        mezzo_provider: 'OTHER',
        is_book_form_web_view: 0,
        book_form_web_view_url: '',
        book_again_url: '',
        thumb:
          'https://b.zmtcdn.com/data/reviews_photos/782/453ca980c6cea16497f1737eb5156782_1535300080.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        user_rating: {
          aggregate_rating: '4.7',
          rating_text: 'Excellent',
          rating_color: '3F7E00',
          rating_obj: {
            title: {
              text: '4.7',
            },
            bg_color: {
              type: 'lime',
              tint: '800',
            },
          },
          votes: 940,
        },
        all_reviews_count: 244,
        photos_url:
          'https://www.zomato.com/toronto/banh-mi-boys-fashion-district/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop',
        photo_count: 177,
        menu_url:
          'https://www.zomato.com/toronto/banh-mi-boys-fashion-district/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop',
        featured_image:
          'https://b.zmtcdn.com/data/reviews_photos/782/453ca980c6cea16497f1737eb5156782_1535300080.jpg',
        medio_provider: false,
        has_online_delivery: 0,
        is_delivering_now: 0,
        store_type: '',
        include_bogo_offers: true,
        deeplink: 'zomato://restaurant/8905563',
        is_table_reservation_supported: 0,
        has_table_booking: 0,
        events_url:
          'https://www.zomato.com/toronto/banh-mi-boys-fashion-district/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        phone_numbers: '+1 (416) 363-0588',
        all_reviews: {
          reviews: [
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
          ],
        },
        establishment: ['Quick Bites'],
        establishment_types: [],
      },
    },
    {
      restaurant: {
        R: {
          res_id: 8908995,
          is_grocery_store: false,
          has_menu_status: {
            delivery: -1,
            takeaway: -1,
          },
        },
        apikey: '83cf762fa28744d19097f1338243c7b7',
        id: '8908995',
        name: 'The Stockyards',
        url:
          'https://www.zomato.com/toronto/the-stockyards-forest-hill?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        location: {
          address: '699 St Clair Avenue West, Toronto M6C 1B2',
          locality: 'Saint Clair Avenue West, Forest Hill',
          city: 'Toronto',
          city_id: 89,
          latitude: '43.6815720000',
          longitude: '-79.4263230000',
          zipcode: 'M6C 1B2',
          country_id: 37,
          locality_verbose: 'Saint Clair Avenue West, Forest Hill, Toronto',
        },
        switch_to_order_menu: 0,
        cuisines: 'BBQ, Burger',
        timings:
          'Closed (Mon),9 AM to 9 PM (Tue-Sat),9 AM to 2:45 PM, 5 PM to 8 PM (Sun)',
        average_cost_for_two: 25,
        price_range: 1,
        currency: '$',
        highlights: [
          'Takeaway Available',
          'No Alcohol Available',
          'Dinner',
          'Cash',
          'Debit Card',
          'Breakfast',
          'Lunch',
          'Credit Card',
          'Indoor Seating',
        ],
        offers: [],
        opentable_support: 0,
        is_zomato_book_res: 0,
        mezzo_provider: 'OTHER',
        is_book_form_web_view: 0,
        book_form_web_view_url: '',
        book_again_url: '',
        thumb:
          'https://b.zmtcdn.com/data/reviews_photos/f9f/ddd7d78736d4db8ae3ec1856861e0f9f.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        user_rating: {
          aggregate_rating: '4.6',
          rating_text: 'Excellent',
          rating_color: '3F7E00',
          rating_obj: {
            title: {
              text: '4.6',
            },
            bg_color: {
              type: 'lime',
              tint: '800',
            },
          },
          votes: 735,
        },
        all_reviews_count: 197,
        photos_url:
          'https://www.zomato.com/toronto/the-stockyards-forest-hill/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop',
        photo_count: 128,
        menu_url:
          'https://www.zomato.com/toronto/the-stockyards-forest-hill/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop',
        featured_image:
          'https://b.zmtcdn.com/data/reviews_photos/f9f/ddd7d78736d4db8ae3ec1856861e0f9f.jpg',
        medio_provider: false,
        has_online_delivery: 0,
        is_delivering_now: 0,
        store_type: '',
        include_bogo_offers: true,
        deeplink: 'zomato://restaurant/8908995',
        is_table_reservation_supported: 0,
        has_table_booking: 0,
        events_url:
          'https://www.zomato.com/toronto/the-stockyards-forest-hill/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        phone_numbers: '+1 (416) 658-9666',
        all_reviews: {
          reviews: [
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
          ],
        },
        establishment: ['Quick Bites'],
        establishment_types: [],
      },
    },
    {
      restaurant: {
        R: {
          res_id: 8905213,
          is_grocery_store: false,
          has_menu_status: {
            delivery: -1,
            takeaway: -1,
          },
        },
        apikey: '83cf762fa28744d19097f1338243c7b7',
        id: '8905213',
        name: 'Pizzeria Libretto',
        url:
          'https://www.zomato.com/toronto/pizzeria-libretto-trinity-bellwoods?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        location: {
          address: '221 Ossington Avenue, Toronto M6J 2Z8',
          locality: 'Ossington Avenue, Trinity Bellwoods',
          city: 'Toronto',
          city_id: 89,
          latitude: '43.6488820000',
          longitude: '-79.4204520000',
          zipcode: 'M6J 2Z8',
          country_id: 37,
          locality_verbose: 'Ossington Avenue, Trinity Bellwoods, Toronto',
        },
        switch_to_order_menu: 0,
        cuisines: 'Pizza, Italian',
        timings: '11:30 AM to 11 PM (Mon-Sun)',
        average_cost_for_two: 50,
        price_range: 2,
        currency: '$',
        highlights: [
          'Cash',
          'Debit Card',
          'Dinner',
          'Credit Card',
          'Takeaway Available',
          'Lunch',
          'Serves Alcohol',
          'Fullbar',
          'Indoor Seating',
        ],
        offers: [],
        opentable_support: 0,
        is_zomato_book_res: 0,
        mezzo_provider: 'OTHER',
        is_book_form_web_view: 0,
        book_form_web_view_url: '',
        book_again_url: '',
        thumb:
          'https://b.zmtcdn.com/data/pictures/chains/6/8906156/c33ab160eb5677d144edc640c8c39689.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        user_rating: {
          aggregate_rating: '4.5',
          rating_text: 'Excellent',
          rating_color: '3F7E00',
          rating_obj: {
            title: {
              text: '4.5',
            },
            bg_color: {
              type: 'lime',
              tint: '700',
            },
          },
          votes: 1011,
        },
        all_reviews_count: 225,
        photos_url:
          'https://www.zomato.com/toronto/pizzeria-libretto-trinity-bellwoods/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop',
        photo_count: 168,
        menu_url:
          'https://www.zomato.com/toronto/pizzeria-libretto-trinity-bellwoods/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop',
        featured_image:
          'https://b.zmtcdn.com/data/pictures/chains/6/8906156/c33ab160eb5677d144edc640c8c39689.jpg',
        medio_provider: false,
        has_online_delivery: 0,
        is_delivering_now: 0,
        store_type: '',
        include_bogo_offers: true,
        deeplink: 'zomato://restaurant/8905213',
        is_table_reservation_supported: 0,
        has_table_booking: 0,
        events_url:
          'https://www.zomato.com/toronto/pizzeria-libretto-trinity-bellwoods/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        phone_numbers: '+1 (416) 532-8000',
        all_reviews: {
          reviews: [
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
          ],
        },
        establishment: ['Casual Dining'],
        establishment_types: [],
      },
    },
    {
      restaurant: {
        R: {
          res_id: 8908860,
          is_grocery_store: false,
          has_menu_status: {
            delivery: -1,
            takeaway: -1,
          },
        },
        apikey: '83cf762fa28744d19097f1338243c7b7',
        id: '8908860',
        name: 'Grand Electric',
        url:
          'https://www.zomato.com/toronto/grand-electric-brockton-village?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        location: {
          address: '1330 Queen Street West, Toronto',
          locality: 'Queen Street West, Brockton Village',
          city: 'Toronto',
          city_id: 89,
          latitude: '43.6416805556',
          longitude: '-79.4315333333',
          zipcode: '',
          country_id: 37,
          locality_verbose: 'Queen Street West, Brockton Village, Toronto',
        },
        switch_to_order_menu: 0,
        cuisines: 'Mexican',
        timings:
          '12 Noon to 12 Midnight (Mon, Tue, Wed, Sun), 12 Noon to 1 AM (Thu-Sat)',
        average_cost_for_two: 40,
        price_range: 2,
        currency: '$',
        highlights: [
          'Cash',
          'Debit Card',
          'Takeaway Available',
          'Dinner',
          'Credit Card',
          'Delivery',
          'Lunch',
          'Serves Alcohol',
          'Indoor Seating',
          'Fullbar',
          'Patio Seating',
          'Nightlife',
        ],
        offers: [],
        opentable_support: 0,
        is_zomato_book_res: 0,
        mezzo_provider: 'OTHER',
        is_book_form_web_view: 0,
        book_form_web_view_url: '',
        book_again_url: '',
        thumb:
          'https://b.zmtcdn.com/data/pictures/0/8908860/9941f745a8422f01fd8a258b1eb82695.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        user_rating: {
          aggregate_rating: '4.4',
          rating_text: 'Very Good',
          rating_color: '5BA829',
          rating_obj: {
            title: {
              text: '4.4',
            },
            bg_color: {
              type: 'lime',
              tint: '700',
            },
          },
          votes: 725,
        },
        all_reviews_count: 189,
        photos_url:
          'https://www.zomato.com/toronto/grand-electric-brockton-village/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop',
        photo_count: 182,
        menu_url:
          'https://www.zomato.com/toronto/grand-electric-brockton-village/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop',
        featured_image:
          'https://b.zmtcdn.com/data/pictures/0/8908860/9941f745a8422f01fd8a258b1eb82695.jpg',
        medio_provider: false,
        has_online_delivery: 0,
        is_delivering_now: 0,
        store_type: '',
        include_bogo_offers: true,
        deeplink: 'zomato://restaurant/8908860',
        is_table_reservation_supported: 0,
        has_table_booking: 0,
        events_url:
          'https://www.zomato.com/toronto/grand-electric-brockton-village/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        phone_numbers: '+1 (416) 627-3459',
        all_reviews: {
          reviews: [
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
          ],
        },
        establishment: ['Casual Dining'],
        establishment_types: [],
      },
    },
    {
      restaurant: {
        R: {
          res_id: 8904607,
          is_grocery_store: false,
          has_menu_status: {
            delivery: -1,
            takeaway: -1,
          },
        },
        apikey: '83cf762fa28744d19097f1338243c7b7',
        id: '8904607',
        name: 'Salad King',
        url:
          'https://www.zomato.com/toronto/salad-king-downtown-yonge?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        location: {
          address: '340 Yonge Street, Toronto M5B 1R8',
          locality: 'Yonge Street, Downtown Yonge',
          city: 'Toronto',
          city_id: 89,
          latitude: '43.6582555556',
          longitude: '-79.3816972222',
          zipcode: 'M5B 1R8',
          country_id: 37,
          locality_verbose: 'Yonge Street, Downtown Yonge, Toronto',
        },
        switch_to_order_menu: 0,
        cuisines: 'Thai, Asian',
        timings:
          '11 AM to 10 PM (Mon-Thu),11 AM to 11 PM (Fri),12 Noon to 11 PM (Sat),12 Noon to 9 PM (Sun)',
        average_cost_for_two: 30,
        price_range: 2,
        currency: '$',
        highlights: [
          'Cash',
          'Debit Card',
          'Takeaway Available',
          'Lunch',
          'Serves Alcohol',
          'Credit Card',
          'Dinner',
          'Wifi',
          'Wine',
          'Indoor Seating',
          'Vegetarian Friendly',
          'Beer',
        ],
        offers: [],
        opentable_support: 0,
        is_zomato_book_res: 0,
        mezzo_provider: 'OTHER',
        is_book_form_web_view: 0,
        book_form_web_view_url: '',
        book_again_url: '',
        thumb:
          'https://b.zmtcdn.com/data/res_imagery/8904607_RESTAURANT_7b44ee322a2e851d3b662abc23758219_c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        user_rating: {
          aggregate_rating: '4.2',
          rating_text: 'Very Good',
          rating_color: '5BA829',
          rating_obj: {
            title: {
              text: '4.2',
            },
            bg_color: {
              type: 'lime',
              tint: '700',
            },
          },
          votes: 1260,
        },
        all_reviews_count: 265,
        photos_url:
          'https://www.zomato.com/toronto/salad-king-downtown-yonge/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop',
        photo_count: 191,
        menu_url:
          'https://www.zomato.com/toronto/salad-king-downtown-yonge/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop',
        featured_image:
          'https://b.zmtcdn.com/data/res_imagery/8904607_RESTAURANT_7b44ee322a2e851d3b662abc23758219_c.jpg',
        medio_provider: false,
        has_online_delivery: 0,
        is_delivering_now: 0,
        store_type: '',
        include_bogo_offers: true,
        deeplink: 'zomato://restaurant/8904607',
        is_table_reservation_supported: 0,
        has_table_booking: 0,
        events_url:
          'https://www.zomato.com/toronto/salad-king-downtown-yonge/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        phone_numbers: '+1 (416) 593-0333',
        all_reviews: {
          reviews: [
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
          ],
        },
        establishment: ['Casual Dining'],
        establishment_types: [],
      },
    },
    {
      restaurant: {
        R: {
          res_id: 8904756,
          is_grocery_store: false,
          has_menu_status: {
            delivery: -1,
            takeaway: -1,
          },
        },
        apikey: '83cf762fa28744d19097f1338243c7b7',
        id: '8904756',
        name: 'Richmond Station',
        url:
          'https://www.zomato.com/toronto/richmond-station-financial-district?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        location: {
          address: '1 Richmond Street West, Suite 120, Toronto M5H 3W4',
          locality: 'Financial District',
          city: 'Toronto',
          city_id: 89,
          latitude: '43.6515580000',
          longitude: '-79.3791350000',
          zipcode: 'M5H 3W4',
          country_id: 37,
          locality_verbose: 'Financial District',
        },
        switch_to_order_menu: 0,
        cuisines: 'Italian, Canadian',
        timings: '11 AM to 10:30 PM (Mon-Sat),Closed (Sun)',
        average_cost_for_two: 80,
        price_range: 3,
        currency: '$',
        highlights: [
          'Cash',
          'Debit Card',
          'Lunch',
          'Serves Alcohol',
          'Credit Card',
          'Dinner',
          'Catering Available',
          'Charcuterie',
          'Fullbar',
          'Indoor Seating',
          'Wifi',
          'Corkage Fee Charged',
          'Fixed Price Menu',
          'Table booking recommended',
        ],
        offers: [],
        opentable_support: 0,
        is_zomato_book_res: 0,
        mezzo_provider: 'OTHER',
        is_book_form_web_view: 0,
        book_form_web_view_url: '',
        book_again_url: '',
        thumb:
          'https://b.zmtcdn.com/data/reviews_photos/3da/2822ece31a019e09935fdd5b0993b3da_1504202527.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        user_rating: {
          aggregate_rating: '4.8',
          rating_text: 'Excellent',
          rating_color: '3F7E00',
          rating_obj: {
            title: {
              text: '4.8',
            },
            bg_color: {
              type: 'lime',
              tint: '800',
            },
          },
          votes: 490,
        },
        all_reviews_count: 167,
        photos_url:
          'https://www.zomato.com/toronto/richmond-station-financial-district/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop',
        photo_count: 496,
        menu_url:
          'https://www.zomato.com/toronto/richmond-station-financial-district/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop',
        featured_image:
          'https://b.zmtcdn.com/data/reviews_photos/3da/2822ece31a019e09935fdd5b0993b3da_1504202527.jpg',
        medio_provider: false,
        has_online_delivery: 0,
        is_delivering_now: 0,
        store_type: '',
        include_bogo_offers: true,
        deeplink: 'zomato://restaurant/8904756',
        is_table_reservation_supported: 0,
        has_table_booking: 0,
        events_url:
          'https://www.zomato.com/toronto/richmond-station-financial-district/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        phone_numbers: '+1 (647) 748-1444',
        all_reviews: {
          reviews: [
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
          ],
        },
        establishment: ['Casual Dining'],
        establishment_types: [],
      },
    },
    {
      restaurant: {
        R: {
          res_id: 8910373,
          is_grocery_store: false,
          has_menu_status: {
            delivery: -1,
            takeaway: -1,
          },
        },
        apikey: '83cf762fa28744d19097f1338243c7b7',
        id: '8910373',
        name: 'Canoe',
        url:
          'https://www.zomato.com/toronto/canoe-financial-district?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        location: {
          address:
            '66 Wellington St. W, TD Bank Tower, 54th Floor, Toronto M5K 1H6 1H6',
          locality: 'Wellington Street West, Financial District',
          city: 'Toronto',
          city_id: 89,
          latitude: '43.6476749000',
          longitude: '-79.3809818000',
          zipcode: 'M5K 1H6 1H6',
          country_id: 37,
          locality_verbose:
            'Wellington Street West, Financial District, Toronto',
        },
        switch_to_order_menu: 0,
        cuisines: 'Canadian, Bar Food',
        timings:
          '11:45 AM to 2:30 PM, 5 PM to 10:30 PM (Mon-Fri),Closed (Sat-Sun)',
        average_cost_for_two: 150,
        price_range: 4,
        currency: '$',
        highlights: [
          'Lunch',
          'Serves Alcohol',
          'Cash',
          'Credit Card',
          'Dinner',
          'Debit Card',
          'Lunch Menu',
          'Craft Beer',
          'Wine',
          'Indoor Seating',
          'Private Dining Area Available',
          'Gluten Free Options',
          'Corkage Fee Charged',
          'Fullbar',
          'Beer',
          'Serves Cocktails',
          'Table booking recommended',
          'Luxury Dining',
          'Wifi',
          'Vegan Options',
        ],
        offers: [],
        opentable_support: 0,
        is_zomato_book_res: 0,
        mezzo_provider: 'OTHER',
        is_book_form_web_view: 0,
        book_form_web_view_url: '',
        book_again_url: '',
        thumb:
          'https://b.zmtcdn.com/data/pictures/3/8910373/f58d4677da25b5a1654ef890fa01682e.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        user_rating: {
          aggregate_rating: '4.4',
          rating_text: 'Very Good',
          rating_color: '5BA829',
          rating_obj: {
            title: {
              text: '4.4',
            },
            bg_color: {
              type: 'lime',
              tint: '700',
            },
          },
          votes: 676,
        },
        all_reviews_count: 171,
        photos_url:
          'https://www.zomato.com/toronto/canoe-financial-district/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop',
        photo_count: 376,
        menu_url:
          'https://www.zomato.com/toronto/canoe-financial-district/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop',
        featured_image:
          'https://b.zmtcdn.com/data/pictures/3/8910373/f58d4677da25b5a1654ef890fa01682e.jpg',
        medio_provider: false,
        has_online_delivery: 0,
        is_delivering_now: 0,
        store_type: '',
        include_bogo_offers: true,
        deeplink: 'zomato://restaurant/8910373',
        is_table_reservation_supported: 0,
        has_table_booking: 0,
        events_url:
          'https://www.zomato.com/toronto/canoe-financial-district/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        phone_numbers: '+1 (416) 364-0054',
        all_reviews: {
          reviews: [
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
          ],
        },
        establishment: ['Fine Dining'],
        establishment_types: [],
      },
    },
    {
      restaurant: {
        R: {
          res_id: 8909239,
          is_grocery_store: false,
          has_menu_status: {
            delivery: -1,
            takeaway: -1,
          },
        },
        apikey: '83cf762fa28744d19097f1338243c7b7',
        id: '8909239',
        name: 'Barque Smokehouse',
        url:
          'https://www.zomato.com/toronto/barque-smokehouse-roncesvalles-village?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        location: {
          address: '299 Roncesvalles Avenue, Toronto M6R 2M3',
          locality: 'Roncesvalles Avenue, Roncesvalles Village',
          city: 'Toronto',
          city_id: 89,
          latitude: '43.6483540000',
          longitude: '-79.4496310000',
          zipcode: 'M6R 2M3',
          country_id: 37,
          locality_verbose:
            'Roncesvalles Avenue, Roncesvalles Village, Toronto',
        },
        switch_to_order_menu: 0,
        cuisines: 'BBQ, Grill',
        timings:
          '11:30 AM to 2:30 PM, 5 PM to 10 PM (Mon-Thu),11:30 AM to 2:30 PM, 5 PM to 10:30 PM (Fri),10 AM to 2 PM, 5 PM to 10:30 PM (Sat),10 AM to 2 PM, 5 PM to 9:30 PM (Sun)',
        average_cost_for_two: 70,
        price_range: 3,
        currency: '$',
        highlights: [
          'Credit Card',
          'Delivery',
          'Dinner',
          'Debit Card',
          'Takeaway Available',
          'Lunch',
          'Serves Alcohol',
          'Kid Friendly',
          'Vegan Options',
          'Corkage Fee Charged',
          'Wine',
          'Serves Cocktails',
          'Outdoor Seating',
          'Catering Available',
          'Brunch',
          'Fullbar',
          'Table booking recommended',
          'Gluten Free Options',
          'BYOB',
          'Craft Beer',
          'Beer',
          'Patio Seating',
          'Wifi',
          'Lunch Menu',
        ],
        offers: [],
        opentable_support: 0,
        is_zomato_book_res: 0,
        mezzo_provider: 'OTHER',
        is_book_form_web_view: 0,
        book_form_web_view_url: '',
        book_again_url: '',
        thumb:
          'https://b.zmtcdn.com/data/pictures/9/8909239/baa11afbdb689269ceba89d2511c392b.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        user_rating: {
          aggregate_rating: '4.3',
          rating_text: 'Very Good',
          rating_color: '5BA829',
          rating_obj: {
            title: {
              text: '4.3',
            },
            bg_color: {
              type: 'lime',
              tint: '700',
            },
          },
          votes: 648,
        },
        all_reviews_count: 198,
        photos_url:
          'https://www.zomato.com/toronto/barque-smokehouse-roncesvalles-village/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop',
        photo_count: 160,
        menu_url:
          'https://www.zomato.com/toronto/barque-smokehouse-roncesvalles-village/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop',
        featured_image:
          'https://b.zmtcdn.com/data/pictures/9/8909239/baa11afbdb689269ceba89d2511c392b.jpg',
        medio_provider: false,
        has_online_delivery: 0,
        is_delivering_now: 0,
        store_type: '',
        include_bogo_offers: true,
        deeplink: 'zomato://restaurant/8909239',
        is_table_reservation_supported: 0,
        has_table_booking: 0,
        events_url:
          'https://www.zomato.com/toronto/barque-smokehouse-roncesvalles-village/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        phone_numbers: '+1 (416) 532-7700',
        all_reviews: {
          reviews: [
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
          ],
        },
        establishment: ['Casual Dining'],
        establishment_types: [],
      },
    },
    {
      restaurant: {
        R: {
          res_id: 8905208,
          is_grocery_store: false,
          has_menu_status: {
            delivery: -1,
            takeaway: -1,
          },
        },
        apikey: '83cf762fa28744d19097f1338243c7b7',
        id: '8905208',
        name: 'Terroni',
        url:
          'https://www.zomato.com/toronto/terroni-trinity-bellwoods?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        location: {
          address: '720 Queen Street W, Toronto M6J 1E8',
          locality: 'Queen Street West, Trinity Bellwoods',
          city: 'Toronto',
          city_id: 89,
          latitude: '43.6462480000',
          longitude: '-79.4091360000',
          zipcode: 'M6J 1E8',
          country_id: 37,
          locality_verbose: 'Queen Street West, Trinity Bellwoods, Toronto',
        },
        switch_to_order_menu: 0,
        cuisines: 'Italian, Pizza',
        timings: '9 AM – 11 PM (Mon-Thu, Sun), 9 AM – 10 PM (Fri-Sat)',
        average_cost_for_two: 65,
        price_range: 3,
        currency: '$',
        highlights: [
          'Serves Alcohol',
          'Takeaway Available',
          'Debit Card',
          'Lunch',
          'Dinner',
          'Cash',
          'Credit Card',
          'Indoor Seating',
        ],
        offers: [],
        opentable_support: 0,
        is_zomato_book_res: 0,
        mezzo_provider: 'OTHER',
        is_book_form_web_view: 0,
        book_form_web_view_url: '',
        book_again_url: '',
        thumb:
          'https://b.zmtcdn.com/data/res_imagery/8903930_CHAIN_a66aa820dafd24a863f7bacdb298bb33_c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        user_rating: {
          aggregate_rating: '4.1',
          rating_text: 'Very Good',
          rating_color: '5BA829',
          rating_obj: {
            title: {
              text: '4.1',
            },
            bg_color: {
              type: 'lime',
              tint: '700',
            },
          },
          votes: 948,
        },
        all_reviews_count: 217,
        photos_url:
          'https://www.zomato.com/toronto/terroni-trinity-bellwoods/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop',
        photo_count: 110,
        menu_url:
          'https://www.zomato.com/toronto/terroni-trinity-bellwoods/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop',
        featured_image:
          'https://b.zmtcdn.com/data/res_imagery/8903930_CHAIN_a66aa820dafd24a863f7bacdb298bb33_c.jpg',
        medio_provider: false,
        has_online_delivery: 0,
        is_delivering_now: 0,
        store_type: '',
        include_bogo_offers: true,
        deeplink: 'zomato://restaurant/8905208',
        is_table_reservation_supported: 0,
        has_table_booking: 0,
        events_url:
          'https://www.zomato.com/toronto/terroni-trinity-bellwoods/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        phone_numbers: '+1 (416) 504-0320',
        all_reviews: {
          reviews: [
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
          ],
        },
        establishment: ['Casual Dining'],
        establishment_types: [],
      },
    },
    {
      restaurant: {
        R: {
          res_id: 8904394,
          is_grocery_store: false,
          has_menu_status: {
            delivery: -1,
            takeaway: -1,
          },
        },
        apikey: '83cf762fa28744d19097f1338243c7b7',
        id: '8904394',
        name: 'The Black Hoof',
        url:
          'https://www.zomato.com/toronto/the-black-hoof-trinity-bellwoods?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        location: {
          address: '928 Dundas Street West, Toronto M6J 1W3',
          locality: 'Dundas Street West, Trinity Bellwoods',
          city: 'Toronto',
          city_id: 89,
          latitude: '43.6507305556',
          longitude: '-79.4131000000',
          zipcode: 'M6J 1W3',
          country_id: 37,
          locality_verbose: 'Dundas Street West, Trinity Bellwoods, Toronto',
        },
        switch_to_order_menu: 0,
        cuisines: 'Tapas, Bar Food',
        timings:
          '6 PM to 11:30 PM (Mon, Thu, Sun), Closed (Tue-Wed),6 PM to 1 AM (Fri-Sat)',
        average_cost_for_two: 80,
        price_range: 3,
        currency: '$',
        highlights: [
          'Cash',
          'Debit Card',
          'Lunch',
          'Serves Alcohol',
          'Credit Card',
          'Dinner',
          'Indoor Seating',
          'Nightlife',
          'Patio Seating',
          'Charcuterie',
          'Fullbar',
        ],
        offers: [],
        opentable_support: 0,
        is_zomato_book_res: 0,
        mezzo_provider: 'OTHER',
        is_book_form_web_view: 0,
        book_form_web_view_url: '',
        book_again_url: '',
        thumb:
          'https://b.zmtcdn.com/data/res_imagery/8904394_RESTAURANT_c770fd54033d9a24a5a7eb145e39af85_c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        user_rating: {
          aggregate_rating: '4.7',
          rating_text: 'Excellent',
          rating_color: '3F7E00',
          rating_obj: {
            title: {
              text: '4.7',
            },
            bg_color: {
              type: 'lime',
              tint: '800',
            },
          },
          votes: 494,
        },
        all_reviews_count: 123,
        photos_url:
          'https://www.zomato.com/toronto/the-black-hoof-trinity-bellwoods/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop',
        photo_count: 106,
        menu_url:
          'https://www.zomato.com/toronto/the-black-hoof-trinity-bellwoods/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop',
        featured_image:
          'https://b.zmtcdn.com/data/res_imagery/8904394_RESTAURANT_c770fd54033d9a24a5a7eb145e39af85_c.jpg',
        medio_provider: false,
        has_online_delivery: 0,
        is_delivering_now: 0,
        store_type: '',
        include_bogo_offers: true,
        deeplink: 'zomato://restaurant/8904394',
        is_table_reservation_supported: 0,
        has_table_booking: 0,
        events_url:
          'https://www.zomato.com/toronto/the-black-hoof-trinity-bellwoods/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        phone_numbers: '+1 (416) 551-8854',
        all_reviews: {
          reviews: [
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
          ],
        },
        establishment: ['Casual Dining'],
        establishment_types: [],
      },
    },
    {
      restaurant: {
        R: {
          res_id: 8910545,
          is_grocery_store: false,
          has_menu_status: {
            delivery: -1,
            takeaway: -1,
          },
        },
        apikey: '83cf762fa28744d19097f1338243c7b7',
        id: '8910545',
        name: 'Auberge du Pommier',
        url:
          'https://www.zomato.com/toronto/auberge-du-pommier-north-york-gta?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        location: {
          address: '4150 Yonge St., Toronto, ON M2P 2C6',
          locality: 'Yonge Street, North York',
          city: 'Toronto',
          city_id: 89,
          latitude: '43.7469610000',
          longitude: '-79.4079160000',
          zipcode: 'M2P 2C6',
          country_id: 37,
          locality_verbose: 'Yonge Street, North York, Toronto',
        },
        switch_to_order_menu: 0,
        cuisines: 'French',
        timings:
          '11:45 AM to 2:30 PM, 5:30 PM to 9 PM (Mon-Thu),11:45 AM to 2:30 PM, 5:30 PM to 9:30 PM (Fri),5:30 PM to 9:30 PM (Sat),Closed (Sun)',
        average_cost_for_two: 150,
        price_range: 4,
        currency: '$',
        highlights: [
          'Cash',
          'Debit Card',
          'Dinner',
          'Serves Alcohol',
          'Credit Card',
          'Lunch',
          'Luxury Dining',
          'Fullbar',
          'Wifi',
          'Wine',
          'Serves Cocktails',
          'Indoor Seating',
          'Lunch Menu',
          'Corkage Fee Charged',
          'Table booking recommended',
          'Outdoor Seating',
          'BYOB',
          'Beer',
        ],
        offers: [],
        opentable_support: 0,
        is_zomato_book_res: 0,
        mezzo_provider: 'OTHER',
        is_book_form_web_view: 0,
        book_form_web_view_url: '',
        book_again_url: '',
        thumb:
          'https://b.zmtcdn.com/data/pictures/chains/5/8910545/df16a5b4129f783947ed93eb59f23fda.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        user_rating: {
          aggregate_rating: '4.5',
          rating_text: 'Excellent',
          rating_color: '3F7E00',
          rating_obj: {
            title: {
              text: '4.5',
            },
            bg_color: {
              type: 'lime',
              tint: '700',
            },
          },
          votes: 644,
        },
        all_reviews_count: 127,
        photos_url:
          'https://www.zomato.com/toronto/auberge-du-pommier-north-york-gta/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop',
        photo_count: 257,
        menu_url:
          'https://www.zomato.com/toronto/auberge-du-pommier-north-york-gta/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop',
        featured_image:
          'https://b.zmtcdn.com/data/pictures/chains/5/8910545/df16a5b4129f783947ed93eb59f23fda.jpg?output-format=webp',
        medio_provider: false,
        has_online_delivery: 0,
        is_delivering_now: 0,
        store_type: '',
        include_bogo_offers: true,
        deeplink: 'zomato://restaurant/8910545',
        is_table_reservation_supported: 0,
        has_table_booking: 0,
        events_url:
          'https://www.zomato.com/toronto/auberge-du-pommier-north-york-gta/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        phone_numbers: '+1 (416) 222-2220',
        all_reviews: {
          reviews: [
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
          ],
        },
        establishment: ['Fine Dining'],
        establishment_types: [],
      },
    },
    {
      restaurant: {
        R: {
          res_id: 8909330,
          is_grocery_store: false,
          has_menu_status: {
            delivery: -1,
            takeaway: -1,
          },
        },
        apikey: '83cf762fa28744d19097f1338243c7b7',
        id: '8909330',
        name: "The Burger's Priest",
        url:
          'https://www.zomato.com/toronto/the-burgers-priest-the-beaches?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        location: {
          address: '1636, Queen St. E, Toronto',
          locality: 'Queen Street East, The Beaches',
          city: 'Toronto',
          city_id: 89,
          latitude: '43.6668291000',
          longitude: '-79.3156416000',
          zipcode: '',
          country_id: 37,
          locality_verbose: 'Queen Street East, The Beaches, Toronto',
        },
        switch_to_order_menu: 0,
        cuisines: 'Burger',
        timings:
          '11 AM to 9:30 PM (Mon-Wed), 11 AM to 10:30 PM (Thu-Sat), 11 AM to 8 PM (Sun)',
        average_cost_for_two: 30,
        price_range: 2,
        currency: '$',
        highlights: [
          'Dinner',
          'Takeaway Available',
          'Lunch',
          'Cash',
          'Indoor Seating',
        ],
        offers: [],
        opentable_support: 0,
        is_zomato_book_res: 0,
        mezzo_provider: 'OTHER',
        is_book_form_web_view: 0,
        book_form_web_view_url: '',
        book_again_url: '',
        thumb:
          'https://b.zmtcdn.com/data/pictures/chains/9/8904889/a22b4696b25c55bcd7314a8bfb2fa7f5.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        user_rating: {
          aggregate_rating: '4.2',
          rating_text: 'Very Good',
          rating_color: '5BA829',
          rating_obj: {
            title: {
              text: '4.2',
            },
            bg_color: {
              type: 'lime',
              tint: '700',
            },
          },
          votes: 779,
        },
        all_reviews_count: 208,
        photos_url:
          'https://www.zomato.com/toronto/the-burgers-priest-the-beaches/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop',
        photo_count: 79,
        menu_url:
          'https://www.zomato.com/toronto/the-burgers-priest-the-beaches/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop',
        featured_image:
          'https://b.zmtcdn.com/data/pictures/chains/9/8904889/a22b4696b25c55bcd7314a8bfb2fa7f5.jpg',
        medio_provider: false,
        has_online_delivery: 0,
        is_delivering_now: 0,
        store_type: '',
        include_bogo_offers: true,
        deeplink: 'zomato://restaurant/8909330',
        is_table_reservation_supported: 0,
        has_table_booking: 0,
        events_url:
          'https://www.zomato.com/toronto/the-burgers-priest-the-beaches/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        phone_numbers: '+1 (647) 346-0617',
        all_reviews: {
          reviews: [
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
          ],
        },
        establishment: ['Quick Bites'],
        establishment_types: [],
      },
    },
    {
      restaurant: {
        R: {
          res_id: 8906796,
          is_grocery_store: false,
          has_menu_status: {
            delivery: -1,
            takeaway: -1,
          },
        },
        apikey: '83cf762fa28744d19097f1338243c7b7',
        id: '8906796',
        name: 'Gusto 101',
        url:
          'https://www.zomato.com/toronto/gusto-101-fashion-district?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        location: {
          address: '101 Portland Street, Toronto M5V 2N3',
          locality: 'Fashion District',
          city: 'Toronto',
          city_id: 89,
          latitude: '43.6450805556',
          longitude: '-79.4003305556',
          zipcode: 'M5V 2N3',
          country_id: 37,
          locality_verbose: 'Fashion District',
        },
        switch_to_order_menu: 0,
        cuisines: 'Pizza, Italian',
        timings:
          '11:30 AM to 10 PM (Mon-Wed),11:30 AM to 11 PM (Thu),11:30 AM to 1 AM (Fri),11 AM to 1 AM (Sat),11 AM to 10 PM (Sun)',
        average_cost_for_two: 75,
        price_range: 3,
        currency: '$',
        highlights: [
          'Dinner',
          'Cash',
          'Debit Card',
          'Delivery',
          'Takeaway Available',
          'Lunch',
          'Serves Alcohol',
          'Credit Card',
          'Gluten Free Options',
          'Brunch',
          'Nightlife',
          'Wine',
          'Serves Cocktails',
          'Patio Seating',
          'Heated Patio',
          'Vegan Options',
          'Lunch Menu',
          'Fullbar',
          'Beer',
          'Outdoor Seating',
          'Indoor Seating',
          'Private Dining Area Available',
        ],
        offers: [],
        opentable_support: 0,
        is_zomato_book_res: 0,
        mezzo_provider: 'OTHER',
        is_book_form_web_view: 0,
        book_form_web_view_url: '',
        book_again_url: '',
        thumb:
          'https://b.zmtcdn.com/data/res_imagery/8906796_RESTAURANT_282227a85a3c42972a316f67008ce36f.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        user_rating: {
          aggregate_rating: '4.5',
          rating_text: 'Excellent',
          rating_color: '3F7E00',
          rating_obj: {
            title: {
              text: '4.5',
            },
            bg_color: {
              type: 'lime',
              tint: '700',
            },
          },
          votes: 507,
        },
        all_reviews_count: 168,
        photos_url:
          'https://www.zomato.com/toronto/gusto-101-fashion-district/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop',
        photo_count: 232,
        menu_url:
          'https://www.zomato.com/toronto/gusto-101-fashion-district/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop',
        featured_image:
          'https://b.zmtcdn.com/data/res_imagery/8906796_RESTAURANT_282227a85a3c42972a316f67008ce36f.jpg',
        medio_provider: false,
        has_online_delivery: 0,
        is_delivering_now: 0,
        store_type: '',
        include_bogo_offers: true,
        deeplink: 'zomato://restaurant/8906796',
        is_table_reservation_supported: 0,
        has_table_booking: 0,
        events_url:
          'https://www.zomato.com/toronto/gusto-101-fashion-district/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        phone_numbers: '+1 (416) 504-9669',
        all_reviews: {
          reviews: [
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
          ],
        },
        establishment: ['Casual Dining'],
        establishment_types: [],
      },
    },
    {
      restaurant: {
        R: {
          res_id: 8904386,
          is_grocery_store: false,
          has_menu_status: {
            delivery: -1,
            takeaway: -1,
          },
        },
        apikey: '83cf762fa28744d19097f1338243c7b7',
        id: '8904386',
        name: 'Bar Isabel',
        url:
          'https://www.zomato.com/toronto/bar-isabel-dufferin-grove?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        location: {
          address: '797 College Street, Toronto M6G 1C7',
          locality: 'College Street, Dufferin Grove',
          city: 'Toronto',
          city_id: 89,
          latitude: '43.6546944444',
          longitude: '-79.4207388889',
          zipcode: 'M6G 1C7',
          country_id: 37,
          locality_verbose: 'College Street, Dufferin Grove, Toronto',
        },
        switch_to_order_menu: 0,
        cuisines: 'Spanish, Tapas, Bar Food',
        timings:
          '6 PM to 12 Midnight (Mon, Tue, Wed, Thu, Sun), 6 PM to 2 AM (Fri-Sat)',
        average_cost_for_two: 150,
        price_range: 4,
        currency: '$',
        highlights: [
          'Cash',
          'Debit Card',
          'Lunch',
          'Serves Alcohol',
          'Credit Card',
          'Dinner',
          'Charcuterie',
          'Fullbar',
          'Indoor Seating',
          'Nightlife',
          'Serves Cocktails',
        ],
        offers: [],
        opentable_support: 0,
        is_zomato_book_res: 0,
        mezzo_provider: 'OTHER',
        is_book_form_web_view: 0,
        book_form_web_view_url: '',
        book_again_url: '',
        thumb: '',
        user_rating: {
          aggregate_rating: '4.8',
          rating_text: 'Excellent',
          rating_color: '3F7E00',
          rating_obj: {
            title: {
              text: '4.8',
            },
            bg_color: {
              type: 'lime',
              tint: '800',
            },
          },
          votes: 412,
        },
        all_reviews_count: 130,
        photos_url:
          'https://www.zomato.com/toronto/bar-isabel-dufferin-grove/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop',
        photo_count: 193,
        menu_url:
          'https://www.zomato.com/toronto/bar-isabel-dufferin-grove/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop',
        featured_image: '',
        medio_provider: false,
        has_online_delivery: 0,
        is_delivering_now: 0,
        store_type: '',
        include_bogo_offers: true,
        deeplink: 'zomato://restaurant/8904386',
        is_table_reservation_supported: 0,
        has_table_booking: 0,
        events_url:
          'https://www.zomato.com/toronto/bar-isabel-dufferin-grove/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        phone_numbers: '+1 (416) 532-2222',
        all_reviews: {
          reviews: [
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
          ],
        },
        establishment: ['Casual Dining'],
        establishment_types: [],
      },
    },
    {
      restaurant: {
        R: {
          res_id: 8904503,
          is_grocery_store: false,
          has_menu_status: {
            delivery: -1,
            takeaway: -1,
          },
        },
        apikey: '83cf762fa28744d19097f1338243c7b7',
        id: '8904503',
        name: 'La Carnita',
        url:
          'https://www.zomato.com/toronto/la-carnita-little-italy?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        location: {
          address: '501 College Street, Toronto M6G1A6',
          locality: 'Little Italy',
          city: 'Toronto',
          city_id: 89,
          latitude: '43.6559416667',
          longitude: '-79.4097972222',
          zipcode: 'M6G1A6',
          country_id: 37,
          locality_verbose: 'Little Italy',
        },
        switch_to_order_menu: 0,
        cuisines: 'Mexican',
        timings: '5 PM to 10 PM (Mon, Sun), 5 PM to 11 PM (Tue-Sat)',
        average_cost_for_two: 35,
        price_range: 2,
        currency: '$',
        highlights: [
          'Dinner',
          'Credit Card',
          'Takeaway Available',
          'Serves Alcohol',
          'Debit Card',
          'Lunch',
          'Indoor Seating',
        ],
        offers: [],
        opentable_support: 0,
        is_zomato_book_res: 0,
        mezzo_provider: 'OTHER',
        is_book_form_web_view: 0,
        book_form_web_view_url: '',
        book_again_url: '',
        thumb:
          'https://b.zmtcdn.com/data/pictures/3/8904503/fc36fba19c3fe0bca38ccbc837132baa.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        user_rating: {
          aggregate_rating: '4.3',
          rating_text: 'Very Good',
          rating_color: '5BA829',
          rating_obj: {
            title: {
              text: '4.3',
            },
            bg_color: {
              type: 'lime',
              tint: '700',
            },
          },
          votes: 446,
        },
        all_reviews_count: 128,
        photos_url:
          'https://www.zomato.com/toronto/la-carnita-little-italy/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop',
        photo_count: 168,
        menu_url:
          'https://www.zomato.com/toronto/la-carnita-little-italy/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop',
        featured_image:
          'https://b.zmtcdn.com/data/pictures/3/8904503/fc36fba19c3fe0bca38ccbc837132baa.jpg',
        medio_provider: false,
        has_online_delivery: 0,
        is_delivering_now: 0,
        store_type: '',
        include_bogo_offers: true,
        deeplink: 'zomato://restaurant/8904503',
        is_table_reservation_supported: 0,
        has_table_booking: 0,
        events_url:
          'https://www.zomato.com/toronto/la-carnita-little-italy/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        phone_numbers: '+1 (416) 964-1555',
        all_reviews: {
          reviews: [
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
          ],
        },
        establishment: ['Casual Dining'],
        establishment_types: [],
      },
    },
    {
      restaurant: {
        R: {
          res_id: 8906641,
          is_grocery_store: false,
          has_menu_status: {
            delivery: -1,
            takeaway: -1,
          },
        },
        apikey: '83cf762fa28744d19097f1338243c7b7',
        id: '8906641',
        name: 'Lee',
        url:
          'https://www.zomato.com/toronto/lee-fashion-district?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        location: {
          address: '601 King Street West, Toronto M5V 1M5',
          locality: 'King Street West, Fashion District',
          city: 'Toronto',
          city_id: 89,
          latitude: '43.6444472222',
          longitude: '-79.4006500000',
          zipcode: 'M5V 1M5',
          country_id: 37,
          locality_verbose: 'King Street West, Fashion District, Toronto',
        },
        switch_to_order_menu: 0,
        cuisines: 'Asian Fusion, Asian',
        timings: '5:30 PM to 10:30 PM (Mon-Wed),5:30 PM to 11:30 PM (Thu-Sun)',
        average_cost_for_two: 85,
        price_range: 3,
        currency: '$',
        highlights: [
          'Cash',
          'Debit Card',
          'Dinner',
          'Credit Card',
          'Takeaway Available',
          'Lunch',
          'Serves Alcohol',
          'Indoor Seating',
          'Vegetarian Friendly',
          'Fullbar',
          'Outdoor Seating',
          'Private Dining Area Available',
        ],
        offers: [],
        opentable_support: 0,
        is_zomato_book_res: 0,
        mezzo_provider: 'OTHER',
        is_book_form_web_view: 0,
        book_form_web_view_url: '',
        book_again_url: '',
        thumb:
          'https://b.zmtcdn.com/data/res_imagery/8906641_RESTAURANT_937cec4038305f0e9f019982b020214b.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        user_rating: {
          aggregate_rating: '4.5',
          rating_text: 'Excellent',
          rating_color: '3F7E00',
          rating_obj: {
            title: {
              text: '4.5',
            },
            bg_color: {
              type: 'lime',
              tint: '700',
            },
          },
          votes: 571,
        },
        all_reviews_count: 165,
        photos_url:
          'https://www.zomato.com/toronto/lee-fashion-district/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop',
        photo_count: 210,
        menu_url:
          'https://www.zomato.com/toronto/lee-fashion-district/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop',
        featured_image:
          'https://b.zmtcdn.com/data/res_imagery/8906641_RESTAURANT_937cec4038305f0e9f019982b020214b.jpg',
        medio_provider: false,
        has_online_delivery: 0,
        is_delivering_now: 0,
        store_type: '',
        include_bogo_offers: true,
        deeplink: 'zomato://restaurant/8906641',
        is_table_reservation_supported: 0,
        has_table_booking: 0,
        events_url:
          'https://www.zomato.com/toronto/lee-fashion-district/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        phone_numbers: '+1 (416) 504-7867',
        all_reviews: {
          reviews: [
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
          ],
        },
        establishment: ['Casual Dining'],
        establishment_types: [],
      },
    },
    {
      restaurant: {
        R: {
          res_id: 8907324,
          is_grocery_store: false,
          has_menu_status: {
            delivery: -1,
            takeaway: -1,
          },
        },
        apikey: '83cf762fa28744d19097f1338243c7b7',
        id: '8907324',
        name: 'Messini',
        url:
          'https://www.zomato.com/toronto/messini-the-danforth?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        location: {
          address: '445 Danforth Avenue, Toronto M4K 1P2',
          locality: 'Danforth Avenue, The Danforth',
          city: 'Toronto',
          city_id: 89,
          latitude: '43.6778160000',
          longitude: '-79.3505470000',
          zipcode: 'M4K 1P2',
          country_id: 37,
          locality_verbose: 'Danforth Avenue, The Danforth, Toronto',
        },
        switch_to_order_menu: 0,
        cuisines: 'Greek',
        timings:
          '11:30 AM to 12 Midnight (Mon-Thu),11:30 AM to 1 AM (Fri-Sat),12 Noon to 12 Midnight (Sun)',
        average_cost_for_two: 40,
        price_range: 2,
        currency: '$',
        highlights: [
          'Credit Card',
          'Takeaway Available',
          'Dinner',
          'Debit Card',
          'Lunch',
          'Serves Alcohol',
          'Indoor Seating',
        ],
        offers: [],
        opentable_support: 0,
        is_zomato_book_res: 0,
        mezzo_provider: 'OTHER',
        is_book_form_web_view: 0,
        book_form_web_view_url: '',
        book_again_url: '',
        thumb:
          'https://b.zmtcdn.com/data/res_imagery/8907324_RESTAURANT_aa2c25559afd2cfc8da43ae538c10ece_c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        user_rating: {
          aggregate_rating: '4.4',
          rating_text: 'Very Good',
          rating_color: '5BA829',
          rating_obj: {
            title: {
              text: '4.4',
            },
            bg_color: {
              type: 'lime',
              tint: '700',
            },
          },
          votes: 609,
        },
        all_reviews_count: 144,
        photos_url:
          'https://www.zomato.com/toronto/messini-the-danforth/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop',
        photo_count: 103,
        menu_url:
          'https://www.zomato.com/toronto/messini-the-danforth/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop',
        featured_image:
          'https://b.zmtcdn.com/data/res_imagery/8907324_RESTAURANT_aa2c25559afd2cfc8da43ae538c10ece_c.jpg',
        medio_provider: false,
        has_online_delivery: 0,
        is_delivering_now: 0,
        store_type: '',
        include_bogo_offers: true,
        deeplink: 'zomato://restaurant/8907324',
        is_table_reservation_supported: 0,
        has_table_booking: 0,
        events_url:
          'https://www.zomato.com/toronto/messini-the-danforth/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        phone_numbers: '+1 (416) 778-4861',
        all_reviews: {
          reviews: [
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
          ],
        },
        establishment: ['Casual Dining'],
        establishment_types: [],
      },
    },
    {
      restaurant: {
        R: {
          res_id: 8904604,
          is_grocery_store: false,
          has_menu_status: {
            delivery: -1,
            takeaway: -1,
          },
        },
        apikey: '83cf762fa28744d19097f1338243c7b7',
        id: '8904604',
        name: "Rodney's Oyster House",
        url:
          'https://www.zomato.com/toronto/rodneys-oyster-house-fashion-district?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        location: {
          address: '469 King Street West, Toronto M5V 1K4',
          locality: 'Fashion District',
          city: 'Toronto',
          city_id: 89,
          latitude: '43.6442722222',
          longitude: '-79.3967222222',
          zipcode: 'M5V 1K4',
          country_id: 37,
          locality_verbose: 'Fashion District',
        },
        switch_to_order_menu: 0,
        cuisines: 'Seafood',
        timings:
          '11:30 AM to 10 PM (Mon-Tue),11:30 AM to 11 PM (Wed-Thu),11:30 AM to 12 Midnight (Fri-Sat),Closed (Sun)',
        average_cost_for_two: 75,
        price_range: 3,
        currency: '$',
        highlights: [
          'Cash',
          'Debit Card',
          'Takeaway Available',
          'Dinner',
          'Credit Card',
          'Lunch',
          'Serves Alcohol',
          'Indoor Seating',
          'Wifi',
          'Fullbar',
          'Table booking recommended',
          'Ocean Wise',
          'Patio Seating',
          'Corkage Fee Charged',
        ],
        offers: [],
        opentable_support: 0,
        is_zomato_book_res: 0,
        mezzo_provider: 'OTHER',
        is_book_form_web_view: 0,
        book_form_web_view_url: '',
        book_again_url: '',
        thumb:
          'https://b.zmtcdn.com/data/res_imagery/8904604_RESTAURANT_56267b267de3967a699e7c495e3081d2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        user_rating: {
          aggregate_rating: '4.6',
          rating_text: 'Excellent',
          rating_color: '3F7E00',
          rating_obj: {
            title: {
              text: '4.6',
            },
            bg_color: {
              type: 'lime',
              tint: '800',
            },
          },
          votes: 474,
        },
        all_reviews_count: 92,
        photos_url:
          'https://www.zomato.com/toronto/rodneys-oyster-house-fashion-district/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop',
        photo_count: 274,
        menu_url:
          'https://www.zomato.com/toronto/rodneys-oyster-house-fashion-district/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop',
        featured_image:
          'https://b.zmtcdn.com/data/res_imagery/8904604_RESTAURANT_56267b267de3967a699e7c495e3081d2.jpg',
        medio_provider: false,
        has_online_delivery: 0,
        is_delivering_now: 0,
        store_type: '',
        include_bogo_offers: true,
        deeplink: 'zomato://restaurant/8904604',
        is_table_reservation_supported: 0,
        has_table_booking: 0,
        events_url:
          'https://www.zomato.com/toronto/rodneys-oyster-house-fashion-district/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        phone_numbers: '+1 (416) 363-8105',
        all_reviews: {
          reviews: [
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
            {
              review: [],
            },
          ],
        },
        establishment: ['Casual Dining'],
        establishment_types: [],
      },
    },
  ],
};

export const testStore = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
  return createStoreWithMiddleware(rootReducer, initialState);
};
