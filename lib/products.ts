export type Category = "Charging & Desk" | "Lighting" | "Home Electrics" | "Kitchen Electrics";

export interface Product {
  slug: string;
  name: string;
  price: number;
  category: Category;
  image: string;
  short: string;
  description: string;
  specs: [string, string][];
  included: string[];
  care: string[];
}

export const CATEGORIES: { name: Category; blurb: string; image: string }[] = [
  { name: "Charging & Desk", blurb: "Chargers, power strips and desk essentials.", image: "/images/cat-desk.png" },
  { name: "Lighting", blurb: "Task lamps, floor lamps and LED strips.", image: "/images/cat-home.png" },
  { name: "Home Electrics", blurb: "Fans, heaters and smart plugs for every room.", image: "/images/tower-fan.png" },
  { name: "Kitchen Electrics", blurb: "Kettles, mixers and countertop cookers.", image: "/images/cat-kitchen.png" },
];

export const PRODUCTS: Product[] = [
  {
    slug: "dual-port-usb-wall-charger",
    name: "Dual-Port USB Wall Charger",
    price: 9.99,
    category: "Charging & Desk",
    image: "/images/usb-wall-charger.png",
    short: "Two USB-A ports in a compact folding-plug wall adapter.",
    description:
      "A compact wall adapter with two USB-A ports so you can charge a phone and a tablet from a single outlet. The plug is small enough to sit flush against the wall, and the output is shared across both ports for everyday charging at home, at the office or in a travel bag.",
    specs: [["Ports", "2 x USB-A"], ["Combined output", "12 W"], ["Input", "100-240 V AC, 50/60 Hz"], ["Size", "1.6 x 1.6 x 1.1 in"], ["Weight", "1.6 oz"]],
    included: ["1 USB wall charger", "Quick guide card"],
    care: ["Use indoors in dry locations only.", "Unplug before cleaning and wipe with a dry cloth.", "Do not cover the adapter while it is in use."],
  },
  {
    slug: "10w-wireless-charging-pad",
    name: "10W Wireless Charging Pad",
    price: 13.95,
    category: "Charging & Desk",
    image: "/images/wireless-charging-pad.png",
    short: "Slim round pad for Qi-compatible phones with a 4 ft cable.",
    description:
      "A low-profile round pad that charges Qi-compatible phones when you set them on top. A soft non-slip surface holds the phone in place on a desk or nightstand, and a built-in indicator light shows when charging is active. Works through most thin cases.",
    specs: [["Output", "Up to 10 W"], ["Compatibility", "Qi-enabled devices"], ["Cable length", "4 ft USB cable"], ["Diameter", "3.9 in"], ["Height", "0.4 in"]],
    included: ["1 wireless charging pad", "4 ft USB cable", "Quick guide card"],
    care: ["Remove thick or metal-backed cases for best results.", "Keep away from magnetic cards and water.", "Wipe the surface with a soft dry cloth."],
  },
  {
    slug: "usb-powered-mini-desk-fan",
    name: "USB-Powered Mini Desk Fan",
    price: 14.75,
    category: "Charging & Desk",
    image: "/images/usb-desk-fan.png",
    short: "Quiet 6 in tabletop fan with three speeds and tilt head.",
    description:
      "A quiet tabletop fan that draws power from any USB port or wall adapter. Three speed settings and a tilting head let you point the airflow where you want it while you work, read or relax. The wire guard and weighted base keep it steady on a desk.",
    specs: [["Blade diameter", "6 in"], ["Speeds", "3"], ["Power", "USB, 5 W"], ["Cable length", "5 ft"], ["Height", "9.5 in"]],
    included: ["1 desk fan", "5 ft USB cable"],
    care: ["Unplug before cleaning.", "Dust the guard and blades with a soft dry cloth.", "Keep hair and loose items away from the blades."],
  },
  {
    slug: "wifi-smart-plug-2-pack",
    name: "Wi-Fi Smart Plug 2-Pack",
    price: 17.95,
    category: "Home Electrics",
    image: "/images/smart-plug-2pack.png",
    short: "Two mini smart plugs with app control and timer schedules.",
    description:
      "Two mini smart plugs that let you switch lamps, fans and other plug-in devices on or off from your phone. Set daily schedules and timers in the companion app. Each plug connects to a 2.4 GHz home Wi-Fi network and is small enough to leave the neighboring outlet free.",
    specs: [["Quantity", "2 plugs"], ["Wi-Fi", "2.4 GHz"], ["Max load", "15 A / 1800 W per plug"], ["Input", "120 V AC"], ["Size (each)", "1.8 x 1.6 x 2.1 in"]],
    included: ["2 smart plugs", "Setup guide"],
    care: ["Use indoors only.", "Do not exceed the maximum load of 15 A.", "Do not connect one smart plug to another."],
  },
  {
    slug: "usb-clip-on-led-reading-light",
    name: "USB Clip-On LED Reading Light",
    price: 18.75,
    category: "Lighting",
    image: "/images/clip-reading-light.png",
    short: "Flexible gooseneck light that clips to a desk, shelf or headboard.",
    description:
      "A small LED light on a flexible 14 in gooseneck with a sturdy spring clamp. Clip it to a desk edge, bookshelf or headboard and bend the neck to aim the light. Three brightness levels and a USB power cable make it simple to use with any USB adapter or computer.",
    specs: [["Neck length", "14 in"], ["Brightness levels", "3"], ["Color temperature", "4000 K neutral white"], ["Cable length", "5 ft USB cable"], ["Clamp opening", "2.2 in"]],
    included: ["1 clip-on light", "5 ft USB cable"],
    care: ["Do not look directly into the LEDs.", "Wipe with a dry cloth.", "Do not bend the neck sharply past its limit."],
  },
  {
    slug: "6-outlet-surge-protector-power-strip",
    name: "6-Outlet Surge Protector Power Strip",
    price: 28.76,
    category: "Charging & Desk",
    image: "/images/surge-power-strip.png",
    short: "Six outlets, 1200 joule surge protection and a 6 ft cord.",
    description:
      "A six-outlet power strip with built-in surge protection for computers, monitors, lamps and chargers. Widely spaced outlets fit bulky adapters, the 6 ft cord reaches across a room, and a lit switch makes it easy to cut power to everything at once.",
    specs: [["Outlets", "6 AC"], ["Surge protection", "1200 joules"], ["Cord length", "6 ft"], ["Max load", "15 A / 1875 W"], ["Length", "12.5 in"]],
    included: ["1 power strip", "Mounting keyholes on the back"],
    care: ["Plug directly into a wall outlet, not into another strip.", "Do not run the cord under rugs.", "Replace the strip after a major surge event."],
  },
  {
    slug: "rgb-led-strip-lights-32-ft",
    name: "RGB LED Strip Lights, 32.8 ft",
    price: 38.64,
    category: "Lighting",
    image: "/images/led-strip-lights.png",
    short: "Color-changing 32.8 ft strip with remote and adhesive backing.",
    description:
      "A 32.8 ft roll of color-changing LED strip for shelves, behind a TV, along a desk or around a room. Choose from many colors and lighting modes with the included remote. The strip can be cut at marked points to fit and sticks in place with adhesive backing.",
    specs: [["Length", "32.8 ft (two 16.4 ft rolls)"], ["Colors", "16 colors, 4 modes"], ["Power", "Plug-in 12 V adapter"], ["Control", "Remote included"], ["Cut points", "Every 2 in"]],
    included: ["2 LED strip rolls", "Power adapter", "Remote", "Connectors and clips"],
    care: ["Clean and dry the surface before sticking.", "Cut only at the marked lines.", "Do not use outdoors or in wet areas."],
  },
  {
    slug: "glass-electric-kettle-57-oz",
    name: "Glass Electric Kettle, 57 oz",
    price: 47.89,
    category: "Kitchen Electrics",
    image: "/images/glass-kettle.png",
    short: "1500 W glass kettle with auto shut-off and blue fill light.",
    description:
      "A 57 oz glass kettle that boils water in minutes. The stainless steel lid and base are paired with a clear borosilicate glass body, and a blue light glows while it heats. It shuts off automatically when the water boils and when it is lifted off the base empty.",
    specs: [["Capacity", "57 oz"], ["Power", "1500 W"], ["Body", "Borosilicate glass"], ["Base", "360-degree swivel"], ["Cord length", "2.6 ft"]],
    included: ["1 kettle", "1 power base", "User guide"],
    care: ["Fill between the min and max lines.", "Descale with equal parts water and white vinegar.", "Never immerse the base in water."],
  },
  {
    slug: "5-speed-electric-hand-mixer",
    name: "5-Speed Electric Hand Mixer",
    price: 49.76,
    category: "Kitchen Electrics",
    image: "/images/hand-mixer.png",
    short: "250 W mixer with beaters, dough hooks and storage case.",
    description:
      "A 250 W hand mixer with five speeds and a turbo boost for whipping cream, beating eggs and mixing cake batter or cookie dough. Stainless steel beaters and dough hooks eject with one button, and the included case keeps every accessory together in a drawer.",
    specs: [["Power", "250 W"], ["Speeds", "5 plus turbo"], ["Cord length", "5 ft"], ["Weight", "2.4 lbs"], ["Attachments", "2 beaters, 2 dough hooks"]],
    included: ["1 hand mixer", "2 beaters", "2 dough hooks", "Storage case"],
    care: ["Eject and wash attachments by hand or on the top rack.", "Wipe the body with a damp cloth.", "Unplug before changing attachments."],
  },
  {
    slug: "dimmable-led-desk-lamp-with-usb-port",
    name: "Dimmable LED Desk Lamp with USB Port",
    price: 53.45,
    category: "Lighting",
    image: "/images/led-desk-lamp.png",
    short: "Adjustable-arm lamp with 5 color modes and a USB charging port.",
    description:
      "A modern desk lamp with a two-section adjustable arm, touch controls, five color temperature modes and stepless dimming. A USB port on the base charges a phone while you work, and a memory function returns to your last setting each time you switch it on.",
    specs: [["Color modes", "5 (2700 K to 6500 K)"], ["Brightness", "Stepless dimming"], ["USB port", "5 V / 1 A"], ["Height", "17.7 in"], ["Cord length", "5 ft"]],
    included: ["1 desk lamp", "Power adapter", "Setup guide"],
    care: ["Wipe with a soft dry cloth.", "Do not look directly into the light.", "Keep the base dry."],
  },
  {
    slug: "desktop-organizer-with-usb-hub",
    name: "Desktop Organizer with USB Hub",
    price: 54.95,
    category: "Charging & Desk",
    image: "/images/desktop-organizer.png",
    short: "Wood-and-metal organizer with phone stand and 4-port USB hub.",
    description:
      "A desktop organizer with a built-in four-port USB hub that keeps phones, tablets and accessories charged and in reach. Compartments hold pens, notes and cards, a slot holds a phone or small tablet upright, and the wood-grain top suits a home office or dorm desk.",
    specs: [["USB ports", "4 x USB-A"], ["Combined output", "20 W"], ["Size", "13.4 x 6.3 x 5.1 in"], ["Cable length", "5 ft"], ["Weight", "3.1 lbs"]],
    included: ["1 organizer", "Power adapter", "Setup guide"],
    care: ["Dust with a dry cloth.", "Avoid liquids near the USB hub.", "Do not exceed the combined output limit."],
  },
  {
    slug: "compact-ceramic-space-heater",
    name: "Compact Ceramic Space Heater",
    price: 86.88,
    category: "Home Electrics",
    image: "/images/ceramic-space-heater.png",
    short: "1500 W ceramic heater with thermostat and tip-over switch.",
    description:
      "A compact 1500 W ceramic heater for desks, bedrooms and small rooms. Adjustable thermostat, two heat settings and a fan-only mode give you control, while tip-over and overheat protection switch the unit off automatically. The cool-touch housing and carry handle make it easy to move.",
    specs: [["Power", "1500 W / 750 W"], ["Modes", "High, low, fan only"], ["Safety", "Tip-over and overheat shut-off"], ["Cord length", "6 ft"], ["Size", "9.8 x 6 x 10.2 in"]],
    included: ["1 space heater", "User manual"],
    care: ["Plug directly into a wall outlet, never an extension cord.", "Keep 3 ft of clearance from furniture and curtains.", "Unplug and let cool before cleaning the grille."],
  },
  {
    slug: "oscillating-tower-fan-40-in",
    name: "Oscillating Tower Fan, 40 in",
    price: 87.64,
    category: "Home Electrics",
    image: "/images/tower-fan.png",
    short: "Slim 40 in tower fan with remote, timer and three modes.",
    description:
      "A slim 40 in tower fan that moves air across a room with 70-degree oscillation. Three speeds, three modes and a timer up to 8 hours are controlled from the top panel or the remote. The narrow footprint fits beside a sofa or bed.",
    specs: [["Height", "40 in"], ["Oscillation", "70 degrees"], ["Speeds", "3, plus 3 modes"], ["Timer", "Up to 8 hours"], ["Cord length", "6 ft"]],
    included: ["1 tower fan", "Remote with holder", "Base and screws"],
    care: ["Unplug before cleaning.", "Wipe the grille with a damp cloth.", "Place on a flat, level surface."],
  },
  {
    slug: "digital-air-fryer-4-qt",
    name: "Digital Air Fryer, 4 qt",
    price: 87.76,
    category: "Kitchen Electrics",
    image: "/images/air-fryer.png",
    short: "4 qt basket air fryer with touch controls and 8 presets.",
    description:
      "A 4 qt air fryer with a nonstick basket, digital touch controls and eight cooking presets for fries, chicken, vegetables and more. Temperature goes up to 400 °F, and the dishwasher-safe basket and tray clean up quickly.",
    specs: [["Capacity", "4 qt"], ["Power", "1500 W"], ["Temperature", "180 to 400 °F"], ["Presets", "8"], ["Size", "12.2 x 10.6 x 12.4 in"]],
    included: ["1 air fryer", "Basket and tray", "Recipe card"],
    care: ["Wash the basket and tray after each use.", "Leave 5 in of space behind the unit.", "Do not fill the basket past the max line."],
  },
  {
    slug: "6-slice-convection-toaster-oven",
    name: "6-Slice Convection Toaster Oven",
    price: 94.82,
    category: "Kitchen Electrics",
    image: "/images/toaster-oven.png",
    short: "Stainless countertop oven with convection fan and 4 functions.",
    description:
      "A countertop convection oven that toasts six slices, bakes, broils and keeps food warm. The convection fan circulates heat for even results, the temperature dial reaches 450 °F, and the glass door lets you watch progress. A crumb tray slides out for cleaning.",
    specs: [["Capacity", "6 slices or a 12 in pizza"], ["Power", "1500 W"], ["Temperature", "Up to 450 °F"], ["Functions", "Toast, bake, broil, warm"], ["Size", "17.5 x 14.8 x 9.8 in"]],
    included: ["1 toaster oven", "Baking pan", "Wire rack", "Crumb tray"],
    care: ["Empty the crumb tray often.", "Let the oven cool before wiping.", "Leave 4 in of space around the unit."],
  },
  {
    slug: "arc-led-floor-lamp-65-in",
    name: "Arc LED Floor Lamp, 65 in",
    price: 96.95,
    category: "Lighting",
    image: "/images/floor-lamp.png",
    short: "65 in arching floor lamp with weighted base and dimmer.",
    description:
      "A 65 in arching floor lamp that reaches over a sofa or reading chair. A weighted base keeps it steady, the round shade spreads soft light, and an inline dimmer with three color temperatures lets you change the mood. The LED light source is built in.",
    specs: [["Height", "65 in"], ["Reach", "30 in arc"], ["Color temperature", "3 modes, 2700 K to 5000 K"], ["Control", "Inline dimmer"], ["Weight", "14.5 lbs"]],
    included: ["Lamp pole sections", "Weighted base", "Shade", "Assembly hardware"],
    care: ["Assemble on a flat surface.", "Wipe with a dry cloth.", "Do not hang items on the arm."],
  },
];

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
