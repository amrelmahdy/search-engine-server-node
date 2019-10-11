// const products = [
//     {
//         "name": "Speck Products Presidio Metallic Case for iPhone 8 (Also Fits 7/6S/6), Rose Gold Metallic/Dahlia Peach",
//         "image": "https://images-na.ssl-images-amazon.com/images/I/61niBwB2yYL._SL1500_.jpg",
//         "price": 44.95,
//         "category": {
//             "id": 1,
//             "name": "Phone Accessories"
//         },
//         "brand": "Speck"
//     },
//     {
//         "name": "iPhone 8 Plus Case, SUPCASE Unicorn Beetle Style Premium Hybrid Protective Clear Bumper Case [Scratch Resistant] for Apple iPhone 7 Plus 2016 / iPhone 8 Plus 2017 Releas",
//         "image": "https://images-na.ssl-images-amazon.com/images/I/41%2BMZ4466KL.jpg",
//         "price": 11.96,
//         "category": {
//             "id": 1,
//             "name": "Phone Accessories"
//         },
//         "brand": "SUPCASE"
//     },
//     {
//         "name": "OtterBox DEFENDER SERIES Case for iPhone 8 Plus & iPhone 7 Plus (ONLY) - Frustration Free Packaging - BESPOKE WAY (BLAZER BLUE/STORMY SEAS BLUE)",
//         "image": "https://images-na.ssl-images-amazon.com/images/I/9164-eI%2B%2BlL._SX679_.jpg",
//         "price": 33.75,
//         "category": {
//             "id": 1,
//             "name": "Phone Accessories"
//         },
//         "brand": "OtterBox"
//     },
//     {
//         "name": "Speck Products Presidio Grip Case for iPhone 8 Plus (Also fits 7 Plus and 6S/6 Plus), Black/Black",
//         "image": "https://images-na.ssl-images-amazon.com/images/I/71hKR23wmIL._SX679_.jpg",
//         "price": 21.26,
//         "category": {
//             "id": 1,
//             "name": "Phone Accessories"
//         },
//         "brand": "Speck"
//     },
//     {
//         "name": "Samsung Galaxy J7 Pro (32GB) J730G/DS - 5.5 inch Full HD Dual SIM Unlocked Phone with Finger Print Sensor (US & Latin 4G LTE) (Pink)",
//         "image": "https://images-na.ssl-images-amazon.com/images/I/71pIqBH5qtL._SY741_.jpg",
//         "price": 232,
//         "category": {
//             "id": 2,
//             "name": "Mobile Phones"
//         },
//         "brand": "Samsung"
//     },
//     {
//         "name": "Samsung Galaxy S9 Unlocked Smartphone - Midnight Black - US Warranty",
//         "image": "https://images-na.ssl-images-amazon.com/images/I/61562OkQd3L._SX679_.jpg",
//         "price": 719,
//         "category": {
//             "id": 2,
//             "name": "Mobile Phones"
//         },
//         "brand": "Samsung"
//     },
//     {
//         "name": "Apple iPhone 6 a1549 16GB Space Gray Unlocked (Certified Refurbished)",
//         "image": "https://images-na.ssl-images-amazon.com/images/I/51bvItLxhqL.jpg",
//         "price": 173.97,
//         "category": {
//             "id": 2,
//             "name": "Mobile Phones"
//         },
//         "brand": "Apple"
//     },
//     {
//         "name": "ASUS VivoBook S Thin & Light Laptop, 14 inch FHD, Intel Core i7-8550U up to 4.00 GHz, GeForce MX150, 8GB RAM, 256GB SSD, NanoEdge Bezel, Backlit Keyboard, FP Sensor - S410UN-NS74",
//         "image": "https://images-na.ssl-images-amazon.com/images/I/81CXyTkBjWL._SX679_.jpg",
//         "price": 799,
//         "category": {
//             "id": 3,
//             "name": "Laptops"
//         },
//         "brand": "Asus"
//     },
//     {
//         "name": "HIDevolution Aorus X9 DT 17.3” FHD 144Hz G-Sync Gaming Laptop | 2.9 GHz i9-8950H, GTX 1080, 64GB DDR4/2666MHz RAM, PCIe 2TB SSD + 4TB SSD | Authorized Performance Upgrades & Warranty",
//         "image": "https://images-na.ssl-images-amazon.com/images/I/61t6xBAVFrL._SX679_.jpg",
//         "price": 7239,
//         "category": {
//             "id": 3,
//             "name": "Laptops"
//         },
//         "brand": "HIDevolution"
//     },
//     {
//         "name": "MSI GS73VR Stealth Pro-225 17.3 inch 120Hz 5ms Display Thin and Light Gaming Laptop Core i7-7700HQ GTX 1060 16GB 256GB + 2TB VR Ready",
//         "image": "https://images-na.ssl-images-amazon.com/images/I/81JcBcbQOdL._SX679_.jpg",
//         "price": 1732.99,
//         "category": {
//             "id": 3,
//             "name": "Laptops"
//         },
//         "brand": "MSI"
//     },
//     {
//         "name": "Alienware AW17R4-7005SLV-PUS 17 inch Laptop (7th Generation Intel Core i7, 16GB RAM, 1TB HDD, Silver) with NVIDIA GTX 1060",
//         "image": "https://images-na.ssl-images-amazon.com/images/I/71BSO8m6I4L._SX679_.jpg",
//         "price": 1378.08,
//         "category": {
//             "id": 3,
//             "name": "Laptops"
//         },
//         "brand": "Alienware"
//     },
//     {
//         "name": "The Razer Blade 14 inch Thin & Light Gaming Laptop - Full HD, Core i7-7700HQ, 16GB RAM, 512GB SSD, GeForce GTX 1060 - VR Ready",
//         "image": "https://images-na.ssl-images-amazon.com/images/I/61Vu7mdGclL._SX679_.jpg",
//         "price": 1999.99,
//         "category": {
//             "id": 3,
//             "name": "laptops"
//         },
//         "brand": "Razer"
//     }
// ];


const {createResponse} = require("./../helpers/response_manager");
const Product = require("./../models/product");
const Category = require("./../models/catrgory");

module.exports = {
    getProductsList: async (req, res, next) => {
        try {

            const products = await Product.find({}).populate('category');

            const response = createResponse(true, "", 200, [], "List of products", products);

            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    },

    getFacetedNavigatorData: async (req, res, next) => {
        Product.aggregate([
            {
                $facet: {
                    "price": [
                        // Filter out documents without a price e.g., _id: 7
                        {$match: {price: {$exists: 1}}},
                        {
                            $bucket: {
                                groupBy: "$price",
                                boundaries: [0, 100, 500, 1000],
                                default: "Other",
                                output: {
                                    "count": {$sum: 1},
                                }
                            }
                        }
                    ],

                    "brands": [
                        {$group: {_id: "$brand", count: {$sum: 1}}},
                        // { $project: { _id: 0 } }
                    ],
                    "categories": [
                        {$group: {_id: "$category", count: {$sum: 1}}},
                        {$lookup: {from: 'categories', localField: '_id', foreignField: '_id', as: 'name'}}
                    ],

                }

                // $group: {
                //     _id: '$category',  //$region is the column name in collection
                //     count: {$sum: 1}
                // }

            }

        ], function (err, result) {
            if (err) {
                next(err);
            } else {
                const response = createResponse(true, "", 200, [], "List of products", result);

                res.status(200).json(response);
            }
        });


        //const categories = await  Category.find();

        // const brands = await Product.find().distinct('brand', (err, brands) => {
        //     console.log(brands)
        // });
        //
        // const price = await Product.find().distinct('price');


        // const response = createResponse(true, "", 200, [], "List of products", facetDate);

        //res.status(200).json(response);
    },

    search: async (req, res, next) => {
        try {
            const {searchQuery} = req.body;

            //console.log("fix", searchQuery);

            const products = await Product.find({
                $text: {$search: searchQuery},
            }).populate("category");


            const response = createResponse(true, "", 200, [], "List of products", products);

            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    },

    searchByCategory: async (req, res, next) => {
        try {
            const {categoryId} = req.body;

            console.log(req.body);


            const category = await Category.findOne({_id: categoryId});

            if (!category) {
                // handle error
            }

            const products = await Product.find({category: category}).populate("category");

            console.log("++++++", products);

            const response = createResponse(true, "", 200, [], "List of products", products);

            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    },

    searchByPrice: async (req, res, next) => {
        try {
            const {start, end} = req.body;

            const products = await Product.find({
                price: {$gt: start, $lt: end},

            }).populate("category");

            const response = createResponse(true, "", 200, [], "List of products", products);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }


};


