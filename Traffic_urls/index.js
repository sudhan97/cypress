// import data from './urls.json' assert {type:'JSON'};
const data=[
  {
    "url": "https://trucks.tractorjunction.com/"
   },
   {
    "url": "https://trucks.tractorjunction.com/en/tata"
   },
   {
    "url": "https://trucks.tractorjunction.com/en/tata?amp=1"
   },
   {
    "url": "https://trucks.tractorjunction.com/en/auto-rickshaw"
   },
   {
    "url": "https://trucks.tractorjunction.com/en/select-your-truck"
   },
   {
    "url": "https://trucks.tractorjunction.com/en/select-your-truck"
   },
   {
    "url": "https://trucks.tractorjunction.com/en/tata/ace"
   },
   {
    "url": "https://trucks.tractorjunction.com/en/ashok-leyland"
   },
   {
    "url": "https://trucks.tractorjunction.com/en/ashok-leyland?amp=1"
   },
   {
    "url": "https://trucks.tractorjunction.com/en/eicher?amp=1"
   },
   {
    "url": "https://trucks.tractorjunction.com/en/loan"
   },
   {
    "url": "https://trucks.tractorjunction.com/en/tata-truck/signa-1918k"
   },
   {
    "url": "https://trucks.tractorjunction.com/en/tata/winger"
   },
   {
    "url": "https://trucks.tractorjunction.com/en/force-truck/tempo-traveller-3050?amp=1"
   },
   {
    "url": "https://trucks.tractorjunction.com/en/buy-used-trucks"
   },
   {
    "url": "https://trucks.tractorjunction.com/en/mahindra"
   },
   {
    "url": "https://trucks.tractorjunction.com/en/ashok-leyland-truck/dost-strong?amp=1"
   },
   {
    "url": "https://trucks.tractorjunction.com/en/12-wheeler"
   },
   {
    "url": "https://trucks.tractorjunction.com/en/3-wheeler"
   },
   {
    "url": "https://trucks.tractorjunction.com/en/eicher"
   }
  ,
   {
    "url": "https://www.tractorjunction.com/all-brands/"
   },
   {
    "url": "https://www.tractorjunction.com"
   },
   {
    "url": "https://www.tractorjunction.com/tractors/"
   },
   {
    "url": "https://www.tractorjunction.com/mahindra-tractor/?amp=1"
   },
   {
    "url": "https://www.tractorjunction.com/used-tractors-for-sell/"
   },
   {
    "url": "https://www.tractorjunction.com/mahindra-tractor/"
   },
   {
    "url": "https://www.tractorjunction.com/sonalika-tractor/"
   },
   {
    "url": "https://www.tractorjunction.com/john-deere-tractor/"
   },
   {
    "url": "https://www.tractorjunction.com/swaraj-tractor/"
   },
   {
    "url": "https://www.tractorjunction.com/massey-ferguson-tractor/"
   },
   {
    "url": "https://www.tractorjunction.com/john-deere-tractor/?amp=1"
   },
   {
    "url": "https://www.tractorjunction.com/compare-tractors/"
   },
   {
    "url": "https://www.tractorjunction.com/mini-tractors/"
   },
   {
    "url": "https://www.tractorjunction.com/new-holland-tractor/"
   },
   {
    "url": "https://www.tractorjunction.com/massey-ferguson-tractor/?amp=1"
   },
   {
    "url": "https://www.tractorjunction.com/massey-ferguson-tractor/241-di-maha-shakti/"
   },
   {
    "url": "https://www.tractorjunction.com/swaraj-tractor/?amp=1"
   },
   {
    "url": "https://www.tractorjunction.com/accessories-kit/"
   },
   {
    "url": "https://www.tractorjunction.com/hi/used-tractors-for-sell/"
   },
   {
    "url": "https://www.tractorjunction.com/on-road-price/"
   }
  ,
   {
    "url": "https://tractorguru.in/"
   },
   {
    "url": "https://tractorguru.in/mahindra-tractors"
   },
   {
    "url": "https://tractorguru.in/swaraj-tractors"
   },
   {
    "url": "https://tractorguru.in/tractor-brands"
   },
   {
    "url": "https://tractorguru.in/massey-ferguson-tractors"
   },
   {
    "url": "https://tractorguru.in/sonalika-tractors"
   },
   {
    "url": "https://tractorguru.in/new-holland-tractors"
   },
   {
    "url": "https://tractorguru.in/second-hand-tractors"
   },
   {
    "url": "https://tractorguru.in/compare-tractor"
   },
   {
    "url": "https://tractorguru.in/tractor/mahindra-575-di"
   },
   {
    "url": "https://tractorguru.in/new-tractor"
   },
   {
    "url": "https://tractorguru.in/john-deere-tractors"
   },
   {
    "url": "https://tractorguru.in/eicher-tractors"
   },
   {
    "url": "https://tractorguru.in/tractor/swaraj-855-fe"
   },
   {
    "url": "https://tractorguru.in/mini-tractors-in-india"
   },
   {
    "url": "https://tractorguru.in/powertrac-tractors"
   },
   {
    "url": "https://tractorguru.in/kubota-tractors"
   },
   {
    "url": "https://tractorguru.in/tractor/mahindra-arjun-555-di"
   },
   {
    "url": "https://tractorguru.in/tractor/swaraj-744-xt"
   },
   {
    "url": "https://tractorguru.in/farmtrac-tractors"
   }
  ]

const fs=require('fs')
const a=[
    "Truck Junction - New & Used Trucks, Truck Prices, Buy, Sell, Compare trucks",
    "Tata Truck Price List in India 2023 - New Tata Trucks",
    "Tata Truck Price List in India 2023 - New Tata Trucks",
    "Auto Rickshaw Price 2023 - Electric Auto Rickshaw, Mileage & Images",
    "Select Your Truck at Best Price, Find Right Truck Online",
    "Select Your Truck at Best Price, Find Right Truck Online",
    "Tata Ace Price 2023, Tata Ace (Chota Hathi Price) Mini Truck Mileage",
    "Ashok Leyland Trucks Price  List in India 2023 - Truck Junction",
    "Ashok Leyland Trucks Price  List in India 2023 - Truck Junction",
    "Eicher Trucks Price in India 2023 - Truck Junction",
    "Commercial Vehicle Loan | Apply for Truck Loan at Best Interest Rate",
    "Tata Signa 1918 - Tata Signa 1918.K Tipper Price and Mileage",
    "Tata Winger Price List 2023 , Tata winger Mileage and Specifications",
    "Force Tempo Traveller 3050 Price, Specifications, Reviews 2023",
    "Buy Used Truck at Best Prices, Second Hand Trucks for Sale in India",
    "Mahindra Truck Price List in India 2023 - New Mahindra Truck",
    "Ashok Leyland Dost Strong Pickup Price in India 2023 - Ashok Leyland Dost Pickup Mileage",
    "12 Wheel Truck in India 2023, 12 Wheeler/ 12 Chakka Truck Price List",
    "3 Wheelers Price in India 2023 - Auto Price, Mileage & Features",
    "Eicher Trucks Price in India 2023 - Truck Junction",
    "All Tractor Brands, Tractor Price, Latest Tractor Brands in India",
    "New Tractor, Tractor Prices, Compare Tractors, Buy & Sell Used Tractors in India",
    "New Tractor Price in India 2023 | Price of New Tractor, Specs & Reviews",
    "Mahindra Tractor Price List 2023 | New Mahindra Tractors Model",
    "Buy & Sell Second Hand Tractor Online, Second Hand Finance Tractors @ Best Price In India",
    "Mahindra Tractor Price List 2023 | New Mahindra Tractors Model",
    "Sonalika Tractor Price in India 2023 | New Sonalika Tractors Model",
    "John Deere Tractor Price in India 2023 | New John Deere Tractor Models | John Deere Tractor",
    "Swaraj Tractor Price in India 2023 | New Swaraj Tractor Models | Swaraj Tractors",
    "Massey Ferguson Tractor Price in India 2023 | Massey Tractors Models | New Massey Ferguson Tractors",
    "John Deere Tractor Price in India 2023 | New John Deere Tractor Models | John Deere Tractor",
    "Compare Tractors Price, Offers, Tractor Comparison, Specifications",
    "Mini Tractors Price List 2023 in India | Mini Tractor Price, Small Tractor",
    "New Holland Tractor Price in India 2023 | New Holland Tractors Models",
    "Massey Ferguson Tractor Price in India 2023 | Massey Tractors Models | New Massey Ferguson Tractors",
    "Massey Ferguson 241 DI MAHA SHAKTI Tractor Price, Specification 2023",
    "Swaraj Tractor Price in India 2023 | New Swaraj Tractor Models | Swaraj Tractors",
    "Buy Tractor Accessories Kit Online in India | TractorJunction",
    "पुराने ट्रैक्टर ऑनलाइन खरीदें व बेचें, फाइनेंस पर …ाने ट्रैक्टर उपलब्ध भारत में सर्वश्रेष्ठ मूल्य पर",
    "New Tractor On Road Price in India, Get Tractor On Road Price Quote",
    "Tractor - New Tractors, Tractor Price List 2023 | Buy & Sell Tractor in India",
    "Mahindra Tractor Price 2023, Mahindra Tractor Models in India | All Mahindra Tractors Price",
    "Swaraj Tractor Price List 2023 | Swaraj Tractor Models in India",
    "All Tractor Brands List in India at Latest Price 2023, Offers. Latest Tractor Brands with Price.",
    "Massey Ferguson Tractor Price List 2023, Massey Ferguson Tractor Models",
    "Sonalika Tractor Price List 2023 | Sonalika Tractor Models in India",
    "New Holland Tractor Price List 2023 in India | New Holland Tractor Models",
    "Used Tractor Price 2023, Second Hand Tractor | Used Tractors for Sale in India",
    "Compare Tractor Price, Brands, Specification, Offers, Discount, Features.",
    "Latest Mahindra 575 DI Price, Specification, & Review 2023",
    "New Tractor Price 2023, All Tractor Price in India",
    "John Deere Tractor Price List 2023 | John Deere Tractor Models",
    "Eicher Tractor Price List 2023 | Eicher Tractor Models in India",
    "Swaraj 855 FE Price, Specifications, Videos, User Reviews 2023",
    "Mini Tractor Price 2023 in India, Small Tractor | Best Mini Tractors",
    "Powertrac Tractor Price India 2023, Powertrac Tractor Models | All Powertrac Tractors",
    "Kubota Tractor Price List 2023 | Kubota Tractor Models in India",
    "Latest Mahindra Arjun 555 DI Price, Specification, & Review 2023",
    "Latest Swaraj 744 XT Price, Specification, & Review 2023"
  ]
const arr= []
data.map((item,index)=>{
    arr.push({url:item.url, title:a[index]})
    // return(
        
    //         item["url"]=item.url,
    //         item["title"]=a[index]
        
    // )
})

fs.writeFile('./1.json',JSON.stringify(arr),(err)=>{console.log(err)})