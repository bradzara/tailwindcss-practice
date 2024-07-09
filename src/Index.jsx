export function Index() {
  const tailwindObjects = [
    {
      name: "sailboat",
      description: "A sailboat is a watercraft propelled primarily by sails, which harness the wind's energy. It typically consists of a hull, one or more masts, and sails. Sailboats come in various sizes and designs, ranging from small dinghies to large yachts. They are used for recreational sailing, racing, and sometimes for long-distance travel. The key components include the mainsail, jib, rudder, keel, and rigging, which work together to enable navigation and control.",
      image: "https://assets-global.website-files.com/5ce44e4e8d1c1fc85b84c18d/64e458fd70b9f256aa5c4cc1_howtobuyacheapsailboat.jpeg"
    },
    {
      name: "Airplane",
      description: "An airplane is a powered aircraft with fixed wings, designed for air travel. It typically consists of a fuselage, wings, engines, and a tail assembly. Airplanes are used for various purposes, including passenger transport, cargo delivery, military operations, and recreational flying. Key components include the cockpit, where pilots control the aircraft; the engines, which provide thrust; the wings, which generate lift; and the landing gear, which allows for takeoff and landing.",
      image: "https://calaero.edu/wp-content/uploads/2023/08/iStock-1332501286-scaled.jpg"
    },
    {
      name: "Racecar",
      description: "A racecar is a high-performance vehicle designed for competitive racing. It features a lightweight, aerodynamic body, powerful engine, and advanced suspension systems to maximize speed and handling. Key components include the chassis, engine, transmission, tires, and brakes. Racecars are built to strict specifications for different racing categories, such as Formula 1, NASCAR, or rally racing. They are engineered to prioritize speed, agility, and safety on the track.",
      image: "https://thumbs.dreamstime.com/z/racing-sport-banner-red-race-car-sunny-blue-sky-background-kart-crossing-finish-line-banner-size-copy-space-generative-285852896.jpg"
    },
    {
      name: "Cheetah",
      description: "A cheetah is a large, slender feline known for being the fastest land animal. Native to Africa and parts of Iran, it features a distinctive coat with black spots, a small head, and long legs built for speed. Cheetahs can reach speeds up to 60-70 mph (97-113 km/h) in short bursts covering distances up to 500 meters. They have a lightweight body, enlarged nasal passages for increased oxygen intake, and a long tail for balance. Unlike other big cats, cheetahs rely on their speed and agility rather than strength to hunt prey.",
      image: "https://hips.hearstapps.com/hmg-prod/images/cheetah-running-high-res-stock-photography-1570205431.jpg?crop=0.90027xw:1xh;center,top&resize=1200:*"
    },
    {
      name: "Peregrine Falcon",
      description: "The peregrine falcon is a powerful and fast bird of prey, renowned for being the fastest animal in the world during its hunting stoop, reaching speeds over 240 mph (386 km/h). It has a blue-grey back, barred white underparts, and a distinctive black facial mask. Peregrine falcons are found on every continent except Antarctica and thrive in diverse habitats, from urban areas to cliffs and mountains. They primarily hunt other birds, using their incredible speed and sharp talons to catch prey mid-air.",
      image: "https://www.nps.gov/common/uploads/cropped_image/primary/78102E52-ED24-29C4-279944E091290C6E.jpg?width=1600&quality=90&mode=crop"
    },
    {
      name: "Mountain Passes",
      description: "Mountain passes are natural routes through mountain ranges that provide a pathway for travel between two areas. They are often narrow and can be found at lower elevations compared to the peaks surrounding them. Passes are significant for transportation and migration, as they offer the easiest route through otherwise difficult terrain. Historically, many mountain passes have been critical for trade and military movements.",
      image: "https://vastphotos.com/files/uploads/photos/11444/high-resolution-mountains-and-valley-photo-l.jpg?v=20230415200814"
    }
  ]

  return(
    <div className="container mx-auto min-h-0 flex flex-col bg-white">
      <h1 className='text-2xl'>Things that produce tailwind</h1>
      <br/>
      <div>
        {tailwindObjects.map((tailwind, index) => (
          <div key={index}>
            <h2 className="font-bold font-mono">{tailwind.name}</h2>
            <p>{tailwind.description}</p>
            <img src={tailwind.image} alt={tailwind.name} />
          </div>
        ))}
      </div>
    </div>
  )
}